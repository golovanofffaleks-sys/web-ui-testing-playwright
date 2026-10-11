const { test, expect } = require('@playwright/test');
const testData = require('./data/test-data.json');

test('Successful login to Swag Labs', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Data-driven input
  await page.locator('[data-test="username"]').fill(testData.credentials.username);
  await page.locator('[data-test="password"]').fill(testData.credentials.password);
  await page.locator('[data-test="login-button"]').click();

  // State Mapping Validation
  await expect(page).toHaveURL(new RegExp(testData.expected.urlPattern));
  
  const shoppingCart = page.locator(testData.expected.selectors.shoppingCart);
  await expect(shoppingCart).toBeVisible();

  const productsTitle = page.locator(testData.expected.selectors.pageTitle);
  await expect(productsTitle).toHaveText(testData.expected.headerText);

  console.log('Login successful: All mapped states verified.');
});
