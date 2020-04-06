require('chromedriver');

const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:3000/simulation');
    await driver.wait(until.elementLocated(By.css('.panel-body')));
    // console.log(driver.findElement(By.id('Screen Workflow Simulation')));
    await driver.findElement(By.id('Screen Workflow Simulation')).click();
    driver.sleep(100);
    // const button = driver.wait(
    //     until.elementLocated(By.id('DefaultLoadingSpinner')
    //   ),20000)
    //   .then(element => {   
    //     return driver.wait(     
    //       until.elementIsVisible(element),     
    //       20000);
    //   });
    // await button.click();
    // console.log(driver.findElement(By.id('DefaultLoadingSpinner')));
    await driver.findElement(By.id('DefaultLoadingSpinner')).click();
  } finally {
    //await driver.quit();
  }
})();

