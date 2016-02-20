class Question < ActiveRecord::Base
  belongs_to :survey
  has_many :choices, :dependent => :destroy
  has_many :answers, :dependent => :destroy

  has_attached_file :choice_1_image, styles: { square: "256x256", medium: "400x300>", thumb: "100x100>" }
  validates_attachment_content_type :choice_1_image, content_type: /\Aimage\/.*\Z/

  has_attached_file :choice_2_image, styles: { square: "256x256", medium: "400x300>", thumb: "100x100>" }
  validates_attachment_content_type :choice_2_image, content_type: /\Aimage\/.*\Z/

  has_attached_file :choice_3_image, styles: { square: "256x256", medium: "400x300>", thumb: "100x100>" }
  validates_attachment_content_type :choice_3_image, content_type: /\Aimage\/.*\Z/

  has_attached_file :choice_4_image, styles: { square: "256x256", medium: "400x300>", thumb: "100x100>" }
  validates_attachment_content_type :choice_4_image, content_type: /\Aimage\/.*\Z/


  def choice_1_image_url
    self.choice_1_image.url(:medium)
  end

  def choice_2_image_url
    self.choice_2_image.url(:medium)
  end

  def choice_3_image_url
    self.choice_3_image.url(:medium)
  end

  def choice_4_image_url
    self.choice_4_image.url(:medium)
  end

end
