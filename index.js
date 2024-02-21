const containerEl = document.querySelector('.container');
let container = document.querySelector('.container');

for (let i = 0; i < 50; i++) {
  let el = document.createElement('div');

  let r1 = Math.floor(Math.random() * 256);
  let r2 = Math.floor(Math.random() * 256);
  let r3 = Math.floor(Math.random() * 256);

  el.style.backgroundColor = `rgb(${r1} , ${r2} , ${r3})`;
  el.classList.add('canvass');
  el.innerText = `rgb(${r1} , ${r2} , ${r3})`;
  container.appendChild(el);
}
