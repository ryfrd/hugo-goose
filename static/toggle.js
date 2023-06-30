function toggleTheme() {
  var stylesheet = document.getElementById('stylesheet');
  var themeButton = document.getElementById('themeButton');

  if (stylesheet.getAttribute('href') === 'dark.css') {
    stylesheet.setAttribute('href', 'light.css');
    themeButton.textContent = 'dark';

  } else {
    stylesheet.setAttribute('href', 'dark.css');
    themeButton.textContent = 'light';

  }
}
