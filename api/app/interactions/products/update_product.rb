# frozen_string_literal: true

require "active_interaction"

module Products
  class UpdateProduct < ActiveInteraction::Base
    record :product, class: Product
    string :name, default: nil
    string :description, default: nil
    string :cover_img_url, default: nil
    string :thumbnail_img_url, default: nil
    string :theme_color, default: nil
    integer :price, default: nil
    string :currency, default: nil
  
    def execute
      Product.transaction do
        attributes = {
          name: name,
          description: description,
          cover_img_url: cover_img_url,
          thumbnail_img_url: thumbnail_img_url,
          theme_color: theme_color,
          price: price,
          currency: currency
        }.compact_blank
  
        product.update!(attributes)
      end
    end
  end
end
