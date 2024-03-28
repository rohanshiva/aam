class AddUniqueIndexToSellersEmail < ActiveRecord::Migration[7.0]
  def change
    add_index :sellers, :email, unique: true
  end
end
