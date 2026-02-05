// function checkDigits(n: number): boolean {
//     const tens = (n - n % 10) / 10;
//     const ones = n - tens * 10;
//     return ones > tens;
// }
// console.log(checkDigits(15)); 
// console.log(checkDigits(62)); 
// console.log(checkDigits(34));
// function isPalindrome(n: number): string {
//     let original = n;
//     let reversed = 0;
//     while (n > 0) {
//         reversed = reversed * 10 + n % 10;
//         n = (n - n % 10) / 10;
//     }
//     return reversed === original ? "yes" : "no";
// }
// console.log(isPalindrome(121)); 
// console.log(isPalindrome(123)); 
// console.log(isPalindrome(454));
// function maxNumber(n: number): number {
//     let digits: number[] = [];
//     while (n > 0) {
//         digits.push(n % 10);
//         n = (n - n % 10) / 10;
//     }
//     for (let i = 0; i < digits.length; i++) {
//         for (let j = 0; j < digits.length - i - 1; j++) {
//             if (digits[j] < digits[j + 1]) {
//                 let www = digits[j];
//                 digits[j] = digits[j + 1];
//                 digits[j + 1] = www;
//             }
//         }
//     }
//     let result = 0;
//     for (let i = 0; i < digits.length; i++) {
//         result = result * 10 + digits[i];
//     }
//     return result;
// }
// console.log(maxNumber(996)); 
// console.log(maxNumber(69));  
// console.log(maxNumber(123)); 
// function minExams(N: number): number {
//     for (let besh = 0; besh * 5 <= N; besh++) {
//         let uch = N - besh * 5;
//         if (uch % 3 === 0) {
//             return besh + uch / 3;
//         }
//     }
//     return -1;
// }
// console.log(minExams(20)); 
// console.log(minExams(3));  
// console.log(minExams(18)); 
//  function compres(matn: string): string {
//   let result: string = "";
//   let count: number = 1;
//   for (let i = 0; i < matn.length; i++) {
//     if (matn[i] === matn[i + 1]) {
//       count++;
//     } else {
//       result += matn[i] + count;
//       count = 1;
//     }
//   }
//     return  result
// }
// console.log(compres("kkkkqqqqlldvd"))
// function twoSum(arr:number[], target:number){
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if(element + arr[i + 1] == target  ){
//             return "[0,1]"        
//         }else if (element + arr[i + 2] == target){
//             return "[0,2]"
//         }else if (element + arr[i + 3] == target){
//             return "[0,3]"
//         }else if (element + arr[i + 4] == target){
//             return "[0,4]"
//         }else if (element + arr[i + 5] == target){
//             return "[0,5]"
//         }else if()
//     }
// }
// let nums = [ 2,3,4]
// let target = 6
// console.log(twoSum(nums,target));
//  function mySort (arr:number[]) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//       if (arr[i] < arr[j ]) {
//         let temp = arr[i];
//         arr[i] = arr[j]
//         arr[j] = temp
//           }
//     }
//   }
//   return arr;
// };
// console.log(mySort([1,5,4,3,2,4]));
// class Library {
//     library: string;
//     constructor(library: string) {
//         this.library = library;
//     }
// }
// class Book extends Library {
//     name: string;
//     author: string;
//     constructor(library: string, name: string, author: string) {
//         super(library);
//         this.name = name;
//         this.author = author;
//     }
//     getName(key: string){
//         return {
//             [key]: this.name
//         };
//     }
// }
// let book1 = new Book(
//     'Milliy',
//     'sariq devni minib',
//     'Xudoyberdi Toxtaboyev'
// );
// let book2 = new Book(
//     'Pushkin',
//     'qalam',
//     'Nuriddin Sharipov'
// );
// book1.library;
// book1.name;
// book1.author;
// book2.library;
// book2.name;
// book2.author;
// book1;
// book2;
// console.log(book1.getName('Title'));
// console.log(book2.getName('Sarlavha'));
// function NoldanYuzgachaa(n: number){
//   if (n > 100) {
//     return console.log("tugadii")
//   };   
//   console.log(n);
//   NoldanYuzgachaa(n + 1);   
// }
// NoldanYuzgachaa(1);
// let i = 1;
// function NoldanYuzgacha() {
//   if (i > 100) {
//     console.log("tugadii");
//     return;
//   }
//   console.log(i);
//   i++;
//   NoldanYuzgacha();
// }
// NoldanYuzgacha();
var s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
var a = [];
function NoldanYuzgacha() {
    if (a.length === s.length) {
        console.log("tugadii");
        return;
    }
    a.push(null);
    console.log(a.length);
    NoldanYuzgacha();
}
NoldanYuzgacha();
