class AddSurveyIdToQuestion < ActiveRecord::Migration
  def change
    add_column :questions, :survey_id, :integer
    remove_column :questions, :quiz_id
  end
end
