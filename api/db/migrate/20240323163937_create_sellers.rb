class CreateSellers < ActiveRecord::Migration[7.0]
  def change
    create_table :sellers, id: :uuid do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :avatar_url, null: true

      t.timestamps
    end
  end
end
