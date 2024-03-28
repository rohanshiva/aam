# frozen_string_literal: true

module Types
  module Products
    class ReleaseType < BaseObject
      graphql_name "ReleaseType"

      field :id, ID, null: false
      field :name, String, null: false
      field :notes, String, null: true
      field :release_date, GraphQL::Types::ISO8601Date, null: false
      field :pretty_release_date, String, null: false
      field :product, ProductType, null: false
      field :seller, SellerType, null: false

      def pretty_release_date
        object.release_date.strftime("%B %d, %Y")
      end
    end
  end
end
