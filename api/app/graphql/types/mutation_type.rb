# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :upsert_product, mutation: Mutations::Products::UpsertProduct
    field :create_release, mutation: Mutations::Products::CreateRelease
  end
end
