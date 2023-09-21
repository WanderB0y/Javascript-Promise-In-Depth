console.log("Program Started");

const discern = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Program Complete")
    }, 2000)
    setTimeout(() => {
        reject("Program Failure")
    }, 3000)
})


discern.then((success) => {
    console.log(success);
}).catch((failure)=> {
    console.log(failure)
    return "Program Complete"
}).then((success) => {
    setTimeout(()=>{
        console.log(success)
    }, 1000)
})