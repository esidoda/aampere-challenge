This is a [Next.js](https://nextjs.org) project

## Running the application locally

Before you start, you need to install the necessary dependencies. Run the following command in your project directory:

```bash
npm install
```

Once the dependencies are installed, start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running the application with Docker

To build the Docker image, run the following command in the root of the project:

```bash
docker build -t aampere-challenge .
```

Once the image is built, run the container using:

```bash
docker run -p 3000:3000 aampere-challenge
```

After running the container, open your browser and navigate to [http://localhost:3000](http://localhost:3000) to verify that the Next.js application is running inside the Docker container.

## Running Tests

### Unit Tests

To run the unit tests, use the following command:

```bash
npm run test:unit
```

### E2E Tests

Before running the E2E tests, you need to build and start the application. Follow these steps:

1. Build the application:

```bash
npm run build
```

2. Start the application:

```bash
npm run start
```

3. In a separate terminal window, run the E2E tests:

```bash
npm run test:e2e
```

If you encounter errors while running End-to-End (E2E) tests, try installing Playwright dependencies with the following command:

```bash
npx playwright install
```

This ensures that all required browsers and dependencies are installed correctly.
