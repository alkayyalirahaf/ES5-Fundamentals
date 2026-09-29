//array of objects 




const students = [
    {
        name: "Rahaf",
        id: 1,
        grade: 85
    },
    {
        name: "Ahmad",
        id: 2,
        grade: 72
    },
    {
        name: "Sara",
        id: 3,
        grade: 95
    },
    {
        name: "Omar",
        id: 4,
        grade: 48
    },
    {
        name: "Lina",
        id: 5,
        grade: 67
    }
];


//Generate a report for each student using Template Literals
students.forEach((student) => {
    let status = ""
    if(student.grade >= 50){
        status="pass";

    }else{status="fail";}

const report = `student: ${student.name}
 ID : ${student.id}
  grade : ${student.grade}
   status: ${status}`;
document.getElementById("reports").innerHTML += report + "<br>";
});

