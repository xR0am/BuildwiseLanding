"use client";

import { createClient } from "@/lib/supabase/client";
import { useCallback, useEffect, useRef, useState } from "react";

interface UseRealtimeChatProps {
  roomName: string;
  username: string;
  userEmail: string;
  sessionId?: string;
  persona?: "general" | "headhunting";
}

export interface ChatMessage {
  id: string;
  content: string;
  user: {
    name: string;
  };
  createdAt: string;
}

const EVENT_MESSAGE_TYPE = "message";

export function useRealtimeChat({
  roomName,
  username,
  userEmail,
  sessionId,
  persona = "general",
}: UseRealtimeChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const channelRef = useRef<ReturnType<
    ReturnType<typeof createClient>["channel"]
  > | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    const newChannel = supabase.channel(roomName);
    channelRef.current = newChannel;

    newChannel
      .on("broadcast", { event: EVENT_MESSAGE_TYPE }, (payload) => {
        setMessages((current) => [...current, payload.payload as ChatMessage]);
      })
      .subscribe(async (status) => {
        console.log("Supabase connection status:", status);
        if (status === "SUBSCRIBED") {
          setIsConnected(true);
        } else if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
          setIsConnected(false);
        }
      });

    return () => {
      channelRef.current = null;
      supabase.removeChannel(newChannel);
      setIsConnected(false);
    };
  }, [roomName]);

  const sendMessage = useCallback(
    async (content: string, senderName?: string): Promise<boolean> => {
      const channel = channelRef.current;
      if (!channel) return false;

      const message: ChatMessage = {
        id: crypto.randomUUID(),
        content,
        user: {
          name: senderName || username,
        },
        createdAt: new Date().toISOString(),
      };

      setMessages((current) => [...current, message]);

      await channel.send({
        type: "broadcast",
        event: EVENT_MESSAGE_TYPE,
        payload: message,
      });

      return true;
    },
    [username],
  );

  const sendBotMessage = useCallback(
    async (content: string) => {
      return sendMessage(content, "Jason");
    },
    [sendMessage],
  );

  const setTypingIndicator = useCallback((typing: boolean) => {
    setIsTyping(typing);
  }, []);

  return {
    messages,
    sendMessage,
    sendBotMessage,
    isConnected,
    isTyping,
    setTypingIndicator,
  };
}
