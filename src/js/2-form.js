function saveToLocalStorage() {
  const formData = {
    email: document.querySelector('input[name="email"]').value.trim(),
    message: document.querySelector('textarea[name="message"]').value.trim()
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// Функція для заповнення полів форми з даних у локальному сховищі
function fillFormFromLocalStorage() {
  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formData) {
    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
  }
}

// Очистити дані у локальному сховищі
function clearLocalStorage() {
  localStorage.removeItem('feedback-form-state');
}

// Викликати функцію для заповнення форми з даних у локальному сховищі
fillFormFromLocalStorage();

// Додати обробник події input для форми
document.querySelector('.feedback-form').addEventListener('input', () => {
  saveToLocalStorage();
});

// Додати обробник події submit для форми
document.querySelector('.feedback-form').addEventListener('submit', (event) => {
  event.preventDefault(); // Заборонити дійшовідправлення форми
  const email = document.querySelector('input[name="email"]').value.trim();
  const message = document.querySelector('textarea[name="message"]').value.trim();

  // Перевірити, чи заповнені обидва поля форми
  if (email && message) {
    console.log({ email, message }); // Вивести об'єкт з даними у консоль
    clearLocalStorage(); // Очистити дані у локальному сховищі
    document.querySelector('.feedback-form').reset(); // Очистити поля форми
  }
});