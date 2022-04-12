import React from 'react';
import quizboard from "../../../assets/vectors/quizboard.svg";

function Hero() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className='col_heading'>Welcome to Who Am I Quiz</h1>

                    <div className="cta">
                        <a href='#' className='btn btn-secondary' >Contact Me</a>
                        <a href='#' className='btn btn-primary' type="button">Watch videos {'>'}{'>'}</a>
                    </div>
                </div>
                <div className="col">
                    <img className='quizboard' src={quizboard} alt="quiz board" />
                </div>
            </div>
        </div>
    )
}

export default Hero