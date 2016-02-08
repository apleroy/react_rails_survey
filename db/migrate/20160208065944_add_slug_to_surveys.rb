class AddSlugToSurveys < ActiveRecord::Migration
  def change
    add_column :surveys, :slug, :string
    add_index :surveys, :slug, unique: true
  end
end
