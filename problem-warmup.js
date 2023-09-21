console.log("Program Started");

const afterSeconds = new Promise((resolve, reject) => {

    setTimeout (() => {
        console.log("Program in Progress")
    }, 1000)
    setTimeout(() => {
        resolve("Program Complete")
    },3000)
}).then((success)=> {
    console.log(success);
})

console.log(afterSeconds)