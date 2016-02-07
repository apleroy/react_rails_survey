$(document).ready(function() {



    function initializeSurvey() {
        //set all answers to 0;
        answerAs = 0;
        answerBs = 0;
        answerCs = 0;
        answerDs = 0;

        $("#start_page").show();

        $("#end_page").hide();

    }

    function startSurvey() {

        //hide the start page
        $("#start_page").hide();

        //pop the first question and its page
        $(".questionList").find(".question").first().show();

    }


    function answerQuestion( answer ) {

        //get answer

        //increment the answer total for that answer

        //show the next question

    }

    var survey_id = window.location.href.split('/').pop();
    var survey_url = "/surveys/" + survey_id + "/questions.json";

    initializeSurvey();

    ReactDOM.render(
        <SurveyQuestions url={survey_url} />,
        document.getElementById('questions')
    );

    $("#start_survey_button").on('click', function() {
        startSurvey();
    });

    $(".nextQuestion").on('click', function() {
        alert('clicked');
        //$(this).css("border", "1px solid green");
    });
});
