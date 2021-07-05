// when a program is being exucuted synchronously, the thread will waiat untill the first statement is finished to jump to the second one. In asynchronous wxecution, even if the first execution is not done, the second one will continue

// first way of async code , async and await 

// async function fetchUser(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json()
//     console.log(data);
// }

// we can do the same thing in arrow fuction format

const fetchUser = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        console.log(data);
}
fetchUser()