//promise
function proBaseEg() {
    let prom = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("This is a base Eg for resolve");
            reject("This is a base Eg for reject");
        },1000);
    });
    console.log(
        prom.then((val) => {
            console.log(val);
        }).catch (val =>{
            console.log(val);
        })
    );
}
proBaseEg("reject");