// server/utils/supabase.ts
import { createClient } from '@supabase/supabase-js'
import type { H3Event } from 'h3'

// Hàm này sẽ tạo ra một client mới cho mỗi request lên server
export const serverSupabaseClient = (event: H3Event) => {
  const config = useRuntimeConfig(event)
  
  // Lấy key và url từ runtimeConfig đã khai báo ở nuxt.config.ts
  const supabaseUrl = config.supabaseUrl
  const supabaseKey = config.supabaseKey

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL or Key is not defined in server runtime config.')
  }

  return createClient(supabaseUrl, supabaseKey)
}
