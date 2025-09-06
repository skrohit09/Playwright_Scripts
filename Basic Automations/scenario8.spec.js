const {test,expect} = require('@playwright/test');



test('Assert text presence in heading', async({page}) =>{

    await page.goto("https://practice.expandtesting.com/");
    const locator1 = page.locator("//header");
    await expect(locator1).toHaveText(/Practice/);
    await expect(locator1).toBeVisible();
    const tagname1 = await locator1.evaluate(el => el.tagName.toLowerCase());
    console.log(tagname1);

})