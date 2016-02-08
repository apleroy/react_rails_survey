class QuestionsController < ApplicationController
  before_action :set_question, only: [:show]
  respond_to :json


  def show
    respond_to do |format|
      format.html
      format.json {
        respond_with @question
      }
    end
  end

  def index
    @questions = Survey.find(params[:survey_id]).questions
    respond_with @questions
  end

  private
  def set_question
    @question = Question.find(params[:id])
  end


end
