import {test as baseTest} from "@playwright/test";
import LoginPage from "../tests/pages/loginPage";
import HomePage from "../tests/pages/homePage";
import ProductPage from "../tests/pages/productPage";
import ShoppingCartPage from "../tests/pages/shoppingCartPage";
import CheckoutPage from "../tests/pages/checkoutPage";

type pages={
    loginPage:LoginPage;
    homePage:HomePage;
    productPage:ProductPage;
    shoppingCartPage:ShoppingCartPage
    checkOutPage:CheckoutPage
}


 const testPages= baseTest.extend<pages>({
    loginPage: async({page},use)=>{
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    homePage: async({page}, use)=>{
        use(new HomePage(page));
    },

    productPage: async({page}, use)=>{
        use(new ProductPage(page));

    },

    shoppingCartPage: async({page},use)=>{
        use(new ShoppingCartPage(page));
    },

    checkOutPage: async({page},use)=>{
        use(new CheckoutPage(page));
    }

 })

 export {expect} from "@playwright/test";
 export const test = testPages;
