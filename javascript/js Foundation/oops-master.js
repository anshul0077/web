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


class makecoffee{
    start(){
return ` Start the machine...`
    }
    bruhcoffee(){
return `brewing a coffee` 
    }
    pressStartButton(){
        let stmachine=this.start()
        let stbcoffee=this.bruhcoffee()
        return ` ${stmachine} + ${stbcoffee}`
    }
}
let ob1=new makecoffee()
// console.log(ob1.start());
// console.log(ob1.bruhcoffee());
console.log(ob1.pressStartButton());


// polymorphism

class sparrow {
fly(){
    return ` flying...`
}

}
class pengiun extends sparrow
{
    fly(){
        return ` can't flying`
    }
}
let birs=new sparrow()
let pengs=new pengiun()
console.log(birs.fly());

console.log(pengs.fly());




// static 

class claculator{
    static add(a,b){
        return a+b
    }

}  // static is called by the class it self  , here we can not create object to access the method
console.log(claculator.add(2,4));


