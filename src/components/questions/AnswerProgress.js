import React  from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function AnswerProgress(props) {
    return <ProgressBar variant="success" now={props.percentage} label={`${props.percentage}%`} />;
}

export default AnswerProgress;
