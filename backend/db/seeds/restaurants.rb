restaurants = [
  {
  name: 'Savory Bites',
  image: File.new("#{Rails.root}/app/assets/images/restaurants/savory_bites.png"),
  email: 'info@savorybites.com',
  categories: ["American" "Grill"],
  phone_no: '+1234567890',
  description: 'A delightful mix of American classics and grilled specialties.',
  address: '123 Flavor St, Foodtown',
  location: { lat: '40.7128', lon: '-74.0060' },
  state: 'NY',
  country: 'USA',
  opening_hours: [
    { days: 'Mon-Fri', times: '9:00 AM - 9:00 PM' },
    { days: 'Sat-Sun', times: '10:00 AM - 10:00 PM' }
  ],
  meals: [
      {
        id: "1-1",
        name: "Classic Burger",
        image: File.new("#{Rails.root}/app/assets/images/meals/classic_burger.jpg"),
        ingredients: [
          { name: "Beef Patty" },
          { name: "Lettuce" },
          { name: "Cheese" }
        ],
        nutrition: [
          { name: "Protein" },
          { name: "Carbs" },
          { name: "Fat" }
        ],
        price: 12.99,
        description: "A juicy beef burger with fresh toppings.",
        avaliability: true
      },
      {
        id: "1-2",
        name: "Grilled Chicken Salad",
        image: File.new("#{Rails.root}/app/assets/images/meals/grilled_chicken_salad.jpg"),
        ingredients: [
          { name: "Chicken" },
          { name: "Lettuce" },
          { name: "Tomato" }
        ],
        nutrition: [
          { name: "Protein" },
          { name: "Vitamins" },
          { name: "Fiber" }
        ],
        price: 10.49,
        description: "Healthy grilled chicken with fresh greens.",
        avaliability: true
      },
      {
        id: "1-3",
        name: "BBQ Ribs",
        image: File.new("#{Rails.root}/app/assets/images/meals/bbq_ribs.jpg"),
        ingredients: [{ name: "Pork Ribs" }, { name: "BBQ Sauce" }],
        nutrition: [{ name: "Protein" }, { name: "Fat" }],
        price: 18.99,
        description: "Tender pork ribs slathered in BBQ sauce.",
        avaliability: true
      },
      {
        id: "1-4",
        name: "French Fries",
        image: File.new("#{Rails.root}/app/assets/images/meals/french_fries.avif"),
        ingredients: [{ name: "Potatoes" }, { name: "Salt" }],
        nutrition: [{ name: "Carbs" }, { name: "Fat" }],
        price: 3.99,
        description: "Crispy golden fries with a sprinkle of salt.",
        avaliability: true
      },
      {
        id: "1-5",
        name: "Apple Pie",
        image: File.new("#{Rails.root}/app/assets/images/meals/apple_pie.jpg"),
        ingredients: [
          { name: "Apples" },
          { name: "Cinnamon" },
          { name: "Pastry" }
        ],
        nutrition: [{ name: "Carbs" }, { name: "Sugar" }],
        price: 5.99,
        description: "A classic apple pie with a hint of cinnamon.",
        avaliability: true
      }
    ]
},
{
  name: "Sushi Central",
  image: File.new("#{Rails.root}/app/assets/images/restaurants/sushi_central.jpeg"),
  email: "contact@sushicentral.com",
  categories: ["Japanese", "Sushi"],
  phone_no: "+1234567891",
  description: "Fresh and authentic sushi, straight from the sea.",
  address: "456 Ocean Blvd, Seaside",
  location: { lat: "34.0522", lon: "-118.2437" },
  state: "CA",
  country: "USA",
  opening_hours: [{ days: "Mon-Sun", times: "11:00 AM - 10:00 PM" }],
  meals: [
  {
    id: "2-1",
    name: "California Roll",
    image: File.new("#{Rails.root}/app/assets/images/meals/california_roll.jpg"),
    ingredients: [
      { name: "Crab" },
      { name: "Avocado" },
      { name: "Cucumber" }
    ],
    nutrition: [
      { name: "Protein" },
      { name: "Carbs" },
      { name: "Fat" }
    ],
    price: 8.99,
    description: "A popular roll with crab, avocado, and cucumber.",
    avaliability: true
  },
  {
    id: "2-2",
    name: "Spicy Tuna Roll",
    image: File.new("#{Rails.root}/app/assets/images/meals/spicy_tuna_roll.jpg"),
    ingredients: [{ name: "Tuna" }, { name: "Spicy Mayo" }],
    nutrition: [{ name: "Protein" }, { name: "Fat" }],
    price: 10.99,
    description: "Fresh tuna with a kick of spice.",
    avaliability: true
  },
  {
    id: "2-3",
    name: "Salmon Sashimi",
    image: File.new("#{Rails.root}/app/assets/images/meals/salmon_sashimi.jpg"),
    ingredients: [{ name: "Salmon" }],
    nutrition: [{ name: "Protein" }, { name: "Omega-3" }],
    price: 12.99,
    description: "Thinly sliced salmon, served raw.",
    avaliability: true
  },
  {
    id: "2-4",
    name: "Miso Soup",
    image: File.new("#{Rails.root}/app/assets/images/meals/miso_soup.jpg"),
    ingredients: [
      { name: "Miso Paste" },
      { name: "Tofu" },
      { name: "Seaweed" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Vitamins" }],
    price: 4.99,
    description: "A warm and savory soup with tofu and seaweed.",
    avaliability: true
  },
  {
    id: "2-5",
    name: "Tempura Shrimp",
    image: File.new("#{Rails.root}/app/assets/images/meals/tempura_shrimp.jpg"),
    ingredients: [{ name: "Shrimp" }, { name: "Tempura Batter" }],
    nutrition: [{ name: "Protein" }, { name: "Fat" }],
    price: 9.99,
    description: "Crispy shrimp tempura, light and crunchy.",
    avaliability: true
  }
]
},
{
  name: "Pasta Palace",
  image: File.new("#{Rails.root}/app/assets/images/restaurants/pasta_palace.jpg"),
  email: "info@pastapalace.com",
  categories: ["Italian", "Pasta"],
  phone_no: "+1234567892",
  description: "Traditional Italian pasta dishes made with love.",
  address: "789 Noodle Lane, Pasta City",
  location: { lat: "41.8781", lon: "-87.6298" },
  state: "IL",
  country: "USA",
  opening_hours: [{ days: "Mon-Sun", times: "10:00 AM - 11:00 PM" }],
  meals: [
  {
    id: "3-1",
    name: "Spaghetti Carbonara",
    image: File.new("#{Rails.root}/app/assets/images/meals/spaghetti_carbonara.jpg"),
    ingredients: [
      { name: "Spaghetti" },
      { name: "Pancetta" },
      { name: "Eggs" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Carbs" }],
    price: 14.99,
    description: "Classic carbonara with pancetta and eggs.",
    avaliability: true
  },
  {
    id: "3-2",
    name: "Lasagna",
    image: File.new("#{Rails.root}/app/assets/images/meals/lasagna.jpg"),
    ingredients: [
      { name: "Lasagna Sheets" },
      { name: "Ground Beef" },
      { name: "Ricotta" }
    ],
    nutrition: [
      { name: "Protein" },
      { name: "Carbs" },
      { name: "Fat" }
    ],
    price: 16.99,
    description: "Layers of pasta, beef, and cheese baked to perfection.",
    avaliability: true
  },
  {
    id: "3-3",
    name: "Penne Arrabbiata",
    image: File.new("#{Rails.root}/app/assets/images/meals/penne_arrabbiata.jpg"),
    ingredients: [
      { name: "Penne" },
      { name: "Tomato Sauce" },
      { name: "Chili Flakes" }
    ],
    nutrition: [{ name: "Carbs" }, { name: "Vitamins" }],
    price: 12.49,
    description: "Spicy penne with a zesty tomato sauce.",
    avaliability: true
  },
  {
    id: "3-4",
    name: "Fettuccine Alfredo",
    image: File.new("#{Rails.root}/app/assets/images/meals/fettuccine_alfredo.avif"),
    ingredients: [
      { name: "Fettuccine" },
      { name: "Cream" },
      { name: "Parmesan" }
    ],
    nutrition: [{ name: "Carbs" }, { name: "Fat" }],
    price: 13.99,
    description: "Creamy Alfredo sauce over fettuccine pasta.",
    avaliability: true
  },
  {
    id: "3-5",
    name: "Caprese Salad",
    image: File.new("#{Rails.root}/app/assets/images/meals/caprese_salad.jpg"),
    ingredients: [
      { name: "Tomatoes" },
      { name: "Mozzarella" },
      { name: "Basil" }
    ],
    nutrition: [{ name: "Vitamins" }, { name: "Protein" }],
    price: 8.99,
    description: "Fresh tomatoes, mozzarella, and basil with a balsamic glaze.",
    avaliability: true
  }
]
},
{
  name: "Vegan Delight",
  image: File.new("#{Rails.root}/app/assets/images/restaurants/vegan_delight.jpg"),
  email: "contact@vegandelight.com",
  categories: ["Vegan", "Healthy"],
  phone_no: "+1234567893",
  description: "Delicious vegan dishes made from fresh, organic ingredients.",
  address: "101 Green Way, Vegantown",
  location: { lat: "37.7749", lon: "-122.4194" },
  state: "CA",
  country: "USA",
  opening_hours: [{ days: "Mon-Sun", times: "8:00 AM - 8:00 PM" }],
  meals: [
  {
    id: "4-1",
    name: "Quinoa Salad",
    image: File.new("#{Rails.root}/app/assets/images/meals/quinoa_salad.jpg"),
    ingredients: [
      { name: "Quinoa" },
      { name: "Bell Peppers" },
      { name: "Cucumbers" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Vitamins" }],
    price: 9.99,
    description: "Nutritious quinoa salad with fresh veggies.",
    avaliability: true
  },
  {
    id: "4-2",
    name: "Sweet Potato Fries",
    image: File.new("#{Rails.root}/app/assets/images/meals/sweet_potato_fries.jpg"),
    ingredients: [{ name: "Sweet Potatoes" }, { name: "Olive Oil" }],
    nutrition: [{ name: "Carbs" }, { name: "Vitamins" }],
    price: 5.99,
    description: "Crispy sweet potato fries with a hint of olive oil.",
    avaliability: true
  },
  {
    id: "4-3",
    name: "Vegan Burger",
    image: File.new("#{Rails.root}/app/assets/images/meals/vegan_burger.jpg"),
    ingredients: [
      { name: "Black Bean Patty" },
      { name: "Lettuce" },
      { name: "Tomato" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Fiber" }],
    price: 11.49,
    description: "A hearty black bean patty with fresh toppings.",
    avaliability: true
  },
  {
    id: "4-4",
    name: "Chickpea Curry",
    image: File.new("#{Rails.root}/app/assets/images/meals/chickpea_curry.jpg"),
    ingredients: [
      { name: "Chickpeas" },
      { name: "Coconut Milk" },
      { name: "Spices" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Carbs" }],
    price: 12.99,
    description: "Spicy chickpea curry with coconut milk.",
    avaliability: true
  },
   {
        id: "4-5",
        name: "Fruit Smoothie",
        image: File.new("#{Rails.root}/app/assets/images/meals/fruit_smoothie.jpg"),
        ingredients: [
          { name: "Bananas" },
          { name: "Berries" },
          { name: "Spinach" }
        ],
        nutrition: [{ name: "Vitamins" }, { name: "Fiber" }],
        price: 6.49,
        description: "A refreshing smoothie packed with fruit and greens.",
        avaliability: true
      }
  ]
},
{
  name: "Burger Haven",
  image: File.new("#{Rails.root}/app/assets/images/restaurants/burger_haven.jpg"),
  email: "info@burgerhaven.com",
  categories: ["American", "Burgers"],
  phone_no: "+1234567894",
  description: "The ultimate destination for burger lovers.",
  address: "202 Meat Street, Burgertown",
  location: { lat: "39.0997", lon: "-94.5786" },
  state: "MO",
  country: "USA",
  opening_hours: [{ days: "Mon-Sun", times: "11:00 AM - 10:00 PM" }],
   meals: [
  {
    id: "5-1",
    name: "Cheeseburger",
    image: File.new("#{Rails.root}/app/assets/images/meals/cheeseburger.jpg"),
    ingredients: [
      { name: "Beef Patty" },
      { name: "Cheddar Cheese" },
      { name: "Pickles" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Fat" }],
    price: 13.49,
    description: "Classic cheeseburger with cheddar and pickles.",
    avaliability: true
  },
  {
    id: "5-2",
    name: "Bacon Burger",
    image: File.new("#{Rails.root}/app/assets/images/meals/bacon_burger.jpg"),
    ingredients: [
      { name: "Beef Patty" },
      { name: "Bacon" },
      { name: "Onions" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Fat" }],
    price: 14.99,
    description: "Juicy burger with crispy bacon and onions.",
    avaliability: true
  },
  {
    id: "5-3",
    name: "Veggie Burger",
    image: File.new("#{Rails.root}/app/assets/images/meals/vegan_burger.jpg"),
    ingredients: [
      { name: "Veggie Patty" },
      { name: "Lettuce" },
      { name: "Tomato" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Fiber" }],
    price: 12.49,
    description: "A satisfying veggie patty with fresh toppings.",
    avaliability: true
  },
  {
    id: "5-4",
    name: "Onion Rings",
    image: File.new("#{Rails.root}/app/assets/images/meals/onion_rings.jpg"),
    ingredients: [{ name: "Onions" }, { name: "Batter" }],
    nutrition: [{ name: "Carbs" }, { name: "Fat" }],
    price: 4.99,
    description: "Crispy onion rings served with dipping sauce.",
    avaliability: true
  },
  {
    id: "5-5",
    name: "Milkshake",
    image: File.new("#{Rails.root}/app/assets/images/meals/milkshake.avif"),
    ingredients: [
      { name: "Milk" },
      { name: "Ice Cream" },
      { name: "Chocolate Syrup" }
    ],
    nutrition: [{ name: "Sugar" }, { name: "Fat" }],
    price: 5.99,
    description: "Rich and creamy chocolate milkshake.",
    avaliability: true
  }
]
},
{
  name: "Taco Fiesta",
  image: File.new("#{Rails.root}/app/assets/images/restaurants/taco_fiesta.jpg"),
  email: "info@tacofiesta.com",
  categories: ["Mexican", "Tacos"],
  phone_no: "+1234567895",
  description: "A vibrant spot for tacos and other Mexican favorites.",
  address: "303 Taco Trail, Mexicantown",
  location: { lat: "32.7157", lon: "-117.1611" },
  state: "CA",
  country: "USA",
  opening_hours: [{ days: "Mon-Sun", times: "10:00 AM - 9:00 PM" }],
   meals: [
  {
    id: "6-1",
    name: "Beef Tacos",
    image: File.new("#{Rails.root}/app/assets/images/meals/beef_tacos.jpg"),
    ingredients: [
      { name: "Ground Beef" },
      { name: "Taco Shell" },
      { name: "Lettuce" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Carbs" }],
    price: 9.99,
    description: "Delicious beef tacos with fresh toppings.",
    avaliability: true
  },
  {
    id: "6-2",
    name: "Chicken Quesadilla",
    image: File.new("#{Rails.root}/app/assets/images/meals/chicken_quesandilla.jpg"),
    ingredients: [
      { name: "Chicken" },
      { name: "Cheese" },
      { name: "Tortilla" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Carbs" }],
    price: 11.49,
    description: "Grilled chicken and cheese in a crispy tortilla.",
    avaliability: true
  },
  {
    id: "6-3",
    name: "Guacamole",
    image: File.new("#{Rails.root}/app/assets/images/meals/guacamole.jpg"),
    ingredients: [
      { name: "Avocado" },
      { name: "Tomato" },
      { name: "Onions" }
    ],
    nutrition: [{ name: "Vitamins" }, { name: "Healthy Fats" }],
    price: 6.49,
    description: "Fresh guacamole with tortilla chips.",
    avaliability: true
  },
  {
    id: "6-4",
    name: "Elote",
    image: File.new("#{Rails.root}/app/assets/images/meals/elote.jpg"),
    ingredients: [
      { name: "Corn" },
      { name: "Mayo" },
      { name: "Cheese" }
    ],
    nutrition: [{ name: "Carbs" }, { name: "Fat" }],
    price: 5.99,
    description: "Grilled corn on the cob with a spicy topping.",
    avaliability: true
  },
  {
    id: "6-5",
    name: "Churros",
    image: File.new("#{Rails.root}/app/assets/images/meals/churros.jpg"),
    ingredients: [
      { name: "Flour" },
      { name: "Sugar" },
      { name: "Cinnamon" }
    ],
    nutrition: [{ name: "Sugar" }, { name: "Fat" }],
    price: 4.99,
    description: "Sweet and crispy churros with cinnamon sugar.",
    avaliability: true
  }
]

 },
{
  name: "Café Delights",
  image: File.new("#{Rails.root}/app/assets/images/restaurants/cafe_delight.jpg"),
  email: "contact@cafedelights.com",
  categories: ["Café", "Bakery"],
  phone_no: "+1234567896",
  description: "Charming café serving delightful pastries and coffee.",
  address: "404 Coffee Ave, Brewtown",
  location: { lat: "37.7749", lon: "-122.4194" },
  state: "CA",
  country: "USA",
  opening_hours: [{ days: "Mon-Sun", times: "7:00 AM - 7:00 PM" }],
   meals: [
  {
    id: "7-1",
    name: "Croissant",
    image: File.new("#{Rails.root}/app/assets/images/meals/croissant.jpg"),
    ingredients: [{ name: "Flour" }, { name: "Butter" }],
    nutrition: [{ name: "Carbs" }, { name: "Fat" }],
    price: 3.99,
    description: "Flaky and buttery croissant.",
    avaliability: true
  },
  {
    id: "7-2",
    name: "Espresso",
    image: File.new("#{Rails.root}/app/assets/images/meals/espresso.jpg"),
    ingredients: [{ name: "Coffee Beans" }],
    nutrition: [{ name: "Caffeine" }],
    price: 2.99,
    description: "Rich and strong espresso shot.",
    avaliability: true
  },
  {
    id: "7-3",
    name: "Blueberry Muffin",
    image: File.new("#{Rails.root}/app/assets/images/meals/blueberry_muffin.jpg"),
    ingredients: [{ name: "Blueberries" }, { name: "Flour" }],
    nutrition: [{ name: "Carbs" }, { name: "Vitamins" }],
    price: 4.49,
    description: "Sweet blueberry muffin with a crumbly top.",
    avaliability: true
  },
  {
    id: "7-4",
    name: "Caprese Panini",
    image: File.new("#{Rails.root}/app/assets/images/meals/caprese_panini.jpg"),
    ingredients: [
      { name: "Tomato" },
      { name: "Mozzarella" },
      { name: "Basil" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Carbs" }],
    price: 7.99,
    description: "Grilled panini with tomato, mozzarella, and basil.",
    avaliability: true
  },
  {
    id: "7-5",
    name: "Hot Chocolate",
    image: File.new("#{Rails.root}/app/assets/images/meals/hot_chocolate.jpg"),
    ingredients: [{ name: "Milk" }, { name: "Chocolate" }],
    nutrition: [{ name: "Sugar" }, { name: "Fat" }],
    price: 3.49,
    description: "Creamy hot chocolate with whipped cream.",
    avaliability: true
  }
   ]
},
{
  name: "Seafood Shack",
  image: File.new("#{Rails.root}/app/assets/images/restaurants/seafood_shack.png"),
  email: "info@seafoodshack.com",
  categories: ["Seafood", "Casual"],
  phone_no: "+1234567897",
  description: "Casual eatery specializing in fresh seafood dishes.",
  address: "505 Marine Rd, Seashore",
  location: { lat: "25.7617", lon: "-80.1918" },
  state: "FL",
  country: "USA",
  opening_hours: [{ days: "Mon-Sun", times: "11:00 AM - 10:00 PM" }],
  meals: [
  {
    id: "8-1",
    name: "Fish Tacos",
    image: File.new("#{Rails.root}/app/assets/images/meals/fish_tacos.jpg"),
    ingredients: [
      { name: "Fish" },
      { name: "Taco Shell" },
      { name: "Cabbage" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Carbs" }],
    price: 12.49,
    description: "Fish tacos with crunchy cabbage slaw.",
    avaliability: true
  },
  {
    id: "8-2",
    name: "Clam Chowder",
    image: File.new("#{Rails.root}/app/assets/images/meals/clam_chowder.jpg"),
    ingredients: [
      { name: "Clams" },
      { name: "Potatoes" },
      { name: "Cream" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Fat" }],
    price: 9.99,
    description: "Creamy clam chowder served in a bread bowl.",
    avaliability: true
  },
  {
    id: "8-3",
    name: "Grilled Salmon",
    image: File.new("#{Rails.root}/app/assets/images/meals/grilled_salmon.avif"),
    ingredients: [
      { name: "Salmon" },
      { name: "Lemon" },
      { name: "Herbs" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Omega-3" }],
    price: 16.99,
    description: "Grilled salmon with lemon and fresh herbs.",
    avaliability: true
  },
  {
    id: "8-4",
    name: "Shrimp Cocktail",
    image: File.new("#{Rails.root}/app/assets/images/meals/shrimp_cocktail.jpg"),
    ingredients: [{ name: "Shrimp" }, { name: "Cocktail Sauce" }],
    nutrition: [{ name: "Protein" }],
    price: 11.49,
    description: "Chilled shrimp served with cocktail sauce.",
    avaliability: true
  },
  {
    id: "8-5",
    name: "Key Lime Pie",
    image: File.new("#{Rails.root}/app/assets/images/meals/key_lime_pie.jpg"),
    ingredients: [
      { name: "Limes" },
      { name: "Graham Cracker Crust" }
    ],
    nutrition: [{ name: "Sugar" }, { name: "Fat" }],
    price: 6.49,
    description: "Tangy key lime pie with a graham cracker crust.",
    avaliability: true
  }
],
},
{
  name: "Indian Spice",
  image: File.new("#{Rails.root}/app/assets/images/restaurants/indian_spice.jpeg"),
  email: "info@indianspice.com",
  categories: ["Indian", "Spicy"],
  phone_no: "+1234567898",
  description: "Authentic Indian cuisine with bold and spicy flavors.",
  address: "606 Curry Blvd, Spice City",
  location: { lat: "28.6139", lon: "77.2090" },
  state: "DL",
  country: "India",
  opening_hours: [{ days: "Mon-Sun", times: "10:00 AM - 10:00 PM" }],
  meals: [
  {
    id: "9-1",
    name: "Butter Chicken",
    image: File.new("#{Rails.root}/app/assets/images/meals/butter_chicken.avif"),
    ingredients: [
      { name: "Chicken" },
      { name: "Butter" },
      { name: "Cream" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Fat" }],
    price: 14.99,
    description: "Creamy butter chicken with a rich tomato sauce.",
    avaliability: true
  },
  {
    id: "9-2",
    name: "Chana Masala",
    image: File.new("#{Rails.root}/app/assets/images/meals/chana_masala.jpg"),
    ingredients: [
      { name: "Chickpeas" },
      { name: "Tomato" },
      { name: "Spices" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Fiber" }],
    price: 11.49,
    description: "Spicy chickpea curry with aromatic spices.",
    avaliability: true
  },
  {
    id: "9-3",
    name: "Palak Paneer",
    image: File.new("#{Rails.root}/app/assets/images/meals/palak_paneer.avif"),
    ingredients: [
      { name: "Paneer" },
      { name: "Spinach" },
      { name: "Cream" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Vitamins" }],
    price: 12.99,
    description: "Paneer cheese cooked with spinach and spices.",
    avaliability: true
  },
  {
    id: "9-4",
    name: "Naan Bread",
    image: File.new("#{Rails.root}/app/assets/images/meals/naan_bread.jpg"),
    ingredients: [
      { name: "Flour" },
      { name: "Yeast" },
      { name: "Yogurt" }
    ],
    nutrition: [{ name: "Carbs" }],
    price: 3.49,
    description: "Soft and fluffy naan bread, perfect for dipping.",
    avaliability: true
  },
  {
    id: "9-5",
    name: "Raita",
    image: File.new("#{Rails.root}/app/assets/images/meals/raita.jpg"),
    ingredients: [
      { name: "Yogurt" },
      { name: "Cucumber" },
      { name: "Spices" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Vitamins" }],
    price: 4.99,
    description: "Cool and refreshing yogurt-based side dish.",
    avaliability: true
  }
]
},
{
  name: "Thai Temple",
  image: File.new("#{Rails.root}/app/assets/images/restaurants/thai_temple.png"),
  email: "info@thaitemple.com",
  categories: ["Thai", "Asian"],
  phone_no: "+1234567899",
  description: "Delicious Thai dishes with authentic flavors.",
  address: "707 Thai Rd, Bangkok City",
  location: { lat: "13.7563", lon: "100.5018" },
  state: "Bangkok",
  country: "Thailand",
  opening_hours: [{ days: "Mon-Sun", times: "11:00 AM - 10:00 PM" }],
  meals: [
  {
    id: "10-1",
    name: "Pad Thai",
    image: File.new("#{Rails.root}/app/assets/images/meals/pad_thai.avif"),
    ingredients: [
      { name: "Rice Noodles" },
      { name: "Shrimp" },
      { name: "Peanuts" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Carbs" }],
    price: 13.99,
    description: "Stir-fried rice noodles with shrimp and peanuts.",
    avaliability: true
  },
  {
    id: "10-2",
    name: "Green Curry",
    image: File.new("#{Rails.root}/app/assets/images/meals/green_curry.jpg"),
    ingredients: [
      { name: "Curry Paste" },
      { name: "Coconut Milk" },
      { name: "Chicken" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Fat" }],
    price: 14.49,
    description: "Spicy green curry with chicken and vegetables.",
    avaliability: true
  },
  {
    id: "10-3",
    name: "Spring Rolls",
    image: File.new("#{Rails.root}/app/assets/images/meals/spring_rolls.jpg"),
    ingredients: [
      { name: "Rice Paper" },
      { name: "Vegetables" },
      { name: "Shrimp" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Fiber" }],
    price: 7.99,
    description: "Crispy spring rolls with shrimp and fresh vegetables.",
    avaliability: true
  },
  {
    id: "10-4",
    name: "Tom Yum Soup",
    image: File.new("#{Rails.root}/app/assets/images/meals/tom_yum_soup.avif"),
    ingredients: [
      { name: "Shrimp" },
      { name: "Lemongrass" },
      { name: "Chili" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Vitamins" }],
    price: 8.99,
    description: "Hot and sour shrimp soup with lemongrass.",
    avaliability: true
  },
  {
    id: "10-5",
    name: "Mango Sticky Rice",
    image: File.new("#{Rails.root}/app/assets/images/meals/mango_sticky_rice.jpg"),
    ingredients: [
      { name: "Mango" },
      { name: "Sticky Rice" },
      { name: "Coconut Milk" }
    ],
    nutrition: [{ name: "Carbs" }, { name: "Sugar" }],
    price: 5.99,
    description: "Sweet mango served with sticky rice and coconut milk.",
    avaliability: true
  }
],
},
{
  name: "Greek Oasis",
  image: File.new("#{Rails.root}/app/assets/images/restaurants/greek_oasis.png"),
  email: "info@greekoasis.com",
  categories: ["Greek", "Mediterranean"],
  phone_no: "+1234567800",
  description: "Experience the flavors of Greece with our authentic dishes.",
  address: "808 Olive Ave, Greektown",
  location: { lat: "37.9838", lon: "23.7275" },
  state: "Athens",
  country: "Greece",
  opening_hours: [{ days: "Mon-Sun", times: "11:00 AM - 9:00 PM" }],
  meals: [
  {
    id: "11-1",
    name: "Moussaka",
    image: File.new("#{Rails.root}/app/assets/images/meals/moussaka.jpg"),
    ingredients: [
      { name: "Eggplant" },
      { name: "Ground Beef" },
      { name: "Bechamel Sauce" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Carbs" }],
    price: 15.49,
    description: "Layered dish with eggplant, beef, and creamy sauce.",
    avaliability: true
  },
  {
    id: "11-2",
    name: "Souvlaki",
    image: File.new("#{Rails.root}/app/assets/images/meals/souvlaki.jpg"),
    ingredients: [
      { name: "Pork" },
      { name: "Pita Bread" },
      { name: "Tzatziki" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Carbs" }],
    price: 12.99,
    description: "Grilled pork skewers served with pita and tzatziki.",
    avaliability: true
  },
  {
    id: "11-3",
    name: "Greek Salad",
    image: File.new("#{Rails.root}/app/assets/images/meals/greek_salad.jpg"),
    ingredients: [
      { name: "Tomatoes" },
      { name: "Cucumber" },
      { name: "Feta Cheese" }
    ],
    nutrition: [{ name: "Vitamins" }, { name: "Protein" }],
    price: 8.99,
    description: "Fresh salad with tomatoes, cucumber, and feta.",
    avaliability: true
  },
  {
    id: "11-4",
    name: "Spanakopita",
    image: File.new("#{Rails.root}/app/assets/images/meals/spanakopita.avif"),
    ingredients: [
      { name: "Spinach" },
      { name: "Feta Cheese" },
      { name: "Phyllo Dough" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Carbs" }],
    price: 9.49,
    description: "Flaky pastry filled with spinach and feta cheese.",
    avaliability: true
  },
  {
    id: "11-5",
    name: "Baklava",
    image: File.new("#{Rails.root}/app/assets/images/meals/baklava.avif"),
    ingredients: [
      { name: "Phyllo Dough" },
      { name: "Honey" },
      { name: "Nuts" }
    ],
    nutrition: [{ name: "Sugar" }, { name: "Fat" }],
    price: 4.99,
    description: "Sweet pastry with layers of phyllo dough, honey, and nuts.",
    avaliability: true
  }
]
},
{
  name: "Pizza Palace",
  image: File.new("#{Rails.root}/app/assets/images/restaurants/pizza_palace.png"),
  email: "info@pizzapalace.com",
  categories: ["Italian", "Pizza"],
  phone_no: "+1234567801",
  description: "Delicious pizzas and Italian dishes made from scratch.",
  address: "909 Pizza St, Italytown",
  location: { lat: "41.9028", lon: "12.4964" },
  state: "Rome",
  country: "Italy",
  opening_hours: [{ days: "Mon-Sun", times: "10:00 AM - 11:00 PM" }],
  meals: [
  {
    id: "12-1",
    name: "Margherita Pizza",
    image: File.new("#{Rails.root}/app/assets/images/meals/margherita_pizza.avif"),
    ingredients: [
      { name: "Tomato Sauce" },
      { name: "Mozzarella Cheese" },
      { name: "Basil" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Carbs" }],
    price: 10.99,
    description: "Classic pizza with tomato sauce, mozzarella, and basil.",
    avaliability: true
  },
  {
    id: "12-2",
    name: "Pepperoni Pizza",
    image: File.new("#{Rails.root}/app/assets/images/meals/pepperoni_pizza.avif"),
    ingredients: [
      { name: "Tomato Sauce" },
      { name: "Mozzarella Cheese" },
      { name: "Pepperoni" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Fat" }],
    price: 12.49,
    description: "Spicy pepperoni pizza with mozzarella cheese.",
    avaliability: true
  },
  {
    id: "12-3",
    name: "Pasta Carbonara",
    image: File.new("#{Rails.root}/app/assets/images/meals/spaghetti_carbonara.jpg"),
    ingredients: [
      { name: "Pasta" },
      { name: "Pancetta" },
      { name: "Parmesan Cheese" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Fat" }],
    price: 14.99,
    description: "Rich pasta with pancetta and Parmesan cheese.",
    avaliability: true
  },
  {
    id: "12-4",
    name: "Tiramisu",
    image: File.new("#{Rails.root}/app/assets/images/meals/tiramisu.jpg"),
    ingredients: [
      { name: "Mascarpone Cheese" },
      { name: "Coffee" },
      { name: "Ladyfingers" }
    ],
    nutrition: [{ name: "Sugar" }, { name: "Fat" }],
    price: 6.99,
    description: "Classic Italian dessert with coffee and mascarpone.",
    avaliability: true
  },
  {
    id: "12-5",
    name: "Caprese Salad",
    image: File.new("#{Rails.root}/app/assets/images/meals/caprese_salad.jpg"),
    ingredients: [
      { name: "Tomatoes" },
      { name: "Mozzarella Cheese" },
      { name: "Basil" }
    ],
    nutrition: [{ name: "Vitamins" }, { name: "Protein" }],
    price: 7.49,
    description: "Fresh salad with tomatoes, mozzarella, and basil.",
    avaliability: true
  }
]
},
{
  name: "Sushi World",
  image: File.new("#{Rails.root}/app/assets/images/restaurants/sushi_world.png"),
  email: "info@sushiworld.com",
  categories: ["Japanese", "Sushi"],
  phone_no: "+1234567802",
  description: "Fresh sushi and Japanese delicacies with an emphasis on quality.",
  address: "101 Sushi Lane, Tokyo",
  location: { lat: "35.6895", lon: "139.6917" },
  state: "Tokyo",
  country: "Japan",
  opening_hours: [{ days: "Mon-Sun", times: "11:00 AM - 10:00 PM" }],
  meals: [
  {
    id: "13-1",
    name: "California Roll",
    image: File.new("#{Rails.root}/app/assets/images/meals/california_roll.jpg"),
    ingredients: [
      { name: "Crab" },
      { name: "Avocado" },
      { name: "Cucumber" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Carbs" }],
    price: 9.99,
    description: "Roll with crab, avocado, and cucumber.",
    avaliability: true
  },
  {
    id: "13-2",
    name: "Sushi Platter",
    image: File.new("#{Rails.root}/app/assets/images/meals/sushi_platter.jpg"),
    ingredients: [
      { name: "Various Fish" },
      { name: "Rice" },
      { name: "Seaweed" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Omega-3" }],
    price: 24.99,
    description: "Assorted sushi with various fish.",
    avaliability: true
  },
  {
    id: "13-3",
    name: "Miso Soup",
    image: File.new("#{Rails.root}/app/assets/images/meals/miso_soup.jpg"),
    ingredients: [
      { name: "Miso Paste" },
      { name: "Tofu" },
      { name: "Seaweed" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Vitamins" }],
    price: 4.99,
    description: "Traditional miso soup with tofu and seaweed.",
    avaliability: true
  },
  {
    id: "13-4",
    name: "Tempura",
    image: File.new("#{Rails.root}/app/assets/images/meals/tempura_shrimp.jpg"),
    ingredients: [
      { name: "Shrimp" },
      { name: "Vegetables" },
      { name: "Batter" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Fat" }],
    price: 12.49,
    description: "Crispy tempura shrimp and vegetables.",
    avaliability: true
  },
  {
    id: "13-5",
    name: "Matcha Ice Cream",
    image: File.new("#{Rails.root}/app/assets/images/meals/macha_ice_cream.jpg"),
    ingredients: [
      { name: "Matcha" },
      { name: "Milk" },
      { name: "Sugar" }
    ],
    nutrition: [{ name: "Sugar" }, { name: "Fat" }],
    price: 5.49,
    description: "Creamy matcha ice cream.",
    avaliability: true
  }
]
  },
{
  name: "Burger Bonanza",
  image: File.new("#{Rails.root}/app/assets/images/restaurants/burger_bonanza.png"),
  email: "info@burgerbonanza.com",
  categories: ["American", "Burgers"],
  phone_no: "+1234567803",
  description: "Indulge in a variety of mouthwatering burgers.",
  address: "202 Grill St, Burgerland",
  location: { lat: "40.7128", lon: "-74.0060" },
  state: "NY",
  country: "USA",
  opening_hours: [{ days: "Mon-Sun", times: "11:00 AM - 11:00 PM" }],
  meals: [
  {
    id: "14-1",
    name: "Double Cheeseburger",
    image: File.new("#{Rails.root}/app/assets/images/meals/double_cheeseburger.jpg"),
    ingredients: [
      { name: "Beef Patty" },
      { name: "Double Cheese" },
      { name: "Pickles" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Fat" }],
    price: 15.99,
    description: "Double beef patty with double cheese and pickles.",
    avaliability: true
  },
  {
    id: "14-2",
    name: "Bacon Cheeseburger",
    image: File.new("#{Rails.root}/app/assets/images/meals/bacon_cheeseburger.jpg"),
    ingredients: [
      { name: "Beef Patty" },
      { name: "Bacon" },
      { name: "Cheddar Cheese" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Fat" }],
    price: 14.49,
    description: "Beef patty topped with bacon and cheddar cheese.",
    avaliability: true
  },
  {
    id: "14-3",
    name: "Veggie Delight Burger",
    image: File.new("#{Rails.root}/app/assets/images/meals/veggie_delight_burger.jpg"),
    ingredients: [
      { name: "Veggie Patty" },
      { name: "Lettuce" },
      { name: "Tomato" }
    ],
    nutrition: [{ name: "Protein" }, { name: "Fiber" }],
    price: 13.49,
    description: "Veggie patty with fresh lettuce and tomato.",
    avaliability: true
  },
  {
    id: "14-4",
    name: "Sweet Potato Fries",
    image: File.new("#{Rails.root}/app/assets/images/meals/sweet_potato_fries.jpg"),
    ingredients: [{ name: "Sweet Potatoes" }, { name: "Olive Oil" }],
    nutrition: [{ name: "Carbs" }, { name: "Vitamins" }],
    price: 5.99,
    description: "Sweet potato fries with a hint of olive oil.",
    avaliability: true
  },
  {
    id: "14-5",
    name: "Milkshake",
    image: File.new("#{Rails.root}/app/assets/images/meals/milkshake.avif"),
    ingredients: [
      { name: "Milk" },
      { name: "Ice Cream" },
      { name: "Chocolate Syrup" }
    ],
    nutrition: [{ name: "Sugar" }, { name: "Fat" }],
    price: 6.49,
    description: "Creamy milkshake with chocolate syrup.",
    avaliability: true
  }
]
}
]

restaurants.each do |restaurant|
  rest = Restaurant.create!(
    name: restaurant[:name],
    email: restaurant[:email],
    password: "test1234",
    password_confirmation: "test1234",
    phone_no: restaurant[:phone_no],
    description: restaurant[:description],
    address: restaurant[:address],
    location: restaurant[:location].to_json,
    state: restaurant[:state],
    country: restaurant[:country],
    opening_hours: restaurant[:opening_hours].to_json
  )
  
    rest.image.attach(restaurant[:image])

    # Create Meals
    restaurant[:meals].each do |meal|
      puts "MEal Name - #{meal[:name]}"

      new_meal = Meal.create!(
        restaurant_id: rest.id,
        name: meal[:name],
        description: meal[:description],
        ingredients: meal[:ingredients].to_json,
        nutrition: meal[:nutrition].to_json,
        avaliability: meal[:avaliability],
        price: meal[:price]
      )

      new_meal.image.attach(meal[:image])

    end
    puts "Created Meals Successfully"

  restaurant[:categories].each do |cat|
    category = Category.find_by(name: cat)

    rest.categories << category if category.present? && !rest.categories.include?(category)
  end
end
