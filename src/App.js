import React, { Component } from 'react';
import Generatr from './Generatr'
import {
  Container,
  Header,
  GenerateButton
} from './Styles'

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
  "title": ["{{objective_adjective}} {{objective}} using {{method_adjective}} {{method}}", "{{objective_adjective}} {{objective}}: A {{method}} Approach"],
  "objective": OBJECTIVES,
  "method": METHODS,
  "method_adjective": METHOD_ADJECTIVES,
  "objective_adjective": OBJECTIVE_ADJECTIVES
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
      <Container>
        <Header>{this.state.title}</Header>
        <GenerateButton onClick={this.onPressGenerate}>GENERATE</GenerateButton>
      </Container>
    );
  }
}

export default App;