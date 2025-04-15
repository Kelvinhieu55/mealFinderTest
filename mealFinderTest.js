const { Builder, By, Key, until } = require('selenium-webdriver');

(async function testMealFinder() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Mở trang web
    await driver.get('http://localhost:5500'); // Thay đổi URL nếu cần

    // Tìm kiếm món ăn với từ khóa "chicken"
    await driver.findElement(By.id('search')).sendKeys('chicken', Key.RETURN);
    await driver.wait(until.elementLocated(By.id('result-heading')), 5000);
    const headingText = await driver.findElement(By.id('result-heading')).getText();
    console.log('Kết quả tìm kiếm:', headingText);

    // Lấy một món ăn ngẫu nhiên
    await driver.findElement(By.id('random')).click();
    await driver.wait(until.elementLocated(By.css('.single-meal')), 5000);
    const mealTitle = await driver.findElement(By.css('.single-meal h1')).getText();
    console.log('Món ăn ngẫu nhiên:', mealTitle);

  } catch (error) {
    console.error('Đã xảy ra lỗi:', error);
  } finally {
    await driver.quit();
  }
})();
