console.log("Program Started")

const newPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Step 1 Complete");
    }, 3000)
})

console.log(newPromise)
console.log("Program in progress...")

newPromise.then((success) => {
    console.log(success);

    // return "Step 2 Complete"

    return new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log("Step 2 Complete")
        },3000)
    })
  
}).then((success) => {
    // setTimeout(() => {
    //     console.log(success)
    // }, 3000)

    console.log(success)
})

