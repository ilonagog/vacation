class CreatePlaces < ActiveRecord::Migration[6.1]
  def change
    create_table :places do |t|
      t.string :name
      t.string :location
      t.string :image
      t.text :description
      t.integer :price
      
      t.timestamps
    end
  end
end
