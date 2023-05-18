// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача.

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
  let arr=[1,2,3,4,5,6,7,8,9,10]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 ={
     title:`Arsen Lupen`,
     pageCount:635,
     genre:`adventures`,
}
console.log(book1)
console.log(book1.title)
console.log(book1.pageCount)
console.log(book1.genre)

let book2 ={
  title:`Atomic Habits`,
  pageCount:437,
  genre:`psyhology`,
}
console.log(book2)
console.log(book2.title)
console.log(book2.pageCount)
console.log(book2.genre)

let book3 ={
  title:`Poems`,
  pageCount:342,
  genre:`poems`,
}
console.log(book3)
console.log(book3.title)
console.log(book3.pageCount)
console.log(book3.genre)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let bookA ={
  title:`Arsen Lupen`,
  pageCount:635,
  genre:`adventures`,
  authors:[{name:`M.L`, age: 57}],
}

let bookB ={
  title:`Atomic Habits`,
  pageCount:437,
  genre:`psyhology`,
  authors:[{name:`j.R`, age: 34}],
}

let bookC ={
  title:`Poems`,
  pageCount:342,
  genre:`poems`,
  authors:[{name:`T.S.`, age: 38}],
}

  // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача.
let users=[
  {name:`andriy`, username:`dsgdsg`, password:`pas1`},
  {name:`andriy`, username:`dsgdsg`, password:`pas2`},
  {name:`andriy`, username:`dsgdsg`, password:`pas3`},
  {name:`andriy`, username:`dsgdsg`, password:`pas4`},
  {name:`andriy`, username:`dsgdsg`, password:`pas5`},
  {name:`andriy`, username:`dsgdsg`, password:`pas6`},
  {name:`andriy`, username:`dsgdsg`, password:`pas7`},
  {name:`andriy`, username:`dsgdsg`, password:`pas8`},
  {name:`andriy`, username:`dsgdsg`, password:`pas9`},
  {name:`andriy`, username:`dsgdsg`, password:`pass10`},
];
console.log(users)
console.log(users[0]["password"])
console.log(users[1]["password"])
console.log(users[2]["password"])
console.log(users[3]["password"])
console.log(users[4]["password"])
console.log(users[5]["password"])
console.log(users[6]["password"])
console.log(users[7]["password"])
console.log(users[8]["password"])
console.log(users[9]["password"])

// - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x=3
if (x !== 0) {
  console.log(`вірно`)
}
else if (x === 0) {
  console.log(`невірно`);
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time= +prompt(`Введіть число від 0 до 59`)
if (time > 0 && time <=15) {
  console.log(`перша четверть`);
}
else if (time >15 && time <=30) {
  console.log(`друга чверть`);
}
else if (time >30 && time <=45) {
  console.log(`третя чверть`);
}
else if (time >45 && time <=59) {
  console.log(`четверта чверть`);
}

let sch= +prompt('введіть порядковий номер дня тижня');
switch (sch) {
  case 1: {
    console.log(`Monday`);
  }
    break;
  case 2:{
    console.log(`Tuesday`);
  }
  break;
  case 3: {
    console.log(`Wednesday`);
  }
    break;
  case 4: {
    console.log(`Thursday`);
  }
    break;
  case 5: {
    console.log(`Friday`);
  }
    break;
  case 6: {
    console.log(`Saturday`);
  }
    break;
  case 7: {
    console.log(`Sundey`);
  }
    break;
  default: console.log(`Введіть число від 1 до 7`);

}





