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
        }, -1)
    })

    const forFuture = new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log(i)
        }, 2)
    })
console.log(i + "Nena")
