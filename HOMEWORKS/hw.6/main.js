// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let s = 'hello world, lorem ipsum, javascript is cool';
console.log(s.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str = 'hello world, lorem ipsum, javascript is cool';
let upperCase = str.toUpperCase();
console.log(upperCase);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str2 = 'HELLO WORLD, LOREM IPSUM, JAVASCRIPT IS COOL';
let lowerCase = str2.toLowerCase()
console.log(lowerCase);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str3 = ' dirty string   ';
let replaceAll =  str3.trimStart(' ');
console.log(replaceAll);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str4 = 'Ревуть воли як ясла повні';
let arr = Array.from(str4);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arr2 = [10,8,-7,55,987,-1011,0,1050,0];
console.log(arr2);
arr2New = arr2.map(value => value+'' );
console.log(arr2New);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//   let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
let sort = nums.sort(function(a,b){
  return a-b
})

console.log(sort);

let sort2 = nums.sort(function(a,b){
  return b-a
})
console
console.log(sort2);

// - є масив
let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let map = coursesAndDurationArray.map((value,index ) => {
  let u = {...value}
  value.id = index+1
  return value;
})
console.log(map);


// -- відсортувати його за спаданням за monthDuration
let sort3 = coursesAndDurationArray.sort(function (a,b){
  return b.monthDuration - a.monthDuration
})
console.log(sort3);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filteredcoursesAndDurationArray = coursesAndDurationArray.filter(value => value.monthDuration > 5 );
console.log(filteredcoursesAndDurationArray);

// описати колоду карт (від 6 до туза без джокерів)

let cards = [
  { cardSuit: 'spade', value: '6', color: 'black' },
  { cardSuit: 'diamond', value: '6', color: 'red' },
  { cardSuit: 'heart', value: '6', color: 'red' },
  { cardSuit: 'clubs', value: '6', color: 'black' },
  { cardSuit: 'spade', value: '7', color: 'black' },
  { cardSuit: 'diamond', value: '7', color: 'red' },
  { cardSuit: 'heart', value: '7', color: 'red' },
  { cardSuit: 'clubs', value: '7', color: 'black' },
  { cardSuit: 'spade', value: '8', color: 'black' },
  { cardSuit: 'diamond', value: '8', color: 'red' },
  { cardSuit: 'heart', value: '8', color: 'red' },
  { cardSuit: 'clubs', value: '8', color: 'black' },
  { cardSuit: 'spade', value: '9', color: 'black' },
  { cardSuit: 'diamond', value: '9', color: 'red' },
  { cardSuit: 'heart', value: '9', color: 'red' },
  { cardSuit: 'clubs', value: '9', color: 'black' },
  { cardSuit: 'spade', value: '10', color: 'black' },
  { cardSuit: 'diamond', value: '10', color: 'red' },
  { cardSuit: 'heart', value: '10', color: 'red' },
  { cardSuit: 'clubs', value: '10', color: 'black' },
  { cardSuit: 'spade', value: 'jack', color: 'black' },
  { cardSuit: 'diamond', value: 'jack', color: 'red' },
  { cardSuit: 'heart', value: 'jack', color: 'red' },
  { cardSuit: 'clubs', value: 'jack', color: 'black' },
  { cardSuit: 'spade', value: 'queen', color: 'black' },
  { cardSuit: 'diamond', value: 'queen', color: 'red' },
  { cardSuit: 'heart', value: 'queen', color: 'red' },
  { cardSuit: 'clubs', value: 'queen', color: 'black' },
  { cardSuit: 'spade', value: 'king', color: 'black' },
  { cardSuit: 'diamond', value: 'king', color: 'red' },
  { cardSuit: 'heart', value: 'king', color: 'red' },
  { cardSuit: 'clubs', value: 'king', color: 'black' },
  { cardSuit: 'spade', value: 'ace', color: 'black' },
  { cardSuit: 'diamond', value: 'ace', color: 'red' },
  { cardSuit: 'heart', value: 'ace', color: 'red' },
  { cardSuit: 'clubs', value: 'ace', color: 'black' },
];
// - знайти піковий туз
let sAce = cards.filter(card => card.cardSuit === 'spade' && card.value === 'ace')
console.log(sAce);
// - всі шістки
let ssex = cards.filter(card => card.value === '6')
console.log(ssex);
// - всі червоні карти
let cred = cards.filter(card => card.color === 'red')
console.log(cred);
// - всі буби
let cdiamond = cards.filter(card => card.cardSuit === 'diamond')
console.log(cdiamond);
// - всі трефи від 9 та більше

console.log(cards.filter(card => card.cardSuit === "clubs" && (card.value  >="9"  || parseInt(card.value) >= 9)));


