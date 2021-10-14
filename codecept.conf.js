exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://correocmx.globalhitss.com',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/Login.js',
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js','./step_definitions/login_steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    allure: {
      enable: true
    }
  },
  tests: './*_test.js',
  name: 'codecepjtjs'
}