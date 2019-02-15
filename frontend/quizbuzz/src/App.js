import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import QuestionForm from './Forms/QuestionForm';
import QuizForm from './Forms/QuizForm';
import Home from './Components/Home';
import AnswerForm from './Forms/AnswerForm';
import ResultForm from './Forms/ResultForm';
import QuizContainer from './Components/QuizContainer';
// import {BrowserRouter, Routes} from 'react-dom-router'

class App extends Component {

  state ={
    show: 'home',
    quiz: {},
    question: {}
  }

  quizContainerClick = () => {this.setState({show: 'quizContainer'})}
  formClick = () => {this.setState({show: 'quizForm'})}
  questionClick = () => {this.setState({show: 'createQuestion', question: {}})}
  answersClick = () => {this.setState({show: 'createAnswers'})}
  resultsClick = () => {this.setState({show: 'createResults'})}
  homeClick = () => {this.setState({show: 'home', quiz:{}, question: {}})}
  updateQuizwithResult = (result) => {
    this.setState({quiz: {...this.state.quiz, results: [...this.state.quiz.results, result]}})
  }

  holdQuiz = (quiz) => {this.setState({quiz: quiz})}
  holdQuestion = (question) => {this.setState({question: question})}

  render() {
    return (
      <div>
        <Header formClick={this.formClick} quizContainerClick={this.quizContainerClick}/>
       {(() => {
        switch(this.state.show) {
          case 'quizForm':
            return <QuizForm resultsClick={this.resultsClick} holdQuiz={this.holdQuiz}/>
          case 'createQuestion':
            return <QuestionForm answersClick={this.answersClick} holdQuestion={this.holdQuestion} quiz={this.state.quiz}/>
          case 'createAnswers':
            return <AnswerForm quiz={this.state.quiz} homeClick={this.homeClick} questionClick={this.questionClick} question={this.state.question}/>
          case 'createResults':
            return <ResultForm quiz={this.state.quiz} questionClick={this.questionClick} updateQuizwithResult={this.updateQuizwithResult}/>
          case 'home':
            return <Home />
          case 'quizContainer':
            return <QuizContainer />
        }
      })()}
      </div>
    );
  }
}

export default App;