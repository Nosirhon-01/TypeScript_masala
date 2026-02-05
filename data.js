"use strict";
// type User = {
//     name:string,
//     age:number,
// }
/*
const user = {
    name: "alisher",
    age: 100,
    isAdmin: true
}

type User = typeof user


const users: Array<User> = [
    {
        name: "Ali",
        age: 23,
        isAdmin: false
    },
    {
        name: "Ali",
        age: 23,
        isAdmin: false
    }
]

type User = {
    id:number,
    name:string,
    age:number,
}

type Key = keyof User // "id" | "name" | "age"


function ss(key : Key){
    return key
}
console.log(ss("age"))
*/
class Person {
    constructor(name) {
        this.name = name;
    }
    static maxArray(...arr) {
        let max = arr[0];
        for (const el of arr) {
            if (max < el) {
                max = el;
            }
        }
        return max;
    }
}
Person.age = 23;
const person = new Person("Ali");
class Child extends Person {
}
console.log(Child.maxArray(10, 2, 3, 4, 5));
