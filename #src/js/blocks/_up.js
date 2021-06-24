const buttonUp = document.querySelector(`.up-button`);
document.addEventListener(`scroll`, function(){
   if (window.scrollY > 700) {
    buttonUp.classList.add(`up-button_active`);
   }
   else {
    buttonUp.classList.remove(`up-button_active`); 
   }
});