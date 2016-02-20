class Choice < ActiveRecord::Base
  belongs_to :question
  has_one :answer

  has_attached_file :image, styles: { square: "256x256", medium: "400x300>", thumb: "100x100>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def image_url
    self.image.url(:square)
  end
end
