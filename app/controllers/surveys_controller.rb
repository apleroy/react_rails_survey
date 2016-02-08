class SurveysController < ApplicationController
  before_action :set_survey, only: [:show]
  respond_to :json

  def show

    respond_to do |format|
      format.html
      format.json {
        respond_with @survey.questions
      }
    end

  end

  def index
    #respond_with Survey.all
    @surveys = Survey.all
  end

  private

  def survey_params
    params.require(:survey).permit(:name, :description, :directions)
  end

  def set_survey
    @survey = Survey.friendly.find(params[:id])
  end
end
