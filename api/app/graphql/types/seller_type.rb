# frozen_string_literal: true

module Types
  class SellerType < BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :email, String, null: false
    field :avatar_url, String, null: true
  end
end
