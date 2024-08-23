require 'faker'

Restaurant.all.each do |restaurant|
  User.all.each do |user|
    Review.create!(
      user_id: user.id,
      restaurant_id: restaurant.id,
      title: Faker::Lorem.paragraph(sentence_count: 1),
      content: Faker::Lorem.paragraph(sentence_count: 2),
      ratings: rand(1..5)
    )
  end
end

puts 'Seeded Reviews Table Successfully'
