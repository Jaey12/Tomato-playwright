const { test, expect } = require('@playwright/test');
const { text } = require('stream/consumers');

test('Calendar playwright Script',async({browser, page})=>
{
    const Month = "5";
    const Day = "15";
    const Year = "2025";
    const Datelist = [Month, Day, Year];
    await page .goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(Year).click();
    await page.locator(".react-calendar__tile.react-calendar__year-view__months__month").nth(Number(Month-1)).click();
    await page.locator("//abbr[text()='"+Day+"']").click();

    /*const actualDateInputs = page.locator(".react-date-picker__inputGroup input"); 
    const count = await actualDateInputs.count();

    for (let index = 0; index < count; ++index) {
        const value = await actualDateInputs.nth(index).inputValue(); 
        console.log(`Field ${index + 1} Value: ${value} | Expected: ${Datelist[index]}`);
        await expect(value).toBe(Datelist[index]);
    }*/

})