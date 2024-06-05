import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("(//li[contains(@class,'nav-item dropdown')])[3]");
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('shashika127@yahoo.com');
  await page.getByPlaceholder('E-Mail Address').press('Tab');
  await page.getByPlaceholder('Password').fill('1qaz@WSX@');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.hover("(//li[contains(@class,'nav-item dropdown')])[3]");
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
});