import {test, expect} from "playwright/test";

test.beforeEach("page launch", async({page})=>{
await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    
});

test("drop down test", async({page})=>{
    //can use lable, value and index to select options
    await page.selectOption("id=select-demo", {
        label:"Monday",
        //value:"Monday"
        // index: 0
    
    });
    const selectedOption = await page.locator("//div[contains(@class,'px-10 pt-10')]//p[1]").textContent();
    console.log(selectedOption);
    await expect(selectedOption).toContain("Monday");


});

test.only("multi option drop down test", async({page})=>{
    //can use lable, value and index to select options
    await page.selectOption("id=multi-select", [
        {label:"California"},
        {value:"New York"},
        {index: 5 }
    
    ]);

    //check the validation
    // await page.waitForTimeout(3000);
    // await page.locator("#printMe").scrollIntoViewIfNeeded();
    // await page.locator("(//button[@id='printMe'])").click();
    // await page.waitForTimeout(2000);
    // const confMsg = await page.locator("//span[contains(@class,'groupradiobutton block')]")
    // await expect(confMsg).toBeVisible();
    // const lastSelectedOption = await confMsg.textContent();
    // console.log(lastSelectedOption);
    // await expect(lastSelectedOption).toContain("Texas");


});