function qs(param) {
  return document.querySelector(param);
}

const button = qs('.message');
const text = qs('#text');

const showMessage = () => {
  text.classList.toggle('show'); 
};

button.addEventListener("click", showMessage);
