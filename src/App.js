import React, { Component } from 'react';
import Button from './components/Button';

class App extends Component {

  state = { buttonLabel: 'Initial Text' };

  myFunction = () => {
    this.setState({ buttonLabel: 'Final Text' });
  }

  render() {
    return (
      <Button buttonText={this.state.buttonLabel} onPress={this.myFunction} />
    );
  }
}

export default App;
