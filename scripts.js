Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
var playerTurn = 'X'; // Player 'X' always goes first
var numTurns = 0;
var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var boxIDNames = {0:"top-left",1:"top-mid",2:"top-right",3:"mid-left",4:"mid-mid",5:"mid-right",6:"bot-left",7:"bot-mid",8:"bot-right"};
var XspotsTaken =[];
var OspotsTaken =[];
var totalSpotsTaken =[];
var AllPossSpots = [0,1,2,3,4,5,6,7,8]

function markGrid(event)
{
    var elID = document.getElementById("myform").value-1;
    event.preventDefault();
    var boxempty=0;
    for(var i=0; i< AllPossSpots.length;i++){
        if(AllPossSpots[i]==elID){
            boxempty += 1;
        }
    }
    if(boxempty==1){
        XspotsTaken.push(elID);
        totalSpotsTaken.push(elID)
        AllPossSpots.remove(elID)
        var boxName = boxIDNames[elID];
        var X = document.getElementById(boxName);
        X.innerHTML="X";
        var win=0;
        for( var i =0; i<winningCombinations.length;i++){
            combo = winningCombinations[i];
            win = 0;
            for(var j=0; j<3;j++){
                for( var k=0; k<XspotsTaken.length; k++){
                    if(XspotsTaken[k]==combo[j]){
                        win+=1;
                    }
                }
            }
            if(win ==3){
                alert("You Win!");
                location.reload();
                return;
            }
            if(AllPossSpots.length==0){
                alert("It's a draw!")
                location.reload();
                return;
            }

        }
        var rand = AllPossSpots[Math.floor(Math.random() * AllPossSpots.length)];
        boxName = boxIDNames[rand];
        X = document.getElementById(boxName);
        X.innerHTML="O";
        totalSpotsTaken.push(rand);
        AllPossSpots.remove(rand)
        OspotsTaken.push(rand);
        var win=0;
        for( var i =0; i<winningCombinations.length;i++){
            combo = winningCombinations[i];
            win = 0;
            for(var j=0; j<3;j++){
                for( var k=0; k<OspotsTaken.length; k++){
                    if(OspotsTaken[k]==combo[j]){
                        win+=1;
                    }
                }
            }
            if(win ==3){
                alert("Your Opponent Won!");
                location.reload();
                return;
            }
        }
    }
    else{
        alert("That spot is unavailable!")
    }
    document.getElementById("myform").value = null;

    
}