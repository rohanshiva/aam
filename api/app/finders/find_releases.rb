# frozen_string_literal: true

class FindReleases < FindResource
  ORDER = { created_at: :desc }.freeze

  def execute
    init_query(Release)
    scope_by_columns(:seller_id, :product_id)
    order_results(ORDER)
    query.all
  end
end
