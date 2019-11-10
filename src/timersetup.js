import React, {Component} from "react";

export class TimerSetUp extends Component {
  render() {
    return (
      <div className='timer'>
        <div id={this.props.labelID}>
          {this.props.label}
        </div>
        <button id={this.props.decrementID} onClick={this.props.onClick} value='-' className='timerAdjust'>
          <i className='fas fa-angle-down'/>
        </button>
        <div id={this.props.lengthID} className='timerAdjust'>
          {this.props.length}
        </div>
        <button id={this.props.incrementID} onClick={this.props.onClick} value='+' className='timerAdjust'>
          <i className='fas fa-angle-up'/>
        </button>
      </div>               
    )
  }
};