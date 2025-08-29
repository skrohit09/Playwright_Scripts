const {test,expect} = require('@playwright/test');
const screenshotDesktop = require('screenshot-desktop');

test('Fill out a simple form and submit', async ({page}) =>{
    await page.goto('https://practice.expandtesting.com/contact');
    await page.locator('.form-control').nth(0).fill('testdata');
    await page.locator('.form-control').nth(1).fill('test@gmail.com');
    await page.locator('.form-control').nth(2).fill('Form filled');
    await page.locator('.btn-primary').click();
})