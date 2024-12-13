var die1 = 0;
var die2 = 0;
var die3 = 0;
var die4 = 0;
var die5 = 0;
var die6 = 0;
var die7 = 0;
var die8 = 0;
var die9 = 0;
var die10 = 0;
var dietotal1;
var dietotal2;
var dietotal3;
var dietotal4;
var dietotal5;
var dietotal6;
var dietotal7;
var dietotal8;
var dietotal9;
var dietotal10;
var dice = 6;    
var gameMode = "Highest Number Wins";
var P1Rolled = false;
var P2Rolled = false;
var menuIsOpen = false;
var thingyPosiMod = 5;
var ticTacTurn = 1;
var opener = false;
var xColor = "red";
var oColor = "blue";

function allRole(player){
    if(player == 2){
        P2Rolled = true;
        for(var i = 6; i < 11; i++){
            setDie(i);
        }
    }else{
        P1Rolled = true;
        for(var i = 1; i < 6; i++){
            setDie(i);
        }
    }

}

function setDie(die){
    var element = document.getElementById(die);
    var value = dieRoll(dice);
    element.innerHTML = value;
    if(die == 1){
        die1=value;
    }else if(die == 2){
        die2=value;
    }else if(die == 3){
        die3=value;
    }else if(die == 4){
        die4=value;
    }else if(die == 5){
        die5=value;
    }else if(die == 6){
        die6=value;
    }else if(die == 7){
        die7=value;
    }else if(die == 8){
        die8=value;
    }else if(die == 9){
        die9=value;
    }else if(die == 10){
        die10=value;
    }
    winner();
}

function dieRoll(){
    var output = Math.floor(Math.random()*(dice))+1;
    return(output);
}
function setDieAmount(){
    dice = prompt("What kind of dice do you want to use? (enter a #) Ex: 6 = 6 sided, 12 = 12 sided");
}

function winner(){
    if(gameMode == "ticTacToe"){
        var boxes = document.getElementsByClassName("tic-toe");
        console.log(boxes);
        var box1 = document.getElementById("box1").innerHTML;
        var box2 = document.getElementById("box2").innerHTML;
        var box3 = document.getElementById("box3").innerHTML;
        var box4 = document.getElementById("box4").innerHTML;
        var box5 = document.getElementById("box5").innerHTML;
        var box6 = document.getElementById("box6").innerHTML;
        var box7 = document.getElementById("box7").innerHTML;
        var box8 = document.getElementById("box8").innerHTML;
        var box9 = document.getElementById("box9").innerHTML;
        if((box1 + box2 + box3 == "xxx")||(box1 + box5 + box9 == "xxx")||(box3 + box5 + box7 == "xxx")||(box4+box5+box6 == "xxx")||(box7+box8+box9 == "xxx")||(box2+box5+box8=="xxx")||(box1+box4+box7=="xxx")||(box3+box6+box9=="xxx")){
            var elementWin = document.getElementById("wins");
            var elementTitle = document.getElementById("title");
            var elebackground = document.getElementById("back");
            var i = 0;
            while(i < 9){
                boxes[i].setAttribute("style", "background-color:" + xColor);
                i++;
            }
            elementWin.setAttribute("class", "toe");
            elementWin.innerHTML = "Player 1 Wins!";
            elementTitle.setAttribute("class", "tac");
            elebackground.setAttribute("style", "background-color:" + xColor);
            var i = 0;
            while(i < 9){
                boxes[i].setAttribute("style", "background-color:" + xColor);
                i++;
            }
        }else if((box1 + box2 + box3 == "ooo")||(box1 + box5 + box9 == "ooo")||(box3 + box5 + box7 == "ooo")||(box4+box5+box6 == "ooo")||(box7+box8+box9 == "ooo")||(box2+box5+box8=="ooo")||(box1+box4+box7=="ooo")||(box3+box6+box9=="ooo")){
            var elementWin = document.getElementById("wins");
            var elementTitle = document.getElementById("title");
            var elebackground = document.getElementById("back");
            elementWin.setAttribute("class", "tac");
            elementWin.innerHTML = "Player 2 Wins!";
            elementTitle.setAttribute("class", "toe");
            elebackground.setAttribute("style", "background-color:"+ oColor);
        }

    }else{
        var p1Total = die1 + die2 + die3 + die4 + die5;
        var p2Total = die6 + die7 + die8 + die9 + die10;
        console.log("Total P1: "+p1Total);
        console.log("Total P2: "+p2Total);
        if(P1Rolled==true){
            document.getElementById("P1total").innerHTML = p1Total;
        }
        if(P2Rolled==true){
            document.getElementById("P2total").innerHTML = p2Total;
        }
        if((P1Rolled == true)&&(P2Rolled == true)){
            if(p2Total == p1Total){
                document.getElementById("victor").innerHTML = "TIE!";
            }else if(p1Total>p2Total){
                document.getElementById("victor").innerHTML = "Player 1 Wins!";
            }else{
                document.getElementById("victor").innerHTML = "Player 2 Wins!";
            }
        }
    }
}
function menuBar(){
    if(menuIsOpen == false){
        menuIsOpen = true;
        let timer = setInterval(openThingy, 10);
    }else{
        document.getElementById("menu").setAttribute("style", "margin-left: 1470px");
        thingyPosiMod = 0;
        menuIsOpen = false;
    }
}
function openThingy(){
    if(menuIsOpen == true){
    if((thingyPosiMod!=300)&&(opener != true)){
        document.getElementById("menu").setAttribute("style", "margin-left: "+ (1470-thingyPosiMod) + "px");
        thingyPosiMod += 5;
        console.log(thingyPosiMod);
    }else{
        opener = false;
    }
    }
}
function ticTacToe(id){
    if(ticTacTurn == 1){
        gameMode = "ticTacToe";
        var element = document.getElementById("box"+id);
        element.setAttribute("style", "background-color: " + xColor);
        element.innerHTML="x";
        ticTacTurn = 2;
        winner();
    }else{
        gameMode = "ticTacToe";
        var element = document.getElementById("box"+id);
        element.setAttribute("style", "background-color: " + oColor);
        element.innerHTML="o";
        ticTacTurn = 1;
        winner();
    }
}
function changeXColor(){
    xColor = prompt("What color would you like x to be? (Only accepts: red, blue, yellow, purple, orange, green, pink, or white");
    console.log(xColor);
    if((xColor != "red")&&(xColor != "blue")&&(xColor != "yellow")&&(xColor != "purple")&&(xColor != "orange")&&(xColor != "green")&&(xColor != "pink")&&(xColor != "white")){
        xColor = "red";
    }
    console.log(xColor);
}
function changeOColor(){
    oColor = prompt("What color would you like o to be? (Only accepts: red, blue, yellow, purple, orange, green, pink, or white");
    console.log(oColor);
    if((oColor != "red")&&(xColor != "blue")&&(xColor != "yellow")&&(xColor != "purple")&&(xColor != "orange")&&(xColor != "green")&&(xColor != "pink")&&(xColor != "white")){
        oColor = "blue";
    }
    console.log(oColor);
}

