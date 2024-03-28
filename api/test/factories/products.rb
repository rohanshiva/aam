# == Schema Information
#
# Table name: products
#
#  id                :uuid             not null, primary key
#  name              :string           not null
#  description       :text
#  cover_img_url     :string
#  thumbnail_img_url :string
#  theme_color       :string
#  price             :bigint           not null
#  currency          :string           not null
#  seller_id         :uuid
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
FactoryBot.define do
  factory :product do
    name { Faker::Commerce.product_name }
    description { Faker::Markdown.random }
    price { Faker::Number.number(digits: 4) }
    currency { "USD" }

    seller { Seller.last || create(:seller) }
  end
end
