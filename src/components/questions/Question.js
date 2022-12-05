import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export function Question({indexActiveQuestion, questions, setAnswers, answers}) {

    function addAnswer(value) {
        const tValue = value.split("#")
        const tNoSoal = tValue[0];
        const tQuestion = tValue[1];
        const tAnswer = tValue[2];
        const data = [{noSoal: tNoSoal, data: {question: tQuestion, answer: tAnswer}}]
        if (answers.get(indexActiveQuestion) === undefined) {
            setAnswers((prevAnswers) => new Map(prevAnswers.set(indexActiveQuestion, data)));
        } else {
            let tAnswers = answers.get(indexActiveQuestion);
            let exists = false;
            tAnswers.map((answer) => {
                if (answer.noSoal === tNoSoal) {
                    exists = true;
                    answer.data = {question: tQuestion, answer: tAnswer};
                }
            });
            if (!exists) {
                tAnswers = [...tAnswers, {noSoal: tNoSoal, data: {question: tQuestion, answer: tAnswer}}]
            }
            setAnswers(prevAnswer => new Map(prevAnswer.set(indexActiveQuestion, tAnswers)))
        }
    }

    function generateRadio(tAnswers,tQuestion,optionList){
        tQuestion.options.map((option) => {
            if (tAnswers === undefined) {
                optionList.push(
                    <div className='question-option'>
                        <label className='question-item-container'>
                            <input
                                key={'radio-' + indexActiveQuestion + '-' + tQuestion.no}
                                type="radio"
                                name={'radio-' + indexActiveQuestion + '-' + tQuestion.no}
                                onChange={() => addAnswer(tQuestion.no + '#' + tQuestion.question + '#' + option)}
                                className="form-options-input"
                            />
                            {option}
                            <span className="checkmark"></span>
                        </label>
                    </div>
                )
            } else {
                let exist = false;
                tAnswers.map((answer) => {
                    if (answer.noSoal === tQuestion.no && option === answer.data.answer) {
                        exist = true;
                    }
                });
                if (exist) {
                    optionList.push(
                        <div className='question-option'>
                            <label className='question-item-container'>
                                <input
                                    key={'radio-' + indexActiveQuestion + '-' + tQuestion.no}
                                    type='radio'
                                    name={'radio-' + indexActiveQuestion + '-' + tQuestion.no}
                                    onChange={() => addAnswer(tQuestion.no + '#' + tQuestion.question + '#' + option)}
                                    className="form-options-input"
                                    checked={true}
                                />
                                {option}
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    );
                } else {
                    optionList.push(
                        <div className='question-option'>
                            <label className='question-item-container'>
                                <input
                                    key={'radio-' + indexActiveQuestion + '-' + tQuestion.no}
                                    type='radio'
                                    name={'radio-' + indexActiveQuestion + '-' + tQuestion.no}
                                    onChange={() => addAnswer(tQuestion.no + '#' + tQuestion.question + '#' + option)}
                                    className="form-options-input"
                                />
                                {option}
                                <span className="checkmark"></span>
                            </label>
                        </div>);
                }
            }
        });
    }
    function comboboxSelected(tQuestion,value){
        addAnswer(tQuestion.no+'#'+tQuestion.question+'#'+value);
    }
    function generateCombobox(tAnswers,tQuestion,optionList){
        if(tAnswers===undefined){
            optionList.push(
                <Autocomplete
                    options={tQuestion.options}
                    style={{ width: 300 }}
                    onChange={(event,value)=>{comboboxSelected(tQuestion,value)}}
                    renderInput={(params) =>
                        <TextField {...params} label="Provinsi" variant="outlined" />}
                />
            );

        }else{
            let tOption = '';
            tQuestion.options.map((option) => {
                tAnswers.map((answer) => {
                    if (answer.noSoal === tQuestion.no && option === answer.data.answer) {
                        tOption = option;
                    }
                });
            });
            optionList.push(<Autocomplete
                options={tQuestion.options}
                style={{ width: 300 }}
                value={tOption}
                onChange={(event,value)=>{comboboxSelected(tQuestion,value)}}
                renderInput={(params) =>
                    <TextField {...params} label="Provinsi" variant="outlined" />}
            />)
        }
    }

    function generateQuestionForm(tQuestion) {
        const tAnswers = answers.get(indexActiveQuestion);
        let optionList = [];
        if(tQuestion.questionType === 'radio'){
            generateRadio(tAnswers,tQuestion,optionList);
        }else{
            generateCombobox(tAnswers,tQuestion,optionList);
        }

        return optionList;
    }


    return (
        <div>
            <h3>{questions.questionCategory}</h3>
            {questions.questions.map((tQuestion) => {
                return (
                    <div className='question-inner'>
                        <div className='question-body'>
                            <span className='question-no'>{tQuestion.no}.</span>
                            <span className='question-text'> &nbsp; {tQuestion.question}</span>
                        </div>

                        {generateQuestionForm(tQuestion)}

                    </div>

                );
            })}

        </div>
    );
}