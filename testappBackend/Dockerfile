# Use a base Node.js image
FROM node:19-alpine3.16

# Create and set the working directory for the app
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app

# Copy package.json and package-lock.json
COPY --chown=node:node testappBackend/package*.json ./testappBackend

# Install project dependencies
RUN npm install

# Copy the entire backend application code
COPY --chown=node:node testappBackend ./testappBackend

# Expose the port the app runs on
EXPOSE 3001

# Change to the node user
USER node

# Start the backend server
CMD ["node", "server.js"]
