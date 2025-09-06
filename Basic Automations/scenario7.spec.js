const {test,expect} = require('@playwright/test');

test('Verify element visibility', async ({page}) =>{
    await page.goto('https://practice.expandtesting.com');
    await page.locator("//a[@href='/login']").nth(0).click();
    await page.goBack();
    await expect(page).toHaveURL("https://practice.expandtesting.com/");
    await page.goForward();
    await expect(page).toHaveURL("https://practice.expandtesting.com/login");
})