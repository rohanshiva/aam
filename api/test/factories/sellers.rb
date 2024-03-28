# == Schema Information
#
# Table name: sellers
#
#  id         :uuid             not null, primary key
#  name       :string           not null
#  email      :string           not null
#  avatar_url :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :seller do
    name { Faker::Name.name }
    email { Faker::Internet.email }
  end
end
