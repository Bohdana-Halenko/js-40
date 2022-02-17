const str = "a";
const mes = (str.split('').reverse().join('').indexOf('!') === 0)
    ? 'h'
    :"b";
console.log(mes);