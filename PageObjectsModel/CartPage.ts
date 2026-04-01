import {expect, Page} from '@playwright/test'


export class CartPage{
    private readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async verifyCartItem(productList:string[]){
        await expect(this.page.locator('[data-test="title"]')).toHaveText("Your Cart")
        
        for (const product of productList) {
             await expect(this.page.locator(".inventory_item_name").filter({ hasText: product })).toBeVisible()
        }
        await this.page.getByRole('button',{name:"Checkout"}).click()

    }
}
