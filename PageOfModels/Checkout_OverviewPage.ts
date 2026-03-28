import {expect, Page} from '@playwright/test'


export class CheckoutOverviewPage{
    private readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async verifyCheckoutOverviewPage(productList:string[]){
        await expect(this.page.locator('[data-test="title"]')).toHaveText("Checkout: Overview")
        
         for (const product of productList) {
             await expect(this.page.locator(".inventory_item_name").filter({ hasText: product })).toBeVisible()
        }
        await this.page.getByRole('button',{name:"Finish"}).click()
        
    }
}
