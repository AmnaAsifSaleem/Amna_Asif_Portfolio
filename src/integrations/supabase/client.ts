import { createClient } from '@supabase/supabase-js'

// These are automatically configured for Lovable projects
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://xqlxqqnbnmigztqzvjls.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxbHhxcW5ibm1pZ3p0cXp2amxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0NjY2MDIsImV4cCI6MjA0OTA0MjYwMn0.tKFiGY-V-XYr0vfn0dY36BjAgXx-8PmrQvRi8nDKFQw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)