# frozen_string_literal: true

class FindProducts < FindResource
  ORDER = { created_at: :desc }.freeze

  def execute
    init_query(Product)
    scope_by_columns(:name, :description, :price, :currency, :seller_id)
    order_results(ORDER)
    query.all
  end
end
