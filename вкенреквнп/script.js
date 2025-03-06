// Функция для создания падающих сердечек
function createHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    const heartCount = 50; // Количество сердечек

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
        heart.style.fontSize = `${Math.random() * 30 + 20}px`;
        heartsContainer.appendChild(heart);
    }
}

// Запускаем создание сердечек при загрузке страницы
createHearts();

// Обработчик для кнопки сюрприза
document.getElementById('surpriseButton').addEventListener('click', function() {
    // Добавляем сообщение
    const surpriseMessage = document.createElement('p');
    surpriseMessage.textContent = 'Вы — лучший учитель! Спасибо за всё! 💐';
    surpriseMessage.style.fontSize = '1.5em';
    surpriseMessage.style.color = '#e91e63';
    surpriseMessage.style.marginTop = '20px';
    surpriseMessage.style.animation = 'fadeIn 2s ease-in-out';
    document.querySelector('.container').appendChild(surpriseMessage);

    // Убираем кнопку после нажатия
    this.style.display = 'none';

    // Создаем летающие цветы
    for (let i = 0; i < 20; i++) {
        createFlyingFlower();
    }
});

// Функция для создания летающих цветов
function createFlyingFlower() {
    const flower = document.createElement('img');
    flower.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/509-blossom.svg/640px-509-blossom.svg.png';
    flower.classList.add('flying-flower');
    flower.style.width = '50px';
    flower.style.position = 'fixed';
    flower.style.left = `${Math.random() * 100}vw`;
    flower.style.top = `${Math.random() * 100}vh`;
    flower.style.animation = `fly ${Math.random() * 5 + 5}s linear infinite`;
    document.body.appendChild(flower);
}