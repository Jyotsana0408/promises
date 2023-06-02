const user = {
    name:"Praphul",
    lastActivityTime: null
};
const posts = []
function updateLastUserActivityTime() {
    return new Promise( (resolve, reject) => {
       user.lastActivityTime = new Date().toString()
            resolve();
        })
}
function createPost(){ 
     new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'NEW POST'});
            updateLastUserActivityTime(user)
            resolve()
        }, 1000)
    }) 
}
function deletePost(){ 
 new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(posts.length>=1){
            posts.pop()
        }else{
            reject("ERROR")
        }
    },1000);
 })
}
promises = [createPost,deletePost]
// Promise.all([promises])
Promise.all(promises.map(fn => fn())).then(result=>{
    deletePost();
})