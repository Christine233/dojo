/**
 * Created by christine on 7/18/17.
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
    constructor(id,name,age,classes){
        super(id,name,age);
        this.classes = classes;
    }
    introduce(){
        if(this.classes.length === 0){
            return `${super.introduce()} I am a Teacher. I teach No Class.`;
        }
        else {
            return `${super.introduce()} I am a Teacher. I teach Class ${this.classes.join()}.`;
        }
    }
    isTeaching(stu){
        for(let i of this.classes){
            if(stu.klass.number === i) {
                console.log(`I am ${this.name}. I know ${stu.name} has joined Class ${stu.klass.number}.`);
                if(stu.klass.leader === stu.id){
                    console.log(`I am ${this.name}. I know ${stu.name} become Leader of Class ${stu.klass.number}.`);
                }
                return true;
            }
        }
        return false;
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
    isIn(stu){
        if(this.number === stu.klass){
            return true;
        }else {
            return false;
        }
    }
}
let thePerson = new Person(2015211100,'personTom',21);

let classes = [2,3];
let klasses = [];
let theTeacher = new Teacher(2012,'teacherTom',21,classes);
let nullClassTeacher = new Teacher(2013,'nullClassTom',21,klasses);

let theStudent = new Student(2015211101,'stuTom',21,2);
theStudent.klass.appendMember(theStudent);
theStudent.klass.isIn(theStudent);

let leaderStudent = new Student(2015211103,'leaderTom',21,2);
leaderStudent.klass.appendMember(leaderStudent);
leaderStudent.klass.assignLeader(leaderStudent);

let notStudent = new Student(2015211104,'notTom',21,4);
leaderStudent.klass.appendMember(leaderStudent);

console.log(thePerson.introduce());

console.log(theTeacher.introduce()+'\n');
console.log(theTeacher.isTeaching(theStudent)+'\n');
console.log(theTeacher.isTeaching(leaderStudent)+'\n');
console.log(theTeacher.isTeaching(notStudent)+'\n');
console.log(nullClassTeacher.introduce()+'\n');

console.log(theStudent.introduce());
console.log(leaderStudent.introduce());
console.log(notStudent.introduce());