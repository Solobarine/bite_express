categories = [
  {
    name: 'American',
    image: File.new("#{Rails.root}/app/assets/images/categories/american.jpg")
  },
  {
    name: 'Grill',
    image: File.new("#{Rails.root}/app/assets/images/categories/grill.avif")
  },
  {
    name: 'Japanese',
    image: File.new("#{Rails.root}/app/assets/images/categories/japanese.jpg")
  },
  {
    name: 'Sushi',
    image: File.new("#{Rails.root}/app/assets/images/categories/sushi.jpg")
  },
  {
    name: 'Italian',
    image: File.new("#{Rails.root}/app/assets/images/categories/italian.jpg")
  },
  {
    name: 'Pasta',
    image: File.new("#{Rails.root}/app/assets/images/categories/pasta.avif")
  },
  {
    name: 'Vegan',
    image: File.new("#{Rails.root}/app/assets/images/categories/vegan.jpg")
  },
  {
    name: 'Healthy',
    image: File.new("#{Rails.root}/app/assets/images/categories/healthy.jpg")
  },
  { name: 'Burger', image: File.new("#{Rails.root}/app/assets/images/categories/burger.jpg") },
  { name: 'Mexican', image: File.new("#{Rails.root}/app/assets/images/categories/mexican.jpg") },
  { name: 'Tacos', image: File.new("#{Rails.root}/app/assets/images/categories/tacos.jpg") },
  { name: 'Cafe', image: File.new("#{Rails.root}/app/assets/images/categories/cafe.avif") },
  { name: 'Bakery', image: File.new("#{Rails.root}/app/assets/images/categories/bakery.jpg") },
  { name: 'Seafood', image: File.new("#{Rails.root}/app/assets/images/categories/seafood.avif") },
  { name: 'Casual', image: File.new("#{Rails.root}/app/assets/images/categories/casual.jpg") },
  { name: 'Indian', image: File.new("#{Rails.root}/app/assets/images/categories/indian.avif") },
  { name: 'Spicy', image: File.new("#{Rails.root}/app/assets/images/categories/spicy.jpg") },
  { name: 'Thai', image: File.new("#{Rails.root}/app/assets/images/categories/thai.jpg") },
  { name: 'Asian', image: File.new("#{Rails.root}/app/assets/images/categories/asian.avif") },
  { name: 'Greek', image: File.new("#{Rails.root}/app/assets/images/categories/greek.jpg") },
  { name: 'Mediterranean', image: File.new("#{Rails.root}/app/assets/images/categories/mediterranean.jpg") },
  { name: 'Pizza', image: File.new("#{Rails.root}/app/assets/images/categories/pizza.jpg") }
]

categories.each do |cat|
  category = Category.find_or_create_by(name: cat[:name])
  category.image.attach(cat[:image])
end
