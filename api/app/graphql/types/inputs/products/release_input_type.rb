# frozen_string_literal: true

module Types
  module Inputs
    module Products
      class ReleaseInputType < BaseInputObject
        graphql_name "ReleaseInputType"

        argument :id, ID, required: false
        argument :name, String, required: false
        argument :notes, String, required: false
        argument :release_date, GraphQL::Types::ISO8601Date, required: false
        argument :seller_id, ID, required: false
        argument :product_id, ID, required: false
      end
    end
  end
end
