const { defineConfig } = require("cypress");

module.exports = defineConfig({
  setupNodeEvents(on, config) {
    // implement node event listeners here
  },

  e2e: {
    pageLoadTimeout: 200000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
