//Extracting error message from the browser and inserting valid assertions
const {test, expect} = require('@playwright/test')


test.only('Browser Context Playwright test', async ({browser})=> {
    //chrome 
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await page.locator('#username').fill('rahulshetty');
    await page.locator("[type='password']").fill('learning');
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
});