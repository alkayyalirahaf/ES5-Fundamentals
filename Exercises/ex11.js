// create class
class Person {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    getInfo(){
        return `Name : ${this.name} , email:${this.email}` ;
    };
}

//create student class
class Student extends Person {
    constructor(name,email,studentId){
        super(name,email);
        this.studentId = studentId;
    }
    //Override at least one inherited method.
    getInfo(){
         return `Name : ${this.name} , email:${this.email} , studentId:${this.studentId}` ;
    }
}

//create istructor class
class Instructor extends Person{
    constructor(name,email,instructorId){
        super(name,email);
        this.instructorId=instructorId;
    }
    //Override at least one inherited method.
     getInfo(){
         return `Name : ${this.name} , email:${this.email} , studentId:${this.instructorId}` ;
}}

//create instance 
const person1 = new Person("Rahaf","Raha.alkayyali@gmail.com");
const person2 = new Student("Rahaf","Raha.alkayyali@gmail.com",101);
const person3 = new Instructor("Sara","Sara.alkayyali@gmail.com",105);


console.log(person1.getInfo());
console.log(person2.getInfo());
console.log(person3.getInfo());