// let options = {
//     width: 1366,
//     height:768,
//     background: 'red',
//     font: {
//         size: '16px',
//         color: "#fff"
//     }
// };

// // console.log(JSON.stringify(options));
// console.log(JSON.parse(JSON.stringify(options)));

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');



inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest(); //используем конструктор

    // request.open(method, url, async, login, pass);
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    //свойства
    //status HTTP запроса код 404, 0, 200, 503
    //statusText текстовое описание ответа от сервера ОК, not faund
    //responseText / response c текстом ответа от сервера 
    //readyState текущее состояние запроса

    request.addEventListener('readystatechange', function() { // readystatechange более гибкое  чем load
        if(request.readyState === 4 && request.status == 200) {// DONE: 4
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        }else{
            inputUsd.value = "Что-то пошло не так";
        }

    });

});