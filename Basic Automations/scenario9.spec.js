const {test,expect} = require('@playwright/test');



test('Mouse hover and reveal tooltip', async({page}) =>{
    await page.goto("https://the-internet.herokuapp.com/hovers");
    const element = page.locator(".figure").nth(1); 
    await element.hover();
    await expect(element).toContainText(/name: user2/);
})