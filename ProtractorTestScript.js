describe('My first non angular class', function() {
    it('My function', function() {
        browser.driver.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.driver.get('https://stackoverflow.com/users/login');
        element(by.id('email')).sendKeys('6');

    })

}) 