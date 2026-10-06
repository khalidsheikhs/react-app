# ============================================================
# Development
# ============================================================

FROM node:22-alpine AS development

WORKDIR /app

# Install dependencies
COPY package*.json ./

RUN npm ci

# Copy source code
COPY . .

# Vite development server
EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]


# ============================================================
# Future: Build
# ============================================================

# FROM node:22-alpine AS build
#
# WORKDIR /app
#
# COPY package*.json ./
#
# RUN npm ci
#
# COPY . .
#
# RUN npm run build


# ============================================================
# Future: Production
# ============================================================

# FROM nginx:alpine AS production
#
# RUN rm -rf /usr/share/nginx/html/*
#
# COPY --from=build /app/dist /usr/share/nginx/html
#
# EXPOSE 80
#
# CMD ["nginx", "-g", "daemon off;"]