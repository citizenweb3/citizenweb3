FROM node:20-bullseye

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock files for dependency installation
COPY package.json yarn.lock ./

# Install Yarn and dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the project files into the container
COPY . .

# Copy the .env.local file into the container if it exists

# Build the project
RUN yarn build

# Set the port that the application listens on
EXPOSE 3000

# Default command to run the application
CMD ["yarn", "start", "-p", "3000"]
