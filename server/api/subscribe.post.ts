// server/api/subscribe.post.ts

export default defineEventHandler(async (event) => {
  // Lấy email từ body của request gửi từ client
  const { email } = await readBody(event)

  // Lấy config đã cài ở nuxt.config.ts
  const config = useRuntimeConfig()
  const apiKey = config.convertkitApiKey
  const formId = config.convertkitFormId

  console.log(apiKey)
  console.log(formId)
  
  // Validate dữ liệu đầu vào
  if (!email) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email is required.',
    })
  }

  if (!apiKey || !formId) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Server configuration error.',
    })
  }

  const url = `https://api.convertkit.com/v3/forms/${formId}/subscribe`

  try {
    // Gọi API của ConvertKit từ server của cậu
    const response = await $fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: {
        api_key: apiKey,
        email: email,
      },
    })

    return { success: true, data: response }

  } catch (error: any) {
    console.error('ConvertKit API Error:', error.data)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.data?.message || 'Failed to subscribe.',
    })
  }
})
