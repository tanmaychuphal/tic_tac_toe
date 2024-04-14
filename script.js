let box=document.querySelectorAll('.btn');
let reset=document.querySelector('#reset-btn')
let msgContainer=document.querySelector('.msg-container')
let msg = document.querySelector("#msg");
let newBtn=document.querySelector('#new-btn')

let turn0=true;
let count=0;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


const resetGame = () =>{
    turn0=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};


const enableBoxes =() =>{
    for(let boxs of box ){
        boxs.disabled=false;
        boxs.innerText="";
    }
}

const disableBoxes = () => {
    for (let boxs of box) {
      boxs.disabled = true;
    }

};

const gameDraw =() =>{
    msg.innerText="Its a Draw!!"
    msgContainer.classList.remove("hide");
    disableBoxes();
}


box.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText='O';
            turn0=false;
        }
        else{
            box.innerText='X';
            turn0=true;
        }
        box.disabled=true;
        ++count;
        let isWinner=checkWinner();
        if(count==9 && !isWinner){
            gameDraw();
        }
    })
})
const checkWinner=() =>{
    for(let pattern of winPatterns){
        let val1=box[pattern[0]].innerText;
        let val2=box[pattern[1]].innerText;
        let val3=box[pattern[2]].innerText;

        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){
                showWinner(val1);
                return true;
            }
        }
    }
}

const showWinner= (winner) =>{
        msg.innerText = `Congratulations, Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
        // box.disabled=true;  
}
reset.addEventListener("click",resetGame)
newBtn.addEventListener("click",resetGame)