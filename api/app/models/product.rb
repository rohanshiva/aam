# frozen_string_literal: true

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
class Product < ApplicationRecord
  belongs_to :seller
  has_many :releases

  has_one :latest_release, lambda { |product|
    order(release_date: :desc)
  }, class_name: "Release", inverse_of: :product
end
