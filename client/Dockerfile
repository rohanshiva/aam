# Start from the latest Node.js image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN yarn install

# Copy the rest of the application
COPY . .

# Build the application
RUN yarn run build

# Install Python
RUN apt-get update && apt-get install -y python3

# Expose the port the server will run on
EXPOSE 5173

WORKDIR /app/dist

# Serve the built directory using Python's HTTP server
CMD ["python3", "-m", "http.server", "5173"]
