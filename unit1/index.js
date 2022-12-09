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

    let name = "Иван";
    let age = 25;
    let company = "ITVDN";
    let position = "Frontend Developer";

        // инициализируйте переменную message
        // значение должно быть создано с помощью шаблонной строки и с помощью конкатенации.
        // строковое значение должно быть создано на основе значений переменных name, age, company, position
        // Значение должно быть составлено по шаблону:
        // Привет, меня зовут Иван. Мне 25 лет. Я работаю на должности Frontend Developer в компании ITVDN. 

    // let message = "Привет, меня зовут " + name + ". Мне " + age + " лет. Я работаю на должности " + position + " в компании " + company + ".";
    let message = `Привет, меня зовут ${name}. Мне ${age} лет. Я работаю на должности ${position} в компании ${company}.`
    console.log(message);
    
//04.2

//04.3
