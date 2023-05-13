let data = JSON.parse(localStorage.getItem("basketItem"));
display(data);

function display(data){


    
    let div = document.createElement("div");
    let div1=document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("id","img");
    img.src=data.image_url;

    let name = document.createElement("h2")
    name.innerText=data.name;

    let color=document.createElement("p");
    color.innerText=`Color: ${data.color}`;

    let s=document.createElement("p");
    s.innerHTML=`Size: ${data.size}`;



    let price=document.createElement("p");
    price.innerText=data.p;
    price.innerText=`Price: $ ${data.p}`;


    let btn=document.createElement("button");
    btn.setAttribute("id","button");
    btn.innerText="Checkout";
    btn.addEventListener("click",function(){
        addToCheckout(data);
    });



    div.append(name,img);
    div1.append(name,color,s,price);

    
    document.getElementById("ListCart").append(div);
    document.getElementById("details").append(div1);
    document.getElementById("button").append(btn);

}


document.querySelector("#coupon").textContent=`Applied Coupon Code: 50ANTHRO`
document.querySelector("#totl").textContent=`Total Amount: $ ${data.p}`
document.querySelector("#disc").textContent=`Discount Amount: $ 50`
document.querySelector("#GrandTotal").textContent=`Grand Total: $ ${data.p-50}`


let total=JSON.parse(localStorage.getItem("check")) || [];
function addToCheckout(data){
    total.push(data);
    localStorage.setItem("check",JSON.stringify(total));
    window.location.href="checkoutPage.html";
}