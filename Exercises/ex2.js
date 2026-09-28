//	Create a Person constructor with name and age.
function Person(name,age){
    this.name = name;
    this.age = age;
}

//Add a greet() method to Person.prototype
Person.prototype.greet=function(){
    cosole.log("Hello"+this.name);
};

//Create an Employee constructor with employeeId and position.
function Employee(name,age,employedId,position){
    Person.call(this,name,age)
    this.employedId=employedId;
    this.position=position;

}


//Make Employee inherit from Person using Object.create().
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor=Employee;

//Override the greet() method in Employee.prototype.
Employee.prototype.greet=function(){
    console.log("Hello, I am  employee my name "+this.name); 
};

//Create at least three employees and demonstrate inheritance.
var employee1 = new Employee("E001", "Software Engineer");
var employee2 = new Employee("E002", "Project Manager");
var employee3 = new Employee("E003", "Designer");

console.log(employee1 instanceof Employee);
console.log(employee1 instanceof Person);