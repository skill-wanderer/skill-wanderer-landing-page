export default defineEventHandler(async (event) => {
  const pathname = getRequestURL(event).pathname
  console.log('Request pathname:', pathname)
  console.log('Request method:', event.method)
  
  // Get the API key from environment variable
  const apiKey = process.env.INDEX_NOW_API_KEY || process.env.NUXT_INDEX_NOW_API_KEY || ''
  
  if (event.method === 'GET' && apiKey) {
    // Check if the request matches the dynamic pattern: /{apikey}.txt
    const expectedFilename = `/${apiKey}.txt`
    
    if (pathname === expectedFilename) {
      console.log(`Serving API key for: ${expectedFilename}`)
      
      // Set the response headers
      setResponseHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
      
      // Return the API key as plain text
      return apiKey
    }
  }
})
