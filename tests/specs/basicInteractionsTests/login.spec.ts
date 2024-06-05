import { chromium, test } from "@playwright/test";

test("Login test", async()=>{
    //page setup can be done with the page fixture directly
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("(//li[contains(@class,'nav-item dropdown')])[3]");
    await page.click("//span[text()[normalize-space()='Login']]");
    //await page.waitForTimeout(30000);
    await page.fill("//input[@placeholder='E-Mail Address']", "shashika127@yahoo.com");
    await page.fill("//input[@placeholder='Password']", "1qaz@WSX@");
    await page.click("//input[@type='submit']");
    await page.waitForTimeout(3000);

    // const contextOne = await browser.newContext();
    // const  pageOne = await contextOne.newPage();
    // await pageOne.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
    // await pageOne.waitForTimeout(3000);

})

