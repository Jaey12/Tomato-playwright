const { test, expect } = require('@playwright/test');
const { text } = require('stream/consumers');

test('Page playwright Script',async({browser, page})=>
{
    const loginUsername = page.locator("#userEmail")
    const loginPassword = page.locator("#userPassword")
    const loginButton = page.locator("#login")
    const products = page.locator(".card-body")
    const productName = "ZARA COAT 3"
    const email = "jayasuryasrinivasan3@gmail.com"

    //login
    await page.goto("https://rahulshettyacademy.com/client")
    await loginUsername.fill(email);
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

    const labelText  = page.locator(".user__name  label[type='text']")
    await expect(labelText).toHaveText(email);
    await page.locator(".action__submit").click();
    expect(await page.locator(".hero-primary").first()).toHaveText("Thankyou for the order.");
    const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderID);
    //Orders
    await page.locator("button[routerlink*='/dashboard/myorders']").click();
    await page.locator("tbody").waitFor();

    //Picking order id using loop
    const row = await page.locator("tbody tr")
    for(let i=0; i<await row.count(); ++i)
    {
        const rowOrderID = await row.nth(i).locator("th").textContent();
        if (orderID.includes(rowOrderID))
        {
            await row.nth(i).locator("button").first().click();
            break
        }
    }
    const orderIDdetails = await page.locator(".col-text.-main").textContent();
    expect(orderID.includes(orderIDdetails)).toBeTruthy();
    await page.pause();

});
