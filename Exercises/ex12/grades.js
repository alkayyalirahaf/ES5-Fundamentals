//method for calculating average
export function calculateAverage(grades) {
    if (!grades || grades.length === 0) {
        return 0;
    }
    
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    
    let average = sum / grades.length;
    return Math.round(average*100)/100;
}


//
export default function getLetterGrade(score){
   if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
