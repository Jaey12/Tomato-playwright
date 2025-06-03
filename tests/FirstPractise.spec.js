const {test, expect} = require('@playwright/test');

test('Page playwright Script',async({browser, page})=>
{
    //Assigned variables
    /*const firstName = page.locator("#firstName")
    const lastName = page.locator("#lastName")
    const email = page.locator("#userEmail")
    const phoneNumber = page.locator("#userMobile")
    const password = page.locator("#userPassword")
    const confirmpassword = page.locator("#confirmPassword")
    const register = page.locator("#login")
    const checkbox = page.locator("input[type='checkbox']")
    const login = page.locator(".btn.btn-primary")*/
    const loginUsername = page.locator("#userEmail")
    const loginPassword = page.locator("#userPassword")
    const loginButton = page.locator("#login")
    const productnames = page.locator(".card-body b")

    //Register
    await page.goto("https://rahulshettyacademy.com/client")
    /*await page.locator(".text-reset").click()
    await firstName.fill("Jay");
    await lastName.fill("Surya");
    await email.fill("jayasuryasrinivasan@gmail.com");
    await phoneNumber.fill("7810075234");
    await password.fill("Srime123");
    await confirmpassword.fill("Srime123");
    await checkbox.check();
    await register.click();*/

    //login
    //await login.click();
    await loginUsername.fill("jayasuryasrinivasan3@gmail.com");
    await loginPassword.fill("Srime123");
    await loginButton.click();
    await productnames.first().waitFor();
    console.log(await productnames.allTextContents());


});