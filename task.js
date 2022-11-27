let accWin = 0;                              //аккумулятор кликов по коту
let accMiss = 0;                             //аккумулятор промахов
let win = document.getElementById('dead');
let miss = document.getElementById('lost');

function checkHole() {                        //Делает 9 иттераций проверок
	for (let i = 1; i < 10; i++) {
		let hole = document.getElementById('hole' + i);
		hole.click = function() {
			if(hole.className !== 'hole') {
				accWin += 1;
			}
			else {
				accMiss += 1;
			}
		}
	}
}

const timer = setInterval(() => {
	win.textContent = accWin;
	miss.textContent = accMiss;
	checkHole();
	if(win === 10) {
		clearInterval(timer);
		alert('Вы победили!');
		accWin = 0;
		accMiss = 0;
	}
	if(miss === 5) {
		clearInterval(timer);
		alert('Вы проиграли!');
		accWin = 0;
		accMiss = 0;
	}
  }, 100);
