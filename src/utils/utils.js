const shoppingItems = [
  {
    id: 1,
    name: 'T-Shirt',
    company: 'Nike',
    category: 'Clothing',
    price: 1500,
    quantity: 2,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
  },
  {
    id: 2,
    name: 'Jeans',
    company: "Levi's",
    category: 'Clothing',
    price: 3500,
    quantity: 1,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d',
  },
  {
    id: 3,
    name: 'Running Shoes',
    company: 'Adidas',
    category: 'Footwear',
    price: 6500,
    quantity: 1,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
  },
  {
    id: 4,
    name: 'Backpack',
    company: 'Puma',
    category: 'Accessories',
    price: 2500,
    quantity: 3,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
  },
  {
    id: 5,
    name: 'Watch',
    company: 'Casio',
    category: 'Accessories',
    price: 5000,
    quantity: 1,
    inStock: false,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
  },
  {
    id: 6,
    name: 'Headphones',
    company: 'Sony',
    category: 'Electronics',
    price: 4500,
    quantity: 2,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
  },
  {
    id: 7,
    name: 'Keyboard',
    company: 'Logitech',
    category: 'Electronics',
    price: 3000,
    quantity: 1,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3',
  },
  {
    id: 8,
    name: 'Water Bottle',
    company: 'Hydro Flask',
    category: 'Home',
    price: 1200,
    quantity: 4,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
  },
  {
    id: 9,
    name: 'Coffee Mug',
    company: 'Starbucks',
    category: 'Home',
    price: 800,
    quantity: 2,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a',
  },
  {
    id: 10,
    name: 'Sunglasses',
    company: 'Ray-Ban',
    category: 'Accessories',
    price: 2200,
    quantity: 1,
    inStock: false,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083',
  },
];

const uniqueCategories = shoppingItems.filter((item, index, array) => {
  return index === array.findIndex(
    obj => obj.category === item.category
  );
});

console.log(uniqueCategories);

export  {shoppingItems, uniqueCategories};
