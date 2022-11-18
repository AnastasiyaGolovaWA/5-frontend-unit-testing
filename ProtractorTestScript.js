describe("My first non angular class", function () {
  beforeEach(() => {
    browser.driver.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    browser.driver.get("http://localhost:4200/");
  });
  it("Существует первое окно ввода", () => {
    expect(element(by.css('#input1')).isDisplayed()).toBe(true);
  });
});
