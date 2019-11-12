import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class TimerSetUp extends Component {
  render() {
    return (
      <div className='timer'>
        <div id={this.props.labelID}>
          {this.props.label}
        </div>
        <button id={this.props.decrementID} onClick={this.props.onClick} value='-' className='timerAdjust'>
          <FontAwesomeIcon icon='angle-down' size='sm' />
        </button>
        <div id={this.props.lengthID} className='timerAdjust'>
          {this.props.length}
        </div>
        <button id={this.props.incrementID} onClick={this.props.onClick} value='+' className='timerAdjust'>
          <FontAwesomeIcon icon='angle-up' size='sm' />
        </button>
      </div>               
    )
  }
};