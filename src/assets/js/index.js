let arrowFaq = document.querySelectorAll('.faqs__row-right-title');
let arrowDriving = document.querySelectorAll('.driving__row-right-title');

console.log(arrowFaq);
console.log(arrowDriving);

for (let i = 0; i < arrowFaq.length; i++) {
  arrowFaq[i].onclick = () => {
    arrowFaq[i].classList.toggle('active');
  }
}

for (let i = 0; i < arrowDriving.length; i++) {
  arrowDriving[i].onclick = () => {
    arrowDriving[i].classList.toggle('active');
  }
}