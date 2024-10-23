let car={
    tyers:"4",
    engine:"v8",
    type:"super car",
    rim:"Alloys",
}

let Bmw={
    model:"M4 coupe",
    horsePower:"100BHP",
    color:"Z-Black",
    Edition:"coupe",
    __proto__:car,
}

let Gtr={
model:"Nissan gtr",
horsePower:"120BHP",
color:"Silver",
Edition:"Skyline",
__proto__:car,
}

console.log(Bmw.__proto__);
let tt=Bmw.hasOwnProperty("tyers");
console.log(tt);



let cars={
type:"AI",
tyers:"no",
}
let hypercar={
    edtion:"flying car",

}
Object.setPrototypeOf(hypercar,cars)

console.log(Object.getPrototypeOf(hypercar));
