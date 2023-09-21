console.log("Program Started")

let value = {};
const newPromise = new Promise((resolve, rejeect) => {
    setTimeout(() => {
        value = {data: "Hello, Friend!", error:null}
        resolve(value)
    }, 5000)
})

console.log(newPromise);
console.log("Program  in progress...")

newPromise.then((success) => {
    console.log(success)

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve("First promise chain complete")
        }, 2000)
    })
})
.then((success) => {
    console.log(success);

    console.log(value);

    return new Promise ((resolve, reject) => {
        setTimeout(()=> {
            resolve("Second Promise Chain Complete")
        }, 10000)
    })
}).then((success)=> {
    console.log(success);
})  