let arrowClick = document.querySelectorAll('.faqs__row-right-title');

console.log(arrowClick);

for (let i = 0; i < arrowClick.length; i++) {
  arrowClick[i].onclick = () => {
    arrowClick[i].classList.toggle('active');
    arrowClick[i].classList.toggle('arrow');
  }
}