import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.tombola.co.uk/');

  // Define the locator for the page title element.
  const pageTitle = page.locator('.t-header__strapline-title.mb-0.my-auto.font-weight-bold');

  // Expects page to have a header that reads 'Britain's Biggest Bingo site'.
  await expect(pageTitle).toHaveText(/Britain's Biggest Bingo site/);
});

test('Cookie banner is visible', async ({ page }) => {
  await page.goto('https://www.tombola.co.uk/');

  // Expect cookie banner to be visible.
  const cookieBanner = page.locator('#onetrust-banner-sdk');
  await expect(cookieBanner).toBeVisible();
});

test('Allow all cookies', async ({ page }) => {
  await page.goto('https://www.tombola.co.uk/');

  // Click the 'Allow all cookies' button.
  await page.getByRole('button', { name: 'Allow all cookies' }).click();

  // Expects cookie banner to be hidden.
  const cookieBanner = page.locator('#onetrust-banner-sdk');
  await expect(cookieBanner).toBeHidden();
});
