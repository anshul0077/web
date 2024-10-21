function maketea(typroftea){
return `making ${typroftea}`
}
let teaorder=maketea("green tea")
console.log(teaorder);

//2
function orderdtea(teatype){
    function confirmOrder(){
        return "Order confirmed  for chai"
    }
    return confirmOrder()
}
console.log(orderdtea("Green tea"));
//3
const calculateTotal=(prize,quantity)=>{
    let totalCost=prize*quantity
      return totalCost
}
console.log(calculateTotal(10,20));

// higher order function
function makeTea(typeoftea){
return `maketea:${typeoftea}`
}
function processTeaOrder(Tea){
return Tea('earl gray')
}
let order=processTeaOrder(makeTea)
console.log(order);

function createTeaMaker(){
    return function tt (teaType){
        return `making ${teaType}`

    }
}
let teaMaker=createTeaMaker()
console.log(teaMaker("Green tea"));
