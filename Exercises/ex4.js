const students=[];


for(let i = 1;i<=50;i++){
students.push({
    id: i,
    name: `Student ${i}`,
    grade: Math.floor(Math.random() * 51) + 50 
  });
}
//splice() /add
students.splice(50,0,{id:51,name:"new student",grade:88});

console.log(students);


//remove
students.splice(49,1);
console.log(students);

//replace
students.splice(0,1,{id:1,name:"Updated Student",grade:95});
console.log(students);


//Use slice() to create a copy of a portion of the array.
const copiedStudents = students.slice(1, 6);
console.log(copiedStudents);


// Sort students by grade.
students.sort((a, b) => b.grade - a.grade);
console.log(students);

//Print the final list using forEach().
students.forEach(student => {
  console.log(`ID: ${student.id}, Name: ${student.name}, Grade: ${student.grade}`);
});