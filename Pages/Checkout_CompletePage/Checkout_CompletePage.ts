import {expect, Page} from '@playwright/test'
import { Checkout_CompletePage_Locator } from './Checkout_CompletePage_Locator'


export class CheckoutCompletePage{
    private readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async verifyCompletedMesssage(){
        await expect(this.page.locator(Checkout_CompletePage_Locator.title)).toHaveText(Checkout_CompletePage_Locator.titleText)
        await expect(this.page.locator(Checkout_CompletePage_Locator.headerMessage)).toHaveText(Checkout_CompletePage_Locator.headerMessageText)
        await expect(this.page.locator(Checkout_CompletePage_Locator.BodyMessage)).toHaveText(Checkout_CompletePage_Locator.BodyMessageText)
    }
        
}
