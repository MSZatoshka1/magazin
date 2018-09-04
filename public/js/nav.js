function remove_li(li,ul){ // удаление фулл меню с экрана при адаптивки
    console.log(li,ul);
    ul.classList.remove('full');
    li.remove();
    ul.style.removeProperty('display');
}

function get_poick(elem){// показать форму поиска
    let ul = document.querySelector(elem.dataset.ul); // элемент который покажется
    ul.classList.add("full");
    let li = document.createElement('li'); // добавления кнопки назад
    li.innerHTML = "<a href='#' class='off'>Назад</a>";
    ul.appendChild(li);
    ul.style.display = 'flex';
    console.log(ul);
    li.onclick = () =>{
        remove_li(li,ul);
    }
}
let a = document.querySelectorAll('.nav a.click');
a.forEach( elem => {
    elem.onclick = () =>{
        get_poick(elem);
    }
});

// 
let poick_a = document.querySelector('ul.nactroiki li:first-child > a');
poick_a.onclick = function(){
    get_poick(this);
}
let baluta_a = document.querySelector('ul.nactroiki li:first-child > a');
baluta_a.onclick = function(){
    get_poick(this);
}
// 

let menu = document.querySelectorAll("ul.adantiv a");
menu.forEach(elem => {
    elem.onclick = () => {
        get_poick(elem);
    }
});
// 
window.onresize = ()=>{
    check = document.querySelector('.nav ul > li.off');
    if(check != null && document.body.scrollWidth > 960){
        let ul = check.parentElement;
        remove_li(check,ul);
    }
}