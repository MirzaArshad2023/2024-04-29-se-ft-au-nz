async function NewPromiseAsynchronously()
{
    try{
        const promise1 = new Promise((resolve, reject)=>{
            let x = 20
            let result = Math.floor(Math.random() * x)
            if(result % 2 == 0)
                resolve('Even')
            else
                reject('Odd')
        })
        let result = await promise1
        console.log(result)
     
    }
    catch(Error)
    {
        console.log("Error:" + Error)
    }
    finally
    {
        console.log("Somethign")
        console.log("Somethign more")
        console.log("Additional things")
    }
    
}
NewPromiseAsynchronously()