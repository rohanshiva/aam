# frozen_string_literal: true

module Mutations
  class BaseMutation < GraphQL::Schema::RelayClassicMutation
    argument_class Types::BaseArgument
    field_class Types::BaseField
    input_object_class Types::BaseInputObject
    object_class Types::BaseObject

    class_attribute :record_class

    class << self
      def record_class(klass = nil)
        self.record_class = klass if klass
      end
    end

    private

    def record
      @record = record_class && record_id && record_class.find(record_id)
    end

    def record_id
      @record_id = arguments[:id]
    end
  end
end
