# Multi-stage Dockerfile for building and serving the Vite + React app

# --- Builder stage ---
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies (including dev deps needed for building)
COPY package.json package-lock.json* ./
RUN npm install --silent

# Copy source and build
COPY . .
RUN npm run build


# --- Production stage ---
FROM nginx:stable-alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy custom nginx config and entrypoint script
COPY nginx.conf /etc/nginx/nginx.conf.template
COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Support dynamic PORT via environment variable (default 80)
ENV PORT=80

EXPOSE ${PORT}

ENTRYPOINT ["/docker-entrypoint.sh"]
