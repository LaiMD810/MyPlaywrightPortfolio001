import {test,expect} from '@playwright/test'
import { PageManager } from '../PageOfModels/pageManager'



test.beforeEach(async({page})=>{
     await page.goto('https://www.saucedemo.com/')
     
})

test.describe("Main  Test", ()=>{
    test('Product Selection - E2E Flow',async ({page})=>{
    
    const pm = new PageManager(page)

    //Variable contain the products to be selected
    const products = ["Sauce Labs Bolt T-Shirt","Sauce Labs Bike Light"]

    //Login page
    await pm.onLogin().testLogin("standard_user","secret_sauce")

    //Product  page
    await pm.onProduct().selectProduct(products)
    

    //Cart Page  
    await pm.onCart().verifyCartItem(products)

    //Checkout Your Information Page
    await pm.onCheckoutInformation().enterYourInformation("first","Last","10001")

    //Check Overview page
    await pm.onCheckoutOverview().verifyCheckoutOverviewPage(products)
    
    //Check Complete Page
    await pm.onCheckoutComplete().verifyCompletedMesssage()

    })
})
