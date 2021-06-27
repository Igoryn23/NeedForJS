const score = document.querySelector('score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
    car = document.createElement('div'); // создаем машинку 
car.classList.add('car');

start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun); // нажатие клавиши 
document.addEventListener('keyup', stopRun); // отпускаем клавишу 

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrownLeft: false
};

// объект с начальными данными 
const setting = {
    start: false,
    score: 0,
    speed: 3
};

function startGame() {
    start.classList.add('hide');
    setting.start = true;
    gameArea.appendChild(car);
    setting.x = car.offsetLeft; // координата по горизонтали 
    setting.y = car.offsetTop; // вертикаль 
    requestAnimationFrame(playGame);
}

function playGame() {
    if (setting.start) {
        if (keys.ArrowLeft && setting.x > 0) {
            setting.x -= setting.speed;
        }
        if (keys.ArrowRight && setting.x < (gameArea.offsetWidth - car.offsetWidth)) {
            setting.x += setting.speed;
        }
        if (keys.ArrowUp && setting.y > 0) {
            setting.y -= setting.speed;
        }
        if (keys.ArrowDown && setting.y < (gameArea.offsetHeight - car.offsetHeight)) {
            setting.y += setting.speed;
        }

        car.style.left = setting.x + 'px';
        car.style.top = setting.y + 'px';
        requestAnimationFrame(playGame); // рекурсия 
    }
}

function startRun(event) {
    event.preventDefault(); // чтобы не скролилась страница при клике вниз, отмена стандартного поведения браузера 
    keys[event.key] = true;
}

function stopRun(event) {
    event.preventDefault();
    keys[event.key] = false;
}