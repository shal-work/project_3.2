//window.addEventListener('load');

window.addEventListener('DOMContentLoaded', function () {
    'use sctict';
    let tab = document.querySelectorAll('.info-header-tab'), //потомок
        info = document.querySelector('.info-header'), //родитель
        tabContent = document.querySelectorAll('.info-tabcontent');


    let hideTabComtent = function (a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show'); //удаляем класс show, 
            tabContent[i].classList.add('hide'); //но этого недостаточно надо hide (скрыть)

        }
    }

    hideTabComtent(1);


    let showTabContent = function (b) { //отображаем
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide'); //сначало удалим
            tabContent[b].classList.add('show'); //потом добавим и отобразим
        }
    };

    info.addEventListener('click', function (event) {
        let target = event.target;

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
    let deadline = '2020-12-28 20:10:00'; //HW-3.5

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minuts = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / 1000 / 60 / 60);
        // days = Math.floor((t/1000/60/60) % 24); // количество дней для примера

        return {
            'total': t,
            'hours': hours,
            'minuts': minuts,
            'seconds': seconds,
        };
    };

    function setClock(id, endTime = deadline) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minuts = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);

            //Ответ от beonMax ДЗ 3.5
            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            };

            hours.textContent = addZero(t.hours);
            minuts.textContent = addZero(t.minuts);
            seconds.textContent = addZero(t.seconds);

            if (t.total < 0) {
                clearInterval(timeInterval);
                hours.textContent = minuts.textContent = seconds.textContent = '00'; //HW-3.5
            }
        }
    };


    setClock('timer', deadline);
    //setClock('timer');



    //Modal

    let more = document.querySelector('.more'),
        description = document.querySelectorAll('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');


    function infoTabcontent() {
        for (let i = 0; i < description.length; i++) {
            description[i].addEventListener('click', function () {
                overlay.style.display = 'block';
                this.classList.add('more-splash'); //где-то в css
                document.body.style.overflow = 'hidden';
            });
        }
    }
    infoTabcontent();


    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash'); //где-то в css
        document.body.style.overflow = 'hidden';
    });


    close.addEventListener('click', function () {
        overlay.style.display = "none";
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    //Lesson 4.3 + 4.4 (через POST, без метода JSON )

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся',
        failure: 'Что-то пошло не так...',
    };

    let form = document.querySelector('.main-form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        contactForm = document.getElementById('form'); //ДЗ-4.3

    statusMessage.classList.add('status'); // status прописан в css(в уроке) здесь я не нашел

    //запрос для модальному окну
    function sendForm(elem) {
        elem.addEventListener('submit', function (event) {

            event.preventDefault(); //отключаем стандартное поведение страницы (скролиться вверх)
            statusMessage.style.color = "#c78030";
            elem.appendChild(statusMessage); //оповещаем пользователя

            //получим данные который введет пользователь через вствроенный в браузер объект FormData

            let formData = new FormData(elem); //FormData - создает структуру в формате 'ключ: значение' (ключ в name, значение от пользователя)

            function posData(data) {
                return new Promise(function (resolve, reject) {

                    //формируем запрос

                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    /*  в формате FormData */

                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //в формате FormData

                    //наблюдаем за состоянием нашего запроса

                    request.addEventListener('readystatechange', function () { //в видео появилось   request.onreadystatechange = function() {
                        if (request.readyState < 4) {
                            statusMessage.innerHTML = message.loading; //resolve()
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve()
                        } else {
                            reject()
                        }
                    });

                    request.send(data); //отпарвляем на сервер в формате FormData  

                });

            } //End posData

            function clearInput() {
                //надо очистить input в форме
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                };
            }

            posData(formData)
                .then(() => statusMessage.innerHTML = message.success, () => statusMessage.innerHTML = message.failure)
                
                // .then(()=> statusMessage.innerHTML = message.loading)
                // .then( () => {
                //     thanksModal.style.display = 'block';
                //     mainModal.style.display = 'done';
                //     statusMessage.innerHTML = '';
                // } )
                // .catch(()=> statusMessage.innerHTML = message.failure)

                .then(clearInput) //если после .catch то .then запускается всегда 



        });
    };

    sendForm(form);
    sendForm(contactForm);
});