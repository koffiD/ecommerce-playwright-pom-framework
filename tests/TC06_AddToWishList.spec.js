const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { LoginPage } = require('../pages/LoginPage');
const { CategoryPage } = require('../pages/CategoryPage');
const { ProductPage } = require('../pages/ProductPage');

test('@regression TC06_AddToWishList', async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);
  const category = new CategoryPage(page);
  const product = new ProductPage(page);

  await home.goto();
  await home.openMyAccount();
  await home.clickLogin();

  await login.login('assiehuie@gmail.com', 'Password#1');

  await home.openAllLaptopsAndNotebooks();
  await category.openProductByName('HP LP3065');

  await product.addToWishList();
  await product.expectSuccessContains(expect, 'Success');
});