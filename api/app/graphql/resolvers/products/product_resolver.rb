# frozen_string_literal: true

module Resolvers
  module Products
    class ProductResolver < BaseResolver
      type Types::Products::ProductType, null: true
      
      argument :id, ID, required: false
      
      def resolve(**args)
        Product.find(args[:id])
      end
    end
  end
end
