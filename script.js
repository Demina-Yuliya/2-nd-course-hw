let a = 10;
alert(a);
a = alert('20');

let year = 2007;
alert(year);

let creator = ('Brendan Eich');
alert(creator);

let x = 10;
let y = 2;
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);

let result = y ** 5;
alert(result);

let c = 9;
let d = 2;
alert(c % d);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = Number(prompt('Сколько вам лет?'));
alert(age);

const user = {
    name: 'Админ',
    age: 25,
    "isAdmin": true
};

const name = prompt('Введите ваше имя:');
alert(`Привет, ${name}!`);

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

let k = Number(2);
let l = Number(3);
alert(k + l);

let monthNumber = Number(prompt('Введите месяц по счету'));
switch (monthNumber) {
    case '1':
        console.log('Январь, Зима');
        break;
    case '2':
        console.log('Февраль, Зима');
        break;
    case '3':
        сonsole.log('Март, Весна');
        break;
    case '4':
        сonsole.log('Апрель, Весна');
        break;
    case '5':
        сonsole.log('Май, Весна');
        break;
    case '6':
        сonsole.log('Июнь, Лето');
        break;
    case '7':
        сonsole.log('Июль, Лето');
        break;
    case '8':
        сonsole.log('Август, Лето');
        break;
    case '9':
        сonsole.log('Сентябрь, Осень');
        break;
    case '10':
        сonsole.log('Октябрь, Осень');
        break;
    case '11':
        console.log('Ноябрь, Осень');
        break;
    case '12':
        console.log('Декабрь, Зима');
        break;
    default:
        if (monthNumber > 12) console.log('не верное число');
        break;
}

let clientOS = Number(prompt('Укажите вашу операционную систему 0-iOS, 1-Android'));
if (clientOS < 0) { alert('Значение введено не верно') }
if (clientOS > 1) { alert('Значение введено не верно') }
let OS = Number(prompt('Укажите год выпуска вашего телефона'));
if (clientOS === 0 && OS > 2015 || clientOS === 0 && OS === 2015) { alert('Установите полную версию iOS по ссылке') }
if (clientOS === 0 && OS < 2015) { alert('Установите облегченную версию iOS по ссылке') }
if (clientOS === 1 && OS > 2015) { alert('Установите полную версию Android по ссылке') }
if (clientOS === 1 && OS < 2015) { alert('Установите облегченную версию Android по ссылке') };