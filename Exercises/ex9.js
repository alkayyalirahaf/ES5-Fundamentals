let uesrProfile = {name:"Rahaf",email:"rahaf.alkayyali@gmail.com" ,age:26,address:"Amman"};

//Extract values using object destructuring
let {name,email,age,address}=uesrProfile;
console.log(name);
console.log(age);

//Rename at least one extracted property
let {name:userName}=uesrProfile;
console.log(userName);

//Array of lists
let skills = ["HTML","CSS","JS"];
let [skill1,skill2,skill3]=skills;
console.log(skill3);

//
function createUser(name="rahaf",age=26){
console.log(name);
console.log(age);
}

createUser("Sara");