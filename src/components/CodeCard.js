import React from 'react'
import PasswordSS from './images/passwordSS.jpg'
import ConcertWise from './images/concertwise.jpg'
import pika_chooose_ss from './images/pika_chooose_ss.jpg'
import QuizSS from './images/quizSS.png'
import ScheduleSS from './images/scheduleSS.jpg'
import WeatherSS from './images/weatherSS.png'

const CodeCard = () => {

    return (


<div className="container">
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10" id="maincontent">
                <div className="row">
                    <div className="col-md-12" id="aboutme">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <img src={PasswordSS} className="card-img" style={{height: "300px", width:"400px",}} alt="Password Generator"></img><br />
                        </div>
                        <button type="button" className="btn btn-primary"><a
                                href="https://elizkoleary.github.io/password_generator/" target="_blank">Password
                                Generator</a></button>
                        <button type="button" className="btn btn-secondary"><a
                                href="https://github.com/elizkoleary/elizkoleary.github.io/tree/master/password_generator"
                                target="_blank">
                                The Code</a></button>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <img src={ScheduleSS} className="card-img" style={{height: "300px", width:"400px",}} alt="Scheduler"></img>
                        </div>
                        <button type="button" className="btn btn-primary"><a
                                href="https://elizkoleary.github.io/calendar/"
                                target="_blank">Scheduler</a></button>
                        <button type="button" className="btn btn-secondary"><a
                                href="https://github.com/elizkoleary/elizkoleary.github.io/tree/master/calendar"
                                target="_blank">
                                The Code</a></button>

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <img src={QuizSS} className="card-img" style={{height: "300px", width:"400px",}} alt="Trivia"></img>
                        </div>
                        <button type="button" className="btn btn-primary"><a
                                href="https://elizkoleary.github.io/quiz_game/main" target="_blank">Quiz
                                Game</a></button>
                                <button type="button" className="btn btn-secondary"><a
                                    href="https://github.com/elizkoleary/elizkoleary.github.io/tree/master/quiz_game"
                                    target="_blank">
                                    The Code</a></button>
    
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <img src={WeatherSS} className="card-img" style={{height: "300px", width:"400px",}} alt="Weather"></img>
                        </div>
                        <button type="button" className="btn btn-primary"><a
                                href="https://elizkoleary.github.io/weather_dashboard/" target="_blank">Weather
                                Dashboard</a></button>
                                <button type="button" className="btn btn-secondary"><a
                                    href="https://github.com/elizkoleary/elizkoleary.github.io/tree/master/weather_dashboard"
                                    target="_blank">
                                    The Code</a></button>
    
    
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <img src={ConcertWise} className="card-img" style={{height: "300px", width:"400px",}} alt="ConcenrtWise"></img>
                        </div>
                        <button type="button" className="btn btn-primary"><a
                                href="https://mfg-art.github.io/Project-One-ConcertWise/index2.html"
                                target="_blank">ConcertWise</a></button>
                                <button type="button" className="btn btn-secondary"><a
                                    href="https://github.com/MFG-art/Project-One-ConcertWise"
                                    target="_blank">
                                    The Code</a></button>
    
    
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <img src={pika_chooose_ss} className="card-img" style={{height: "300px", width:"400px",}} alt="Pika Chooose!"></img>
                        </div>
                        <button type="button" className="btn btn-primary"><a
                                href="https://protected-spire-30180.herokuapp.com/"
                                target="_blank">Pika Choooose!!</a></button>
                                <button type="button" className="btn btn-secondary"><a
                                    href="https://github.com/ZanderMate/teamikea"
                                    target="_blank">
                                    The Code</a></button>

                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </div>
    </div>
       )};

export default CodeCard;