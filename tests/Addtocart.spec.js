const {test, expect} = require('@playwright/test');

test.only('Page playwright Script',async({browser, page})=>
{
    const loginUsername = page.locator("#userEmail")
    const loginPassword = page.locator("#userPassword")
    const loginButton = page.locator("#login")
    const products = page.locator(".card-body")
    const productName = "ZARA COAT 3"

    //login
    await page.goto("https://rahulshettyacademy.com/client")
    await loginUsername.fill("jayasuryasrinivasan3@gmail.com");
    await loginPassword.fill("Srime123");
    await loginButton.click();
    await products.first().waitFor();
    console.log(await products.allTextContents());

    const count = await products.count();
    for (let i = 0; i < count; ++i) {
        if (await products.nth(i).locator("b").textContent() === productName) {
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();
});
