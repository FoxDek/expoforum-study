document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('burger').addEventListener('click', function() {
    document.querySelector('header').classList.toggle('open')
  })
})

/* document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.info__block').forEach(function(block) {
    block.querySelector('.info__topic').addEventListener('click', function(event) {
      block.classList.toggle('open'); // Переключаем класс для раскрытия/скрытия списка
    });
  });
}); */

// Этот код работает с учётом размеров экрана
document.addEventListener('DOMContentLoaded', function() {
  function toggleList(event) {
    if (window.innerWidth < 576) { // Установите нужное значение для разрешения экрана
      const block = event.currentTarget.closest('.info__block');
      block.classList.toggle('open'); // Переключаем класс для раскрытия/скрытия списка
    }
  }

  function handleResize() {
    if (window.innerWidth > 576) {
      document.querySelectorAll('.info__block').forEach(function(block) {
        block.classList.add('open'); // Открываем все списки при разрешении экрана 576 пикселей и выше
      });
    } else {
      document.querySelectorAll('.info__block').forEach(function(block) {
        block.classList.remove('open'); // Закрываем все списки при разрешении экрана меньше 576 пикселей
      });
    }
  }

  document.querySelectorAll('.info__block').forEach(function(block) {
    block.querySelector('.info__topic').addEventListener('click', toggleList);
  });

  window.addEventListener('resize', handleResize);

  // Вызываем handleResize при загрузке страницы, чтобы установить начальное состояние
  handleResize();
});

