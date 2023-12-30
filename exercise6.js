const allProducts = [
  {
    name: "Laptop",
    price: 1200,
    quantity: 2,
  },
  {
    name: "Phone",
    price: 600,
    quantity: 3,
  },
  {
    name: "Tablet",
    price: 800,
    quantity: 4,
  },
];

function calculateTotalPrice(allProducts, productName) {
  for (const product of allProducts) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }

  return 0;
}

const totalPrice = calculateTotalPrice(allProducts, "Phone");
console.log(totalPrice);
