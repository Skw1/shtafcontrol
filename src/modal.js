// Получаем модалку
const modal = document.getElementById("myModal");

// Получаем кнопки
const btn1 = document.getElementById("openModalBtn1");
const btn2 = document.getElementById("openModalBtn2");

// Получаем элемент закрытия (крестик)
const closeModal = document.querySelector(".close");

// Функция для открытия модалки
function openModal() {
  modal.style.display = "block";
}

// Функция для закрытия модалки
function closeModalWindow() {
  modal.style.display = "none";
}

// Привязываем обработчики событий к обеим кнопкам
btn1.addEventListener("click", openModal);
btn2.addEventListener("click", openModal);

// Привязываем обработчик события к кнопке закрытия
closeModal.addEventListener("click", closeModalWindow);

// Закрытие модалки при клике вне её области
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    closeModalWindow();
  }
});
