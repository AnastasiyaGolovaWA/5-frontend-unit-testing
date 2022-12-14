describe("Запуск приложения", function () {
  beforeEach(() => {
    browser.driver.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    browser.driver.get("http://localhost:4200/");
  });
  it("Существует первое окно ввода", () => {
    expect(element(by.css("#input1")).isDisplayed()).toBe(true);
  });
  it("Существует второе окно ввода", () => {
    expect(element(by.css("#input2")).isDisplayed()).toBe(true);
  });
  it("Существует выпадающий список операций", () => {
    expect(element(by.css("#operationSelector")).isDisplayed()).toBe(true);
  });

  it("Существует кнопка расчёта", () => {
    expect(element(by.css("#calcButton")).isDisplayed()).toBe(true);
  });

  it("Корректный ответ сложения 41 + 19 = 60", () => {
    element(by.css("#system")).sendKeys("10");
    element(by.css("#input1")).click().clear().sendKeys("41");
    element(by.css("#operationSelector")).sendKeys("Сложить");
    element(by.css("#input2")).click().clear().sendKeys("19");
    element(by.css("#calcButton")).click();
    expect(element(by.css("#input3")).getAttribute("value")).toEqual("60");
  });

  it("Корректный ответ вычитания 93 - 92 = 1", () => {
    element(by.css("#system")).sendKeys("10");
    element(by.css("#input1")).click().clear().sendKeys("93");
    element(by.css("#operationSelector")).sendKeys("Вычесть");
    element(by.css("#input2")).click().clear().sendKeys("92");
    element(by.css("#calcButton")).click();
    expect(element(by.css("#input3")).getAttribute("value")).toEqual("1");
  });

  it("Корректный ответ вычитания умножения 52 * 54 = 2808", () => {
    element(by.css("#system")).sendKeys("10");
    element(by.css("#input1")).click().clear().sendKeys("52");
    element(by.css("#operationSelector")).sendKeys("Умножить");
    element(by.css("#input2")).click().clear().sendKeys("54");
    element(by.css("#calcButton")).click();
    expect(element(by.css("#input3")).getAttribute("value")).toEqual("2808");
  });

  it("Корректный ответ деления 74 : 2 = 37", () => {
    element(by.css("#system")).sendKeys("10");
    element(by.css("#input1")).click().clear().sendKeys("74");
    element(by.css("#operationSelector")).sendKeys("Поделить");
    element(by.css("#input2")).click().clear().sendKeys("2");
    element(by.css("#calcButton")).click();
    expect(element(by.css("#input3")).getAttribute("value")).toEqual("37");
  });

  it("Пустая строка при вводе букв в ввод 1", () => {
    element(by.css("#system")).sendKeys("10");
    element(by.css("#input1")).click().clear().sendKeys("йцукен");
    expect(element(by.css("#input1")).getAttribute("value")).toEqual("");
  });

  it("Пустая строка при вводе букв в ввод 2", () => {
    element(by.css("#system")).sendKeys("10");
    element(by.css("#input2")).click().clear().sendKeys("йцукен");
    expect(element(by.css("#input2")).getAttribute("value")).toEqual("");
  });

  it("Невозможно ввести 0 во второй ввод при операции деления", () => {
    element(by.css("#system")).sendKeys("10");
    element(by.css("#operationSelector")).sendKeys("Поделить");
    element(by.css("#input2")).click().clear().sendKeys("0");
    expect(element(by.css("#input2")).getAttribute("value")).toEqual("");
  });

  it("Проверка введения букв в 16 системе счисления", () => {
    element(by.css("#system")).sendKeys("16");
    element(by.css("#input1")).click().clear().sendKeys("F4A30");
    expect(element(by.css("#input1")).getAttribute("value")).toEqual("F4A30");
  });

  it("Зелёный фон при ответе положительном числе (1 + 1 > 0)", () => {
    element(by.css("#system")).sendKeys("10");
    element(by.css("#input1")).click().clear().sendKeys("1");
    element(by.css("#operationSelector")).sendKeys("Сложить");
    element(by.css("#input2")).click().clear().sendKeys("1");
    element(by.css("#calcButton")).click();
    expect(element(by.css("#input3")).getAttribute("style")).toEqual(
      "background-color: green;"
    );
  });

  it("Чёрный фон при ответе нуле (0 + 0 = 0)", () => {
    element(by.css("#system")).sendKeys("10");
    element(by.css("#input1")).click().clear().sendKeys("0");
    element(by.css("#operationSelector")).sendKeys("Сложить");
    element(by.css("#input2")).click().clear().sendKeys("0");
    element(by.css("#calcButton")).click();
    expect(element(by.css("#input3")).getAttribute("style")).toEqual(
      "background-color: black;"
    );
  });

  it("Красный фон при отрицательном ответе (1 - 5) < 0", () => {
    element(by.css("#system")).sendKeys("10");
    element(by.css("#input1")).click().clear().sendKeys("1");
    element(by.css("#operationSelector")).sendKeys("Вычесть");
    element(by.css("#input2")).click().clear().sendKeys("5");
    element(by.css("#calcButton")).click();
    expect(element(by.css("#input3")).getAttribute("style")).toEqual(
      "background-color: red;"
    );
  });

});
