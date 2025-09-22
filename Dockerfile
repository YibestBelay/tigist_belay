# 1. Base image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json + lockfile
COPY package*.json ./

# 4. Install pnpm and dependencies
RUN npm install -g pnpm
RUN pnpm install

# 5. Copy the rest of the app
COPY . .

# 6. Build Next.js app
RUN pnpm run build

# 7. Expose Next.js default port
EXPOSE 3000

# 8. Start app
CMD ["pnpm", "start"]
