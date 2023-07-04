window.onscroll = function() {
    var documentHeight, totalHeight;
    documentHeight = document.documentElement.getBoundingClientRect().height;
    totalHeight = window.pageYOffset + window.innerHeight;
  
    if(totalHeight >= documentHeight * 0.95) {
        console.log('test');
        enterEnd();
    } else {
        outOfEnd();
    }
};

const nav = document.querySelector('nav');
const footer = document.querySelector('.footer-container');
const leo = document.querySelector('.leo');
const title = document.querySelector('.hero-title');

const enterEnd = (function(){
    
    nav.style.display = 'none';
    footer.classList.add('show');
    leo.classList.add('show');
    title.classList.add('hero-title-show');
});

const outOfEnd = (function(){
    nav.style.display = '';
    footer.classList.remove('show');
    leo.classList.remove('show');
    title.classList.remove('hero-title-show');
});