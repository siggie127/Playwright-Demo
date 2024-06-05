import { test, expect } from "playwright/test";
test.beforeEach("Load alert page", async({page})=>{
    page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
})

test("Alert Box One",async({page})=>{
page.on("dialog", async(alert)=>{
    const text = alert.message();
    console.log(text);
    alert.accept();

})

const button = await page.locator("button:has-text('Click Me')").nth(0);
await button.click();

});

test("Confirm Box Two", async({page})=>{
    page.on("dialog", async(alert)=>{
        const text = alert.message();
        console.log(text);
        alert.dismiss();
    
    })
    
    const button = await page.locator("button:has-text('Click Me')").nth(1);
    await button.click();
    const confirmationMsg = await page.locator("id=confirm-demo");
    await expect(confirmationMsg).toContainText("Cancel!");
    
    });

    test("Promt box three", async({page})=>{
        page.on("dialog", async(alert)=>{
            const messagetext = await alert.defaultValue();
            console.log(messagetext);
            alert.accept("Accepted")
            

        })

        const button = await page.locator("button:has-text('Click Me')").nth(2);
        await button.click();
        const confirmation = await page.locator("id=prompt-demo");
        await expect(confirmation).toContainText("'Accepted' !");

    });