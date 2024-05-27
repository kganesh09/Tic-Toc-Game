var player1=true;
var player2=false;

function buttonNo(player){
    if(player1){
        document.getElementById(player).innerText="X";
        player1=false;
        player2=true;
    }else if(player2){
        document.getElementById(player).innerText="O";
        player1=true;
        player2=false;
    }
}
