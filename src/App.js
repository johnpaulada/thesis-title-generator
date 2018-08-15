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

  generateTitle = () => {
    return `${this.getObjective()} using a ${this.getMethod()}`
  }

  getObjective = () => {
    return `${this.getObjectiveAdjective()} ${this.getActualObjective()}`
  }

  getActualObjective = () => {
    const selectedObjective = pluck(OBJECTIVES)

    return selectedObjective
  }

  getMethod = () => {
    const adjective = this.getMethodAdjective()
    const method = this.getActualMethod()
    return `${adjective} ${method}` + this.getAdditionalMethod(method)
  }

  getAdditionalMethod = method => {
    if (shouldBeIncluded()) {
      const additionalMethod = this.getActualMethod()
      const selectedIsSameAsPrevious = additionalMethod === method
  
      if (selectedIsSameAsPrevious) {
        return this.getAdditionalMethod(method)
      }

      const connector = this.getConnector()
      const adjective = this.getMethodAdjective()

      return ` ${connector} a ${adjective} ${additionalMethod}`
    }

    return ""
  }

  getConnector = () => {
    const connectors = [
      "and",
      "with"
    ]

    const selectedConnector = pluck(connectors)

    return selectedConnector
  }

  getActualMethod = () => {
    const selectedMethod = pluck(METHODS)

    return selectedMethod
  }

  getObjectiveAdjective = () => {   
    const selectedAdjective = pluck(OBJECTIVE_ADJECTIVES)

    return selectedAdjective
  }

  getMethodAdjective = () => {
    const selectedAdjective = pluck(METHOD_ADJECTIVES)

    return selectedAdjective
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

function pluck(list) {
  const selectedIndex = getRandomIntInclusive(0, list.length-1)
  const selectedItem = list[selectedIndex]

  return selectedItem
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shouldBeIncluded() {
  const random = Math.random()
  const isAbove50Percent = random > 0.5
  const shouldInclude = isAbove50Percent

  return shouldInclude
}

export default App;
