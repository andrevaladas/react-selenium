const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;

module.exports = function(driver) {
    const elements = {
        nameInput: By.css('.autocomplete'),
        nameSuggestion: By.css('.suggestion'),
        submitButton: By.css('.submit'),
    };
    return {
        url:  'http://localhost:3000/simulation/',
        elements: elements,
        waitUntilVisible: function() {
            return driver.wait(until.elementLocated(elements.nameInput));
        },
        navigate: function() {
            driver.navigate().to(this.url);
            return this.waitUntilVisible();
        },
        enterName: function(value) {
            driver.findElement(elements.nameInput).sendKeys(value);
            driver.wait(until.elementLocated(elements.nameSuggestion));
            driver.findElement(elements.nameSuggestion).click();
            return driver.wait(until.elementIsNotVisible(By.css(elements.nameSuggestion)));
        },
        getName: function() {
            return driver.findElement(elements.nameInput).getAttribute('value')
        }
        submit: function() {
            return driver.findElement(elements.submitButton).click();
        },
    };
};

