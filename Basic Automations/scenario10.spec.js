const {test,expect} = require('@playwright/test');



test('Navigate via keyboard (tabbing)', async ({page}) => {

    await page.goto("https://practice.expandtesting.com/");
    await page.waitForLoadState("networkidle");
    await page.keyboard.press("Tab");
    const focusedElement = await page.evaluate(() => document.activeElement.tagName);
    if(focusedElement == "A"){
        console.log("Order Verified");
    }
    else{
        console.log("Order is wrong");
    }
    console.log("First Focused Element : " + focusedElement);
    await page.keyboard.press("Tab");
    await page.keyboard.press("Shift+Tab");
    const focusedElement1 = await page.evaluate(() => document.activeElement.tagName);
    console.log("Second Focused Element : " + focusedElement1);

})