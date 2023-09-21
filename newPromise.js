// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         console.log("Hello my friend B")
//     }, 500)
// })

// console.log("Hello?");

// const myPromises = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         console.log("Hello my friend A")
//     }, 1500)
// })

let i = 0;
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(()=> {
           i += 40;
        }, 1)
    })

    const forFuture = new Promise((resolve, reject)=> {
        setTimeout(()=> {

            reject("Error ice cream")
        }, 2)
    })
console.log(i + "Nena")

   forFuture.then((resolvedVlue) => {
    console.log(resolvedVlue);
    return "NIgga"
   }).then((nigga) => {
        console.log(nigga)
   }).catch((error)=> {
    console.log(error)
   })