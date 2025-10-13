# Citizen Web3 Site

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Development

First, install dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Production Build (without Docker)

To build and run the production version locally:

```bash
# Install dependencies
yarn install

# Build the application
yarn build

# Start the production server
yarn start
```

The production application will be available at [http://localhost:3000](http://localhost:3000).

### Docker Deployment

#### Using Docker Compose (Recommended)

```bash
# Build and start the application
docker compose up --build

# Run in detached mode
docker compose up -d --build
```

#### Using Docker directly

```bash
# Build the Docker image
docker build -t citizen-web3 .

# Run the container
docker run -p 3000:3000 citizen-web3
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Jenkins Pipeline

The project includes a Jenkinsfile for CI/CD automation:

1. **Docker Build** - Builds the Docker image
2. **Deploy** - Starts the application

To use with Jenkins:
1. Create a new Pipeline job
2. Point to this repository
3. Select "Pipeline script from SCM"
4. The Jenkinsfile will be automatically detected

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
