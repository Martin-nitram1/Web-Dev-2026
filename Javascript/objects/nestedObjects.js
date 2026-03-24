// Step 1: Create the storeInventory object
let storeInventory = {
  electronics: ['Laptop', 'Smartphone', 'Headphones'],
  clothing: ['T-Shirt', 'Jeans', 'Jacket']
};

// Step 2: Access and print a specific product
console.log(storeInventory.electronics[0]);  // Output: Laptop

// Step 3: Add a new product to the clothing category
storeInventory.clothing.push('Sweater');

// Step 4: Use nested loops to print all categories and their products
for (let category in storeInventory) {
  console.log(`${category.charAt(0).toUpperCase() + category.slice(1)}:`);
  for (let product of storeInventory[category]) {
    console.log(`  ${product}`);
  }
}