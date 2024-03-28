class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products, id: :uuid do |t|
      t.string :name, null: false
      t.text :description, null: true
      t.string :cover_img_url, null: true
      t.string :thumbnail_img_url, null: true
      t.string :theme_color, null: true
      t.bigint :price, null: false
      t.string :currency, null: false

      t.references :seller, foreign_key: true, type: :uuid, index: true

      t.timestamps
    end
  end
end
