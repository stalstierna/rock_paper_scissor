const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const text1 = document.getElementById("info_text1");
const text2 = document.getElementById("info_text2");
let textDiv = document.getElementById("info_text");
const computerScoreText = document.getElementById("computer_score_points");
const yourScoreText = document.getElementById("your_score_points");

let div = document.createElement("div");

let computerChose;
let computerScore = 0;
let yourScore = 0;

rock.addEventListener("click", function () {
  computerChose = Math.floor(Math.random() * 3);

  if (computerChose === 1) {
    computerScore++;
    computerScoreText.textContent = computerScore;
    text1.textContent = "You chose rock and Computer chose paper";
    text2.textContent = "Computer wins!";
  } 
  else if (computerChose === 2) {
    yourScore++;
    yourScoreText.textContent = yourScore;
    text1.textContent = "You chose rock and Computer chose scissor";
    text2.textContent = "You win!";
  }
  else{
    text1.textContent = "You and the Computer chose rock";
    text2.textContent = " Match Draw!";
  }

  resetScore()

});

paper.addEventListener("click", function () {
  computerChose = Math.floor(Math.random() * 3);

  if (computerChose === 2) {
    computerScore++;
    computerScoreText.textContent = computerScore;
    text1.textContent = "You chose paper and Computer chose scissor";
    text2.textContent = "Computer wins!";
  } 
  else if (computerChose === 0) {
    yourScore++;
    yourScoreText.textContent = yourScore;
    text1.textContent = "You chose paper and Computer chose rock";
    text2.textContent = "You win!";
  }
  else{
    text1.textContent = "You and the Computer chose paper";
    text2.textContent = " Match Draw!";
  }

  resetScore()
});

scissor.addEventListener("click", function () {
    computerChose = Math.floor(Math.random() * 3);

    if (computerChose === 0) {
      computerScore++;
      computerScoreText.textContent = computerScore;
      text1.textContent = "You chose scissor and Computer chose rock";
      text2.textContent = "Computer wins!";
    } 
    else if (computerChose === 1) {
      yourScore++;
      yourScoreText.textContent = yourScore;
      text1.textContent = "You chose scissor and Computer chose paper";
      text2.textContent = "You win!";
    }
    else{
      text1.textContent = "You and the Computer chose scissor";
      text2.textContent = " Match Draw!";
    }
  
    resetScore()
});


function resetScore() {

        div.innerHTML = "";
        div.classList = "winning_design";
        div.remove()

    if (computerScore === 5){
        text1.textContent = "COMPUTER WON!";
        text2.textContent = null;
        computerScore = 0;
        computerScoreText.textContent = computerScore;
        yourScore = 0;
        yourScoreText.textContent = yourScore;

        textDiv.appendChild(div);

    }
    else if (yourScore === 5) {
        text1.textContent = "YOU WON!";
        text2.textContent = null;
        computerScore = 0;
        computerScoreText.textContent = computerScore;
        yourScore = 0;
        yourScoreText.textContent = yourScore;

        textDiv.appendChild(div);
        
    } 
}

