const {test,expect} = require('@playwright/test');
const screenshotDesktop = require('screenshot-desktop');

test('Verify element visibility', async ({page}) =>{
    await page.goto('https://practice.expandtesting.com');
    await expect(page.locator('//h1')).toBeVisible();
    await expect(page.locator('//img')).toBeVisible();
    const timestamp = Date.now();
    await screenshotDesktop({filename : 'C:\\Users\\skroh\\Downloads\\Playwright Screesnhot Path\\desktop_screenshot4-${timestamp}.png'});
    
})