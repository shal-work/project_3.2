
// Урок 3.9. Стандарт ES6. Интерполяция
let name = "Ivan",
    age = 30.
    mail = 'exerrs@mail.ru';

    document.write('<br>');
    document.write('Пользователю ' + name + ' ' + age + ' лет. Его почта: ' + mail); //старая
    document.write('<br>');
    document.write(`Пользователю ${name} ${age} лет. Его почта: ${mail}`);// Стандарт ES6


//Урок 3.10. ES6. let и const
function makeArray() { //для каждой итерации создается своя переменная 
    var items = []; //пустой массив
    for (var i = 0; i < 10; i++) {
        var item = function() {
            console.log(i);
        };
        items.push(item);
    };
    return items;
}

var arr = makeArray();
arr[1]();
arr[3]();
arr[7]();


function makeArray1() { //для каждой итерации создается своя переменная 
    var items = []; //пустой массив
    for (let i = 0; i < 10; i++) {
        var item = function() {
            console.log(i);
        };
        items.push(item);
    };
    return items;
}

var arr1 = makeArray1();
arr1[1]();
arr1[3]();
arr1[7]();


// Урок 3.11. ES6. Стрелочные функции
let fun = () => {
    console.log(this);
};
fun();

let obj = {
    number: 5,
    sayNumber: function() {
        let say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    }
    show();
});


// Урок 3.12. ES6. Параметры по умолчанию
//старая схема ES5
function calcOrDouble(number, basis) {
    basis = basis || 2;
    console.log(number * basis);
}
calcOrDouble(2,5)
calcOrDouble(6);
//по ES6
function calcOrDouble1(number, basis = 2) {
    console.log(number * basis);
}
calcOrDouble1(2,5)
calcOrDouble1(6);



// Урок 3.13. ES6. Классы

class Rectangle {
    constructor(height, width = 20) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}
const square = new Rectangle(10, 10);
const square1 = new Rectangle(10);

console.log(square.calcArea());
console.log(square1.calcArea());

// Урок 3.14. ES6. Spread-операторы
let video = ['ytube', 'vimo', 'runet'],
    blogs = ['wordpress', 'liver', 'bloger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);   
    console.log(b);   
    console.log(c);  
    console.log(a + b + c);  

}

let numbers = [2, 5, 7];

log (...numbers);
