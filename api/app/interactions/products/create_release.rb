# frozen_string_literal: true

require "active_interaction"

module Products
  class CreateRelease < ActiveInteraction::Base
    string :name
    string :notes, default: nil
    date :release_date, default: -> { Time.zone.today }
    record :seller, class: Seller
    record :product, class: Product

    def execute
      Release.transaction do
        release = Release.new(
          name: name,
          notes: notes,
          release_date: release_date,
          product_id: product.id,
          seller_id: seller.id,
        )
        release.tap(&:save!)
      end
    end
  end
end
