require 'faker'

Restaurant.all.each do |restaurant|
  User.all.each do |user|
    Review.create!(
      user_id: user.id,
      restaurant_id: restaurant.id,
      title: Faker::Lorem.sentence(word_count: rand(1..4)),
      content: Faker::Lorem.paragraph(sentence_count: 3),
      ratings: rand(1..5)
    )
  end
end

puts 'Seeded Reviews Table Successfully'
