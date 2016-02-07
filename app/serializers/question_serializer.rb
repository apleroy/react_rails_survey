class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :survey_id, :number, :text, :choice_1_image_url, :choice_2_image_url, :choice_3_image_url, :choice_4_image_url

end
