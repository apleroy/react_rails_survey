$(document).ready(function() {

    //REACT stuff

    //var survey_id = window.location.href.split('/').pop();
    //var survey_url = "/surveys/" + survey_id + "/questions.json";


    //ReactDOM.render(
    //    <SurveyQuestions url={survey_url} />,
    //    document.getElementById('questions')
    //);

    var question;
    var answer;
    var answers = [];

    function calculateGroup(answers) {

        var countA = 0;
        var countB = 0;
        var countC = 0;
        var countD = 0;

        var groups = ["A", "B", "C", "D"];

        $.each(answers, function (index, value) {
            //console.log( value.question + ' : ' + value.answer );
            if (value.answer == 1) {
                countA += 1;
            }
            else if (value.answer == 2) {
                countB += 1;
            }
            else if (value.answer == 3) {
                countC += 1;
            }
            else if (value.answer == 4) {
                countD += 1;
            }

        });

        var counts = [countA, countB, countC, countD];
        var maxCount = Math.max(countA, countB, countC, countD);
        var maxCountGroup = groups[counts.indexOf(maxCount)];

        console.log(maxCountGroup);

        return maxCountGroup;
    }

    function initializeSurvey() {
        $("#start_page").show();
        $("#end_page").hide();
    }

    function startSurvey() {
        //hide the start page
        $("#start_page").hide();

        //get the first question and show it
        $("#question_list_rails").find(".js-question").first().show();

    }

    $(".js-aspect_wrapper_choice_image").on('click', function() {

        $(".js-aspect_wrapper_choice_image").removeClass("selected_choice");
        $(this).addClass("selected_choice");

        //$(this).css("border", "3px solid green");

        question = $(this).attr("id").split("_")[0];
        answer = $(this).attr("id").split("_")[1];

        //enable next_question_button
        $('.js-next_question').prop('disabled', false);
    });


    $("#start_survey_button").on('click', function() {
        startSurvey();
    });


    $(".js-next_question").on('click', function() {

        if(!$(this).prop('disabled')) {

            //get selected and add to answer array
            answers.push({
                question: question,
                answer: answer
            });
            question = null;
            answer = null;

            //remove this question
            $(this).closest(".js-question").remove();

            //show the next question
            if ($("#question_list_rails").find(".js-question").first().length) {
                $("#question_list_rails").find(".js-question").first().show();
                $('.js-next_question').prop('disabled', true);
            } else {
                var group_letter = calculateGroup(answers);
                $("#group_letter").html(group_letter);
                $("#end_page").show();
            }
        }

    });

    initializeSurvey();
});
