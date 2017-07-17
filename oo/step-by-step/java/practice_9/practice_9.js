/**
 * Created by christine on 7/17/17.
 */
class Person{
    constructor(id,name,age){
        this.id = id;
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}

class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass = new Class(klass);
    }
    introduce(){
        return `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`;
    }
}

class Teacher extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
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

class Class{
    constructor(number){
        this.number = number;
    }
    assignLeader(student){
        this.leader = student;
    }
}
let klass = new Class(2);
let thePerson = new Person(1,'personTom',21);
let theStudent = new Student(2,'stuTom',21,2);
let theTeacher = new Teacher(3,'teacherTom',21,2);
let nullClassTeacher = new Teacher(4,'nullClassTom',21);
let leaderStudent = new Student(5,'leaderTom',21,klass);
klass.assignLeader(leaderStudent);
console.log(thePerson.introduce());
console.log(theStudent.introduce());
console.log(theTeacher.introduce());
console.log(nullClassTeacher.introduce());
