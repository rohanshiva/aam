# frozen_string_literal: true

require "active_interaction"

module Products
  class CreateProduct < ActiveInteraction::Base
    string :name
    string :description, default: nil
    string :cover_img_url, default: nil
    string :thumbnail_img_url, default: nil
    string :theme_color, default: nil
    integer :price
    string :currency
    record :seller, class: Seller
  
    def execute
      Product.transaction do
        product = Product.new(
          name: name,
          description: description,
          cover_img_url: cover_img_url,
          thumbnail_img_url: thumbnail_img_url,
          theme_color: theme_color,
          price: price,
          currency: currency,
          seller: seller
        )
        product.tap(&:save!)
      end
    end
  end
end
