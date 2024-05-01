//Matthew Lee
//CMP621A
//Started April 29th

console.log("Script Start")

//-------------------------------------------------Obtaining Variables--------------------------------------------//


var orderMethod = ""; //Different Obtainable Form Varibles
var size = "";
var sauces = "";
var cheese = "";

let myMethodForm = document.forms["delivery"];      //Finds the forn with the desired name and gives it 
myMethodForm.onchange = function(){order_method()}; //the "onchange" attribute to run the desired functions

let mySizeForm = document.forms["size"];
mySizeForm.onchange = function(){pizza_size()};

let mySauceForm = document.forms["sauceForm"];
mySauceForm.onchange = function(){pizza_sauce()};

let myCheeseForm = document.forms["cheeseForm"];
myCheeseForm.onchange = function(){cheese_YN()};

function pizza_size () {                            //Function used to run through all radio buttons for size
    console.log("\nsizefunction");
    var FindSize = document.getElementsByName('pizza_Size');
 
            for (i = 0; i < FindSize.length; i++) {
                if (FindSize[i].checked)
                        size= FindSize[i].value;    //Assigns the Size Variable the checked box value
            }
            console.log(size);
            drawCheckSize();
}

function order_method() {                           //Function used to run through all radio buttons for the order method
    console.log("\norderFunction");
    var FindMethod = document.getElementsByName('delivery_method');
 
            for (i = 0; i < FindMethod.length; i++) {
                if (FindMethod[i].checked)
                orderMethod= FindMethod[i].value;   //Assigns the orderMethod Variable the checked box value
            }
            console.log(orderMethod);
}

function  pizza_sauce () {                          //Function used to run through all radio buttons for the pizza sauce
    var FindSauce = document.getElementsByName('sauce');
    console.log("\nsaucefunction");
            for (i = 0; i < FindSauce.length; i++) {
                if (FindSauce[i].checked)
                        sauces= FindSauce[i].value; //Assigns the sauces Variable the checked box value
            }
            console.log(sauces); 
            drawCheckSize();  
        }

function cheese_YN () {                            //Function used to run through all radio buttons for size
    console.log("\ncheesefunction");
    var FindCheese = document.getElementsByName('cheese');
            for (i = 0; i < FindCheese.length; i++) {
                if (FindCheese[i].checked)
                        cheese= FindCheese[i].value;    //Assigns the Size Variable the checked box value
            }
            console.log(size);
            drawCheckSize();
}

//---------------------------------------------------------------------Canvas work-----------------------------------------------------------------------//

let canvas = document.getElementById("pizzaCanvas"); //Variables used to simplify the canvas drawing process
let c = canvas.getContext("2d");

let sauceColour = "#d98b25"; //No sauce hex colour

function drawCheckSize() {

    c.clearRect(0, 0, 600, 600); //Clears the canvas for redrawing the pizza


    switch (size) {                 //Here I used cases for The different radio buttons to start the drawing

        case 'small': 
            console.log('smallpizza');         
            c.beginPath();
            c.arc(300,300,150,0,Math.PI*2);
            c.strokeStyle = "#bf710a";
                drawSauce();                //determines the sauce on the pizza if there is sauce
                c.fillStyle = sauceColour;
            c.fill(); 
            c.lineWidth = 15;           //These apply the strokes
            c.stroke();                 //to draw the pizza
            
            if (cheese == "yes") {
                c.beginPath(); 
                c.arc(300,300,130,0,Math.PI*2);
                c.fillStyle = "#ffff64b3";
                c.fill();

            }

            drawSauce();
            break;



        case 'medium':
            console.log('mediumpizza');
            c.beginPath();
            c.arc(300,300,200,0,Math.PI*2);
            c.strokeStyle = "#bf710a";
                drawSauce();                //determines the sauce on the pizza if there is sauce
                c.fillStyle = sauceColour;
            c.fill();  
            c.lineWidth = 15;           //These apply the strokes
            c.stroke();                 //to draw the pizza

                if (cheese == "yes") {
                    c.beginPath(); 
                    c.arc(300,300,180,0,Math.PI*2);
                    c.fillStyle = "#ffff64b3";
                    c.fill();

                }

            drawSauce();
            break;



        case 'large':
            console.log('mediumpizza');
            c.beginPath();
            c.arc(300,300,250,0,Math.PI*2);
            c.strokeStyle = "#bf710a";
                drawSauce();                //determines the sauce on the pizza if there is sauce
                c.fillStyle = sauceColour;
            c.fill();               //These two apply the strokes
            c.lineWidth = 0;
            c.stroke();             //to draw the pizza

            if (cheese == "yes") {
                c.beginPath(); 
                c.arc(300,300,230,0,Math.PI*2);
                c.fillStyle = "#ffff64b3";
                c.fill();

            }

            drawSauce();
            break;



        default:
            alert("Please Choose A Size To See Your Pizza.")
            console.log(`Size not Selected`);
            break;
    }
}


function drawSauce() {

    switch (sauces) { //Switch statement to find the colour the sauce should be

        case 'regular':
            sauceColour="#9e0625";
            console.log("test")
            break;

        case 'donair':
            sauceColour="#fcdf97";
            break;

        
        case 'bbq':
            sauceColour="#4a130c";
            break;


        case 'ranch':
            sauceColour="#fff6e6";
            break;

        case 'none':
            sauceColour = "#d98b25";
            break;

        default:
            sauceColour = "#d98b25";
            console.log("\nNo sauce")
      }

}



function drawToppings() {

}
