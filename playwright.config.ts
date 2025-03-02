import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e", // Directory for Playwright tests
  timeout: 30000, // Timeout per test
  expect: { timeout: 5000 },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
  use: {
    baseURL: "http://localhost:3000",
    testIdAttribute: "e2e-id", 
  },

});
