function payment(pay){
    return new Promise((resolve,reject)=>{
        if (pay) {
            resolve("Task Completed")
        } else {
            reject("Task Failed")
        }
    })
}
payment(true).then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
    
})