const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl:"https://www.globalsqa.com/",
    baseUrl:"https://demoqa.com",
  },
  watchForFileChanges:true,  //execute every time
  chromeWebSecurity:false,
});
