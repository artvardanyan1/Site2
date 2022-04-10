//Responsive menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', function(){
    menu.classList.toggle('active');
    burger.classList.toggle('active');
})
////////


//Modals
const inmodal = document.querySelector('.login-modal');
const upmodal = document.querySelector('.reg-modal');
const closebtns = document.querySelectorAll('#close')
const signinbtn = document.querySelector('.login');
const regnow = document.querySelector('.reg-now');
const lognow = document.querySelector('.log-now');
// const submodal = document.querySelector('.subscribe-modal');
// const subbtn = document.querySelector('.hero-btn');
// const subbtn2 = document.querySelector('.sub-btn');


signinbtn.addEventListener('click', function(e){
    inmodal.classList.add('active');
})
 
closebtns.forEach(function(item){
    item.addEventListener('click', function(){
        const modalClass = this.dataset.modal;
        const modalll = document.querySelector('.' + modalClass);
        
        modalll.classList.remove('active')
    })
})


regnow.addEventListener('click', function(){
    inmodal.classList.remove('active');
    upmodal.classList.add('active');
})
lognow.addEventListener('click', function(){
    upmodal.classList.remove('active');
    inmodal.classList.add('active');
});


/////////


//Hero Tabs
const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__nav-btn').click();
////////////
