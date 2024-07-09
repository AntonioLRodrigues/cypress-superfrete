const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    pageLoadTimeout: 120000, // 120 segundos
    chromeWebSecurity: false,
  },
  viewportWidth: 1366,
  viewportHeight: 768,
});
