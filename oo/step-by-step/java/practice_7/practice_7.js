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
        return `${super.introduce()} I am a Student. I am at Class ${this.klass}.`;
    }
}

class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        if(this.klass == null){
            return `${super.introduce()} I am a Teacher. I teach No Class.`;
        }
        else {
            return `${super.introduce()} I am a Teacher. I teach Class ${this.klass}.`;
        }
    }
}

let thePerson = new Person('Tom',21);
let theStudent = new Student('Tom',21,2);
let theTeacher = new Teacher('Tom',21,2);
let nullClassTeacher = new Teacher('Tom',21);
console.log(thePerson.introduce());
console.log(theStudent.introduce());
console.log(theTeacher.introduce());
console.log(nullClassTeacher.introduce());