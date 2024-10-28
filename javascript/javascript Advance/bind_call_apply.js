let userDetails={
    name:"ANshul",
    age:19,
    Designation:"Full stack developer",

}


let userDetails2={
    name:"Abhi",
    age:19,
    Designation:"Full stack developer",

}
let printDetails=function(){
    console.log(`${this.name}`);
    
}
let pp=printDetails.bind(userDetails2)
pp()

printDetails.call(userDetails)

printDetails.apply(userDetails2)