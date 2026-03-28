import {expect, Page} from '@playwright/test'


export class CheckoutCompletePage{
    private readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async verifyCompletedMesssage(){
        await expect(this.page.locator('[data-test="title"]')).toHaveText("Checkout: Complete!")
        await expect(this.page.locator('[data-test="complete-header"]')).toHaveText("Thank you for your order!")
        await expect(this.page.locator('[data-test="complete-text"]')).toHaveText("Your order has been dispatched, and will arrive just as fast as the pony can get there!")
    }
        
}
