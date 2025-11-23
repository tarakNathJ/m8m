
FROM node:20-slim AS builder

# install openssl for prisma
RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

# copy root config
COPY package*.json turbo.json ./

# copy monorepo folders
COPY apps ./apps
COPY packages ./packages
COPY typescript-config ./typescript-config

# install dependencies
RUN npm install

# build only the primary backend
RUN npx turbo run build --filter=cron_worker

# generate prisma client
RUN npx prisma generate --schema ./packages/database/prisma/schema.prisma



FROM node:20-slim AS runner

WORKDIR /app

# copy built primary backend
COPY --from=builder /app/apps/cron_worker/dist ./dist

# copy package.json for runtime
COPY --from=builder /app/apps/cron_worker/package*.json ./

# copy shared packages
COPY --from=builder /app/packages ./packages

# copy node_modules from build
COPY --from=builder /app/node_modules ./node_modules



CMD ["node", "dist/index.js"]
