import React, { Component } from 'react';
import './App.css';
import MainPage from './MainPage/MainPage';

class App extends Component {
  state = {
    time: '',
  }

  componentDidMount () {
    this.getTime()
  }

  getTime = () => {
    let date = new Date();
    let timeDate = date.getTime();
    console.log(timeDate);

    // return timeDate;
  this.setState({
      time: timeDate,
    })
  }

  render() {
    const {time}= this.state;
    return (
     
      <div >
        <MainPage time={time}/>
      </div>
     
    );
  }
}

export default App;
