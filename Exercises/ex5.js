const product = {id:"1",name:"computer",price:200,category:"Electronics",available:true};


const jsonText = JSON.stringify(product);

try{
const objectText=JSON.parse(jsonText);

//the converted object 
console.log(objectText);
} catch (e) {
    console.log("Invalid JSON:", e.message);
}

// the original object
console.log(product);





