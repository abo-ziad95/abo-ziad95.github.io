let maxNum = 10,
	minNum = 1,
	winningNUM = getWinNum(maxNum, minNum),
	guessLeft = 3;
	
const UIminNum = document.querySelector('.min-num'),
      UImaxNum = document.querySelector('.max-num'),
      UIguessInput = document.querySelector('#guess-input'),
      UImessage = document.querySelector('.message'),
      UIguessBtn = document.querySelector('#guess-btn');

UIminNum.textContent = minNum
UImaxNum.textContent = maxNum

function getWinNum (max, min) {
	 return Math.floor(Math.random()*(max-min+1)+min)
}

game.addEventListener('mousedown', function(event){
	if(event.target.classList.contains('play-again')){
       window.location.reload()
	}
})

UIguessBtn.addEventListener('click', function () {
	let guess = parseInt(UIguessInput.value)

	if (isNaN(guess) || guess < minNum || guess > maxNum) {
		setMessge(`please inter a number between ${minNum} and ${maxNum}`, 'red')
		return
	}

	if (guess === winningNUM) {
		gameOver(true ,`${winningNUM} is correct! YOU WIN`)
	}else{
		guessLeft -= 1

		if (guessLeft === 0) {
			gameOver(false, `Game Over the correct number was ${winningNUM}`)
		}else {

			setMessge(`${guess} is not correct, ${guessLeft} guesse left` , 'red')
			UIguessInput.style.borderColor = 'red'
			guess.value = ''
		}
	}
})

function setMessge(msg, color){
  UImessage.style.color = color
  UImessage.textContent = msg
}

function gameOver (won, msg){
	let color
	won === true ? color = 'green' : color = 'red'
    
    UIguessInput.disabled = true

    UIguessInput.style.borderColor = color

    setMessge(msg , color)

    UIguessBtn.value = 'play again'

    UIguessBtn.className += ' ' + 'play-again'
}