// Scenario: You have a flat array of sales data and you need to group the sales by category
// calculating the total revenue and the number of items sold for each

const sales = [
  {
    category: "Electronics",
    price: 799,
    item: "Smartphone",
    quantity: 2,
  },
  {
    category: "Electronics",
    price: 1299,
    item: "Laptop",
    quantity: 1,
  },
  {
    category: "Clothing",
    price: 49,
    item: "T-Shirt",
    quantity: 3,
  },
  {
    category: "Groceries",
    price: 5,
    item: "Milk",
    quantity: 4,
  },
  {
    category: "Books",
    price: 20,
    item: "JavaScript Book",
    quantity: 2,
  },
  {
    category: "Home",
    price: 35,
    item: "Table Lamp",
    quantity: 1,
  },
  {
    category: "Electronics",
    price: 59,
    item: "Wireless Mouse",
    quantity: 3,
  },
  {
    category: "Clothing",
    price: 79,
    item: "Jeans",
    quantity: 2,
  },
  {
    category: "Groceries",
    price: 3,
    item: "Bread",
    quantity: 5,
  },
  {
    category: "Books",
    price: 15,
    item: "Clean Code",
    quantity: 1,
  },
  {
    category: "Home",
    price: 120,
    item: "Office Chair",
    quantity: 1,
  },
  {
    category: "Electronics",
    price: 129,
    item: "Keyboard",
    quantity: 2,
  },
  {
    category: "Clothing",
    price: 35,
    item: "Hoodie",
    quantity: 3,
  },
  {
    category: "Groceries",
    price: 8,
    item: "Orange Juice",
    quantity: 2,
  },
  {
    category: "Home",
    price: 25,
    item: "Bed Sheet",
    quantity: 2,
  },
];

// TODO: init empty object
// TODO: init object only
// TODO: calculate the revenue

const totalRevenueEachCategory = sales.reduce((table, sale) => {
  const { category, price, quantity } = sale;

  if (!table[category]) {
    {
      table[category] = {
        totalRevenue: 0,
        itemCount: 0,
      };
    }
  }

  table[category].totalRevenue += price * quantity;
  table[category].itemCount += quantity;

  return table;
}, {});

console.log(totalRevenueEachCategory);
