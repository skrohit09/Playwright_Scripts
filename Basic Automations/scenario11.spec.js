const {test,expect} = require('@playwright/test');



test('Wait for dynamic content to load', async ({page}) =>{

    await page.goto("https://the-internet.herokuapp.com/dynamic_loading");
    await page.getByText("Example 1: Element on page that is hidden").click();
    await page.getByText("Start").click();
    await expect(page.locator("#loading")).toBeVisible();
    await expect(page.locator("#finish")).toBeVisible({timeout: 60000});
    await expect(page.locator("#finish")).toHaveText("Hello World!");
    await expect(page.locator("#loading")).toBeHidden();

})