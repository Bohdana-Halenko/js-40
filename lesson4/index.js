// function multipliesNumbers(p1, p2) {
//     console.log(`Результат сложения: ${p1 * p2}`);
// }
// multipliesNumbers(2, 6);


//----------------------------проверка на возраст оператор if...else
// function ref(age, ageNow) {
    
//     if (age < ageNow) {
//         console.log(`Ок, проходишь`);
//         return;
//     } else if (age === ageNow) {
//         console.log(`Ок...`);
//         return;
//     } else {
//         console.log(`No-no-no`);
//         return;
//     }
// }
// ref(18, 20);


// function ref(age, ageNow) {
    
//     if (age <= ageNow) {
//         console.log(`Ок, проходишь`);
//         return;
//     }
//     console.log(`No-no-no, you are not ${age} years old, you are ${ageNow} years old!`);
// }
// ref(18, 13);



const test = function () {
  const uniqueArray = [];
  const convertToArray = Array.from(arguments);

  for (const element of convertToArray) {
    if (!isNaN(element)) {
      uniqueArray.push(Number(element));
    }
  }

  return uniqueNumbers(uniqueArray);
};

const uniqueNumbers = (array) => {
  const uniqueNumbersArray = [];

  for (const element of array) {
    if (!uniqueNumbersArray.includes(element)) {
      uniqueNumbersArray.push(element);
    }
  }
  return uniqueNumbersArray;
};

const res = test(34, "34", 545, 65, 7, "monday", 76, 87, 7);
console.log(`res`, res);

(() => {
  fn1();
  fn2();
  fn3();
})();