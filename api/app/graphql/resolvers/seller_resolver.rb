# frozen_string_literal: true

module Resolvers
  class SellerResolver < BaseResolver
    type Types::SellerType, null: true
    
    argument :id, ID, required: false
    argument :email, String, required: false
    
    def resolve(**args)
      if args[:id].blank? && args[:email].blank?
        raise GraphQL::ExecutionError, "Must provide either an id or an email to find a seller."
      end

      FindSellers.run!(params: ActionController::Parameters.new(args)).first
    end
  end
end
