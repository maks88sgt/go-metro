# Create a Dockerfile for building and running the React application

# Use the official Node.js image as the base image
FROM node:16-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . ./

# Build the React application for production
RUN npm run build

# Use Nginx to serve the React application
FROM nginx:alpine

# Copy the build output from the previous stage to the Nginx HTML folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to make the application accessible
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
