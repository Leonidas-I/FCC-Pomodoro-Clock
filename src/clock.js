import React, {Component} from "react";
import {TimerSetUp} from "./timersetup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/*
-xem them https://codepen.io/no_stack_dub_sack/pen/VKJGKd?editors=0010 ve dem countdown chinh xac 1 ma van chua hieu
-xem them countdown timer trong HOWTO va setTimeout, setInterval trong DOM Window cua w3school de lam phan countdown trong bai nay
-kha nang cao la countdown cua minh lam ko dc chinh xac 100%
-Tri Phan
*/
export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      clockMode: 'Session',
      clockTimer: 1500,
      clockStatus: false,
      clockColor: {color: 'blue'}
    }
    this.adjustBreak = this.adjustBreak.bind(this);
    this.adjustSession = this.adjustSession.bind(this);
    this.reset = this.reset.bind(this);
    this.clockDisplay = this.clockDisplay.bind(this);
    this.playPause = this.playPause.bind(this);
    this.clockCountdown = this.clockCountdown.bind(this);
    this.toggleMode = this.toggleMode.bind(this);
    this.beep = this.beep.bind(this);
  }
  
  beep() {
    this.beepMP3.play();
  }
  
  toggleMode(str, num) {
    this.setState({
      clockMode: str,
      clockTimer: num,
      clockColor: str=='Break' ? {color: 'red'} : {color: 'blue'}
    });
  }
  
  playPause() {
    this.setState({clockStatus: !this.state.clockStatus})
    let t = setInterval(() => {
      if (this.state.clockStatus) {
        this.clockCountdown();
        if (this.state.clockTimer < 0) {
          this.state.clockMode == 'Session'
            ? this.toggleMode('Break',this.state.breakLength*60)
            : this.toggleMode('Session',this.state.sessionLength*60)
          this.beep();
        }
      }
      else {
        clearInterval(t);
      }
    }, 1000);
  }
  
  clockCountdown() {
    this.setState({
      clockTimer: this.state.clockTimer - 1
    });
    
  }
  
  clockDisplay() {
    let minutes = Math.floor(this.state.clockTimer/60);
    let seconds = this.state.clockTimer - minutes*60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return minutes + ':' + seconds;
  }
  
  adjustBreak(e) {
    if (e.currentTarget.value == '-' && this.state.breakLength != 1) {
      this.setState({
        breakLength: this.state.breakLength - 1
      });
    }
    else if (e.currentTarget.value == '+' && this.state.breakLength != 60) {
      this.setState({
        breakLength: this.state.breakLength + 1
      });
    }
  }
  
  adjustSession(e) {
    if (e.currentTarget.value == '-' && this.state.sessionLength != 1) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        clockTimer: this.state.clockTimer - 60
      });
    }
    else if (e.currentTarget.value == '+' && this.state.sessionLength != 60) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        clockTimer: this.state.clockTimer + 60
      });
    }
  }
  
  reset() {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      clockMode: 'Session',
      clockTimer: 1500,
      clockStatus: false,
      clockColor: {color: 'blue'}
    });
    this.beepMP3.pause();
    this.beepMP3.currentTime = 0;
  }
  
  render() {
    return(
      <div>
        <h1 style={{textAlign:'center', color: '#4b0082', fontSize: '5em'}}>Pomodoro Clock</h1>  {/*de cho nho cach khai bao inline style JSX*/}
        <TimerSetUp 
          labelID='break-label'
          label='Break Length'
          decrementID='break-decrement'
          incrementID='break-increment'
          lengthID='break-length'
          length={this.state.breakLength}
          onClick={this.adjustBreak}
          />
        <TimerSetUp 
          labelID='session-label'
          label='Session Length'
          decrementID='session-decrement'
          incrementID='session-increment'
          lengthID='session-length'
          length={this.state.sessionLength}
          onClick={this.adjustSession}
          />
        <div className='clockScreen'>
          <div className='clockInfo'>
            <div id='timer-label'>
              {this.state.clockMode}
            </div>
            <div id='time-left' style={this.state.clockColor}>
              {this.clockDisplay()}
            </div>
          </div>
        </div>
        <div className='timerControl'>
          <button id='start_stop' onClick={this.playPause}>
            <FontAwesomeIcon icon='play' size='2x' />
            <FontAwesomeIcon icon='pause' size='2x' />
          </button>
          <button id='reset' onClick={this.reset}>
            <FontAwesomeIcon icon='sync-alt' size='2x' />
          </button>
        </div>
        <audio id='beep' src='https://www.w3schools.com/html/horse.mp3'
          preload='auto' ref={(audio) => {this.beepMP3 = audio}} />
        <footer>Code by Leonidas-I aka TriPhan</footer>
      </div>
    )
  }
};