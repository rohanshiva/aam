# frozen_string_literal: true

module Types
  module Products
    class ProductType < BaseObject
      graphql_name "ProductType"

      field :id, ID, null: false
      field :name, String, null: false
      field :description, String, null: true
      field :cover_img_url, String, null: true
      field :thumbnail_img_url, String, null: true
      field :theme_color, String, null: true
      field :price,
            GraphQL::Types::BigInt,
            null: false,
            description: "BigInt will be coerced to a string for this field to accommodate large numbers"
      field :pretty_price, String, null: false
      field :pretty_latest_release, String, null: false
      field :currency, CurrencyEnumType, null: false
      field :seller, SellerType, null: false
      field :releases, [ReleaseType], null: false

      def pretty_latest_release
        object.latest_release&.name || "N/A"
      end

      def pretty_price
        Money.new(object.price, object.currency).format
      end

      def releases
        object.releases
      end
    end
  end
end
