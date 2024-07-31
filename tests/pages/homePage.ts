import { Locator, Page } from "playwright";

export default class HomePage{
    //top nav element
    readonly home: Locator;
    readonly specialHot: Locator;
    readonly blog: Locator;
    readonly megaMenu: Locator;
    readonly addOns: Locator;
    readonly myAccount: Locator;
    readonly shopNow: Locator;



    constructor(page:Page){
        this.home = page.locator("//span[text()[normalize-space()='Home']]");
        this.shopNow = page.locator("//div[@data-id='213244']");
        //div[@data-id='213244']

    }
    async clickHome(){
        await this.home.click();
        
    }
    async clickshopNow(){
        await this.shopNow.click();
        
    }



}