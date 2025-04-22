# Build stage
FROM node:20 AS build

WORKDIR /app

# Copy package files first for better layer caching
COPY package.json yarn.lock* ./

# Install dependencies using yarn
RUN yarn install

# Copy the rest of the application
COPY . .

# Build the application
RUN yarn build

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