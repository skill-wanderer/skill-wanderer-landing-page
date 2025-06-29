import { readFile } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export default defineEventHandler(async (event) => {
  const params = getRouterParams(event)
  const filePath = params.file as string
  
  // Define the directory where K8s injects files
  const injectedFilesDir = process.env.INJECTED_FILES_DIR || '/app/.output/public'
  const fullPath = join(injectedFilesDir, filePath)
  
  // Security check - ensure file is within allowed directory
  if (!fullPath.startsWith(injectedFilesDir)) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Access denied'
    })
  }
  
  // Check if file exists
  if (!existsSync(fullPath)) {
    throw createError({
      statusCode: 404,
      statusMessage: 'File not found'
    })
  }
  
  try {
    const fileContent = await readFile(fullPath)
    
    // Set content type to text/plain for all files
    setHeader(event, 'content-type', 'text/plain')
    
    return fileContent
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Error reading file'
    })
  }
})
