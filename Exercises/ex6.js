const inventory1 = [
  { id: 1,  name: "Laptop",     price: 1500, category: "Electronics", quantity: 5  },
  { id: 2,  name: "T-Shirt",    price: 25,   category: "Clothing",    quantity: 50 },
  { id: 3,  name: "Phone",      price: 800,  category: "Electronics", quantity: 10 },
  { id: 4,  name: "Book",       price: 15,   category: "Books",       quantity: 100},
  { id: 5,  name: "Headphones", price: 100,  category: "Electronics", quantity: 20 },
  { id: 6,  name: "Jeans",      price: 60,   category: "Clothing",    quantity: 30 },
  { id: 7,  name: "Tablet",     price: 500,  category: "Electronics", quantity: 8  },
  { id: 8,  name: "Novel",      price: 20,   category: "Books",       quantity: 40 },
  { id: 9,  name: "Jacket",     price: 120,  category: "Clothing",    quantity: 15 },
  { id: 10, name: "Charger",    price: 30,   category: "Electronics", quantity: 60 }
];


//sort 

inventory1.sort((a,b) => a.price-b.price);
console.log(inventory1);


//includes()

const categories = ["Electronics", "Clothing", "Books", "Toys"];

console.log(categories.includes("Electronics"));
console.log( categories.includes("Food"));

console.log(inventory1);

//splice 
inventory1.splice(0,1);
console.log(inventory1);


//slice

inventory1.slice(0,5);



const inventory2 = [
  { id: 11, name: "Monitor",    price: 300, category: "Electronics", quantity: 12 },
  { id: 12, name: "Sneakers",   price: 90,  category: "Clothing",    quantity: 25 },
  { id: 13, name: "Notebook",   price: 5,   category: "Books",       quantity: 200}
];

//concat


const inventory3 = inventory1.concat(inventory2);