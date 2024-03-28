# frozen_string_literal: true

require "active_interaction"

class FindResource < ActiveInteraction::Base

  object :params, class: "ActionController::Parameters", default: -> { ActionController::Parameters.new }

  attr_reader :query

  def execute
    raise "Must be overridden"
  end

  private

  def init_query(klass)
    @query = klass
    # Add default scope on 'id'
    scope_by_id
  end

  def scope_by_id
    @query = @query.where(id: params[:id]) unless params[:id].nil?
  end

  def scope_by_columns(*columns)
    columns.each do |column|
      if (value = params[column].presence)
        @query = @query.where(column => value)
      end
    end
  end

  def order_results(order_query)
    @query = @query.reorder(order_query)
  end
end
