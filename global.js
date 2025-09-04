// console.log(global);

// global.setTimeout(() => {
//     console.log('In time out')
// }, 3000);

setTimeout(() => {
         console.log('In time out');
         clearInterval(value);
     }, 3000);

const value = setInterval(() => {
    console.log('iN THE INTERVAL');
}, 1000);

console.log(__dirname);
console.log(__filename);