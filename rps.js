// ===============
// ===Variables===
// ===============

const options = [
    {
      name: "rock",
      emoji: "👊",
      beats: "scissors",
    },
    {
      name: "paper",
      emoji: "✋",
      beats: "rock",
    },
    {
      name: "scissors",
      emoji: "✌️",
      beats: "paper",
    },
  ];
  const btns = document.querySelectorAll(".btn");
  const displayPlayer = document.querySelector(".display-player");
  const displayCPU = document.querySelector(".display-cpu");
  const scorePlayer = document.querySelector(".player-score");
  const scoreCPU = document.querySelector(".cpu-score");
  const message = document.querySelector(".message");
  let playerScoreCount = 0;
  let CPUScoreCount = 0;
  let playersChoice;
  let CPUsChoice;
  
  // ====================
  // ==Event Listeners===
  // ====================
  
  btns.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      player(e);
      cpu();
      check();
    });
  });
  
  //=================
  // ===Functions====
  // ================
  
  function player(e) {
    if (e.currentTarget.id === options[0].name) {
      playersChoice = options[0];
    } else if (e.currentTarget.id === options[1].name) {
      playersChoice = options[1];
    } else {
      playersChoice = options[2];
    }
    displayPlayer.textContent = playersChoice.emoji;
  }
  
  function cpu() {
    let random = Math.floor(Math.random() * options.length);
    CPUsChoice = options[random];
    displayCPU.textContent = CPUsChoice.emoji;
  }
  
  function check() {
    if (playersChoice === CPUsChoice) {
      message.textContent = "Draw";
    } else if (playersChoice.beats === CPUsChoice.name) {
      message.textContent = "You Win";
      playerScoreCount++;
    } else {
      message.textContent = "Computer Wins";
      CPUScoreCount++;
    }
    scorePlayer.textContent = playerScoreCount;
    scoreCPU.textContent = CPUScoreCount;
  }

  // ...existing code...

const restartButton = document.querySelector(".restart-btn");

restartButton.addEventListener("click", restartGame);

function restartGame() {
  playerScoreCount = 0;
  CPUScoreCount = 0;
  displayPlayer.textContent = "";
  displayCPU.textContent = "";
  scorePlayer.textContent = "0";
  scoreCPU.textContent = "0";
  message.textContent = "";
}
