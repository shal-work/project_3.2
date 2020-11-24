//window.addEventListener('load');


window.addEventListener('DOMContentLoaded', function(){
    'use sctipt';
    let tab = document.querySelectorAll('.info-header-tab'), //потомок
        info = document.querySelector('.info-header'), //родитель
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabComtent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');//удаляем класс show, 
            tabContent[i].classList.add('hide');//но этого недостаточно надо hide (скрыть)

        }
    }
    hideTabComtent(1);

    function showTabContent(b) { //отображаем
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide'); //сначало удалим
            tabContent[b].classList.add('show');//потом добавим и отобразим
        }
    };

    info.addEventListener('click', function(event) {
        let target =  event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabComtent(0);
                    showTabContent(i);
                    break;
                }
                
            }
        } 
    });
});