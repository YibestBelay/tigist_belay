# 1. Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy source code
COPY . .

# Build Next.js app
RUN pnpm run build

# 2. Run stage
FROM node:20-alpine AS runner

WORKDIR /app

RUN npm install -g pnpm

# Copy built app and node_modules from builder
COPY --from=builder /app ./

# Expose dynamic port
EXPOSE 3000

# Use Render's dynamic port
# Start Next.js on dynamic port
CMD ["sh", "-c", "pnpm start -p ${PORT:-3000}"]

