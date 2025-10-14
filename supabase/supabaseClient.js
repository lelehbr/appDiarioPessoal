import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://hthanjvlanukvvknhoij.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0aGFuanZsYW51a3Z2a25ob2lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0Mjg4NDUsImV4cCI6MjA3NjAwNDg0NX0.EbJbK-EP-0IYA-JHZXhuFcqhNHfASIphRh3TPNn3rng";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);