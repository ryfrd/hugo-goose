function toggleTheme() {
  var stylesheet = document.getElementById('stylesheet');
  var themeButton = document.getElementById('themeButton');

// Add more style properties as needed

  if (stylesheet.getAttribute('href') === 'dark.css') {
    // set dark css
    stylesheet.setAttribute('href', 'light.css');

    // Update button style
    themeButton.textContent = 'dark';

  } else {
    stylesheet.setAttribute('href', 'dark.css');

    // Update button style
    themeButton.textContent = 'light';

  }
}
