//_________________ bài tâp sử dụng Destructuring_________________________________________________________________________________
//bài tập 1
// let array = [1, 2, 3, 4, 5]
// let [x, y] = array;
// console.log(x)
// console.log(y)
// bài tập 2
// let person = {name: 'John', age: 30, city: 'New York'}
// let{name}=person;
// let{city}=person;
// console.log(name);
// console.log(city);
//bài tập 3
// let person = { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } }
// let {address:{city}}=person
// console.log(city)
//_________________________Spread Synt________________________
//bài tâpj 1
// let array=[1, 2, 3];
// let arr=[4,5,6];
// let array1=[...array,...arr]
// console.log(array1)
//bài tập 2
// let originalArray=[1,2,3,4,5,6,5,6,4,5];
// let array=[...originalArray]
// console.log(array)
//bài tập 3
// let object={a:1,b:2};
// let object1={c:3,d:4};
// let object2={...object,...object1}
// console.log(object2)
//bài tập 4
// let originalObject={name:"Giang Thi Dua",age:22,address:"Lao cai"};
// let objet={...originalObject}
// console.log(objet)
//bài tập 5
let object = {name: "Nguyen Nhu Hung", age: 27};
let obj = {...object, name: "Hung", salary: 5000};
console.log(obj)

class student {
    constructor(id, name, age, score) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._score = score;
    }


    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get score() {
        return this._score;
    }
}

let listStudent = [];
listStudent.push(new student(1, 'Dua', 22, 95));
listStudent.push(new student(2, 'Tuong', 22, 98));
listStudent.push(new student(3, 'Dung', 25, 99));
listStudent.push(new student(4, 'Son', 29, 94));
listStudent.push(new student(5, 'Hung', 27, 97));
// console.log(listStudent);
// let list=listStudent.map(s=>s._score);
// console.log(list)
// let studentList=listStudent.filter(person=>person.name.includes("u"));
// console.log(studentList)
let a=listStudent.filter(student => student._id!== 2)
console.log(a)
