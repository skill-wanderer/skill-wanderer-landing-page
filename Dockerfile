# Build stage
FROM node:20-alpine as build

WORKDIR /app

# Enable and prepare Yarn through Corepack
RUN corepack enable && corepack prepare yarn@stable --activate

# Copy package files
COPY package*.json yarn.lock* ./

# Install dependencies
RUN yarn install --immutable

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