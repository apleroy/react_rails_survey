class SurveysController < ApplicationController
  before_action :set_survey, only: [:show]
  respond_to :json

  def show
    # @presenter = {
    #     :questions => @survey.questions
    #     :form => {
    #       :action =>
    #     }
    # }
    respond_to do |format|
      format.html
      format.json {
        respond_with @survey.questions
        #render :json => @survey.questions.to_json(:only => [], :methods => [])
      }
    end

  end

  def index
    #respond_with Survey.all
    @surveys = Survey.all
  end

  # def create
  #   respond_with Survey.create(survey_params)
  # end

  private

  def survey_params
    params.require(:survey).permit(:name, :description, :directions)
  end

  def set_survey
    @survey = Survey.find(params[:id])
  end
end
