FROM node:20-alpine

WORKDIR /app

COPY package.json pnpm-workspace.yaml ./
COPY packages/server/package.json packages/server/package.json
COPY packages/shared/package.json packages/shared/package.json
COPY packages/client/package.json packages/client/package.json

RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
RUN pnpm install --filter snek-server...

COPY packages/server packages/server
COPY packages/shared packages/shared
COPY packages/client packages/client

EXPOSE 2567

CMD ["pnpm", "-C", "packages/server", "start"]
