const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)]
      }));

      return config;
    },
    specPattern: [
      'cypress/e2e/features/**/*.feature',   // Rodar arquivos .feature
      'cypress/e2e/api_tests/**/*.cy.js'      // Rodar arquivos Cypress puro
    ],
    supportFile: 'cypress/support/e2e.js',
    screenshotsFolder: 'cypress/evidencias/screenshots',
    videosFolder: 'cypress/evidencias/videos',
    video: true,
    screenshotOnRunFailure: true,
  }
});