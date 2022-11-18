describe("Запуск приложения", function () {
  beforeEach(() => {
    browser.driver.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    browser.driver.get("http://localhost:4200/");
  });
  it("Существует первое окно ввода", () => {
    expect(element(by.css('#input1')).isDisplayed()).toBe(true);
  });
  it("Существует второе окно ввода", () => {
    expect(element(by.css('#input2')).isDisplayed()).toBe(true);
  });
  it('Существует выпадающий список операций', () => {
    expect(element(by.css('#operationSelector')).isDisplayed()).toBe(true);
  });

  it('Существует кнопка расчёта', () => {
    expect(element(by.css('#calcButton')).isDisplayed()).toBe(true);
  });
});
