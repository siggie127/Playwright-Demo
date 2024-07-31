import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export default class ShoppingCartPage {
    readonly page: Page;
    readonly prodcutName: Locator;
    readonly quantity: Locator;
    readonly checkoutBtn: Locator;
    constructor(page: Page) {
        this.page = page;
        this.prodcutName = page.locator("//td[@class='text-left']//a[1]");
        //this.quantity = page.locator("(//input[@class='form-control'])[1]"); 
        this.quantity = page.locator("(//input[@class='form-control' and contains(@name, 'quantity')])[1]");
        this.checkoutBtn = page.locator("//a[contains(text(), 'Checkout')]");


    }

    async verifyProduct() {
        await this.prodcutName.waitFor();
        expect(this.prodcutName).toHaveText("iPod Nano");
    }

    async verifyProductQuanity() {
        await this.quantity.waitFor({timeout:3000});
        expect(this.quantity).toHaveValue("1");
    }
    async checkout() {
        await this.checkoutBtn.waitFor();
        await this.checkoutBtn.click();
    }

}