// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function sRect(a, b) {
  return a * b;
}
const sR = sRect(10, 5);
console.log(sR)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function sCir(r) {
  return Math.PI * r**2;
}
const sC = sCir(10);
console.log(sC)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function sCyl(h, r) {
  return Math.PI * 2 * r * h;
}
const sCr = sCyl(10, 5);
console.log(sCr)

// - створити функцію яка приймає масив та виводить кожен його елемент
const array = [23, 444,`massiwe`, true];
function arrPrinter(arr) {
  for (const item of arr) {
    console.log(item);
  }
}
arrPrinter(array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
  function pCreator(text) {
    document.write(`<p>${text}</p>`);
  }
pCreator(`HELLO`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulCreator1(text) {
  document.write(`
       <ul>
         <li>${text}</li>
         <li>${text}</li>
         <li>${text}</li>
       </ul>
  `);
}
ulCreator1(`HELLO !!`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulCreator2(text, count) {
  document.write(`<ul>`);
  for (let i = 0; i < count; i++) {
    document.write(`<li>${text}</li>`)
  }
  document.write(`</ul>`);
}
ulCreator2(`HELLO !!!`, 4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const array2 = [23, 444,`massiwe`, true, `dfg`, `hgjghj`];
function ulCreator3(arr) {
  document.write(`<ul>`);
    for (const item of arr) {
      document.write(`<li>${item}</li>`);
  }
    document.write(`</ul>`);
}
ulCreator3(array2);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const users = [
  {id:1, name:`igor`, age:23},
  {id:2, name:`kolya`, age:25},
  {id:3, name:`vasya`, age:27},
  {id:4, name:`vova`, age:30},
  {id:5, name:`oleh`, age:31},
  {id:6, name:`taras`, age:31},
  {id:7, name:`marko`, age:32},
  {id:8, name:`max`, age:33},
  {id:9, name:`olya`, age:29},
  {id:10, name:`vika`, age:23},
  {id:11, name:`tanya`, age:23}
];
function usersPrinter(arr) {
  for (const user of arr) {
    document.write(`<div>id: ${user.id}  name: ${user.name}  age: ${user.age}</div>`)
  }
}
usersPrinter(users)



// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250