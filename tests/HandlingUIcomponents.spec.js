const {test, expect} = require('@playwright/test');
const { text } = require('stream/consumers');

test('UI Components',async({page})=>
{
    const dropdown = page.locator("#country");
    const checkbox = page.locator("#sunday");
    const radiobutton = page.locator("#male");
    await page.goto("https://testautomationpractice.blogspot.com/");
    await dropdown.selectOption("Japan");

    //checkbox
    await checkbox.click(); 
    await expect(checkbox).toBeChecked(); //assertion
    console.log(await checkbox.isChecked()); //assertion
    await checkbox.uncheck();
    expect(await checkbox.isChecked()).toBeFalsy(); //assertion

    //Radiobutton
    await radiobutton.click();
    await expect(radiobutton).toBeChecked(); //assertion
    await page.pause();
}); 

 //Handling new window

test('Child Window', async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const childWindow = page.locator("button[onclick='myFunction()']");
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    const [newPage] = await Promise.all([
    context.waitForEvent('page'),  //Both line will parallely execute
    childWindow.click()
    ]);

    const text = await newPage.locator("p[class='description'] span").textContent();
    console.log(text);

    await page.locator("#male").click();
    await page.pause();


})