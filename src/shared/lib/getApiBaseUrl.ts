export const getApiBaseUrl = () => {
  const url = process.env.NEXT_PUBLIC_API_BASE_URL

  if (!url) {
    throw new Error('API base URL is not defined')
  }

  return url
}
