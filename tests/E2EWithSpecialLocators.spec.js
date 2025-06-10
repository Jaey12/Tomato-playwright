const { test, expect } = require('@playwright/test');
const { text } = require('stream/consumers');

test.only('Page playwright Script',async({browser, page})=>
{
    const loginUsername = page.getByPlaceholder("#email@example.com")
    const loginPassword = page.getByPlaceholder("#enter your passsword")
    const loginButton = page.getByRole("button",{name:'Login'})
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

    await products.filter({hasText: productName}).getByRole("button",{name:'Add To Cart'})
    await page.getByRole("listitem").page.getByRole("button",{name: 'Cart'}).click();

    await page.locator("div li").first().waitFor();
    expect(await page.getByText(productName)).toBeVisible();
   

    //Checkout
    await page.getByRole("button", {name: 'Checkout'}).click();

    //Checkout page
    await page.locator("div.title:has-text('CVV Code') + input.input.txt").fill("123");
    await page.locator("div.title:has-text('Name on Card') + input.input.txt").fill("Jayasurya S");

    //Location selection
    await page.getByPlaceholder("Select Country").pressSequentially("ind");
    await page.getByRole("button",{name: 'India'}).nth(1).click();

    await page.getByLabel(email).toBeVisible;
    await page.getByText("PLACE ORDER").click();

    expect(await page.getByText("Thankyou for the order.")).toBeVisible()
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
