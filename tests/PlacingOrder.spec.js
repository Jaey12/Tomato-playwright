const {test, expect} = require('@playwright/test');
const { text } = require('stream/consumers');

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

    //Checkout
    await page.locator("text=Checkout").click();

    //Checkout page
    await page.locator("div.title:has-text('CVV Code') + input.input.txt").fill("123");
    await page.locator("div.title:has-text('Name on Card') + input.input.txt").fill("Jayasurya S");

    //Location selection
    await page.locator("input[placeholder$='Select Country']").pressSequentially("ind");
    const dropdowns = page.locator(".ta-results");
    await dropdowns.waitFor();

    const optionsinDropdown = await dropdowns.locator("button").count();
    for(let i=0; i<optionsinDropdown;++i)
    {
        const text = await dropdowns.locator("button").nth(i).textContent();
        if (text.trim() === "India")
        {
            await dropdowns.locator("button").nth(i).click();
            break;
        }
    }
    await page.pause();

});
