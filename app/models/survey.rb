class Survey < ActiveRecord::Base
  has_many :questions, :dependent => :destroy

  include FriendlyId
  friendly_id :slug_candidates, use: :history

  def slug_candidates
    [
        :name,
        [:name, :id]
    ]
  end

  #survey slug should change every time the survey's name is updated
  #the old name will still be accessible in a url due to the friendly_id history feature
  def should_generate_new_friendly_id?
    name_changed? || super
  end

end
