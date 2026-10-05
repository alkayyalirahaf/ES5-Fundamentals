//array 
export const students = [
    { id: 101, name: "Rahaf", email: "rahaf@gmail.com", major: "Computer Engineering",grades: [88, 92, 95] },
    { id: 102, name: "Ahmad", email: "ahmad@gmail.com", major: "Computer Science",grades: [87, 90, 98] },
    { id: 103, name: "Sara", email: "sara@gmail.com", major: "Software Engineering",grades: [90, 92, 95] }
];


//function to add student
export function addStudent(student){
    students.push(student);
    console.log(students)
}

//function to find student
export function findStudent(studentId){
    return students.find(student => student.id===studentId);
}