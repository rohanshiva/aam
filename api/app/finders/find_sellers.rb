# frozen_string_literal: true

class FindSellers < FindResource
  def execute
    init_query(Seller)
    scope_by_columns(:name, :email)
    query
  end
end
