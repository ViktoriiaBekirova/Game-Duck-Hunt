let h = document.querySelector('.text'); // оповещение начала игры
let p1 = document.querySelector('.text2'); // вы выиграли
let p2 = document.querySelector('.text3'); // вы проиграли
let gameWidth = document.querySelector('.container').clientWidth; //зона действия игры
let gameHeight = document.querySelector('.container').clientHeight; //зона действия игры
let dog = document.querySelector('.dog');
let duck = document.querySelector('.duck');

function dogWalk () { // ф-я запуска прогулки собаки
    dog.classList.add('dog_walk'); // добавляем стиль прогулки
    dog.style.transform = 'translate(' + gameWidth / 2 + 'px, 0px)'; // собакак гуляет до середины экрана
}
function dogJump () { // ф-я запуска прыжка собаки
    dog.classList.remove('dog_walk'); // удаляем стиль прогулки
    dog.classList.add('dog_jump');
}
function dogCatchDuck () { // собака с уткой
    dog.classList.remove('dog_jump');
    dog.classList.add('dog_catch_duck');
}
function dogLaugh () { // собака смеется
    dog.classList.remove('dog_catch_duck');
    dog.classList.add('dog_laugh');
}
function duckFlyLeft () { // полет утки влево
    duck.className = 'duck sp2';
    duck.classList.add('duck_fly');
    duck.classList.add('duck_fly_left');
    duck.style.transform = 'translate(0px)';
}
function duckFlyRight () { // полет утки влево
    duck.className = 'duck sp2';
    duck.classList.add('duck_fly');
    duck.classList.add('duck_fly_right');
    duck.style.transform = 'translateX(' + (gameWidth - duck.offsetWidth) + 'px)';
}
function duckFlyTopLeft () { // полет утки вверх влево
    duck.className = 'duck sp2';
    duck.classList.add('duck_fly');
    duck.classList.add('duck_fly_top_left');
    duck.style.transform = 'translate(0px, -' + gameHeight + 'px)';
}
function duckFlyTopRight () { // полет утки вверх вправо
    duck.className = 'duck sp2';
    duck.classList.add('duck_fly');
    duck.classList.add('duck_fly_top_right');
    duck.style.transform = 'translate(' + (gameWidth - duck.offsetWidth) + 'px, -' + gameHeight + 'px)';
}
function duckFlyDown () { // падение утки
    duck.className = 'duck sp2';
    duck.classList.add('duck_fly');
    duck.classList.add('duck_fly_down');
    duck.style.transform = 'translate(0px,' + (gameHeight - duck.offsetTop) + 'px)';
}
function audiowinner() { // звук выигриша
    let audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'zvuk-vyigrysha.mp3'; // Указываем путь к звуку
    audio.autoplay = true; // Автоматически запускаем
}
function audioloser() { // звук проигрыша
    let audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'zvuk-proigrysha.mp3'; // Указываем путь к звуку
    audio.autoplay = true; // Автоматически запускаем
}
let end = false
function game () {
    h.onclick = function () {
        h.className = 'text1'; // при запуске ф-ии убераем оповещение
        dogWalk();
        setTimeout(dogJump, 8000);
        let timer1 = setTimeout(duckFlyRight, 11000);
        timer2 = setTimeout(duckFlyTopRight, 13000);
        timer3 = setTimeout(duckFlyLeft, 15000);
        timer4 = setTimeout(duckFlyTopLeft, 17000);
        timer5 = setTimeout(duckFlyRight, 19000);
        timer6 = setTimeout(duckFlyTopRight, 21000);
        timer7 = setTimeout(dogLaugh, 23000); // собака смеется
        timer8 = setTimeout(function () {
            p2.className = 'text'; // вы проиграли
            end = true
            console.log(end)
            setTimeout(function () {
                location.reload(true); // вы проиграли
            },6000);
        },23000);
        timer9 = setTimeout(audioloser, 23000); // звук проигрыша


        duck.addEventListener('click', function () { // при клике на утку отключаем таймеры
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            clearTimeout(timer5);
            clearTimeout(timer6);
            clearTimeout(timer7);
            clearTimeout(timer8);
            clearTimeout(timer8);
            clearTimeout(timer9);
            duckFlyDown(); // падение утки
            audiowinner(); // звук выигрыша
            p1.className = 'text'; // вы выйграли
            setTimeout(dogCatchDuck, 3000); // собака с уткой
            end = true
            console.log(end)
            setTimeout(function () {
                location.reload(true); // вы проиграли
            },10000);
        });
    };
}

game()



























