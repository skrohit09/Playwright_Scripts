const {test,expect} = require('@playwright/test');

test('Check for broken images', async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/broken_images");
    // Get all image URLs (src attributes) on the page
    const imageUrl = await page.$$eval('img', imgs => imgs.map(i => i.src));

    for(const url of imageUrl){
        const response = await page.goto(url);
        // If there's no response or the HTTP status is not OK (not 2xx)
        if(!response.ok() || !response){
            console.log("Broken Image : ", url);
        }
    }
    
});