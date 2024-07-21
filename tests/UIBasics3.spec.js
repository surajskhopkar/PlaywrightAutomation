//Extracting first and second element name after successfully logged in
const {test, expect} = require('@playwright/test')

test.only('Browser Context Playwright test', async ({browser})=> {
    //chrome 
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const passWord = page.locator("[type='password']")
    const signIn = page.locator('#signInBtn');
    const cardTitles = await page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await userName.fill('rahulshettyacademy');
    await passWord.fill('learning');
    await signIn.click();
    console.log(await cardTitles.nth(0).textContent());
    console.log(await cardTitles.nth(1).textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
});