# frozen_string_literal: true

# == Schema Information
#
# Table name: releases
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  release_date :date             not null
#  seller_id    :uuid
#  product_id   :uuid
#  notes        :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Release < ApplicationRecord
  belongs_to :seller
  belongs_to :product
end
