# frozen_string_literal: true

module Resolvers
  module Products
    class ProductsResolver < BaseResolver
      type [Types::Products::ProductType], null: false
      
      argument :id, ID, required: false
      argument :seller_id, ID, required: false
      argument :name, String, required: false
      argument :description, String, required: false
      argument :currency, Types::CurrencyEnumType, required: false
      argument :price, GraphQL::Types::BigInt, required: false
  
      def resolve(**args)
        FindProducts.run!(params: ActionController::Parameters.new(args))
      end
    end
  end
end
