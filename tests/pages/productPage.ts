import { Locator, Page } from "playwright";

export default class ProductPage {
    readonly page: Page;
    readonly prodcutTile: Locator;
    readonly addTOCart: Locator;
    readonly viewCartButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.prodcutTile = page.locator("(//div[@class='carousel-item active']//img)[3]");
        this.addTOCart = page.locator("(//button[@title='Add to Cart'])[3]");
        this.viewCartButton = page.locator("//a[contains(.,'View Cart')]");
    }

    async selectProduct() {
        await this.prodcutTile.hover();
        await this.addTOCart.waitFor();
        await this.addTOCart.click();

    }

    async viewCart() {
        await this.viewCartButton.waitFor();
        await this.viewCartButton.click();

    }

}