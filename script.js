const start=document.querySelector("#startButton");
const startSection=document.querySelector(".startSection");

const resetSection=document.querySelector(".resetSection");

const turnSection=document.querySelector(".turnSection");
let turnText=document.createElement("h3");
let turn="X";
let win=false;

turnText.innerText="It's your turn : "+turn;
    turnSection.appendChild(turnText);
    turnSection.style.visibility="hidden";

    let winningSection=document.querySelector(".winningSection");
    let winText=document.createElement("h3");
    winText.innerText="You Won : "+turn;
    winningSection.appendChild(winText);
    winningSection.style.visibility="hidden";


let boxes=document.querySelectorAll(".box");

const boxText=document.getElementsByClassName("boxText");

start.addEventListener("click",gamePlaying);

function gamePlaying(){
    win = false;
    resetSection.style.visibility="visible";
    startSection.style.visibility="hidden";
    turnSection.style.visibility="visible";
    turnText.innerText="It's your turn : "+turn;
    boxes.forEach(element=>{
       
        element.addEventListener("click",boxEvent);
        function boxEvent(){   
           
            if(element.querySelector(".boxText").innerText==''&& !win){
                element.querySelector(".boxText").innerText=turn;
                if( isWin()){
                    winningSection.style.visibility="visible";
                    turnSection.style.visibility="hidden";
                    win=true;
                    winText.innerText="You Won : "+turn;
                    
                }
                changeTurn();
            } 
            
            if (!win){
             turnText.innerText="It's your turn : "+turn;
            }

        }
    });
}


 function changeTurn(){
    turn=turn==="X"?"O":"X";
 }


 function isWin(){
     let conditionsToWin=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
     let winReturn=false;
     conditionsToWin.forEach(e=>{
        if((boxText[e[0]].innerText===boxText[e[1]].innerText)&&(boxText[e[1]].innerText===boxText[e[2]].innerText)&&boxText[e[0]].innerText!==''){
            winReturn=true;
        }
        
     });
     return winReturn;
 }



const reset=document.getElementById("resetButton");
reset.addEventListener("click",ResetFunction);

    function ResetFunction(event){
        turn="X";
        win = true;
        startSection.style.visibility="visible";
        resetSection.style.visibility="hidden";
        turnText.innerText='';
        Array.from(boxText).forEach(item=>{
            item.innerText='';
            winningSection.style.visibility="hidden";
        });
    }
