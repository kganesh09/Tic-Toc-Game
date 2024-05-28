var player1=true;
var player2=false;

var resultbord=document.getElementById("result")

function refreshScreen() {
    location.reload();
}

function buttonNo(player){
    var cell = document.getElementById(player);
    if(cell.innerText.trim()===""){
        if(player1){
            document.getElementById(player).innerText="X";
            winnercheck();
            player1=false;
            player2=true;
            resultbord.innerText="player 2 turn"
        }else if(player2){
            document.getElementById(player).innerText="O";
            winnercheck();
            player1=true;
            player2=false;
            resultbord.innerText="player 1 turn"
        }
    }else{
        alert("space is already occupied")
    }
   
}


function winnercheck(){
    var btn1=document.getElementById("btn1").textContent;
    var btn2=document.getElementById("btn2").textContent;
    var btn3=document.getElementById("btn3").textContent;
    var btn4=document.getElementById("btn4").textContent;
    var btn5=document.getElementById("btn5").textContent;
    var btn6=document.getElementById("btn6").textContent;
    var btn7=document.getElementById("btn7").textContent;
    var btn8=document.getElementById("btn8").textContent;
    var btn9=document.getElementById("btn9").textContent;
     // Check for player 1 winning conditions
     if(btn1 === "X" && btn2 === "X" && btn3 === "X" ||
     btn4 === "X" && btn5 === "X" && btn6 === "X" ||
     btn7 === "X" && btn8 === "X" && btn9 === "X" ||
     btn1 === "X" && btn4 === "X" && btn7 === "X" ||
     btn2 === "X" && btn5 === "X" && btn8 === "X" ||
     btn3 === "X" && btn6 === "X" && btn9 === "X" ||
     btn1 === "X" && btn5 === "X" && btn9 === "X" ||
     btn3 === "X" && btn5 === "X" && btn7 === "X") {
      resultbord.innerText="player 1 is a winner"
      alert("Player 1 is the winner");
      refreshScreen();
     
  }

  // Check for player 2 winning conditions
  else if(btn1 === "O" && btn2 === "O" && btn3 === "O" ||
          btn4 === "O" && btn5 === "O" && btn6 === "O" ||
          btn7 === "O" && btn8 === "O" && btn9 === "O" ||
          btn1 === "O" && btn4 === "O" && btn7 === "O" ||
          btn2 === "O" && btn5 === "O" && btn8 === "O" ||
          btn3 === "O" && btn6 === "O" && btn9 === "O" ||
          btn1 === "O" && btn5 === "O" && btn9 === "O" ||
          btn3 === "O" && btn5 === "O" && btn7 === "O") {
            resultbord.innerText="player 2 is a winner"
      alert("Player 2 is the winner");
      refreshScreen();
  }
}