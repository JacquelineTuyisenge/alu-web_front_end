function changeMode(size, weight, transform, background, color) {
    return function() {
      document.body.style.cssText = `
      font-size: ${size}px; 
      font-weight: ${weight}; 
      text-transform: ${transform}; 
      background-color: ${background}; 
      color: ${color}`
    };
}

  function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // Add a paragraph
    const welcomeParagraph = document.createElement('p');
    welcomeParagraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(welcomeParagraph);

    // Add buttons
    const spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.addEventListener('click', spooky);
    document.body.appendChild(spookyButton);

    const darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Dark mode';
    darkModeButton.addEventListener('click', darkMode);
    document.body.appendChild(darkModeButton);

    const screambtn = document.createElement('button');
    screambtn.textContent = 'Scream mode';
    screambtn.addEventListener('click', screamMode);
    document.body.appendChild(screambtn);
  }

   main();
