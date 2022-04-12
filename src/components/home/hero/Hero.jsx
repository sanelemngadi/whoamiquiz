import React from 'react';
import quizboard from "../../../assets/vectors/quizboard.svg";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className='col_heading'>Welcome to Who Am I Quiz</h1>

                    <div className="cta">
                        <Link to='#' className='btn btn-secondary' >Contact Me</Link>
                        <Link to='#' className='btn btn-primary' type="button">Watch videos {'>'}{'>'}</Link>
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