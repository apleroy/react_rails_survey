class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.integer :quiz_id
      t.integer :number
      t.text :text

      t.timestamps null: false
    end
  end
end
