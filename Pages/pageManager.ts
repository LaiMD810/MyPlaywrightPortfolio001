import {expect, Page} from '@playwright/test'
import { LoginPage } from './LoginPage/LoginPage'
import { ProductPage } from './ProductPage/ProductPage'
import { CartPage } from './CartPage/CartPage'
import { CheckoutCompletePage } from './Checkout_CompletePage/Checkout_CompletePage'
import { CheckoutInformationPage } from './Checkout_InformationPage/Checkout_InformationPage'
import { CheckoutOverviewPage } from './Checkout_OverviewPage/Checkout_OverviewPage'


export class PageManager{
    private readonly page: Page
    private readonly loginPage: LoginPage
    private readonly productPage: ProductPage
    private readonly cartPage: CartPage
    private readonly checkoutInformationPage: CheckoutInformationPage
    private readonly checkoutOverviewPage: CheckoutOverviewPage
    private readonly checkoutCompletePage: CheckoutCompletePage


    constructor(page:Page){
        this.page = page
        this.loginPage = new LoginPage(this.page)
        this.productPage = new ProductPage(this.page)
        this.cartPage = new CartPage(this.page)
        this.checkoutInformationPage = new CheckoutInformationPage(this.page)
        this.checkoutOverviewPage = new CheckoutOverviewPage(this.page)
        this.checkoutCompletePage = new CheckoutCompletePage(this.page)

    }

    onLogin(){
        return this.loginPage
    }

    onProduct(){
        return this.productPage
    }

    onCart(){
        return this.cartPage
    }

    onCheckoutInformation(){
        return this.checkoutInformationPage 
    }

    onCheckoutOverview(){
        return this.checkoutOverviewPage
    }

    onCheckoutComplete(){
        return this.checkoutCompletePage
    }




}