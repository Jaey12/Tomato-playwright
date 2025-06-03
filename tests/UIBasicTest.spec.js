const {test, expect} = require('@playwright/test');

test('Browser context playwright Script',async({browser})=>
{
    const context = await browser.newContext()
    const page = await browser.newPage()
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
});

test('Page playwright Script',async({browser, page})=>
{
    const userName = page.locator("#username")
    const password = page.locator("#password")
    const loginButton = page.locator("#signInBtn")
    const producttitles = page.locator(".card-body a")

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await page.title())
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    await userName.fill("rahulshettyacademy");
    await password.fill("learning");
    await loginButton.click();
    console.log(await producttitles.nth(1).textContent());
    console.log(await producttitles.first().textContent());
    const allTitles = await producttitles.allTextContents();
    console.log(allTitles)

});