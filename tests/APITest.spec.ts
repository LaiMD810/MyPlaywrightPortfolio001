import { test, expect } from "@playwright/test";


test.describe("API TESTING", ()=>{

    test("Simple API - GET",async({request})=>{
        //  Get API -  Read
        const responseGet = await request.get("https://jsonplaceholder.typicode.com/posts/3")
        expect(responseGet.status()).toBe(200)
        const getBody = await responseGet.json()
        //To Verify the get API,  return correct fields
        expect(getBody).toMatchObject({
                userId: 1,
                id: 3,
                title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
                body: 'et iusto sed quo iure\n' +
                    'voluptatem occaecati omnis eligendi aut ad\n' +
                    'voluptatem doloribus vel accusantium quis pariatur\n' +
                    'molestiae porro eius odio et labore et velit aut'
        })
    })

    test("Simple API - POST",async({request})=>{
        // Create API - POST
        const responsePost = await request.post("https://jsonplaceholder.typicode.com/posts/",{
            data:{
                    userId: 12,
                    title: 'POST API TESTING 123 2ndddd',
                    body: 'Dummy Creattion Body API POST'
            },
        })
        expect(responsePost.status()).toBe(201); 
        //To Verify the after create, able to return the correct fields
        const postBody = await responsePost.json()
        expect(postBody).toMatchObject({
            userId: 12,
            title: 'POST API TESTING 123 2ndddd',
            body: 'Dummy Creattion Body API POST'
        })
        //To Verify the after create, that is new id create.
        expect(postBody.id).toEqual(101)

    })


    test("Simple API - Update/Put",async({request})=>{
        //Update API field - PUT
        const originalResponse = await request.get('https://jsonplaceholder.typicode.com/posts/1')
        const originalBody = await originalResponse.json()

        const responseUpdate = await request.put('https://jsonplaceholder.typicode.com/posts/1',{
            data:{
                    userId: originalBody.userId,
                    title: originalBody.title,
                    body: 'Dummy Update PUT' 
            },
        })
        expect(responseUpdate.status()).toBe(200);
        const updatedBody = await responseUpdate.json()

        //To verify after update, this API return the object with changed and unchanged fields
        expect(updatedBody).toMatchObject({
            userId: originalBody.userId,
            title: originalBody.title,
            body: 'Dummy Update PUT' 
        })

    })


    test("Simple API - Delete",async({request})=>{
        //Delete API
        const responseDelete = await request.delete(`https://jsonplaceholder.typicode.com/posts/1`)
        const deleteBody = await responseDelete.json()
        //To verify after delete, this API return empty
        expect(deleteBody).toEqual({}) 

    })


})



