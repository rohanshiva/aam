# frozen_string_literal: true

module Types
  class CurrencyEnumType < BaseEnum
    Money::Currency.map(&:iso_code).uniq.each do |iso_code|
      value(iso_code, value: iso_code)
    end
  end
end
