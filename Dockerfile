# 1. Use the official Node.js image as the base
FROM node:18-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and lock files
COPY package.json package-lock.json ./ 

# 4. Install dependencies
RUN npm ci --ignore-scripts

# 5. Copy the entire project
COPY . .

# 6. Build the Next.js app
RUN npm run build

# 7. Use a minimal Node.js runtime for production
FROM node:18-alpine AS runner
WORKDIR /app

# 8. Copy only the built files from the builder stage
COPY --from=builder /app/.next .next
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/public public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.ts ./ 

# 9. Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# 10. Expose the port
EXPOSE 3000

# 11. Start the Next.js application
CMD ["npm", "run", "start"]