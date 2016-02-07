class AddAttachmentChoice2ImageToQuestions < ActiveRecord::Migration
  def self.up
    change_table :questions do |t|
      t.attachment :choice_2_image
    end
  end

  def self.down
    remove_attachment :questions, :choice_2_image
  end
end
