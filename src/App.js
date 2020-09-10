import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // Add magic 8 ball outcomes to the array
      answerArray: ["Ask again next time", "ABSOLUTELY not!", "If you say so", "Luck is in your favor", "I doubt it", "Yes", "The future is looking hazy", "Hahahah..."],
      question: ""
    }
  }

  getAnswer = () => {
    // destructures answerArray out of state
    const { answerArray } = this.state
    // destructuring with { } in a variable so you don't have to ref this every time this.state.answerArray
    // like making a hotkey with { }
    // write your code here!
    // create a location with math random
    // var treasureLocation = math.random
    var randomAnswer = Math.floor(Math.random() * 8)
    // answerArray.randomAnswer
    // have 8 different responses
    // Update the return statement below to reflect the outcome of your code.
    return this.state.answerArray[randomAnswer]
  }

  handleChange = (e) => {
    // gets the event from the input on change and updates state
    this.setState({ question: e.target.value })
  }

  handleSubmit = () =>{
    // destructures question out of state
    const { question } = this.state
    // calls the getAnswer function and saves the outcome as answer
    const answer = this.getAnswer()
    this.setState({ answer: answer })
  }

  render(){
    return (
      <div>
        <h1>Magic 8 Ball</h1>
        <input
          id="inputBox"
          type='text'
          onChange={ this.handleChange }
        />
        <br />
        <button onClick={ this.handleSubmit }>
          Ask the Magic 8 Ball a Question
        </button>
        <p> { this.state.answer } </p>
      </div>
    )
  }
}

export default App;
