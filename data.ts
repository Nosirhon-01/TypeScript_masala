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
    public readonly name : string
    static age : number  = 23
 
    constructor(name:string){
        this.name = name
    }

    static maxArray(...arr : number[]){
        let max : number  = arr[0]
        for (const el of arr) {
            if(max < el){
                max = el
            }
        }
        return max
    }
    
}

const person = new Person("Ali")

class Child extends Person{}

console.log(Child.maxArray(10,2,3,4,5))






