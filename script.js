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

    //Timer к  уроку 3.5
    // let deadline = '2020-11-26';
    let deadline = '2020-11-26 13:16:00 '; //HW-3.5

    function getTimeRemaining(endTime){
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minuts = Math.floor((t/1000/60) % 60),
            hours = Math.floor(t/1000/60/60);
            // days = Math.floor((t/1000/60/60) % 24); // количество дней для примера

        return {
            'total' : t,
            'hours' : hours,
            'minuts' : minuts,
            'seconds' : seconds,
        };
    };

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minuts = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);
            
            if (t.hours < 10) {//HW-3.5
                hours.textContent = '0' + t.hours;
            }
            else {
                hours.textContent = t.hours;
            }

            if (t.minuts < 10) {//HW-3.5
                minuts.textContent = '0' + t.minuts;
            }
            else {
                minuts.textContent = t.minuts;
            }
            
            if (t.seconds < 10) {//HW-3.5
                seconds.textContent = '0' + t.seconds;
            }
            else {
                seconds.textContent = t.seconds;
            }

            // hours.textContent = t.hours;
            // minuts.textContent = t.minuts;
            // seconds.textContent = t.seconds;

            if (t.total < 0) {
                clearInterval(timeInterval);
                hours.textContent = minuts.textContent = seconds.textContent = '00'; //HW-3.5
            }
        }
    };

    setClock('timer', deadline);


});