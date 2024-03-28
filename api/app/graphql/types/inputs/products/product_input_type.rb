# frozen_string_literal: true

module Types
  module Inputs
    module Products
      class ProductInputType < BaseInputObject
        graphql_name "ProductInputType"

        argument :id, ID, required: false
        argument :name, String, required: false
        argument :description, String, required: false
        argument :cover_img_url, String, required: false
        argument :thumbnail_img_url, String, required: false
        argument :theme_color, String, required: false
        argument :price, GraphQL::Types::BigInt, required: false
        argument :currency, CurrencyEnumType, required: false
        argument :seller_id, ID, required: false
      end
    end
  end
end
