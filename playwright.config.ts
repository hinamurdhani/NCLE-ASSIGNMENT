import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  reporter: process.env.CI
    ? [
        ["junit", { outputFile: "results.xml" }],
        ["html", { outputFolder: "./Reports/", open: "never" }]
      ]
    : [["html", { outputFolder: "./Reports/", open: "never" }]],
  use: {
    baseURL: 'https://api.github.com',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github.v3+json',
    },
    trace: 'on',
  },
});
