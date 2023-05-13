
let url="https://thunder.onrender.com/product";

let fetchData=async()=>{
    try {

        let res=await fetch(url);
        let data=await res.json();
        console.log(data);
        displayData(data);
    } catch (error) {
        console.log("Error");       
    }
}
fetchData();


function displayData(data){

    let container=document.getElementById("ProductDisplay");
    container.innerHTML=null;

    data.forEach(el=>{

        let div=document.createElement("div");
        

        let img=document.createElement("img");
        img.setAttribute("id","Product");
        img.src=el.image_url;

        let name=document.createElement("p");
        name.innerText=el.name;
        
        let price=document.createElement("p");
        price.innerText=el.price;

        let btn=document.createElement("button");
        btn.innerText="Add";
        btn.setAttribute("id","btn");
        btn.addEventListener("click",function(){
            addToCard(el);
        })

        div.append(img,name,price,btn);
        container.append(div);

    })
}

function addToCard(el){
    localStorage.setItem("basketItem",JSON.stringify(el));
    window.location.href="cardPage.html";
}

// sorting

let sortAsc=async()=>{
    let res=await fetch(`${url}?_sort=p&_order=asc`);
    res=await res.json();
    displayData(res);
}
document.getElementById("priceSort").addEventListener("change",sortAsc);




let sortDesc=async()=>{
    let res=await fetch(`${url}?_sort=p&_order=desc`);
    res=await res.json();
    displayData(res);
}
document.getElementById("priceSort").addEventListener("change",sortDesc);