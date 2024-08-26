// supabase.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://cqcchriqzhcvfvwmhwnm.supabase.co/';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxY2NocmlxemhjdmZ2d21od25tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3MDI3MTksImV4cCI6MjA0MDI3ODcxOX0.8C16Cca8uHzJGTDfVsQOdtL_oSUeSs-WKpTSuQdJAUw';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
