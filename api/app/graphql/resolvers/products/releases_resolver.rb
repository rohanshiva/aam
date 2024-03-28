# frozen_string_literal: true

module Resolvers
  module Products
    class ReleasesResolver < BaseResolver
      type [Types::Products::ReleaseType], null: false

      argument :seller_id, ID, required: false
      argument :product_id, ID, required: false

      def resolve(**args)
        FindReleases.run!(params: ActionController::Parameters.new(args))
      end
    end
  end
end
