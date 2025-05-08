// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]
const nums = [2, 8, 4, 7, 12, 87];

const evenNumber = [];

nums.forEach((curNumber) => {
  if (curNumber % 2 === 0) {
    evenNumber.push(curNumber);
  }
});


console.log(evenNumber);

