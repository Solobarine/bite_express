export const settingsMenuOptions = [
  {
    iconName: "bx-calendar",
    title: "My Favourite Meals",
    link: "/meals/favourites",
  },
  {
    iconName: "bx-calendar",
    title: "My Favourite Restaurants",
    link: "/restaurants/favourites",
  },
  {
    iconName: "bxs-offer",
    title: "Special Offers and Promo",
    link: "/offers",
  },
  {
    iconName: "bx-wallet-alt",
    title: "Payment Methods",
    link: "/settings/payment-methods",
  },
  {
    iconName: "bx-user",
    title: "Profile",
    link: "/settings/profile",
  },
  {
    iconName: "bx-current-location",
    title: "Addresses",
    link: "/settings/addresses",
  },
  {
    iconName: "bx-bell",
    title: "Notifications",
    link: "/settings/notifications",
  },
  {
    iconName: "bx-check-shield",
    title: "Security",
    link: "/settings/security",
  },
  {
    iconName: "bx-palette",
    title: "Theme",
    link: "",
    type: "toggle",
  },
  {
    iconName: "bx-help-circle",
    title: "Help Center",
    link: "/settings/help-center/faq",
  },
];

export const categories = [
  {
    name: "Burger",
    imageURI: "/burger.png",
    link: "/categories/burger",
  },
  {
    name: "Vegetables",
    imageURI: "/vegetable.png",
    link: "/categories/vegetables",
  },
  {
    name: "Noodles",
    imageURI: "/noodles.png",
    link: "/categories/noodles",
  },
  {
    name: "Pizza",
    imageURI: "/pizza.png",
    link: "/categories/pizza",
  },
  {
    name: "Drinks",
    imageURI: "/vegetable.png",
    link: "/categories/drinks",
  },
  {
    name: "Meat",
    imageURI: "/vegetable.png",
    link: "/categories/meat",
  },
  {
    name: "Dessert",
    imageURI: "/vegetable.png",
    link: "/categories/dessert",
  },
  {
    name: "More",
    imageURI: "/burger.png",
    link: "/categories",
  },
];

export const orders = [
  { name: "Burger", price: 8.99, distance: 2.5, number: 1, status: "active" },
  {
    name: "Pizza",
    price: 15.49,
    distance: 5.2,
    number: 2,
    status: "completed",
  },
  {
    name: "Sushi",
    price: 22.99,
    distance: 3.1,
    number: 3,
    status: "cancelled",
  },
  { name: "Pasta", price: 12.75, distance: 4.8, number: 4, status: "active" },
  { name: "Salad", price: 9.5, distance: 1.9, number: 5, status: "completed" },
  { name: "Sandwich", price: 7.99, distance: 2.0, number: 6, status: "active" },
  { name: "Taco", price: 6.5, distance: 3.7, number: 7, status: "cancelled" },
  { name: "Steak", price: 25.99, distance: 5.4, number: 8, status: "active" },
  { name: "Soup", price: 4.99, distance: 2.1, number: 9, status: "completed" },
  {
    name: "Chicken Wings",
    price: 13.49,
    distance: 4.2,
    number: 10,
    status: "active",
  },
  {
    name: "Ice Cream",
    price: 3.99,
    distance: 1.5,
    number: 11,
    status: "cancelled",
  },
  {
    name: "Pancakes",
    price: 8.99,
    distance: 2.8,
    number: 12,
    status: "completed",
  },
  { name: "Hot Dog", price: 5.99, distance: 3.0, number: 13, status: "active" },
  {
    name: "Donut",
    price: 2.49,
    distance: 1.1,
    number: 14,
    status: "completed",
  },
  {
    name: "Fish and Chips",
    price: 14.99,
    distance: 4.5,
    number: 15,
    status: "active",
  },
  {
    name: "BBQ Ribs",
    price: 19.99,
    distance: 3.9,
    number: 16,
    status: "cancelled",
  },
  { name: "Curry", price: 11.75, distance: 2.7, number: 17, status: "active" },
  {
    name: "Fries",
    price: 3.49,
    distance: 1.2,
    number: 18,
    status: "completed",
  },
  { name: "Burrito", price: 9.99, distance: 3.3, number: 19, status: "active" },
  {
    name: "Lasagna",
    price: 17.99,
    distance: 4.0,
    number: 20,
    status: "cancelled",
  },
  {
    name: "Smoothie",
    price: 6.99,
    distance: 1.8,
    number: 21,
    status: "completed",
  },
  { name: "Muffin", price: 2.99, distance: 1.3, number: 22, status: "active" },
  {
    name: "Bagel",
    price: 3.99,
    distance: 1.6,
    number: 23,
    status: "cancelled",
  },
  {
    name: "Falafel",
    price: 5.99,
    distance: 2.9,
    number: 24,
    status: "completed",
  },
  { name: "Ramen", price: 13.99, distance: 3.5, number: 25, status: "active" },
];

export const orderCancellationReasons = [
  "Waiting for a long time",
  "Unable to contact delivery",
  "Driver declined to go to destination",
  "Driver declined to come to pickup",
  "Wrong Address",
  "Unreasonale Prices",
  "I just want to cancel",
];

export const bestDishes = [
  {
    dish: "Burger and Fries",
    description:
      "Juicy, perfectly grilled beef patty topped with melted cheese, fresh lettuce, and ripe tomatoes, all nestled between a toasted bun.",
    image: "/fav_meals/burger.jpg",
  },
  {
    dish: "Sushi",
    description:
      "Delicate and fresh sushi rolls crafted with premium fish, seasoned rice, and crisp vegetables, all wrapped in a seaweed sheet.",
    image: "/fav_meals/sushi.avif",
  },
  {
    dish: "Ravioli",
    description:
      "Tender pasta pockets filled with a rich, savory blend of cheese and herbs, lightly dressed in a velvety tomato sauce.",
    image: "/fav_meals/ravioli.avif",
  },
  {
    dish: "Jollof Rice",
    description:
      "A vibrant and flavorful West African rice dish simmered in a blend of tomatoes, peppers, and spices.",
    image: "/fav_meals/jollof-rice.jpg",
  },
  {
    dish: "Chicken Tandoori",
    description:
      "Marinated chicken pieces infused with a blend of aromatic spices and yogurt, then roasted to perfection in a tandoor.",
    image: "/fav_meals/chicken-tandoori.jpg",
  },
  {
    dish: "Veggie Salad with Egg",
    description:
      "A refreshing and nutritious salad featuring crisp mixed greens, colorful vegetables, and slices of hard-boiled egg.",
    image: "/fav_meals/salad.jpg",
  },
];
