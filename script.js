console.log("Happy coding")

fetch("https://dummyjson.com/products").then((response)=>response.json()).then((response)=>

{
    console.log(response.products)
    let myArr=response.products;
    let dp=document.getElementById("pr");
    myArr.map((product)=>

    dp.innerHTML +=`<div class="card" style="width: 18rem;">
    <img src="${product.images[0]}" class="card-img-top" alt="item">
    <div class="card-body" style="padding: 0.5rem 0.5rem;" >   
    <span style="display:flex ;justify-content:space-between;color:black"> 
    <p class="card-title" >${product.title}</p>
    <p class="card-text">Brand : ${product.brand}</p>
    </span>      
    </div>
    <div style="margin-left:10px;" >
      <p class="">$ ${product.price}</p>
      <p class="">Rating : ${product.rating}</p>
      <p class="">Stock : ${product.stock}</p>
    </div>
    
  </div><br/>`
  
    )
}



)