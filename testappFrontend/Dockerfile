# Use a base Node.js image
FROM node:19-alpine3.16

# Create and set the working directory for the app
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app

# Copy package.json and package-lock.json
COPY --chown=node:node testappFrontend/package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire frontend application code
COPY --chown=node:node testappFrontend ./

# Build the frontend application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Change to the node user
USER node

# Start the frontend server
CMD ["npm", "run", "start"]
