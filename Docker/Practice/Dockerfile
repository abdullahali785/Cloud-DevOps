FROM node:18-alpine
# Base Image

WORKDIR /app
# Inside container

COPY app/package*.json ./
RUN npm install
# Install dependencies

COPY app .

EXPOSE 3000
# Documentation for port

CMD ["npm", "start"]
# Run command
