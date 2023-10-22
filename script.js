// Получаем элемент с id "counter"
const counterElement = document.getElementById("counter");

// Инициализируем переменную count
let count = 0;

// Функция для обновления значения счетчика на странице
function updateCounter() {
    counterElement.textContent = count;
}

// Функция для увеличения значения счетчика
function incrementCounter() {
    count++;
    updateCounter();
}

// Функция для уменьшения значения счетчика
function decrementCounter() {
    count--;
    updateCounter();
}

// Добавляем обработчик клика на кнопку "+"
document.getElementById("plus-btn").addEventListener("click", incrementCounter);

// Добавляем обработчик клика на кнопку "-"
document.getElementById("minus-btn").addEventListener("click", decrementCounter);

// Добавляем обработчик клика на "hw-1" в хедере
document.getElementById("hw1").addEventListener("click", function() {
    alert("Вы кликнули на hw-1 в хедере");
});

// Получаем элемент с id "homework-list"
const homeworkList = document.getElementById("homework-list");

// Получаем все элементы с классом "homework"
const homeworkItems = document.querySelectorAll(".homework");

// Добавляем обработчик клика для каждого элемента homework
homeworkItems.forEach(function(item) {
    item.addEventListener("click", handleClickOnHomework);
});

// Проверяем, авторизирован ли пользователь
function checkAuthentication() {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name === "userAuthenticated" && value === "true") {
        return true;
      }
    }
    return false;
  }

  // Обработчик события для кнопки "homework_2"
  const homework2Button = document.querySelector('.homework_2');
  homework2Button.addEventListener('click', function (event) {
    event.preventDefault();
    if (checkAuthentication()) {
      window.location.href = "Ron.html";
    } else {
      // Если пользователь не авторизован, перейдите на страницу "auth.html"
      window.location.href = "auth.html";
    }
  });
