import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import QuestionForm from './Forms/QuestionForm';
import QuizForm from './Forms/QuizForm';
import Home from './Components/Home';
import AnswerForm from './Forms/AnswerForm';
import ResultForm from './Forms/ResultForm';
// import {BrowserRouter, Routes} from 'react-dom-router'

class App extends Component {
  
  state ={
    show: 'createAnswers'
  }

  quizClick = () => {this.setState({show: 'quizForm'})}
  questionClick = () => {this.setState({show: 'createQuestion'})}
  answersClick = () => {this.setState({show: 'createAnswers'})}
  resultsClick = () => {this.setState({show: 'createResults'})}
  homeClick = () => {{this.setState({show: 'home'})}}
  
  render() {
    return (
      <div>
        <Header quizClick={this.quizClick}/>
       {(() => {
        switch(this.state.show) {
          case 'quizForm':
            return <QuizForm resultsClick={this.resultsClick}/>
          case 'createQuestion': 
            return <QuestionForm answersClick={this.answersClick}/>
          case 'createAnswers': 
            return <AnswerForm homeClick={this.homeClick} questionClick={this.questionClick}/>
          case 'createResults':
            return <ResultForm questionClick={this.questionClick}/>
          case 'home':
            return <Home />
        }
      })()}
      </div>
    );
  }
}

export default App;
