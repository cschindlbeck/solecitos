# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /solecitos

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Expose the desired port (usually 3000 for React apps)
EXPOSE 3000

# Start the app when the container starts
CMD ["npm", "start"]
