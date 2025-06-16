function qs(selector) {
  return document.querySelector(selector);
}

const button = qs('.message');
const text = qs('#text');

const showMessage = () => {
  text.classList.toggle('show'); 
};

button.addEventListener("click", showMessage);
