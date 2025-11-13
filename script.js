const playerOneScore = document.querySelectorAll('span')[0];
const playerTwoScore = document.querySelectorAll('span')[1];
let playerNumber = document.querySelectorAll('span')[2];
let roll = document.querySelectorAll('span')[3];
const select = document.querySelector("#number");
const btnPlayerOne = document.querySelectorAll('button')[0];
const btnPlayerTwo = document.querySelectorAll('button')[1];
const btnReset = document.querySelectorAll('button')[2];
const rollDiv = document.querySelector('.roll-div');

let dieMaxValue = 0;
btnPlayerTwo.disabled = true;
btnReset.disabled = true;

function dice(score, max, turn){
    let die = Math.floor(Math.random() * max+1);
    score.innerText = Number(score.innerText) + die;
    playerNumber.innerText = `${turn}`;
    roll.innerText = die;
}

function switchPlayer(player){
    this.disabled = true;
    player.disabled = false;
}

function start(){
    dieMaxValue  = select.value;
    select.disabled=true;
    btnReset.disabled = false;
    btnPlayerOne.removeEventListener('click', start);
    rollDiv.classList.toggle('roll-div');
}

function winner(score1, score2){
    if(score1===score2){
        return "It's a Draw!";
    } else{
        return "Player " + `${score1>score2 ? "One":"Two"}` + " is the Winner !\nTotal score: "+Math.max(score1, score2);
    }
}
btnPlayerOne.addEventListener('click', start);

btnPlayerOne.addEventListener('click', function(){
    dice(playerOneScore, dieMaxValue, "One");
    switchPlayer.call(this, btnPlayerTwo);
});

btnPlayerTwo.addEventListener('click', function(){
    dice(playerTwoScore, dieMaxValue, "Two");
    switchPlayer.call(this, btnPlayerOne);
});

btnReset.addEventListener('click', function(){
    if(playerOneScore.textContent!=0 || playerTwoScore.textContent!=0){
    alert(winner(+playerOneScore.textContent, +playerTwoScore.textContent));
    playerOneScore.textContent=playerTwoScore.textContent=0;
    switchPlayer.call(btnPlayerTwo, btnPlayerOne);
    select.disabled=false;
    btnPlayerOne.addEventListener('click', start);
    rollDiv.classList.toggle('roll-div');}
    btnReset.disabled = true;
})
