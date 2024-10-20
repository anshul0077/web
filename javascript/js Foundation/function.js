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
