import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import QuestionForm from './Forms/QuestionForm';
import QuizForm from './Forms/QuizForm';
import Home from './Components/Home';
import AnswerForm from './Forms/AnswerForm';


class App extends Component {
  
  state ={
    show: null
  }

  homeClick = () => {
    this.setState({
      show: 'quizForm'
    })
  }

  questionClick = () => {
    this.setState({
      show: 'createQuestion'
    })
  }
  answersClick = () => {
    this.setState({
      show: 'createAnswers'
    })
  }
  
  render() {
    return (
      <div>
        <Header homeClick={this.homeClick}/>
       {(() => {
        switch(this.state.show) {
          case 'quizForm':
            return <QuizForm questionClick={this.questionClick}/>
          case 'createQuestion': 
            return <QuestionForm answersClick={this.answersClick}/>
          case 'createAnswers': 
            return <AnswerForm questionClick={this.questionClick}/>
          default:
            return <Home />
        }
      })()}
      </div>
    );
  }
}

export default App;
