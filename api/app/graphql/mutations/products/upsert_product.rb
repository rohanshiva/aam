# frozen_string_literal: true

module Mutations
  module Products
    class UpsertProduct < BaseMutation    
      argument :product, Types::Inputs::Products::ProductInputType, required: true
      argument :id, ID, required: false
  
      field :product, Types::Products::ProductType, null: true
      field :errors, [String], null: false
  
      record_class ::Product
  
      def resolve(**input)
        if record
          update_product(record, input[:product])
        else
          create_product(input[:product])
        end
      end
  
      def update_product(product, product_input)
        outcome = ::Products::UpdateProduct.run(
          product: product,
          **product_input.to_h
        )

        if outcome.valid?
          { product: product, errors: [] }
        else
          { product: nil, errors: outcome.errors.full_messages }
        end
      end
  
      def create_product(product_input)
        outcome = ::Products::CreateProduct.run(
          seller: product_input[:seller_id],
          **product_input.to_h
        )
  
        if outcome.valid?
          { product: outcome.result, errors: [] }
        else
          { product: nil, errors: outcome.errors.full_messages }
        end
      end
    end
  end
end
