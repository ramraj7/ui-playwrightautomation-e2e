import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';



const config: PlaywrightTestConfig = ({
  testDir: './src/tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  
  reporter:[ ['html'],[
    "allure-playwright",
    {
      detail: true,
      resultsDir: "allure-results",
      suiteTitle: true,
    },
  ]],

  timeout: 300000,
  
  use: {
    
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "https://ramraj08091.atlassian.net/jira/software/c/projects/CT/issues",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'on',
    
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

  ],
});

export default config;