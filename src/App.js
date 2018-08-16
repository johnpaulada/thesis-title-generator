import React, { Component } from 'react';
import TitleTemplate from './TitleTemplate'
import {
  Container,
  GenerateButton,
  Header,
  LinkOut,
  MadeBy
} from './Styles'

class App extends Component {
  state = {
    title: TitleTemplate.generate('title')
  }
  
  onPressGenerate = () => {
    const title = TitleTemplate.generate('title')
    this.setState({title})
  }

  render() {
    return (
      <Container>
        <Header>{this.state.title}</Header>
        <GenerateButton onClick={this.onPressGenerate}>GENERATE</GenerateButton>
        <MadeBy>
          Made with  <span aria-label="Heart" role="img">♥️</span> by <LinkOut href="https://github.com/johnpaulada/thesis-title-generator">John Paul Ada</LinkOut>
        </MadeBy>
      </Container>
    );
  }
}

export default App;