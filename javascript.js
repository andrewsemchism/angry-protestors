textBoxs = document.getElementsByClassName('text')

function keypress(e) {
	const key = e.key;
  const currentFontSize = parseFloat(window.getComputedStyle(textBoxs[0], null).getPropertyValue('font-size'));
  console.log(currentFontSize)
  if (key === '>') {
    e.preventDefault();
    for (i=0; i < textBoxs.length; i++) {
      textBoxs[i].style.fontSize = (currentFontSize + 1 + 'px');
    }
  }
  if (key === '<') {
    e.preventDefault();
    for (i=0; i < textBoxs.length; i++) {
      textBoxs[i].style.fontSize = (currentFontSize - 1 + 'px');
    }
  }
}

document.addEventListener('keypress', keypress);
