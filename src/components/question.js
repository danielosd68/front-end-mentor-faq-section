import React, { useState, useEffect } from 'react';

const Question = (props) => {

    const [isClicked, setAsClicked] = useState(false);

    useEffect(() => {
        if (isClicked === true) {

        }

        else {

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