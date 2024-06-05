import {test, expect} from "@playwright/test"
test("Check Box Test", async({page})=>{
    page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const checkbox =  await page.locator("id=isAgeSelected");
    await expect(checkbox).not.toBeChecked();
    await checkbox.check();
    const checkedStatus = await page.locator("id=txtAge");
    await expect(checkbox).toBeChecked();
    await expect(checkedStatus).toHaveText("Checked");
});
