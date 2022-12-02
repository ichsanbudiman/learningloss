import React, {useState,useEffect,useRef} from "react";
import {Question} from "./Question";
import ProgressAnswer from "./AnswerProgress";

export function Main({questions,setQuestions,indexActiveQuestion,setIndexActiveQuestion}) {
    const [answerProgress, setAnswerProgress] = useState(0);
    useEffect(() => {
        window.scrollTo({top:0,left:0})
    }, [indexActiveQuestion]);
    const [answers, setAnswers] = useState(new Map());
    useEffect(() => {
        setAnswerProgress(countAnswerProgress());
        return()=>{
            setAnswerProgress(0);
        }
    }, [answers]);

    function countAnswerProgress() {
        let totalQuestionNumber = 0;
        questions.map((question) => {
            totalQuestionNumber = totalQuestionNumber + question.questions.length;
        });

        let progress = 0;
        for (let [key, value] of answers) {
            progress=progress+value.length
        }

        return (Math.round((progress / totalQuestionNumber) * 100));
    }
    function rewind(){
        const newIndex = indexActiveQuestion-1;
        if(newIndex>=0){
            setIndexActiveQuestion( newIndex )
        }
    }
    function forward(){
        const newIndex = indexActiveQuestion+1;
        if(questions.length-1>=newIndex){
            setIndexActiveQuestion( newIndex )
        }
    }

    let formQuestions =(<p>Not loaded yet</p>);
    if(questions.length>0){
        formQuestions=(
            <Question questions={questions[indexActiveQuestion]} indexActiveQuestion={indexActiveQuestion} setAnswers={setAnswers} answers={answers}/>
        );
    }

    return (
        <div className="question-main-wrapper">
            <div className="question-wrapper">
                {formQuestions}
            </div>
            <div className='question-nav-wrapper'>
                <div className='question-back'>
                    <a className='question-btn back' onClick={() => {
                        rewind()
                    }}>Kembali</a>
                </div>
                <div className='answer-progress'>
                    <ProgressAnswer percentage={answerProgress}/>
                </div>
                <div className='question-next'>
                    {(answerProgress==100&&indexActiveQuestion==questions.length-1)?(
                        <a className='question-btn submit' onClick={() => {
                            forward()
                        }}>Submit</a>
                    ):(
                        <a className='question-btn next' onClick={() => {
                            forward()
                        }}>Selanjutnya</a>
                    )}
                </div>

            </div>
        </div>
    );
}
