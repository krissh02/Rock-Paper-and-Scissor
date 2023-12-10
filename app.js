let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container")
let userS = document.querySelector("#user-score");
let comS = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}

const drawGame = () =>{
    msg.innerText = "Game was Draw. Play Again"
    msg.style.background = "#081b31";
}

const showWinner = (userWin,userChoice,comChoice) =>{
    if(userWin){
        msg.innerText = `You Win!. Your ${userChoice} beats ${comChoice}`;
        userScore += 1;
        userS.innerText = userScore;
        msg.style.background = "green";
    }
    else{
        msg.innerText = `You Lose. ${comChoice} beats your ${userChoice}`;
        compScore += 1;
        comS.innerText = compScore;
        msg.style.background = "red";
    }
}

const playGame = (userChoice) =>{
    //Generate computer choice
    const comChoice = genCompChoice();
    if(userChoice === comChoice){
        //Draw
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper,scissor
            userWin = comChoice === "paper"? false : true;
        }
        else if(userChoice === "paper"){
            // rock,scissor
            userWin = comChoice === "scissors"? false : true;
        }
        else{
            // rock,paper
            userWin = comChoice === "rock"? false : true;
        }
        showWinner(userWin,userChoice,comChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})