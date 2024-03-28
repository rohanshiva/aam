class CreateReleases < ActiveRecord::Migration[7.0]
  def change
    create_table :releases do |t|
      t.string :name, null: false
      t.date :release_date, null: false
      t.references :seller, foreign_key: true, type: :uuid, index: true
      t.references :product, foreign_key: true, type: :uuid, index: true
      t.text :notes, null: true

      t.timestamps
    end
  end
end
