"use strict"

// console.log('35' + - "22");

// console.log('35' * "22");

// let myVar = 22;
// console.log('558' > myVar++);

// let usersCounter = 0;
// let newUsers = usersCounter++;
// console.log(newUsers);

// Вариант 5
// console.log(!false && 11 || 18 && !'');
// ((true && 11) || (18 && true))

// Вариант 6 
// let name = 0;
// console.log(name ?? "Без имени");

// УРОК №6 ===================================================
// Какой или какие из вариантов не верны

// Вариант №1
// if (1 === "1") {
//    console.log('Истина!');
// } else {
//    console.log('Ложь!');
// }

// Вариант №2
// if (5 == "5") {
//    console.log('Истина!');
// } else {
//    console.log('Ложь!');
// }

// Вариант №3
// let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
// console.log(message);

// Вариант №4
// if (0) {
//    console.log('Ложь!');
// } else if (" ") {
//    console.log('Истина!');
// }
// ============================================================

// УРОК №7 =====================================================
// Задача №1
/*
for (let i = 1; i < 6; i++) {
   console.log(i);
}
*/

// Задача №2
/*
let num = 8;
while (num) {
   console.log(num);
   num--;
}
*/

// Задача №3
/*
let num = 0;
while (num < 3) {
   console.log(`Число: ${num}`);
   num++;
}
*/

// Задача №4 
// прекратить работу цикла №1 когда size равна 1
/*
firstFor: for (let num = 0; num < 2; num++) {
   for (let size = 0; size < 3; size++) {
      if (size == 1) break firstFor;
      console.log(size);
   }
}
*/
// =============================================================

// УРОК №10 =====================================================
// Задача №1. Получить верное значение округления
let sourceNum = 1.005 + Number.EPSILON;
let numOne = Math.round(sourceNum * 100) / 100;
console.log(numOne);

// Задача №2. Получить число 135.58 из строки
let value1 = "135.58px";
let valueNumb = parseFloat(value1);
console.log(valueNumb);
console.log(typeof valueNumb);

// Задача №3. Построить верное условное ветвление
let value2 = 58 + "Фрилансер";
if (isNaN(value2)) {
   console.log('Результат выражения NaN');
}

// Задача №4. Найти максимальное число
let maxNum = Math.max(10, 58, 39, -150, 0);
console.log(`Максимальное число: ${maxNum}`);

// Задача №5. Округлить число 58.858 до числа 58
console.log(Math.floor(58.858));
// ===============================================================

// УРОК №11 =================================================
// Задача №1. Верна ли запись?
let fls = "фрилансер";
let text = `Привет! Я ${fls}`;
// Ожидаем получить Првиет! Я фрилансер
console.log(text);

// Задача №2. Получить символ "н" строки:
let text2 = 'фрилансер';
let mySymbol = text2[5];
console.log(mySymbol);

// Задача №3. Верно?
let text3 = 123 + "456";
// ожидаем 579
console.log(text3);
// console.log(typeof text3);

// Задача №4. Получить строку в верхнем регистре
let text4 = 'фрилансер';
console.log(text4.toUpperCase());

// Задача №5. Получить подстроку "лан" из:
let text5 = 'фрилансер';
console.log(text5.slice(3, 6));

// Задача №6. true или false ?
let text6 = 'фрилансер';
console.log(text6.includes('лан', 4));
// ==========================================================