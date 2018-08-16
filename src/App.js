import React, { Component } from 'react';
import Generatr from './Generatr'
import {
  Container,
  GenerateButton,
  Header,
  LinkOut,
  MadeBy
} from './Styles'

const OBJECTIVES = [
  "Shift Scheduler",
  "Class Scheduler",
  "Facial Recognition",
  "Optical Character Recognition"
]

const OBJECTIVE_ADJECTIVES = [
  "Collaborative",
  "Predictive",
  "Distributed",
  "Decentralized",
  "User-based",
  "Delay-tolerant",
  "Mobile-first",
  "Improved",
  "Crowdsourced",
  "Offline-first",
  "High-Performance",
  "Effective",
  "Next-Generation"
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
  "Performant",
  "Robust",
  "Efficient"
]

const grammar = {
  "title": [
    "{{objective_adjective}} {{objective}} {{preposition}} {{title_method}}",
    "{{objective_adjective}} {{objective}}: A {{method}} Approach"
  ],
  "title_method": ["a {{method_adjective}} {{method}}", "a {{method_adjective}} {{method}} {{connector}} a {{method_adjective}} {{method}}"],
  "objective": OBJECTIVES,
  "method": METHODS,
  "method_adjective": METHOD_ADJECTIVES,
  "objective_adjective": OBJECTIVE_ADJECTIVES,
  "preposition": ["using", "with"],
  "connector": ["and", "with"]
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
        <MadeBy>
          Made with ♥️ by <LinkOut href="https://github.com/johnpaulada/thesis-title-generator">John Paul Ada</LinkOut>
        </MadeBy>
      </Container>
    );
  }
}

export default App;