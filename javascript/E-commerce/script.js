
  const product=[
    {id:1,ProductName:"Product 1",Prize:59.99},
    {id:2,ProductName:"Product 2",Prize:29.99},
    {id:3,ProductName:"Product 3",Prize:39.99},

  ]
  let productList=document.querySelector("#product-list")
let cartItems=document.querySelector("#cart-items")
let emptyCart=document.querySelector("#empty-cart")
let CartTOtal=document.querySelector("#cart-total")
let totalPrize=document.querySelector("#total-price")
let checkButton=document.querySelector("#checkout-btn")
  let cart=[] 
   


loadProduct()
  function loadProduct(){
product.forEach((e)=>{
      const productdiv=document.createElement('div')
      productdiv.classList.add("product")
      productdiv.innerHTML=`
      <span>${e.ProductName}-$${e.Prize.toFixed(2)}</span>
      <button data-id=${e.id} >Add to cart</button>
      `
      productList.appendChild(productdiv)
})

  }
  addToCart()
  function addToCart(){
    productList.addEventListener('click',(e)=>{
       if(  e.target.tagName==="BUTTON"){
       const prodId=  parseInt( e.target.getAttribute("data-id"))
         const prod= product.find(p=> p.id === prodId)
         
         loadCart(prod)
       }
    })
  }

  function loadCart(prodDets){
    localStorage.setItem("products",JSON.stringify(prodDets))
              cart.push(prodDets)
       console.log(cart);
   displayCart() 
   
  }
   
  let total=0
  function displayCart(){
    cart.forEach((e)=>{
      const cartDiv=document.createElement('div')
      total+=e.Prize
      cartDiv.innerHTML=`
      <span>${e.ProductName}-$${e.Prize } <button style='margin-left:40px; background-color:red ;border-radius:5px;padding:5px;border:none;color:white' data-id=${e.id} >Remove</button> </span>
      `
      totalPrize.textContent=total.toFixed(2)
      if(cart.length>0){
      emptyCart.classList.add("hidden")
      CartTOtal.classList.remove("hidden")

    }
    cartItems.appendChild(cartDiv)
    
   })
    
  }
  checkButton.addEventListener("click",()=>{
    
    alert("Checkout Sucessfully")
    cartItems.innerHTML=''
    totalPrize.innerHTML='0.00'
      
    
  })
 
 
  removeItems()
  function removeItems(){
    cartItems.addEventListener('click',(e)=>{
      if (e.target.tagName==="BUTTON"){
           const removeId= parseInt(  e.target.getAttribute("data-id"))
         const  getRemoveItem = cart.find(items => items.id===removeId)
         e.target.parentElement.remove()
  
       
         let maindecvalue= parseInt( getRemoveItem.Prize.toFixed(2))
         
              total-=maindecvalue
   
      console.log(total);
      console.log(maindecvalue);
  
     
      
    }
    totalPrize.innerHTML=total.toFixed(2)
    })
  }
  
