import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xmtfgdcysmhpznfyqzbz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdGZnZGN5c21ocHpuZnlxemJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQzNTc2NjAsImV4cCI6MjAwOTkzMzY2MH0.dXKVL4h0Ud5H7W2_OftSDYsoikeSRK9qH3oDyL0I5KM";
export const supabase = createClient(supabaseUrl, supabaseKey);
