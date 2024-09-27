let password = 'пароль';
let solution = prompt('введите пароль');
if (solution === password) { alert('Пароль введен верно') }
else { alert('Пароль введен неправильно') };

let g = Number(prompt('введите число'));
if (g > 0 && g < 10) { console.log('Верно') }
else { console.log('Не верно') };

let h = Number(prompt('Введите первое число'));
let j = Number(prompt('Введите второе число'));
if (h > 100 || j > 100) { console.log('Верно') }
else { console.log('Не верно') };

let k = 2;
let l = 3;
alert(+k + +l);

let monthNumber = prompt('Введите номер месяца');
switch (monthNumber) {
    case '12':
    case '1':
    case '2':
        console.log("Зима");
        break;
    case '3':
    case '4':
    case '5':
        console.log("Весна");
        break;
    case '6':
    case '7':
    case '8':
        console.log("Лето");
        break;
    case '9':
    case '10':
    case '11':
        console.log("Осень");
        break;
    default:
        console.log("Что-то пошло не так.");
}

let variable = prompt('Введите любое число');
let results = Number(variable);

if (isNaN(results)) { alert('Введенное значение не является числом') }
else { alert('Введенное значение явлется числом') };

if (results % 2 === 0) { alert('Введенное число является четным') }
else { alert('Введенное число является не четным') };

let clientOS = Number(prompt('Укажите вашу операционную систему 0-iOS, 1-Android'));
if (clientOS < 0) { alert('Значение введено не верно') }
if (clientOS > 1) { alert('Значение введено не верно') }
let OS = Number(prompt('Укажите год выпуска вашего телефона'));
if (clientOS === 0 && OS > 2015 || clientOS === 0 && OS === 2015) { alert('Установите полную версию iOS по ссылке') }
if (clientOS === 0 && OS < 2015) { alert('Установите облегченную версию iOS по ссылке') }
if (clientOS === 1 && OS > 2015) { alert('Установите полную версию Android по ссылке') }
if (clientOS === 1 && OS < 2015) { alert('Установите облегченную версию Android по ссылке') };