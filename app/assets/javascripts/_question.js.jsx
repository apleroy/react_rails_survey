var Question = React.createClass({

    getInitialState: function() {
        return {
            isSelected: false,
            isHover: false
        };
    },

    handleHover: function () {
        this.setState({
            isHover: true
        })

    },

    handleClick: function() {
        this.setState({
            isSelected: true
        })
    },


    render: function () {


        var divImage1 = {
            backgroundImage : "url(" + this.props.choice_1_image_url + ")"
        };
        var divImage2 = {
            backgroundImage : "url(" + this.props.choice_2_image_url + ")"
        };
        var divImage3 = {
            backgroundImage : "url(" + this.props.choice_3_image_url + ")"
        };
        var divImage4 = {
            backgroundImage : "url(" + this.props.choice_4_image_url + ")"
        };

        var divHidden = {
            display: "none"
        };

        var isSelected = this.state.isSelected;
        var isHover = this.state.isHover;

        var borderStyle = {
            'border': '3px solid white'
        };

        if (isSelected) {
            borderStyle = {
                'border': '3px solid green'
            }
        }

        if (isHover) {
            borderStyle = {
                'border': '3px solid pink'
            }
        }


        return (
            <div className="question" style={divHidden} classID={this.props.number}>
                <div className="col-lg-12">
                    <h2 className="questionNumber">
                        Question #{this.props.number}
                    </h2>
                    <h3 className="questionText">
                        {this.props.text}
                    </h3>

                </div>

                <div className="col-lg-6">
                    <div className="aspect_wrapper_choice_image" style={borderStyle} onClick={this.handleClick} onmouseover={this.handleHover}>
                        <div className="content_choice_image js-content_choice_image" style={divImage1}>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6">
                    <div className="aspect_wrapper_choice_image" style={borderStyle} onClick={this.handleClick} onmouseover={this.handleHover}>
                        <div className="content_choice_image js-content_choice_image" style={divImage2}>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6">
                    <div className="aspect_wrapper_choice_image" style={borderStyle} onClick={this.handleClick} onmouseover={this.handleHover}>
                        <div className="content_choice_image js-content_choice_image" style={divImage3}>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6">
                    <div className="aspect_wrapper_choice_image" style={borderStyle} onClick={this.handleClick} onmouseover={this.handleHover}>
                        <div className="content_choice_image js-content_choice_image" style={divImage4}>
                        </div>
                    </div>

                </div>

                <div className="col-lg-12 nextQuestion">
                    Next Question<i className="fa fa-chevron-circle-right fa-4x"></i>
                </div>

            </div>
        );
    }
});