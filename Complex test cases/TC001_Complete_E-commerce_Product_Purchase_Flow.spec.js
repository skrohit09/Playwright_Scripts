//Description : End-to-end product purchase including registration, cart management, and checkout


const {test,expect} = require('@playwright/test');

test("Complete E-commerce Product Purchase Flow", async({page})=>{

    //Step-1: Navigate to the homepage
    await page.goto("https://automationexercise.com");
    await page.waitForLoadState('networkidle');

    //Step-2: Verify page title contains "Automation Exercise"
    await expect(page).toHaveTitle(/Automation Exercise/);

    //Step-3: Click on "Products" in navigation menu
    await page.locator("//a[@href='/products']").click();

    //Step-4: Wait for products page to load
    await page.waitForLoadState("networkidle");

    //Step-5: Verify "ALL PRODUCTS" heading is visible
    await expect(page.locator(".title")).toHaveText(/All Products/);

    //Step-6: Search for "Blue Top" in search box
    await page.locator("#search_product").fill("Blue Top");

    //Step-7: Click search button
    await page.locator("#submit_search").click();

    //Step-8: Verify search results are displayed
    await expect(page.locator('.title')).toHaveText(/Searched Products/);

    //Step-9: Click on first product "View Product"
    await page.locator('//a[@href="/product_details/1"]').click();

    //Step-10: Verify product detail page opens
    await expect(page).toHaveURL(/product_details/);

    //Step-11: Verify product name is "Blue Top"
    await  expect(page.locator('//div[@class="product-information"]/h2')).toHaveText("Blue Top");

    //Step-12: Verify price is displayed
    await expect(page.locator('//div[@class="product-information"]/span/span')).toBeVisible();

    //Step-13: Change quantity to 3
    await page.locator("#quantity").fill("3");

    //Step-14: Click "Add to cart" button
    await page.locator(".cart").click();

    //Step-15: Wait for success message
    await expect(page.locator(".text-center").first()).toHaveText("Your product has been added to cart.");

    //Step-16: Click "Continue Shopping"
    await page.locator(".close-modal").click();

    //Step-17: Navigate back to products page
    await page.locator("//a[@href='/products']").click();

    //Step-18: Add another product "Men Tshirt" to cart
    await page.getByText("Men Tshirt").first().click();
    await page.locator("div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn").click();
    
    //Step-19: Click cart icon in header
    await page.getByText("View Cart").click();

    //Step-20: Verify cart page opens
    await expect(page).toHaveURL(/view_cart/);

    //Step-21: Verify 2 products are in cart
    await expect(page.locator("#cart_info_table")).toHaveCount(3);

    //Step-22: Verify total quantity is 4
    const quantity_element = await page.locator(".cart_quantity");
    const quantity = parseInt(quantity_element.nth(0).textContent()) + parseInt(quantity_element.nth(2).textContent());
    const quantity_str = quantity.toString();
    console.log(quantity);

    //Step-23: Click "Proceed To Checkout"
    await page.locator(".check_out").click();

    //Step-24: Click "Register / Login"
    await page.getByText("Register / Login").nth(1).click();

    //Step-25: Fill registration form with random data
    const randomString = Math.random().toString(36).substring(2, 10);
    const name = Math.random().toString(36).substring(7, 10);
    const email = randomString+"@gmail.com";
    await page.getByPlaceholder("Name").fill(name);
    await page.getByPlaceholder("Email Address").nth(1).fill(email);
    await page.getByText("Signup").click();
    await page.locator("#password").fill("password");
    await page.locator("#first_name").fill("first_name");
    await page.locator("#last_name").fill("last_name");
    await page.locator("#company").fill("company");
    await page.locator("#address1").fill("address1");
    await page.locator("#address2").fill("address2");
    await page.locator("#state").fill("state");
    await page.locator("#city").fill("city");
    await page.locator("#zipcode").fill("zipcode");
    await page.locator("#mobile_number").fill("778778877");

    //Step-26: Submit registration
    await page.getByText("Create Account").click();

    //Step-27: Verify account created successfully
    await expect(page.locator(".title")).toHaveText(/Account Created!/);

    //Step-28: Navigate to cart and checkout
    await page.locator(".fa-shopping-cart").click();
    await page.locator(".check_out").click();

    //Step-29: Veify Comment field works properly
    await expect(page.locator(".form-control")).toBeEditable();

    //Step-30: Add comment in comment box
    await page.locator(".form-control").fill("test");

    //Step-31: Click "Place Order"
    await page.getByText("Place Order").click();

    //Step-32: Fill payment details
    await page.locator("//*[@name='name_on_card']").fill(name);
    await page.locator("//*[@name='card_number']").fill("888888800");
    await page.locator(".card-cvc").fill("909");
    await page.locator(".card-expiry-month").fill("09");
    await page.locator(".card-expiry-year").fill("2026");

    //Step-33: Confirm order
    await page.locator(".submit-button").click();

    //Step-34: Verify order success message
    await expect(page.locator(".title")).toHaveText(/Order Placed!/);

    //Step-35: Download invoice
    await page.getByText("Download Invoice").click();
    const downloadPromise = page.waitForEvent('download');
    const download = await downloadPromise;
    const filePath = 'C:\\Users\\skroh\\Downloads' + download.suggestedFilename();
    await download.saveAs(filePath);

    //step-36: Logout completes successfully
    await page.getByText(" Logout").click();
    await expect(page).toHaveURL(/login/);

})