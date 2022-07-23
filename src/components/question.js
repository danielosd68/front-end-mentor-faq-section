import React, { useState, useEffect } from 'react';

const Question = (props) => {

    const [isClicked, setAsClicked] = useState(false);

    useEffect(() => {
        const question = document.querySelector(`.single-question:nth-child(${props.id})`);
        const answer = document.querySelector(`.single-question:nth-child(${props.id}) > .answer`);
        if (isClicked === true) {
            question.classList.add('active');
            answer.classList.add('show');
        }

        else {
            question.classList.remove('active');
            answer.classList.remove('show');
        }
    }, [isClicked])
    return (
        <div onClick={() => setAsClicked((prevState) => !prevState)} className="single-question">
            <h3>{props.question}</h3>
            <img src="images/icon-arrow-down.svg" alt="Icon arrow down" />
            <div className="answer">
                {props.answer}
            </div>
        </div >
    )
}

export default Question;