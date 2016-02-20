class AddAttachmentImageToChoices < ActiveRecord::Migration
  def self.up
    change_table :choices do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :choices, :image
  end
end
