var tableRow = TABLE_DATA;

var col = [];
        for (var i = 0; i < tableRow.length; i++) {
            for (var key in tableRow[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

 var table = document.getElementById("table");

var tr = table.insertRow(-1);                 

 for (var k = 0; k < tableRow.length; k++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                if(j!=2){
                    tabCell.innerHTML = tableRow[k][col[j]];
                }else{
                    tabCell.innerHTML = "<img src="+tableRow[k][col[j]]+">";
                }
                
            }
        }


document.getElementById("start").onclick = start;
document.getElementById("stop").onclick = stop;
document.getElementById("sort").onclick = sort;

var stopFlag = false;
var shuffledArr = tableRow;
function start(){
    setTimeout(function(){ 
        shuffledArr=shuffle(shuffledArr);
        console.log(shuffledArr);
        if(!stopFlag){
        start();
        }
        stopFlag = false;
    }, 1000);
};

function stop(){
    stopFlag = true;
};


function sort(){
    var priceArr = [];
   // for ()
};

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}




