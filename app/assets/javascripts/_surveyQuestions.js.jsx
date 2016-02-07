var SurveyQuestions = React.createClass({
    getInitialState: function () {
        return {questions: []};
    },
    componentDidMount: function () {
        this.loadQuestionsFromServer();
    },
    loadQuestionsFromServer: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function (questions) {
                this.setState({questions: questions});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    render: function () {
        return (
            <div className="surveyQuestions">
                <QuestionList questions={this.state.questions} />
            </div>
        );
    }
});


