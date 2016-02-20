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

        var score = 0;
        var phrase = "";
        var group = "";

        $.each(answers, function (index, value) {
            //console.log( value.question + ' : ' + value.answer );
            var q = value.question;
            var a = value.answer;

            //shoes
            if (q == 2) {
                if (a == 1) { score += 10 }
                if (a == 2) { score += 10 }
                if (a == 3) { score -= 10 }
            }
            if (q == 4) {
                if (a == 1) { phrase = "Hit me, baby, one more time..." }
                if (a == 2) { phrase = "Hey, hey, Bye..Bye..Bye..." }
                if (a == 3) { phrase = "Everybody...Backstreet's back alright..."}
                if (a == 4) { phrase = "Genie in a bottle..."}
            }
            if (q == 5) {
                if (a == 1) { score -= 50 }
                if (a == 2) { score -= 20 }
                if (a == 3) { score += 20 }
                if (a == 4) { score += 50 }
            }
            if (q == 6) {
                if (a == 1) { score -= 10 }
                if (a == 2) { score += 10 }
                if (a == 3) { score -= 10 }
                if (a == 4) { score += 20 }
            }
            if (q == 7) {
                if (a == 3) { score += 20 }
                if (a == 4) { score -= 10 }
            }
            if (q == 8) {
                if (a == 1) {
                    score -= 50;
                    phrase = "Weissman Score is optimal..."
                }
                if (a == 2) { score -= 20 }
                if (a == 3) { score += 20 }
                if (a == 4) { score += 50 }
            }
            if (q == 9) {
                if (a == 4) { score -= 20 }
            }
            if (q == 10) {
                if (a == 1) { score += 20 }
                if (a == 2) { score += 10 }
                if (a == 3) { score -= 30 }
                if (a == 4) { score -= 10 }
            }
            if (q == 11) {
                if (a == 1) { score -= 20 }
                if (a == 2) { score += 30 }
            }
            if (q == 13) {
                if (a == 1) { score += 10 }
                if (a == 2) { score -= 30 }
                if (a == 3) { score += 20 }
                if (a == 4) { score += 30 }
            }
            if (q == 14) {
                if (a == 1) { score -= 30 }
                if (a == 2) { score += 10 }
                if (a == 3) { score += 20 }
                if (a == 4) { score += 30 }
            }


        });


        //console.log(score);
        //console.log(phrase);


        if (score >= 80 ) {
            group = "A";
        }
        else if (score >= 40) {
            group = "B";
        }
        else if (score >= -10) {
            group = "C";
        }
        else {
            group = "D";
        }

        return [phrase, group];
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
                var return_vars = calculateGroup(answers);
                var phrase = return_vars[0];
                var group_letter = return_vars[1];
                $("#phrase").html(phrase);
                $("#group_letter").html(group_letter);
                $("#end_page").show();
            }
        }

    });

    initializeSurvey();
});
