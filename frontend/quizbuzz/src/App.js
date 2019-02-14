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
    show: 'home',
    quiz: '5c6599047cf712289c18ddb1',
    question: '5c6454a81c9d440000ebb0d4'
  }

  quizClick = () => {this.setState({show: 'quizForm'})}
  questionClick = () => {this.setState({show: 'createQuestion'})}
  answersClick = () => {this.setState({show: 'createAnswers'})}
  resultsClick = () => {this.setState({show: 'createResults'})}
  homeClick = () => {this.setState({show: 'home'})}
  
  holdQuiz = (quiz) => {this.setState({quiz: quiz})}
  holdQuestion = (question) => {this.setState({question: question})}

  render() {
    return (
      <div>
        <Header quizClick={this.quizClick}/>
       {(() => {
        switch(this.state.show) {
          case 'quizForm':
            return <QuizForm resultsClick={this.resultsClick} holdQuiz={this.holdQuiz}/>
          case 'createQuestion': 
            return <QuestionForm answersClick={this.answersClick} holdQuestion={this.holdQuestion}/>
          case 'createAnswers': 
            return <AnswerForm homeClick={this.homeClick} questionClick={this.questionClick} question={this.state.question}/>
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
