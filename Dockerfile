# Giai đoạn 1: Base - Cài đặt môi trường cơ bản
FROM node:20-alpine AS base
RUN corepack enable
WORKDIR /app

# Giai đoạn 2: Cài đặt Dependencies
FROM base AS deps
# Alpine cần libc6-compat để chạy tốt các thư viện nhị phân (như sharp, sass)
RUN apk add --no-cache libc6-compat
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

# Giai đoạn 3: Build - Biên dịch mã nguồn
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Next.js sẽ tạo ra folder .next/standalone nếu config 'standalone' được bật
RUN pnpm run build

# Giai đoạn 4: Runner - File Image cuối cùng (Cực nhẹ)
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Không chạy bằng root để bảo mật
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public
# Thư mục chứa runtime cần thiết cho standalone mode
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]