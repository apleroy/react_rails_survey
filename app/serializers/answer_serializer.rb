class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :question_id, :choice_id
end
