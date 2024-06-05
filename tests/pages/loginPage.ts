import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export default class LoginPage{

        readonly userName : Locator;
        readonly password : Locator;
        readonly loginButton: Locator;
        readonly page: Page;

    constructor(page:Page){
        this.page = page;
        this.userName = page.locator("#input-email");
        this.password = page.locator("#input-password");
        this.loginButton = page.locator("//input[@type='submit']");
    }

    async doLogin(email:string, password: string){
       await this.userName.fill(email);
       await this.password.fill(password);
       await this.loginButton.click();

    }

    async verifyLogin(){
       await expect(this.page).toHaveURL(/.*account/);
    }
}