let car ={
    make:"toyota",
    model:"camry",
    year:2020,
    start:function(){
        return `${this.make} car is got started in ${this.year}`
    }
}
console.log(car.start());

function  Person (name,age,pp){
    this.name=name
    this.age=age
 
}
let p1data=new Person("Anshul",19)
let p2data=new Person("Shubham",19)

console.log(p1data);
console.log(p2data);


function Animal (name){
    this.name=name
}
Animal.prototype.Sound=function(){
    return `${this.name} make sound`
}

let dog= new Animal("Dog")
console.log(dog.Sound());

Object.prototype.Printname=function(){
    return 'HEllo'
}

console.log(dog.Printname());


// class

class vehical {
    constructor(name,age){
        this.name=name
        this.age=age
    }
    start(){
        return ` you name ${this.name} and your age is ${this.age}`
    }
}


class cars extends vehical {
      drive(){
        return `Welcome ${this.name}`
      }
}

let mycar = new cars("ANshul",20)
console.log(mycar.start());
 

//Encapsulation

class Bankaccount{
    #balance=0;
    deposit(amount){
         this.#balance+=amount
        return this.#balance
    }
    getbankaccount(){
        return `${this.#balance}`
    }
}
let b1=new Bankaccount()
b1.deposit(2000)
console.log(b1.getbankaccount());


//Abstraction

