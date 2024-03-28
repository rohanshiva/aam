# frozen_string_literal: true

module Mutations
  module Products
    class CreateRelease < BaseMutation
      argument :release, Types::Inputs::Products::ReleaseInputType, required: true

      field :release, Types::Products::ReleaseType, null: true
      field :errors, [String], null: false

      record_class ::Release

      def resolve(**input)
        release_input = input[:release]
        outcome = ::Products::CreateRelease.run(
          seller: release_input[:seller_id],
          product: release_input[:product_id],
          **release_input.to_h
        )

        if outcome.valid?
          { release: outcome.result, errors: [] }
        else
          { release: nil, errors: outcome.errors.full_messages }
        end
      end
    end
  end
end
