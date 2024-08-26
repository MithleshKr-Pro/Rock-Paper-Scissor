let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const msgContainer=document.querySelector(".msg_container")
const comScore=document.querySelector("#lost")
const usrScore=document.querySelector("#won")

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor((Math.random() *3));
    return options[randIdx];
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        usrScore.innerText=userScore;
        msgContainer.style.backgroundColor="Green";
        msg.innerText=`You WON! Your ${userChoice} beats ${compChoice}`;
        msg.style.color="white";
        
        }else{
        compScore++;
        comScore.innerText=compScore;
        msgContainer.style.backgroundColor="red";
        msg.innerText=`You LOST!! ${compChoice} beats Your ${userChoice}`;
        msg.style.color="white";
    }
}
const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if (userChoice===compChoice){
        msg.innerText="Game was Draw. Play Again!!";
        msgContainer.style.backgroundColor="#081b31";
        msg.style.color="white";

    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin=compChoice==="scissors" ? true:false;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="rock" ? true:false;
        }else{
            //paper,rock
            userWin=compChoice==="rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    let userChoice=choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        playGame(userChoice)
    })
})