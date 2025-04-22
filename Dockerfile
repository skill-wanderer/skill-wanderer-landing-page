# Build stage
FROM node:20-bullseye AS build

WORKDIR /app

# Copy package files
COPY package.json ./

# Try to install with npm first (most reliable)
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Production stage - keep using Alpine for smaller image size
FROM node:20-alpine AS production

WORKDIR /app

# Copy built app from build stage
COPY --from=build /app/.output /app/.output

# Set environment variables
ENV NODE_ENV=production

# Expose the port
EXPOSE 3000

# Start the application
CMD ["node", ".output/server/index.mjs"]