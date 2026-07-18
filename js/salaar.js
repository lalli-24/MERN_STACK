const vegetables = ["carrot", "broccoli", "spinach", "cauliflower", "cabbage"];
//console.log(vegetables)

function something(m,callback){
    console.log(m+"something something");
    callback();
}

function character(){
    console.log("casting:jayamravi saritha");
}
//something("movie:",character)
let promise=new Promise((resolve,reject)=>{
    resolve("success")
});
promise.then(result=>console.log(result))

async function sum(params) {
    return 7+8;
}
//sum().then(result=>console.log(result))

let std={
    NAME:"lasya",
    AGE:20
};
let json=JSON.stringify(std);
console.log(json)