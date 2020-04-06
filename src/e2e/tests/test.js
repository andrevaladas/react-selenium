require('chromedriver');
const webdriver = require("selenium-webdriver");

const driver = new webdriver.Builder().forBrowser("chrome").build();
// const driver = new webdriver.Builder()
 // .usingServer()
 // .withCapabilities({ browserName: "chrome" })
 // .build();

const By = webdriver.By;
const until = webdriver.until;

// ask the browser to open a page
driver.navigate().to("http://localhost:3000/simulation")
    .then(() => driver.wait(until.elementLocated(By.css('.panel-body'))))
    .then(() => driver.findElement(By.id('Screen Workflow Simulation')).click())
    .then(() => driver.sleep(100))
    // .then(() => driver.wait(driver.findElement(By.id('DefaultLoadingSpinner')).isDisplayed()))
    .then(() => driver.findElement(By.id('DefaultLoadingSpinner')).click())
    .then(() => {
    	console.log('DONE!');
    	driver.quit();
    })
    .catch(e => {
    	console.error('ERROR', e);
    	driver.quit();
    });

// driver.findElement(By.id('DefaultLoadingSpinner')).click();
// driver.quit();	

