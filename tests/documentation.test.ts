import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
// Alternative import method:
// Use common Allure utilities for JavaScript integration from 'allure-js-commons' if 'allure-playwright' is not used
// import * as allure from 'allure-js-commons';

// Test #1

test('Should display the Allure TestOps logo when visiting the homepage', async ({ page }) => {
  await allure.description('Verifies that the Allure TestOps logo is visible when visiting the documentation homepage');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Content');
  await allure.story('Logo');
  await allure.tags('Logo', 'Homepage', 'UI');

  await allure.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Verify that the Allure TestOps logo is visible', async () => {
    const logo = page.locator('img[alt="TestOps logo"]');
    await expect(logo).toBeVisible();
  });
});

// Test #2

test('Should display the correct header when visiting the homepage', async ({ page }) => {
  await allure.description('Verifies that the main heading includes "Allure TestOps" when visiting the homepage');
  await allure.epic('Allure TestOps Documentation');
  await allure.feature('Content');
  await allure.story('Page Header');
  await allure.tags('Homepage', 'UI');

  await allure.step('Navigate to the Allure TestOps documentation homepage', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Verify that the page header includes "Allure TestOps"', async () => {
    await expect(page.locator('h1')).toContainText('Allure TestOps');
  });
});
