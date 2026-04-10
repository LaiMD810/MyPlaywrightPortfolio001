import { test as base, expect, Page } from '@playwright/test';
import { PageManager } from '../../Pages/pageManager'

type MyFixtures = {
    pm: PageManager;
    negativeLogin: PageManager, 
}

export const test = base.extend<MyFixtures>({
    pm: async({page},use)=>{
        const pm = new PageManager(page)
        await page.goto('/')
        await pm.onLogin().testLogin("standard_user","secret_sauce")

        // Important: ensure login success
        await page.waitForURL('**/inventory.html'); 
        await use(pm);
    },

});

export { expect };