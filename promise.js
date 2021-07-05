const loadImage = new Promise((resolved, reject)=>{
    resolved('image is loaded')
})
const loadUser = new Promise((resolved, reject)=>{
    resolved('user is  loaded')
})
const loadComment = new Promise((resolved, reject)=>{
    resolved('comment is loaded')
})

Promise.all([loadImage,loadUser,loadComment])
.then(msg=>console.log(msg))
.catch(err=>console.log(err))