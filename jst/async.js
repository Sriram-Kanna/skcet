//Async
async function a(){
    await b();
    setTimeout(()=>{
    console.log('add ABC');
    },2000); 
}
async function b(){
    await c();
   setTimeout(() => {
    console.log("add BCD");
   }, 1000);
}
async function c(){
    setTimeout(()=>{
        console.log('add CDE');
    },1000);
}
a();