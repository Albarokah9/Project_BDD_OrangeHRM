const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");


module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature", // Path ke file .feature kamu
    supportFile: "cypress/support/e2e.js",   // File support utama
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    setupNodeEvents: async (on, config) => {
      await addCucumberPreprocessorPlugin(on, config, {
        stepDefinitions: ["cypress/step_definitions/**/*.js"], // <== path ke step
      });

      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      return config;
    },
  },
});

