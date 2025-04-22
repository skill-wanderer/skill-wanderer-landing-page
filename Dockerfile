# Build stage
FROM node:20-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy built app from build stage
COPY --from=build /app/.output /app/.output

# Set environment variables
ENV NODE_ENV=production

# Expose the port
EXPOSE 3000

# Start the application
CMD ["node", ".output/server/index.mjs"]