let i = 1;
let n = 2;
while (i <= n) {
    console.table('Привет');
    i++;
}

let c = 1;
let d = 5;
while (c <= d) {
    console.table(c);
    c++;
}

let a = 7;
let b = 22;
while (a <= b) {
    console.table(a);
    a++;
}

const obj = {
    ['Коля']: '200$',
    ['Вася']: '300$',
    ['Петя']: '400$',
}
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

let y = 1000;
let num = 0;
while (y >= 50) {
    y /= 2;
    console.log(y);
    num++;
}
console.log(`Цикл повторяется ${num} раз`);

let day5 = 5;
let all = 31;
for (let index = day5; index <= all; index += 7) {
    console.log(`Сегодня пятница, ${index} число, Нужно подготовить еженедельный отчет`);
}

let k = 100;
let iterations = 0;
while (k >= 0) {
    k -= 7;
    console.log(k);
    iterations++;
}
console.log(`Цикл повторяется ${iterations} раз`);

const book = {
    ['Книга']: 'Мастер и Маргаритта',
    ['Год выпуска']: '1966г.',
    ['Жанр']: 'Роман',
    ['Автор']: 'М.А. Булгаков'
}
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

// Остальные здания не выполнила, т.к. еще не изучали массив, но задание по нему почему то уже есть.