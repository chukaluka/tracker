import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bjqjgydgbwmrhqdxlaqs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqcWpneWRnYndtcmhxZHhsYXFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1NjM3NDAsImV4cCI6MjAzMDEzOTc0MH0.dNrw10hUeYlAKzwSc_sus1cc1YNO1ct2wZ1xU_wuCXY'

export const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase