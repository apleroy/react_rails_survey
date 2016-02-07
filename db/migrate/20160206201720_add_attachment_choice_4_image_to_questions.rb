class AddAttachmentChoice4ImageToQuestions < ActiveRecord::Migration
  def self.up
    change_table :questions do |t|
      t.attachment :choice_4_image
    end
  end

  def self.down
    remove_attachment :questions, :choice_4_image
  end
end
