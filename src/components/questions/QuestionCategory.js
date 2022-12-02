import React from "react";

class QuestionCategory extends React.Component{
    render() {
        console.log(this.props.questions);
        return(
            <div className="question-category-table-wrapper">
                <div className="category-table-head">
                    <span>Kategori</span>
                </div>
            <ul className='category-table-body'>
                {this.props.questions.map((tQuestion)=> {
                    return(
                        <li>
                            <span className="category-column">{tQuestion.questionCategory}</span>
                        </li>
                    );
                })}
            </ul>
            </div>
        );
    }
}
export default QuestionCategory;