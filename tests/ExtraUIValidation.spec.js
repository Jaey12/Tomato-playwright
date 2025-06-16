const { test, expect } = require('@playwright/test');
const { text } = require('stream/consumers');

test.only('Calendar playwright Script',async({browser, page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator(".inputs.displayed-class")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator(".inputs.displayed-class")).toBeHidden();
});