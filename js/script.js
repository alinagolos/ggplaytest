function clearSearch() {
  document.getElementById('theme').value = '';
}

const showThemesButton = document.getElementById('showThemesButton');
showThemesButton.addEventListener('click', () => {
  const hiddenThemes = document.getElementById('theme-hidden');

  hiddenThemes.style.display = 'flex';
});

const themeLinks = document.querySelectorAll('.modal__theme-item');
themeLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const selectedTheme = event.target.innerHTML;
    document.getElementById('theme').value = selectedTheme;
  });
});

function checkInputLength() {
  const textarea = document.getElementById('textarea');
  const charCount = textarea.value.length;
  const current = document.getElementById('current');

  current.innerHTML = charCount + '/200';
  textarea.classList.toggle('tooLong', charCount > 200);
  current.classList.toggle('tooLong', charCount > 200);
}

function toggleButton() {
  const myArea = document.getElementById('textarea').value;
  const myInput = document.getElementById('theme').value;

  if (myArea && myInput) {
    document.getElementById('btn-next').disabled = false;
  } else {
    document.getElementById('btn-next').disabled = true;
  }
}
