import {findStudent} from "./students.js";
import getLetterGrade,{calculateAverage} from "./grades.js";


//Display student information in the browser.
const student = findStudent(103);
const avg = calculateAverage(student.grades);
const letter = getLetterGrade(avg);


document.body.innerHTML = `
  <div>
    <p> Name: ${student.name} </p>
    <p> Email:${student.email}</p>
    <p>Average Grade: ${avg}</p>
    <p>Letter Grade: ${letter}</p>
  </div>
`;