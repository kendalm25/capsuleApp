import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iqmxeykbfckskseybehf.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxbXhleWtiZmNrc2tzZXliZWhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyNTA4NTQsImV4cCI6MjAxNzgyNjg1NH0.-ldBCo9o_W1BD7U06FFUBp7t6J_IB8BqWculmDTTzXA";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
