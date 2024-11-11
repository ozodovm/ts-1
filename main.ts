// // 1-masala
// function reverseNumber(num: number): number {
//     const reversed = parseInt(num.toString().split('').reverse().join(''));
//     return reversed;
// }
// console.log(reverseNumber(123)); 
// // 2-masala
// function factorial(n: number): number {
//     if (n <= 1) return 1;
//     return n * factorial(n - 1);
// }
// console.log(factorial(5)); 
// // 3-masala
// interface Person {
//     name: string;
//     age: number;
// }
// function compareAges(person1: Person, person2: Person): void {
//     const olderPerson = person1.age > person2.age ? person1 : person2;
//     console.log(olderPerson.name);
// }
// const personA = { name: "Alice", age: 30 };
// const personB = { name: "Bob", age: 25 };
// compareAges(personA, personB); 
// // 4-masala
// function printNumbers(n: number): void {
//     if (n < 1) return;
//     console.log(n);
//     printNumbers(n - 1);
// }
// printNumbers(5); 
// // 5-masala
// const user = { name: "Shaxzod" };
// const age = { age: 25 };
// const job = { job: "Developer" };

// function mergeObjects(...objects: object[]): object {
//     return Object.assign({}, ...objects);
// }
// const mergedObject = mergeObjects(user, age, job);
// console.log(mergedObject);
// // 6-masala
 
// // 7-masala
// function maxInArr(numbers: number[]): number {
//     return Math.max(...numbers);
// }
// const numbers = [4, 7, 2, 9, 6];
// console.log(maxInArr(numbers)); 
// // 8-masala
// const arr = [2, 4, 6, 7, true, false, null, undefined];
// function sumArray(arr: any[]): number {
//     return arr.reduce((sum, value) => sum + (typeof value === "number" ? value : 0), 0);
// }
// console.log(sumArray(arr)); 

// // ------------------------------------------------------------------------------------------------


// // 1. 
// function promptToArray(): string[] {
//     return Array.from({ length: 3 }, (_, i) => prompt(`Qiymat ${i + 1}:`) || '');
// }

// // 2. 
// function maxInArray(numbers: number[]): number {
//     return Math.max(...numbers);
// }

// // 3. 
// function checkWordInArray(words: string[], searchWord: string): boolean {
//     return words.includes(searchWord);
// }
// // 4. 
// function evenNumbers(numbers: number[]): number[] {
//     return numbers.filter(num => num % 2 === 0);
// }

// // 5. 
// function sumOfArray(numbers: number[]): number {
//     return numbers.reduce((sum, num) => sum + num, 0);
// }

// // 6.
// interface User {
//     id: number;
//     name: string;
//     email: string;
//     password: string;
//     address: string;
// }
// function getNameAndEmail(users: User[]): { name: string; email: string }[] {
//     return users.map(({ name, email }) => ({ name, email }));
// }
// // 7.
// function findUserAddressById(users: User[], id: number): string | undefined {
//     return users.find(user => user.id === id)?.address;
// }

// // 8. 
// function getNames(users: User[]): string[] {
//     return users.map(user => user.name);
// }

// // 9. 
// function maxFromTwoArrays(arr1: number[], arr2: number[]): string {
//     return `Max from arr1: ${Math.max(...arr1)}, Max from arr2: ${Math.max(...arr2)}`;
// }
// // 10
// function separateEvenOdd(numbers: number[]): { even: number[]; odd: number[] } {
//     return {
//         even: numbers.filter(num => num % 2 === 0),
//         odd: numbers.filter(num => num % 2 !== 0)
//     };
// }

