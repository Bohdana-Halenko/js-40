import articles from "./articles.js";

// const user = {
//     name: 'Johny',
//     lastName: 'Stone',
//     hobbies:['bike', 'run', 'write code'],
// }
// user.age = 26;

// // удаление элемента с объекта
// //delete user.age;

// // console.log('user', user.age);


// const services = {
//     getName: function (param = {}) {
//         return param.name;
//     },
//     trasformToUpperCase: function (str) {
//         return str.toUpperCase();
//     },

//     getParam: function (obj, name) {
//         return obj[name];
//     },
// };
// console.log('services', services.getParam(user, 'hobbies'));

// const result = services.trasformToUpperCase(user.lastName);
// console.log('result', result)
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// const param = 'someName';

// const obj = {
//     someName: 'Bob', //может быть массив;
//     someNumbers: 23,
// };


// console.log('articles', articles)

//----------------------------получить всех авторов из массива
// for (let article of articles) {
//     console.log('author', article.author);
// }

//----------------------------ищем через функцию

// const search = (array, name) => {
//     for (let article of array) {
//     console.log(`author`, article[name]);
// }
// }
// search(articles, 'description')

//--------------------------можно сделать поиск через promt, добавить первую строчку и исправить вызов функции

// const getSearchWorld = prompt('enter...');

// for (let article of articles) {
//     console.log('author', article.author);
// };

// const search = (array, name) => {
//     for (let article of array) {
//         console.log(`author`, article[name]);
//     }
// };
// search(articles, getSearchWorld);



const search = (array, name) => {
    const searchResults = []
    for (let article of array) {
        // console.log(`article`, article);
        const name = article.source.name;
        const searchResults = article[name];
        const searchTime = new Date();
            
            // searchResults.push({
            //     name: article.source.name,
            //     results: article[name],
            //     searchTime: new Date(),
            // });
    }
    return searchResults;
};

const searchSomeResult = search(articles, 'author');
console.log(`searchSomeResult`, searchSomeResult);