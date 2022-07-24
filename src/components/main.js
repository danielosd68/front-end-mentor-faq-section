import React, { useState } from "react";
import MainPhoto from "./main-photo";
import Question from "./question";

const Main = () => {
    const [questions, setQuestions] = useState([
        {
            id: "1",
            question: "How many team members can I invite?",
            answer: "You can invite up to 2 additional users on the Free plan. There is no limit on."
        },
        {
            id: "2",
            question: "What is the maximum file upload size?",
            answer: "No more than 2GB. All files in your account must fit your allocated storage space."
        },
        {
            id: "3",
            question: "How do I reset my password?",
            answer: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
        },
        {
            id: "4",
            question: "Can I cancel my subscription?",
            answer: "Yes! Send us a message and we’ll process your request no questions asked."
        },
        {
            id: "5",
            question: "Do you provide additional support?",
            answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours."
        }
    ])
    return (
        <div className="faq-container">
            <div className="photo">
                <MainPhoto source={window.innerWidth < 1200 ? "images/illustration-woman-online-mobile.svg" : "images/illustration-woman-online-desktop.svg"} alternateText={window.innerWidth < 1200 ? "Mobile image" : "Desktop image"} className="main-illustration mobile" />
                {window.innerWidth >= 1200 ? <MainPhoto source="images/illustration-box-desktop.svg" alternateText="Box image" className="main-illustration desktop" /> : <img></img>}

            </div>
            <div className="content">
                <div className="section header">
                    <h1>FAQ</h1>
                </div>
                <div className="section questions">


                    {questions.map((question, index) => <Question question={question.question} answer={question.answer} key={index + 1} id={question.id} />)}
                </div>
            </div>
        </div >
    )
}

export default Main;