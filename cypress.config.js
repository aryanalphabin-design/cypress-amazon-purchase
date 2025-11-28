const { defineConfig } = require("cypress");
try {
  require("dotenv").config();
} catch (err) {
  // dotenv not installed or not available in this environment
}
module.exports = defineConfig({
  projectId: process.env.CYPRESS_PROJECT_ID,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
