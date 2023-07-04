function toggleTheme() {

  var stylesheet = document.getElementById('stylesheet');
  var themeButton = document.getElementById('themeButton');

  if (stylesheet.getAttribute('href') === '/drk.css') {

    stylesheet.setAttribute('href', '/lght.css');
    themeButton.textContent = 'dark';

  } else {

    stylesheet.setAttribute('href', '/drk.css');
    themeButton.textContent = 'light';

  }
}
