const { test, expect } = require('@playwright/test');
const { text } = require('stream/consumers');

test.only('Calendar playwright Script',async({browser, page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator(".inputs.displayed-class")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator(".inputs.displayed-class")).toBeHidden();

    //Dialog Box
    await page.locator("#confirmbtn").click();
    page.on('dialog', dialog => dialog.accept());
    await page.locator("#confirmbtn").click();
    page.on('dialog', dialog => dialog.dismiss());

    //Hover
    await page.locator("#mousehover").hover();

    //Frames
    const framesPage = page.frameLocator("#courses-iframe");
    await framesPage.locator(".login-btn").first().click();

});