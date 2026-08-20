const cartItems = [
  {
    id: 1,
    name: "iPhone 15",
    price: 799,
    quantity: 2,
  },
  {
    id: 2,
    name: "MacBook Air M3",
    price: 1099,
    quantity: 1,
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 249,
    quantity: 3,
  },
  {
    id: 4,
    name: "Apple Watch",
    price: 399,
    quantity: 1,
  },
];

const subTotal = cartItems.reduce((subTotal, cartItem) => {
  return subTotal + cartItem.price * cartItem.quantity;
}, 0);

console.log(subTotal);

const players = [
  {
    id: 1,
    name: "Lionel Messi",
    rating: 93,
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    rating: 99,
  },
  {
    id: 3,
    name: "Kylian Mbappe",
    rating: 91,
  },
  {
    id: 4,
    name: "Erling Haaland",
    rating: 91,
  },
  {
    id: 5,
    name: "Kevin De Bruyne",
    rating: 89,
  },
  {
    id: 6,
    name: "Vinicius Junior",
    rating: 90,
  },
  {
    id: 7,
    name: "Jude Bellingham",
    rating: 90,
  },
  {
    id: 8,
    name: "Mohamed Salah",
    rating: 89,
  },
];

const bestPlayer = players.reduce((bestPlayer, player) => {
  if (bestPlayer.rating > player.rating) return bestPlayer;
  else return player;
}, players[0]);

console.log(bestPlayer);
