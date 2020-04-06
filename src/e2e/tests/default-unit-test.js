require('chromedriver');
const webdriver = require("selenium-webdriver");

const driver = new webdriver.Builder().forBrowser("chrome").build();

const By = webdriver.By;
const until = webdriver.until;

const { expect } = require('chai');

describe("Simulation Screen", () => {
    // e2e tests are too slow for default Mocha timeout
    // this.timeout(10000);

    before(() => driver.navigate().to("http://localhost:3000/simulation"));

    it("show loading spinner", async () => {
        await driver.wait(until.elementLocated(By.css('.panel-body')));

        await driver.findElement(By.id('Screen Workflow Simulation')).click();

        await driver.sleep(1000);

        await driver.findElement(By.id('DefaultLoadingSpinner')).click();

        // await driver.sleep(1000);

        const modal = driver.findElement(By.id('LoadingSpinner'));
        await driver.wait(until.elementIsVisible(modal), 3000);

        // console.log('Modal Is Displayed', await modal.isDisplayed());

        // await driver.wait(until.elementIsNotVisible(driver.findElement(By.id('LoadingSpinner'))), 10000);
        // await driver.sleep(7000);

        // console.log('Modal Is Not Displayed', await driver.findElement(By.id('LoadingSpinner')).isDisplayed());

        expect(await modal.isDisplayed()).to.be.true;

        // return driver.findElement(By.css(".suggestion")).click();
    });

    after(async () => {
        driver.quit();
    });
});
