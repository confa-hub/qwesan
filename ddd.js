const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]



const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));


// Все следующие вызовы вернут false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });


var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// теперь roots равен [1, 2, 3], а numbers всё ещё равен [1, 4, 9]



var myFish = ['ангел', 'клоун', 'мандарин', 'хирург'];

console.log(myFish); // ['ангел', 'клоун', 'мандарин', 'хирург']

var popped = myFish.pop();

console.log(myFish); // ['ангел', 'клоун', 'мандарин']

console.log(popped); // 'хирург'


var sports = ['футбол', 'бейсбол'];
var total = sports.push('американский футбол', 'плавание');

console.log(sports); // ['футбол', 'бейсбол', 'американский футбол', 'плавание']
console.log(total);  // 4

var myFish = ['ангел', 'клоун', 'мандарин', 'хирург'];

console.log('myFish до: ' + myFish);
//myFish до: ангел,клоун,мандарин,хирург

var shifted = myFish.shift();

console.log('myFish после: ' + myFish);
//myFish после: клоун,мандарин,хирург

console.log('Удалён этот элемент: ' + shifted);
//Удалён этот элемент: ангел



var sports = ['футбол', 'бейсбол'];
var total = sports.push('американский футбол', 'плавание');

console.log(sports); // ['футбол', 'бейсбол', 'американский футбол', 'плавание']
console.log(total);  // 4


var arr = [1, 2];

arr.unshift(0); // результат вызова равен 3, новой длине массива
// arr равен [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr равен [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr равен[[-3], -2, -1, 0, 1, 2]



var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr.values();
// ваш браузер должен поддерживать цикл for...of и переменные,
// объявленные через let в циклах for
for (let letter in eArr) {
    console.log(letter);
}