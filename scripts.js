var playerTurn = 'X'; // Player 'X' always goes first
var numTurns = 0;

function markGrid(elID)
{
    if(document.getElementById(elID).innerHTML == null)
    {
        ++numTurns;
        document.getElementById(elID).innerHTML = playerTurn;



        if(playerTurn == 'X') { playerTurn = 'O'; }
        else if(playerTurn == 'O') { playerTurn = 'X'; }
    }
    
}