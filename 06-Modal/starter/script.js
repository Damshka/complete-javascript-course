'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');    
const openModalBtns = document.querySelectorAll('.show-modal');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function() {
    console.log('close');
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

openModalBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
});



closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function(event) {
    if (!modal.classList.contains('hidden') && event.key === "Escape") closeModal();
});

