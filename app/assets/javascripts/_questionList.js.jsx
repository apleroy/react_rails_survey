var QuestionList = React.createClass({
    render: function () {
        var questionNodes = this.props.questions.map(function (question, index) {
            return (
                <Question
                    number={question.number}
                    text={question.text}
                    choice_1_image_url={question.choice_1_image_url}
                    choice_2_image_url={question.choice_2_image_url}
                    choice_3_image_url={question.choice_3_image_url}
                    choice_4_image_url={question.choice_4_image_url}
                    key={index}
                />
            );
        });

        return (
            <div className="questionList">
                {questionNodes}
            </div>
        );
    }
});