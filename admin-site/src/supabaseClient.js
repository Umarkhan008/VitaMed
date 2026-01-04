
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wzlomxygepuiovqxerwg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6bG9teHlnZXB1aW92cXhlcndnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3ODU1MDksImV4cCI6MjA4MDM2MTUwOX0.A5sS-UeUTE4XtEnZbLapKY1cauLJwh1pzzmxTgbPdug'

export const supabase = createClient(supabaseUrl, supabaseKey)
