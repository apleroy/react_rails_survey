class SurveySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :directions
end
