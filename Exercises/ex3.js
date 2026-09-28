// First student array
var students1 = [
    "Ahmad",
    "Sara",
    "Omar",
    "Lina",
    "Yousef",
    "Maya",
    "Khaled",
    "Noor",
    "Adam",
    "Dana",
    "Zaid",
    "Leen",
    "Sami",
    "Rana",
    "Tareq",
    "Hala",
    "Ali",
    "Farah",
    "Othman",
    "Jana",
    "Fadi",
    "Reem",
    "Laith",
    "Salma",
    "Nour"
];

// Second student array
var students2 = [
    "Alaa",
    "Bayan",
    "Bilal",
    "Dima",
    "Eyad",
    "Huda",
    "Ibrahim",
    "Jad",
    "Karam",
    "Lama",
    "Malak",
    "Nadia",
    "Osama",
    "Qais",
    "Rami",
    "Sahar",
    "Tasneem",
    "Waleed",
    "Yara",
    "Yazan",
    "Zain",
    "Aseel",
    "Bara",
    "Celine",
    "Dalia"
];

//concat() to combine two student arrays
var students = students1.concat(students2);
console.log(students);

//sort
students.sort();
console.log(students);

//reverse()
students.reverse();
console.log(students);

// Use includes() to check whether a particular student exists.
var studentExists = students.includes("Ahmad");
console.log(studentExists);

// forEach() to print every student with their index.
students.forEach(function(student,index){
    console.log(index + ": " + student);
});