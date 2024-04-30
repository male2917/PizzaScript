//Matthew Lee
//CMP621A
// April 29th

console.log("Script Start")

var orderMethod = "";
var size = "";
var sauces = "";


let myMethodForm = document.forms["delivery"];
myMethodForm.onchange = function(){order_method()};

let mySizeForm = document.forms["size"];
mySizeForm.onchange = function(){pizza_size()};

let mySauceForm = document.forms["sauceForm"];
mySauceForm.onchange = function(){pizza_sauce()};

function pizza_size () {
    console.log("\nsizefunction");
    var FindSize = document.getElementsByName('pizza_Size');
 
            for (i = 0; i < FindSize.length; i++) {
                if (FindSize[i].checked)
                        size= FindSize[i].value;
            }
            console.log(size);
}

function order_method() {
    console.log("\norderFunction");
    var FindMethod = document.getElementsByName('delivery_method');
 
            for (i = 0; i < FindMethod.length; i++) {
                if (FindMethod[i].checked)
                orderMethod= FindMethod[i].value;
            }
        console.log(orderMethod);
}

function  pizza_sauce () {
    var FindSauce = document.getElementsByName('sauce');
    console.log("\nsaucefunction");
            for (i = 0; i < FindSauce.length; i++) {
                if (FindSauce[i].checked)
                        sauces= FindSauce[i].value;
            }
            console.log(sauces);   
}

