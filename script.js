alert("you can move with the arrows, CTRL and Space ");
const pikachu = document.querySelector('.block');
console.dir(pikachu);
// console.log(pikachu.offsetWidth);// розмір блоку
// console.log(pikachu.offsetHeight);
const STEP = 10;
// максимально допустимая ширина / высота окна рассчитывается:
const maxWidth = window.innerWidth - pikachu.offsetWidth;
// console.log(`maxWidth: ${maxWidth}`);
const maxHeight = window.innerHeight - pikachu.offsetHeight;
// console.log(`maxHeight: ${maxHeight}`);
// window.innerWidth - это максимальная ширина окна браузера;
// pikachu.offsetWidth - это ширина самого элемента, который перемещаем


const fnBoom = function boom() {
    let coords = pikachu.getBoundingClientRect();
    const boom = document.querySelector('.boom');
    boom.style.left = coords.x + 'px';
    boom.style.top = coords.y + 'px';
    boom.style.display = 'block';
    setTimeout(() => boom.style.display = 'none', 2000);
};

const Key_Map = {
    'ArrowRight': moveRight,
    'ArrowDown': moveDown,
    'ArrowLeft': moveLeft,
    'ArrowUp': moveUp,
    'Space': jump,
    'ControlLeft': sitDown,
    'ControlRight': sitDown

};

function moveRight() {
    const deadline = pikachu.offsetLeft;
    console.log(`deadline: ${deadline}`);
    console.log(`maxWidth: ${maxWidth}`);
    if (deadline > maxWidth) {
        pikachu.style.left = pikachu.offsetLeft - STEP * 2 + 'px';
        fnBoom();
    }
    pikachu.style.backgroundImage = `url('./img/2right.gif')`;
    pikachu.style.left = pikachu.offsetLeft + STEP + 'px';
}

function moveDown(e) {
    const deadline = pikachu.offsetTop;
    console.log(`deadline: ${deadline}`);
    console.log(`maxHeight: ${maxHeight}`);
    if (deadline > maxHeight) {
        pikachu.style.top = pikachu.offsetTop - STEP * 2 + 'px';
        fnBoom();
    }
    pikachu.style.backgroundImage = `url('./img/5UP-Dawn.gif')`;
    pikachu.style.top = pikachu.offsetTop + STEP + 'px';
}

function moveLeft(e) {
    const deadline = pikachu.offsetLeft;
    if (deadline < 0) {
        pikachu.style.left = pikachu.offsetLeft + STEP * 2 + 'px';
        fnBoom();
    }
    pikachu.style.backgroundImage = `url('./img/2left.gif')`;
    pikachu.style.left = pikachu.offsetLeft - STEP + 'px';
}

function moveUp(e) {
    const deadline = pikachu.offsetTop;
    console.log(`deadline: ${deadline}`);
    console.log(`maxHeight: ${maxHeight}`);
    if (deadline < 0) {
        pikachu.style.top = pikachu.offsetTop + STEP * 2 + 'px';
        fnBoom();
    }
    pikachu.style.backgroundImage = `url('./img/5UP-Dawn.gif')`;
    pikachu.style.top = pikachu.offsetTop - STEP + 'px';

}

function jump(e) {
    pikachu.classList.add('jumper');
    setTimeout(() => pikachu.classList.remove('jumper'), 1000);

}

function sitDown(e) {
    pikachu.classList.add('scale-Fat');
    setTimeout(() => pikachu.classList.remove('scale-Fat'), 2800);
}

document.addEventListener('keydown', (e) => Key_Map[e.code] && Key_Map[e.code](e));
// document.addEventListener('keydown', moveDown);
document.addEventListener('keyup', (e) => {
    setTimeout(() => pikachu.style.backgroundImage = `url('./img/5IPv.gif')`, 0);
});