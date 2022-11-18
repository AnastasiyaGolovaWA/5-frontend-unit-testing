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

  it('Корректный ответ сложения 41 + 19 = 60', () => {
    element(by.css('#system')).sendKeys('10');
    element(by.css('#input1')).click().clear().sendKeys('41');
    element(by.css('#operationSelector')).sendKeys('Сложить');
    element(by.css('#input2')).click().clear().sendKeys('19');
    element(by.css('#calcButton')).click();
    expect(element(by.css('#input3')).getAttribute('value')).toEqual('60');
  });

});
