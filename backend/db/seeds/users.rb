require 'faker'

password = 'test1234'

20.times do
  first_name = Faker::Name.first_name
  User.create!(
    first_name:,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.unique.email(name: first_name, domain: 'gmail.com'),
    password:,
    phone_no: Faker::PhoneNumber.phone_number_with_country_code,
    date_of_birth: Faker::Date.birthday(min_age: 16, max_age: 100),
    password_confirmation: password,
    nationality: Faker::Address.country
  )
end

puts 'Seeded User Table Successfully'
