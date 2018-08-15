import React, { Component } from 'react';
import Generatr from './Generatr'

const OBJECTIVES = [
  "Shift Scheduler",
  "Class Scheduler",
  "Facial Recognition",
  "Optical Character Recognition"
]

const OBJECTIVE_ADJECTIVES = [
  "Predictive",
  "Distributed",
  "Decentralized",
  "User-based",
  "Delay-tolerant",
  "Mobile-first",
  "Improved",
  "Crowdsourced",
  "Offline-first",
  "High-Performance"
]

const METHODS = [
  "Delay-tolerant Network",
  "Blockchain Implementation",
  "Convolutional Neural Network",
  "Recurrent Neural Network",
  "Genetic Algorithm Implementation",
  "Reinforcement Learning",
  "Microservices Architecture",
  "Containerized Architecture",
  "Serverless Architecture",
  "Nature-based Approach"
]

const METHOD_ADJECTIVES = [
  "Distributed",  
  "Low-power",
  "Lightweight",
  "Highly-Optimized",
  "Flexible",
  "Fast",
  "Performant"
]

const grammar = {
  "title": ["{{objective}} using {{method}}", "{{objective}}: A {{method}} Approach"],
  "objective": OBJECTIVES,
  "method": METHODS
}

const template = Generatr(grammar)

class App extends Component {
  state = {
    title: template.generate('title')
  }
  
  onPressGenerate = () => {
    const title = template.generate('title')
    this.setState({title})
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <button onClick={this.onPressGenerate}>Generate</button>
      </div>
    );
  }
}

export default App;