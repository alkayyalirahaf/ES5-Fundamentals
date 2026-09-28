
//function that calculates the square of a number.
const calSquare=(num) =>{

    const result=num*num;
    return(result);

};

//function that checks whether a number is even.
const even = (num) => {
    if(num%2==0){
        return true;
    }else return false
 
};


// function that calculates the total price of products.
const totalPrice = (prices) => {
    let totalPrice=0;
for(let i =0;i<prices.length;i++){
    totalPrice +=prices[i];

}
return totalPrice;
};


console.log(calSquare(5));
console.log(even(33));
const prices = [10,30,40];
console.log(totalPrice(prices));


//Use arrow functions with map(), filter() and reduce()

// map()

let numbers = [2,3,4];
let squareNumbers=numbers.map(calSquare);
console.log(squareNumbers);

// filter()
let numbers2 = [1,2,3,4,8,11];
let evenNumbers=numbers2.filter(even);
console.log(evenNumbers);

//reduce() 


const total = prices.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(total);