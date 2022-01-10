//Проверка существования свойства. Опциональная цепочка
// const userInfo = {
//     name: "Ben",
//     age: 25,
//     address:{
//         city: "Kyiv",
//         street: "Shevchenko",
//     }
// }
// console.log(userInfo?.address?.street)




// Оператор in
// const userInfo = {
//     name: "Ben",
//     age: 25,
//     address:{
//         city: "Kyiv",
//         street: "Shevchenko",
//     }
// }

// if ("age" in userInfo) {
//     console.log(userInfo.age)
// }




//Цикл for...in
// const userInfo = {
//     name: "Ben",
//     age: 25,
//     address:{
//         city: "Kyiv",
//         street: "Shevchenko",
//     }
// }
// for (let key in userInfo) {
//     //ключи
//     console.log(key); //name, age, address
//     //значения ключей
//     console.log(userInfo[key]); // Ben, 25, object{}
// }
// for (let key in userInfo.address) {
//     //ключи
//     console.log(key); //name, age, address
//     //значения ключей
//     console.log(userInfo.address[key]); // Ben, 25, object{}
// }




//Методы объекта
// const userInfo = {
//     name: "Ben",
//     age: 25,
//     address:{
//         city: "Kyiv",
//         street: "Shevchenko",
//     },
//     showInfo(){
//     console.log(`${userInfo.name}, ${userInfo.age} years old. Address: city ${userInfo.address.city}, str.${userInfo.address.street}`);
// }
// }
// userInfo.showInfo();



//Использование this
// const userInfo = {
//     name: "Ben",
//     age: 25,
//     address:{
//         city: "Kyiv",
//         street: "Shevchenko",
//     },
//     showInfo(){
//     console.log(`${this.name}, ${this.age} years old. Address: city ${this.address.city}, str.${this.address.street}`);
// }
// }
// userInfo.showInfo();


//Преимущество this
//при переименновании переменной - ошибка
// let userInfo = {
//     name: "Ben",
//     age: 25,
//     address:{
//         city: "Kyiv",
//         street: "Shevchenko",
//     },
//     showInfo(){
//         console.log(`${this.name}, ${this.age} years old. Address: city ${this.address.city}, str.${this.address.street}`);
//         // console.log(`${userInfo.name}, ${userInfo.age} years old. Address: city ${userInfo.address.city}, str.${userInfo.address.street}`);
// }
// }
// userInfo.showInfo();

// let user = userInfo;
// userInfo = null;
// user.showInfo();



let userInfo = {
    
}
userInfo.name = "Ben",
userInfo.age = 30,    
userInfo.name = "Jhon",
delete userInfo.name,
console.log(userInfo);




//https://www.youtube.com/watch?v=ACXQO1YZOXI&list=PLM6XATa8CAG4F9nAIYNS5oAiPotxwLFIr&index=44