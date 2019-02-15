import React, { Component } from 'react'
import QuizCard from './QuizContainerInnards/QuizCard';
import QuizView from './QuizContainerInnards/QuizView';
import WinCard from './QuizContainerInnards/WinCard';

export default class QuizContainer extends Component {

    state = {
        quizView: false,
        selectedQuiz: {},
        quizzes: [],
        answerKeys: [],
        winner: null
    }

    fetchData = () => {
      fetch('http://localhost:1234/quiz')
      .then(res => res.json())
      .then(quizzes => this.setState({quizzes}))
    }

    componentDidMount(){
     this.fetchData()
    }

    chooseQuiz = (quiz) => {
        this.setState({
            quizView: !this.state.quizView,
            selectedQuiz: quiz
        })
    }

    answerQuestion = (answerKey) => {
      this.setState({
        answerKeys: [...this.state.answerKeys, answerKey]
      })
    }

    finishButton = () => {
      let arr = this.state.answerKeys
      let winKey = arr.sort((a,b) => arr.filter(v => v===a).length - arr.filter(v => v===b).length).pop()
      let winner = this.state.selectedQuiz.results.filter( result => result.title.toLowerCase().includes(winKey.toLowerCase())).pop()
      this.setState({winner: winner})
    }

  render() {
    if(this.state.quizView == false){
      return (
        <div>
          <h1>Quiz Container</h1>
            {this.state.quizzes.map(quiz =>
              <QuizCard quiz={quiz} key={quiz.id} chooseQuiz={this.chooseQuiz}/>
            )}
        </div>
      )}
    else{
        return(
          <div>
            <QuizView finishButton={this.finishButton} answerQuestion={this.answerQuestion} quiz={this.state.selectedQuiz}/>
            {this.state.winner !== null ? <WinCard winner={this.state.winner}/> : null}
          </div>
        )
    } 
  }
}
