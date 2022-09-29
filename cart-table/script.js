// // function cal(){
// //     let priceelement=document.getElementById('price');
// //     let quantityelement=document.getElementById('quantity');
// //     let totalelement=document.getElementById('amount');

// //     let price=priceelement.innerText,
// //     quantity=quantityelement.value;
    
// //      total=(price*quantity);
// //      totalelement.innerText=total;
// // }

// // let triggerelement=document.getElementById('trigger');
// // triggerelement.addEventListener('click',cal);



// // function items(){
// //     let priceelement=document.getElementById("price").innerText;
// //     let quantityelement=document.getElementById("quantity").value;
    
// //     army=(priceelement*quantityelement);
// //     let totalelement=documnet.getElementById("amount").innerHtml=army;

// // }
// function calculation(){
//     let price,quan,amount,
//     rowelement=this.parentNode.parentNode,
//     priceelement=rowelement.getElementsByClassName("price")[0],
    
//     quantityelement=rowelement.getElementsByClassName("quan")[0],
//     amountelement=rowelement.getElementsByClassName("amount")[0];

//  price=priceelement.innerText;
//  quan=quantityelement.value;
//  price=parseInt(price);
//  console.log(priceelement);

//  amount=price*quan;
//  amountelement.innerHTML=amount;

// }
// let triggerelement=document.getElementsByClassName('trigger');
// console.log(triggerelement);

// for(i=0;i<triggerelement.length;i++){
//     triggerelement[i].addEventListener("click", calculation);
// }





let object=[

     {
    name:"jenifer",
    department:"mechanical"
    },

    {
      name:"maniraj",
        department:"Electrical"
    },
    {
      laptop:"lenovo",
      amount:"2000"
    }

]
object.forEach( element=>{
    for(let Key in element ){
             console.log(Key+":"+element[Key]);
         }
}
);

// for(let Key in object ){
//     console.log(Key+":"+object[Key]);
// }

// for(i=0;i<object.length;i++){
//     let s=object[i];
//     console.log(s);
// }

















