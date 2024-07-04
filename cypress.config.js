const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env: {
    baseUrl: 'https://www.jobstreet.co.id/',
  },
  video: true
});