const {test,expect} = require('@playwright/test');
const screenshotDesktop = require('screenshot-desktop');

test.only('ID 1 Open homepage and verify title', async ({page}) => {
    await page.goto("https://practice.expandtesting.com/");
    await page.waitForLoadState('networkidle');
    console.log(await page.title());
    expect(await page.title()).toContain('Practice');
    await page.screenshot({'path': 'C:\\Users\\skroh\\Downloads\\Playwright Screesnhot Path\\screenshot1.png'});
    await screenshotDesktop({ filename: 'C:\\Users\\skroh\\Downloads\\Playwright Screesnhot Path\\desktop_screenshot.png' });
});