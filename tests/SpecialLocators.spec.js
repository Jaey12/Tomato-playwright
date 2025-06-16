const { test, expect } = require('@playwright/test');
const { text } = require('stream/consumers');

test('Playwright Speacial Locators',async({browser, page})=>
{
    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").click();
    await page.getByLabel("Gender").selectOption("Male");
    await page.getByPlaceholder("Password").fill("learning");
    await page.getByRole("button",{name: 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link", {name: 'Shop'}).click();
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
})