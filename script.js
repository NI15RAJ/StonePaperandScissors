let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const resetScore=document.querySelector(".reset");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");

const getCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}

const drawGame=() =>{
    console.log("Game was drawn");
    msg.innerText="Game Drawn";
    msg.style.backgroundColor="#081b31"; 
}

const showWinner=(userWin,userChoice,compchoice)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compchoice} `;
        msg.style.backgroundColor="green";
    }

    else
    {
        compscore++;
        compScorePara.innerText=compscore;
        console.log("You Lose");
        msg.innerText=`You Lost! Computer's ${compchoice} beats ${userChoice} `;
         msg.style.backgroundColor="red";
}
}

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compchoice =getCompChoice();
    console.log("compchoice=",compchoice);
    if((userChoice===compchoice)){
        drawGame();
    }    

    else {
        let userWin=true;
        
        if(userChoice==="rock"){
            userWin=compchoice==="paper" ? false :true;
        }
        else if(userChoice==="paper"){
            userWin=compchoice==="scissors" ? false :true;
        }
        else{
            userWin=compchoice==="rock" ? false :true;
        }

        showWinner(userWin,userChoice,compchoice);
    }
}

choices.forEach((choice)=> {
          choice.addEventListener("click",()=>{
         const userChoice=choice.getAttribute("id");
        //console.log("choice was clicked");
        playGame(userChoice);
    }); 
});

const resetGame = () =>{
    compscore=0;
    userscore=0;
    compScorePara.innerText=compscore;
    userScorePara.innerText=userscore;
    msg.innerText="Game reset. Start playing";
    msg.style.backgroundColor="#081b31";

};

resetScore.addEventListener("click",resetGame);