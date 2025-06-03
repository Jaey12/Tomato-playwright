const {test, expect} = require('@playwright/test');

test('Page playwright Script',async({page})=>
{
    
    await page.goto("https://staging.heymax.ai/auth/login")
    console.log(await page.title())
    await expect(page).toHaveTitle("Maximise your rewards with minimum effort - heymax.ai")
    await page.locator('#email').fill("jayasuryasrinivasan3@gmail.com")
    await page.locator('#password').fill("Srimes")
    await page.locator("button[class='text-md rounded-lg bg-[#522AC5] py-2.5 font-semibold leading-6 text-white hover:bg-[#522AC5] hover:text-white disabled:bg-[#F0F4FF] disabled:text-[#CBC1E7]']").click()
    console.log(await page.title())
    await expect(page.title).toHaveTitle("Maximise your rewards with minimum effort - heymax.ai")
    await page.pause()
});