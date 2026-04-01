import {expect, Page} from '@playwright/test'


export class ProductPage{
    private readonly page:Page
    constructor(page: Page){
        this.page = page
    }

    async selectProduct(productNames:string[]){
        await expect(this.page.locator('[data-test="title"]')).toHaveText("Products")
        
        const inventoryList = await this.page.locator(".inventory_item").all()
        for(const inventory of inventoryList){
            const inventoryName = await inventory.locator(".inventory_item_name ").textContent()
            if(inventoryName && productNames.includes(inventoryName)){
                await inventory.getByRole('button',{name:"Add to Cart"}).click()
            }
            
        }
        await this.page.locator("#shopping_cart_container").click()
      

    }
}