// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'
const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

const result = people.map(curPerson => curPerson.name)

console.log(result);
