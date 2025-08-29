const {test,expect} = require('@playwright/test');
const screenshotDesktop = require('screenshot-desktop');

test.only('Click a link and check navigation', async ({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByText('A/B Testing').click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/abtest/);
    await expect(page.locator('//h3')).toBeVisible();
})