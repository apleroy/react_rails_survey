class QuestionsController < ApplicationController

  respond_to :json


  def index
    @questions = Survey.find(params[:survey_id]).questions
    respond_with @questions
  end


end
