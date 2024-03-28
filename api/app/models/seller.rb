# frozen_string_literal: true

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
class Seller < ApplicationRecord
  has_many :products
end
