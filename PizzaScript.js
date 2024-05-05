//Matthew Lee
//CMP621A
//Started April 29th

console.log("Script Start")

//-------------------------------------------------Obtaining Variables--------------------------------------------//


var orderMethod = ""; //Different Obtainable Form Varibles
var size = "";
var sauces = "";
var cheese = "";

var pepperoni = 'no'; //True or False for Toppings
var ham = 'no';
var bacon = 'no';
var pineapple = 'no';
var donairMeat = 'no';

let myMethodForm = document.forms["delivery"];      //Finds the forn with the desired name and gives it 
myMethodForm.onchange = function(){order_method()}; //the "onchange" attribute to run the desired functions

let mySizeForm = document.forms["size"];
mySizeForm.onchange = function(){pizza_size()};

let mySauceForm = document.forms["sauceForm"];
mySauceForm.onchange = function(){pizza_sauce()};

let myCheeseForm = document.forms["cheeseForm"];
myCheeseForm.onchange = function(){cheese_YN()};

let myIngrediantForm = document.forms["Ingredients"];
myIngrediantForm.onchange = function(){ingredients()};


function pizza_size () {                            //Function used to run through all radio buttons for size
    console.log("\nsize function");
    var FindSize = document.getElementsByName('pizza_Size');
 
            for (i = 0; i < FindSize.length; i++) {
                if (FindSize[i].checked)
                        size= FindSize[i].value;    //Assigns the Size Variable the checked box value
            }
            console.log(size);
            drawCheckSize();
}

function order_method() {                           //Function used to run through all radio buttons for the order method
    console.log("\norder Function");
    var FindMethod = document.getElementsByName('delivery_method');
 
            for (i = 0; i < FindMethod.length; i++) {
                if (FindMethod[i].checked)
                orderMethod= FindMethod[i].value;   //Assigns the orderMethod Variable the checked box value
            }
            console.log(orderMethod);
}

function  pizza_sauce () {                          //Function used to run through all radio buttons for the pizza sauce
    var FindSauce = document.getElementsByName('sauce');
    console.log("\nsauce function");
            for (i = 0; i < FindSauce.length; i++) {
                if (FindSauce[i].checked)
                        sauces= FindSauce[i].value; //Assigns the sauces Variable the checked box value
            }
            console.log(sauces); 
            drawCheckSize();  
        }

function cheese_YN () {                            //Function used to run through all radio buttons for size
    console.log("\ncheese function");
    var FindCheese = document.getElementsByName('cheese');
            for (i = 0; i < FindCheese.length; i++) {
                if (FindCheese[i].checked)
                        cheese= FindCheese[i].value;    //Assigns the Size Variable the checked box value
            }
            console.log(size);
            drawCheckSize();
}

function ingredients() {
    console.log("\ningrediant function");
    var FindToppings = document.getElementsByName('toppings');
    //console.log(FindToppings);                                    //used to find order of toppings in the list

            if (FindToppings[0].checked){   //Pepperoni
                pepperoni = 'yes';
            }
            else {
                pepperoni = 'no';
            }

            if (FindToppings[1].checked){   //Ham
                ham = 'yes';
            }
            else {
                ham = 'no';
            }

            if (FindToppings[2].checked){   //Bacon
                bacon = 'yes';
            }
            else {
                bacon = 'no';
            }

            if (FindToppings[3].checked){   //Pineapple
                pineapple = 'yes';
            }
            else {
                pineapple = 'no';
            }

            if (FindToppings[4].checked){   //donairMeat
                donairMeat = 'yes';
            }
            else {
                donairMeat = 'no';
            }
            
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

            drawToppings()

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
            
                drawToppings()

            break;



        case 'large':
            console.log('mediumpizza');
            c.beginPath();
            c.arc(300,300,250,0,Math.PI*2);
            c.strokeStyle = "#bf710a";
                drawSauce();                //determines the sauce on the pizza if there is sauce
                c.fillStyle = sauceColour;
            c.fill();               //These two apply the strokes
            c.lineWidth = 15;
            c.stroke();             //to draw the pizza

            if (cheese == "yes") {
                c.beginPath(); 
                c.arc(300,300,230,0,Math.PI*2);
                c.fillStyle = "#ffff64b3";
                c.fill();

            }

            drawToppings()

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

function drawToppings() {           // Start with a small and add larger sizes

    if (pepperoni == 'yes'){
        console.log("pepperoni")
        c.beginPath();
            c.arc(345,345,15,0,Math.PI*2);
            c.moveTo(270,255);
            c.arc(255,255,15,0,Math.PI*2);
            c.moveTo(360,255);
            c.arc(345,255,15,0,Math.PI*2);
            c.moveTo(270,345);
            c.arc(255,345,15,0,Math.PI*2);

            c.moveTo(315,400);
            c.arc(300,400,15,0,Math.PI*2);
            c.moveTo(315,200);
            c.arc(300,200,15,0,Math.PI*2);
            c.moveTo(415,300);
            c.arc(400,300,15,0,Math.PI*2);
            c.moveTo(215,300);
            c.arc(200,300,15,0,Math.PI*2);
            c.strokeStyle = "#8a4529";
            c.fillStyle = "#ba4234"
            c.lineWidth = 2;    
            c.fill();
            c.stroke();
            if (size !="small"){        //for medium and large
                c.beginPath();
                    c.arc(400,400,15,0,Math.PI*2);
                    c.moveTo(215,400);
                    c.arc(200,400,15,0,Math.PI*2);
                    c.moveTo(215,200);
                    c.arc(200,200,15,0,Math.PI*2);
                    c.moveTo(415,200);
                    c.arc(400,200,15,0,Math.PI*2);
                    
                    c.strokeStyle = "#8a4529";
                    c.fillStyle = "#ba4234"
                    c.lineWidth = 2;    
                    c.fill();
                    c.stroke();
                    
                    if (size !="medium"){   //for large
                        c.beginPath();

                            c.arc(345,460,15,0,Math.PI*2);
                            c.moveTo(270,460);
                            c.arc(255,460,15,0,Math.PI*2);
                            c.moveTo(360,140);
                            c.arc(345,140,15,0,Math.PI*2);
                            c.moveTo(270,140);
                            c.arc(255,140,15,0,Math.PI*2);

                            c.moveTo(475,345);
                            c.arc(460,345,15,0,Math.PI*2);
                            c.moveTo(475,255);
                            c.arc(460,255,15,0,Math.PI*2);
                            c.moveTo(155,345);
                            c.arc(140,345,15,0,Math.PI*2);
                            c.moveTo(155,255);
                            c.arc(140,255,15,0,Math.PI*2);
                            
                            c.strokeStyle = "#8a4529";
                            c.fillStyle = "#ba4234"
                            c.lineWidth = 2;    
                            c.fill();
                            c.stroke();
                    }
                }

            }

    if (ham == 'yes'){
        c.beginPath();
            c.moveTo(360,360);
            c.arc(360,360,30,Math.PI*1/4,Math.PI*0.5);
            c.lineTo(360,360);
            c.closePath();

            c.moveTo(240,240);
            c.arc(240,240,30,Math.PI*5/4,Math.PI*1.5);
            c.lineTo(240,240);
            c.closePath();

            c.moveTo(240,360);
            c.arc(240,360,30,Math.PI*3/4,Math.PI*1);
            c.lineTo(240,360);
            c.closePath();

            c.moveTo(360,240);
            c.arc(360,240,30,Math.PI*7/4,Math.PI*2);
            c.lineTo(360,240);
            c.closePath();

            c.strokeStyle = "#ed5180";
            c.fillStyle = "#ff82a8  "
            c.lineWidth = 2;    
            c.fill();
            c.stroke();
            if (size == "large") {

                c.beginPath();
                    c.moveTo(300,480);
                    c.arc(300,480,30,Math.PI*1/4,Math.PI*0.5);
                    c.lineTo(300,480);
                    c.closePath();

                    c.moveTo(300,120);
                    c.arc(300,120,30,Math.PI*5/4,Math.PI*1.5);
                    c.lineTo(300,120);
                    c.closePath();

                    c.moveTo(120,300);
                    c.arc(120,300,30,Math.PI*3/4,Math.PI*1);
                    c.lineTo(120,300);
                    c.closePath();

                    c.moveTo(480,300);
                    c.arc(480,300,30,Math.PI*7/4,Math.PI*2);
                    c.lineTo(480,300);
                    c.closePath();

                    c.strokeStyle = "#ed5180";
                    c.fillStyle = "#ff82a8  "
                    c.lineWidth = 2;    
                    c.fill();
                    c.stroke();

            }

    }
    if (bacon == 'yes'){

    }
    if (pineapple == 'yes'){

        c.beginPath();
                c.moveTo(300,330);
                c.arc(300,330,30,Math.PI*1/4,Math.PI*0.5);
                c.lineTo(300,330);
                c.closePath();

                c.moveTo(300,270);
                c.arc(300,270,30,Math.PI*5/4,Math.PI*1.5);
                c.lineTo(300,270);
                c.closePath();

                c.moveTo(270,300);
                c.arc(270,300,30,Math.PI*3/4,Math.PI*1);
                c.lineTo(270,300);
                c.closePath();

                c.moveTo(330,300);
                c.arc(330,300,30,Math.PI*7/4,Math.PI*2);
                c.lineTo(330,300);
                c.closePath();

                c.strokeStyle = "#ffd900";
                c.fillStyle = "#ffd800"
                c.lineWidth = 2;    
                c.fill();
                c.stroke();

                if (size !="small"){
                    c.beginPath();
                        c.moveTo(300,420);
                        c.arc(300,420,30,Math.PI*1/4,Math.PI*0.5);
                        c.lineTo(300,420);
                        c.closePath();

                        c.moveTo(300,180);
                        c.arc(300,180,30,Math.PI*5/4,Math.PI*1.5);
                        c.lineTo(300,180);
                        c.closePath();

                        c.moveTo(180,300);
                        c.arc(180,300,30,Math.PI*3/4,Math.PI*1);
                        c.lineTo(180,300);
                        c.closePath();

                        c.moveTo(420,300);
                        c.arc(420,300,30,Math.PI*7/4,Math.PI*2);
                        c.lineTo(420,300);
                        c.closePath();

                        c.strokeStyle = "#ffd900";
                        c.fillStyle = "#ffd800"
                        c.lineWidth = 2;    
                        c.fill();
                        c.stroke();

                    if (size != "medium") {

                        c.beginPath();
                            c.moveTo(430,430);
                            c.arc(430,430,30,Math.PI*1/4,Math.PI*0.5);
                            c.lineTo(430,430);
                            c.closePath();

                            c.moveTo(170,170);
                            c.arc(170,170,30,Math.PI*5/4,Math.PI*1.5);
                            c.lineTo(170,170);
                            c.closePath();

                            c.moveTo(170,430);
                            c.arc(170,430,30,Math.PI*3/4,Math.PI*1);
                            c.lineTo(170,430);
                            c.closePath();

                            c.moveTo(430,170);
                            c.arc(430,170,30,Math.PI*7/4,Math.PI*2);
                            c.lineTo(430,170);
                            c.closePath();

                            c.strokeStyle = "#ffd900";
                            c.fillStyle = "#ffd800"
                            c.lineWidth = 2;    
                            c.fill();
                            c.stroke();

            }

        }

    }
    if (donairMeat == 'yes'){

    }
}
