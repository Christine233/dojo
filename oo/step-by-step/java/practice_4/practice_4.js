/**
 * Created by christine on 7/17/17.
 */
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}

class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at Class ${this.klass}.`;
    }
}

class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old. I am a Worker. I have a job.`;
    }
}

let thePerson = new Person('Tom',21);
let theStudent = new Student('Tom',21,2);
let theWorker = new Worker('Tom',21);
console.log(thePerson.introduce());
console.log(theStudent.introduce());
console.log(theWorker.introduce());