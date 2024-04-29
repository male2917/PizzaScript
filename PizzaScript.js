//Matthew Lee
//CMP621A
// April 29th


var orderMethod
var size = 0
var cheese = false


let myMethodForm = document.forms["formMethod"];
mySizeForm.onchange = function(){order_method()};

let mySizeForm = document.forms["formSize"];
mySizeForm.onchange = function(){pizza_size()};


let mySauceForm = document.forms["formSauce"];
mySizeForm.onchange = function(){pizza_sauce()};

function pizza_size () {
    var FindSize = document.getElementsByName('radioSize');
 
            for (i = 0; i < FindSize.length; i++) {
                if (FindSize[i].checked)
                        size= FindSize[i].value;
            }
}

function order_method() {
    var FindMethod = document.getElementsByName('radioMethod');
 
            for (i = 0; i < FindMethod.length; i++) {
                if (FindSize[i].checked)
                        size= FindSize[i].value;
            }
}

function  pizza_sauce () {
    var FindSauce = document.getElementsByName('radioBlank');
 
            for (i = 0; i < FindSauce.length; i++) {
                if (FindSauce[i].checked)
                        size= FindSauce[i].value;
            }       
}
