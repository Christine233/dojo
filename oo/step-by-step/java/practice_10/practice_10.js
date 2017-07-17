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
        if(this.append !== 1){
            return `It is not one of us.`;
        }else if(this.klass.leader === this.id){
            return `${super.introduce()} I am a Student. I am Leader of Class ${this.klass.number}.`
        }else {
            return `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`;
        }
    }
}

class Teacher extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass = klass;
    }
    introduce(){
        if(!this.klass){
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
        this.leader = student.id;
    }
    appendMember(stu){
        stu.append = 1;
    }
}
let thePerson = new Person(2015211100,'personTom',21);
let theStudent = new Student(2015211101,'stuTom',21,2);
let theTeacher = new Teacher(2012,'teacherTom',21,2);
let nullClassTeacher = new Teacher(2013,'nullClassTom',21);
let leaderStudent = new Student(2015211103,'leaderTom',21,2);
leaderStudent.klass.assignLeader(leaderStudent);
let notStudent = new Student(2015211104,'notTom',21,3);
theStudent.klass.appendMember(theStudent);
leaderStudent.klass.appendMember(leaderStudent);
console.log(thePerson.introduce());
console.log(theStudent.introduce());
console.log(theTeacher.introduce());
console.log(nullClassTeacher.introduce());
console.log(leaderStudent.introduce());
console.log(notStudent.introduce());