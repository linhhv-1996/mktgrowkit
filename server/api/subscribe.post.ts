// server/api/subscribe.post.ts

export default defineEventHandler(async (event) => {
  // Lấy email từ body
  const { email } = await readBody(event)

  // Validate email
  if (!email) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email is required.',
    })
  }

  // Khởi tạo Supabase client cho request này
  const supabase = serverSupabaseClient(event)

  // Insert dữ liệu vào bảng 'subscribers'
  const { data, error } = await supabase
    .from('subscribers')
    .insert({ email: email }) // Cột 'created_at' sẽ được DB tự động điền
    .select()
    .single() // Dùng .single() để nhận về một object thay vì một array

  // Xử lý lỗi từ Supabase
  if (error) {
    console.error('Supabase Insert Error:', error)

    // Check lỗi email đã tồn tại (unique constraint violation)
    if (error.code === '23505') {
      throw createError({
        statusCode: 409, // 409 Conflict - mã lỗi hợp lý cho việc trùng lặp
        statusMessage: 'This email has already been subscribed.',
      })
    }

    // Các lỗi khác
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to subscribe.',
    })
  }

  return { success: true, data: data }
})
