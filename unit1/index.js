//Unit1.1

// const value = '10';
// console.log(Number(value)); // 10
// console.log(typeof Number(value));


// const valueA = "Hello";
// console.log(Number(valueA)); // "Hello"
// console.log(typeof Number(valueA));


//Приводит к целому числу
// console.log(Number.parseInt("2px")); // 2
// console.log(Number.parseInt("42qwe74")); // 4
// console.log(Number.parseInt("15.46qwe79")); // 15
// console.log(Number.parseInt("qweqwe")); // NaN

// //Приводит к дробному числу
// console.log(Number.parseFloat("2px")); // 2
// console.log(Number.parseFloat("4qwe74")); // 4
// console.log(Number.parseFloat("15.46qwe79")); // 15.46
// console.log(Number.parseFloat("qweqwe")); // NaN



// //Проверка на число
// const validNumber = Number("51"); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true



// Math.floor(num) - возвращает наибольшее целое число,
// меньшее, либо равное указанному
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - возвращает наименьшее целое число,
// // большее, либо равное указанному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - возвращает значение числа,
// // округлённое до ближайшего целого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - возвращает наибольшее число из набора
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - возвращает наименьшее число из набора
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - возведение в степень
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
// console.log(Math.random()); // случайное число между 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10






// length
// const message = 'Hello world!';
// console.log(message.length);
// console.log("Hello world!".length);



// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"





//04.1

//     let name = "Иван";
//     let age = 25;
//     let company = "IT";
//     let position = "Frontend Developer";

//         // инициализируйте переменную message
//         // значение должно быть создано с помощью шаблонной строки и с помощью конкатенации.
//         // строковое значение должно быть создано на основе значений переменных name, age, company, position
//         // Значение должно быть составлено по шаблону:
//         // Привет, меня зовут Иван. Мне 25 лет. Я работаю на должности Frontend Developer в компании ITVDN. 

//     // let message = "Привет, меня зовут " + name + ". Мне " + age + " лет. Я работаю на должности " + position + " в компании " + company + ".";
//     let message = `Привет, меня зовут ${name}. Мне ${age} лет. Я работаю на должности ${position} в компании ${company}.`
//     console.log(message);
    
//04.2

//04.3
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { 
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// };
// checkPassword();





// function checkStorage(available, ordered) {
//   let message;

// if (ordered===0){
//   message = "There are no products in the order!"
// } else if (ordered > available){
//   message= "Your order is too large, there are not enough items in stock!"
// } else {
//   message= "The order is accepted, our manager will contact you"
// }

//   return message;
// }
// checkStorage();




// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; 
//   return isInRange;
// }
// isNumberInRange();


// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip"; 
//   return canAccessContent;
// }
// checkIfCanAccessContent();



// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line
//   return isNotInRange;
// }
// isNumberNotInRange();


// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
  
// if ( totalSpent < 5000){
//   discount = BASE_DISCOUNT
// } else if (totalSpent >= 5000 && totalSpent<20000 ){
//   discount= BRONZE_DISCOUNT
// } else if ( totalSpent >= 20000 && totalSpent <50000){
//   discount=SILVER_DISCOUNT
// }
//   else{
//     discount = GOLD_DISCOUNT
//   }
//   return discount;
// }
// getDiscount();



        //Внесите изменения в сценарий. Сделайте, чтобы значение для радиуса и высоты вводил пользователь.
        //При выводе значений используйте форматированный вывод, например, "объем цилиндра с высотой X и радиусом Y = Z"

        // alert("Вычисление объема цилиндра.");
        // let V;
        // const Pi = 3.1415926535; 
        // let r = Number(prompt('Радиус цилиндра.')); 
        // let h = Number(prompt('Высота цилиндра.')); 

        // V = Pi * r * r * h;
        // console.log(alert(`объем цилиндра с высотой ${h} и радиусом ${r} = ${V}`));
 
        
        
// let inputX = '10';
// let inputY = '20';
// let sum = inputX * inputY;
// console.log(sum);


//Какие значения будут выведены на экран?
// let value = 10 - 10;
//     if (value) {
//         console.log(`1`);
//     }
//     else {
//         console.log(`2`);
//     }
//Выведено '2'



//Запросите у пользователя его возраст. Если возраст пользователя больше 18
//– выведите на экран сообщение «доступ разрешен». Если введенное пользователем значение
//меньше 18 - выведите на экран сообщение «доступ запрещен»

// let age = prompt("Введите Ваш возраст"); 
//   if (age >= 18) { 
//     alert("Доступ разрешен");
//   } else {
//     alert("Доступ запрещен");
//   }



// function checkStorage(available, ordered) {
//   let message;

// message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//   return message;
// }



// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
// message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//   return message;
// }



// function getSubscriptionPrice(type) {
//   let price;

//  switch (type) { 
//     case "starter": 
//       price = 0; 
//       break;

//     case "professional": 
//       price = 20; 
//       break;

//     case "organization": 
//       price = 50; 
//       break;
//   }
//   return price;
// }




// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

// switch (password) {
//   case null:
//     message = "Canceled by user!";
//     break;

//   case ADMIN_PASSWORD:
//     message = "Welcome!";
//     break;

//   default:
//     message = "Access denied, wrong password!";
// }

//   return message;
// }





// function getShippingCost(country) {
//   let message;
// switch (country) {
//   case "China":
//     message = "Shipping to China will cost 100 credits";
//     break;

//   case "Chile":
//     message = "Shipping to Chile will cost 250 credits";
//     break;

//   case "Australia":
//     message = "Shipping to Australia will cost 170 credits";
//     break;

//   case "Jamaica":
//     message = "Shipping to Jamaica will cost 120 credits";
//     break;

//   default:
//     message = "Sorry, there is no delivery to your country";
// }
//   return message;
// }




// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;
//   return message;
// }


// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;  //21
// const firstElement = courseTopic[0];  //J
// const lastElement = courseTopic[courseTopic.length - 1];   //s



//while

// let i = 0;
// while (i < 8) {
//   i += 1;
//   console.log("Итерация:", i)
// }
// console.log("Конец цикла")


// do ... while

// let i = 0;
// do {
//   i += 1;
//   console.log("Итерация:", i)
// }
// while (i < 10);
// console.log("Конец цикла")


// let value1 = prompt("Введите значение больше 5");
// while (value1 <= 5) {
//   value1= prompt("Введите значение больше 5");
// }
// alert("Вы ввели " + value1);




// let value2 = 0;
// do {
//   value2 = prompt("Введите значение больше 5");
// }
// while (value2 <= 5);
// alert("Вы ввели " + value2);




//for

// for (let i = 2; i < 10; i += 1) {
//   console.log(i);
// }


//Сумма всех чисел 
// const target = 20;
// let sum = 0;

// for (let i = 0; i <= target; i += 1){
//   sum += i;
// }
// console.log(sum);





//Значение последнего элемента 
// const clients = ["Mango", "Poly", "Ajax", "Alex", "Ross", "Poll"];
// const lastElement = clients.length - 1;
// console.log(lastElement);
// console.log(clients[lastElement]);


// clients[0] = "Olli";
// console.log(clients)




// const clients = ["Mango", "Ajax", "Poly"];
// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }


// const clients = ["Mango", "Ajax", "Poly"];
// for (const client of clients) {
//   console.log(client);
// }
//Mango
//Ajax
//Poly


// const string = "javascript";
// for (const character of string) {
//   console.log(character);
// }
//j
//a
//v
//a
//s
//c
//r
//i
//p
//t



//Поиск имени клиента в массиве
// const clients = ["Mango", "Poly", "Ajax", "Alex", "Ross", "Poll"];
// const clientNameToFind = "Ross";
// let message;
// for (const client of clients) {
//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }

//   // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = "Клиента с таким именем нету в базе данных!";
// }

// console.log(message); // "Клиент с таким именем есть в базе данных!"




//Числа больше 30
// const numbers = [1, 5, 3, 8, 20, 44, 23, 13, 2, 4, 90, 34, 67, 7, 11, 82];
// const threshold = 30;
// for (let i = 0; i < numbers.length - 1; i += 1) {
//   if (numbers[i] < threshold) {
//     continue
//   }
//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`);
// }


//9.01
//FOR
//Напишите сценарий, который найдет минимальное, максимальное значения массива, а также выведет сумму всех элементов массива.
// const values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3]; 
// let max = Number.MIN_VALUE;
// for (let i = 0; i < values.length; i += 1){
//   const element = values[i];
//   if (element > max) {
//     max = element;
//   }
// }
// console.log("Максимальное значение - ", max) // 125
  

// const numbers = [10, 20, 4, 6, 11, 9, 125, -1, 8, 3]; 
// let min = Number.MAX_VALUE;
// for (let i=0; i < numbers.length; i += 1){
//   const element = numbers[i];
//   if (element < min) {
//     min = element;
//   }
// }
//   console.log("Минимальное значение - ", min) //-1


// const numbers = [10, 20, 4, 6, 11, 9, 125, -1, 8, 3]; 
// let sum = 0;
// for (let i=0; i < numbers.length; i += 1){
//   const element = numbers[i];
//  sum +=element
// }
//   console.log("Сумма чисел в массиве - ", sum) // 195



//9.02
//FOR ... OF
// Поменяйте сценарий таким образом, чтобы обход данных массива происходил с помощью цикла for...of
// const values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3]; 
// let max = Number.MIN_VALUE;
// for (value of values){
//   if (value > max) {
//     max = value;
//   }
// }
// console.log("Максимальное значение - ", max) // 125


// const numbers = [10, 20, 4, 6, 11, 9, 125, -1, 8, 3]; 
// let min = Number.MAX_VALUE;
// for (number of numbers){
//   if (number < min) {
//     min = number;
//   }
// }
//   console.log("Минимальное значение - ", min) //-1
    

// const numbers = [10, 20, 4, 6, 11, 9, 125, -1, 8, 3]; 
// let sum = 0;
// for (number of numbers){
//  sum +=number
// }
// console.log("Сумма чисел в массиве - ", sum) // 195



//9.03
//Напишите сценарий, который найдет в массиве все отрицательные значения и заменить их на значения 0.
//После этого выведет на экран все элементы массива.

// const values = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];
 
// for (let i = 0; i < values.length; i += 1){
//   if (values[i] < 0) {
//     values[i] = 0
//   }
// }

// for (value of values) {
//   console.log(value)
// }


//9.04
//Дано массив. Создайте на основе значений этого массива два новых массива. В один массив поместите все четные значения, а во второй все нечетные.
//Выведите на экран значения, которые вошли в первый массив и во второй массив.




//9.08
//Дан массив целых чисел. Проверьте есть ли в нем одинаковые элементы. Если есть выведите их на экран.

        let values = [10, 20, 4, 6, 11, 9, 125, 10, 8, 0, 3, 5, 89, 12, 46, 77, 3];

        for (let i = 0; i < values.length - 1; i++) {

            const current = values[i];

            // k = i - так как нам не нужно проверять предыдущие значения, то вложенный цикл проверяет текущее значение current с последующими
            // Последний элемент уже сравнивать не нужно, так как предпоследний элемент будет проверен на равенство с последним.
            // Поэтому первый цикл на 16 строке запускается на одну итерацию меньше, чем размер массива.
            for (let k = i + 1; k < values.length; k++) {
                const element = values[k];

                if (current == element) {
                    console.log(`Значение ${current} повторяется`);
                    break;
                }
            }
        }
    