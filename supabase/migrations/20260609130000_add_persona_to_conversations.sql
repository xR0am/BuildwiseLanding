ALTER TABLE public.conversations
  ADD COLUMN IF NOT EXISTS persona text DEFAULT 'general';

COMMENT ON COLUMN public.conversations.persona IS 'Jason flow: general or headhunting';
