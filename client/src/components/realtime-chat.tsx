import { cn } from "@/lib/utils";
import { ChatMessageItem } from "@/components/chat-message";
import { TypingIndicator } from "@/components/typing-indicator";
import { useChatScroll } from "@/hooks/use-chat-scroll";
import { type ChatMessage, useRealtimeChat } from "@/hooks/use-realtime-chat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface RealtimeChatProps {
  roomName: string;
  username: string;
  userEmail: string;
  sessionId?: string;
  webhookUrl?: string;
  persona?: "general" | "headhunting";
  onMessage?: (messages: ChatMessage[]) => void;
  messages?: ChatMessage[];
  accentColor?: "teal" | "gold";
}

const getInitialOpener = (name: string) => `Hi Jason, I am ${name}!`;

/**
 * Realtime chat component
 * @param roomName - The name of the room to join. Each room is a unique chat.
 * @param username - The username of the user
 * @param onMessage - The callback function to handle the messages. Useful if you want to store the messages in a database.
 * @param messages - The messages to display in the chat. Useful if you want to display messages from a database.
 * @param accentColor - The accent color for the chat interface (teal or gold)
 * @param webhookUrl - Optional custom webhook URL for processed responses
 * @returns The chat component
 */
export const RealtimeChat = ({
  roomName,
  username,
  userEmail,
  sessionId,
  webhookUrl,
  persona,
  onMessage,
  messages: initialMessages = [],
  accentColor = "teal",
}: RealtimeChatProps) => {
  const { containerRef, scrollToBottom } = useChatScroll();

  const {
    messages: realtimeMessages,
    sendMessage,
    sendBotMessage,
    isConnected,
    isTyping,
    setTypingIndicator,
  } = useRealtimeChat({
    roomName,
    username,
    userEmail,
    sessionId,
    persona,
  });
  const [newMessage, setNewMessage] = useState("");
  const initialPromptSentRef = useRef(false);

  // Merge realtime messages with initial messages
  const allMessages = useMemo(() => {
    const mergedMessages = [...initialMessages, ...realtimeMessages];
    // Remove duplicates based on message id
    const uniqueMessages = mergedMessages.filter(
      (message, index, self) =>
        index === self.findIndex((m) => m.id === message.id)
    );
    // Sort by creation date
    const sortedMessages = uniqueMessages.sort((a, b) =>
      a.createdAt.localeCompare(b.createdAt)
    );

    return sortedMessages;
  }, [initialMessages, realtimeMessages]);

  const memoizedOnMessage = useCallback(() => {
    if (onMessage) {
      onMessage(allMessages);
    }
  }, [onMessage, allMessages]);

  useEffect(() => {
    memoizedOnMessage();
  }, [memoizedOnMessage]);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    scrollToBottom();
  }, [allMessages, scrollToBottom]);

  const triggerWebhook = useCallback(async (message: string) => {
    // Show typing indicator before making the API call
    setTypingIndicator(true);

    // Trigger the webhook to fetch the bot's response
    try {
      const targetWebhook = webhookUrl || "https://n8n-n8n.iftctq.easypanel.host/webhook/d7f6b3de-d918-49dd-b915-0f4a603271d0";
      const response = await fetch(
        targetWebhook,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sessionId: sessionId,
            message: message,
            username: username,
            timestamp: new Date().toISOString(),
            persona: persona || "general",
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ message: "Unknown error" }));
        console.warn("n8n webhook returned error:", {
          status: response.status,
          statusText: response.statusText,
          error: errorData,
        });

        // If it's a 404, the workflow needs to be activated
        if (response.status === 404) {
          console.warn(
            "n8n webhook not registered. Please activate your workflow in n8n."
          );
        }
        return;
      }

      const botReply = await response.json();

      // Add the bot's reply to the chat
      if (botReply.output) {
        sendBotMessage(botReply.output);
      }
    } catch (error) {
      console.error("Error triggering webhook:", error);
    } finally {
      // Hide typing indicator regardless of success or failure
      setTypingIndicator(false);
    }
  }, [sessionId, username, webhookUrl, persona, sendBotMessage, setTypingIndicator]);

  // Auto-send visible opener when chat connects (same path as manual sends)
  useEffect(() => {
    if (
      !isConnected ||
      initialPromptSentRef.current ||
      realtimeMessages.length > 0
    ) {
      return;
    }

    initialPromptSentRef.current = true;
    const opener = getInitialOpener(username);

    void (async () => {
      await sendMessage(opener);
      await triggerWebhook(opener);
    })();
  }, [
    isConnected,
    realtimeMessages.length,
    username,
    sendMessage,
    triggerWebhook,
  ]);

  const handleSendMessage = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!newMessage.trim()) return;

      // Send the user's message first
      sendMessage(newMessage);

      // Store the message to send to webhook
      const userMessage = newMessage;

      // Clear the input field immediately
      setNewMessage("");

      // Trigger the webhook
      await triggerWebhook(userMessage);
    },
    [
      newMessage,
      sendMessage,
      triggerWebhook,
    ]
  );

  return (
    <div className="relative h-full w-full bg-background text-foreground antialiased flex flex-col">
      {/* Messages Area - Fixed height with bottom padding for input */}
      <div
        ref={containerRef}
        className="overflow-y-auto p-4 pb-20 space-y-4"
        style={{ height: "calc(100% - 80px)", maxHeight: "calc(100% - 80px)" }}
      >
        {allMessages.length === 0 ? (
          <div className="text-center text-sm text-muted-foreground">
            No messages yet. Start the conversation!
          </div>
        ) : null}
        <div className="space-y-1">
          {allMessages.map((message, index) => {
            const prevMessage = index > 0 ? allMessages[index - 1] : null;
            const showHeader =
              !prevMessage || prevMessage.user.name !== message.user.name;

            return (
              <div
                key={message.id}
                className="animate-in fade-in slide-in-from-bottom-4 duration-300"
              >
                <ChatMessageItem
                  message={message}
                  isOwnMessage={message.user.name === username}
                  showHeader={showHeader}
                  accentColor={accentColor}
                />
              </div>
            );
          })}

          {/* Show typing indicator when bot is typing */}
          {isTyping && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
              <TypingIndicator accentColor={accentColor} />
            </div>
          )}
        </div>
      </div>

      {/* Fixed Input Area at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-background border-t border-border">
        <form onSubmit={handleSendMessage} className="flex w-full gap-2 p-4">
          <Input
            className={cn(
              "rounded-full bg-background text-sm transition-all duration-300",
              accentColor === "gold" ? "focus-visible:ring-[#D4A574]" : "focus-visible:ring-ring",
              newMessage.trim() ? "w-[calc(100%-36px)]" : "w-full"
            )}
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            disabled={false}
          />
          {newMessage.trim() && (
            <Button
              className={cn(
                "aspect-square rounded-full animate-in fade-in slide-in-from-right-4 duration-300",
                accentColor === "gold" && "bg-[#D4A574] hover:bg-[#D4A574]/90 text-[#2D1B10]"
              )}
              type="submit"
              disabled={false}
            >
              <Send className="size-4" />
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};
