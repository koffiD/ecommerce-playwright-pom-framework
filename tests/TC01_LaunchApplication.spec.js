 const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test('@sanity @regression TC01_LaunchApplication', async ({ page }) => {
  const home = new HomePage(page);

  await home.goto();
  await expect(page).toHaveTitle('Your store of fun');
});
  