const {test, expect} = require('@playwright/test')


test.only('Browser Context Playwright test', async ({browser})=> {
    //chrome 
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator("[type='password']").fill('learning');
    await page.locator('#signInBtn').click();


});

test('Page Playwright test', async ({page})=> {
    //chrome 
    await page.goto("https://google.com");

    //get title - assertion
    await expect(page).toHaveTitle("Google")
    console.log(await page.title());


});