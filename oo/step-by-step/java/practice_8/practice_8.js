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
        this.klass = new Class(klass);
    }
    introduce(){
        return `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`;
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
    introduceWith(student){
        if(student.klass.number == this.klass){
            return `${super.introduce()} I am a Teacher. I teach ${student.name}.`
        }
        else{
            return `${super.introduce()} I am a Teacher. I don't teach ${student.name}.`
        }
    }
}

class Class{
    constructor(number){
        this.number = number;
    }
}

let thePerson = new Person('personTom',21);
let theStudent = new Student('studentTom',21,2);
let theTeacher = new Teacher('teacherTom',21,2);
let nullClassTeacher = new Teacher('nullClassTom',21);
let Jerry = new Student('Jerry',21,3);
let Amy = new Student('Amy',21,2);
console.log(thePerson.introduce());
console.log(theStudent.introduce());
console.log(theTeacher.introduce());
console.log(nullClassTeacher.introduce());
console.log(theTeacher.introduceWith(Jerry));
console.log(theTeacher.introduceWith(Amy));
