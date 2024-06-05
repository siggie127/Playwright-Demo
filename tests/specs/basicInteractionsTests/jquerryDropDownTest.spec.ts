import test from "playwright/test";

test("Jquerry drop down test", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");

    //await page.locator("(//span[contains(@class,'select2 select2-container')])[1]").click();
    //await page.click("//span[@class='select2-results']//li[text()='India']")
    //page.waitForTimeout(3000);
    const country ="India"
    await selectCountry(country);
    async function selectCountry(country){
        await page.locator("#country+span").click();
        await page.locator("ul#select2-country-results").locator("Li",{hasText:country}).click();
        //, {has:page.locator("Li", {hasText: "India"})}).click();
        await page.waitForTimeout(3000);
    }


});