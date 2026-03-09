# Build stage
FROM node:20-bullseye AS build

WORKDIR /app

# Pathfinder chatbot build args — injected at build time so Nuxt can inline them
ARG NUXT_PUBLIC_PATHFINDER_API_URL
ARG NUXT_PUBLIC_PATHFINDER_DOMAINS
ARG NUXT_PUBLIC_PATHFINDER_SESSION_EXPIRY_MINUTES
ARG NUXT_PUBLIC_PATHFINDER_SESSION_STORAGE

# Promote build args to env vars for the Nuxt build step
ENV NUXT_PUBLIC_PATHFINDER_API_URL=${NUXT_PUBLIC_PATHFINDER_API_URL}
ENV NUXT_PUBLIC_PATHFINDER_DOMAINS=${NUXT_PUBLIC_PATHFINDER_DOMAINS}
ENV NUXT_PUBLIC_PATHFINDER_SESSION_EXPIRY_MINUTES=${NUXT_PUBLIC_PATHFINDER_SESSION_EXPIRY_MINUTES}
ENV NUXT_PUBLIC_PATHFINDER_SESSION_STORAGE=${NUXT_PUBLIC_PATHFINDER_SESSION_STORAGE}

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