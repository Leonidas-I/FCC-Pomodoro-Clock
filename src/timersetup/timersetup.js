import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import timerCSS from './timersetup.scss';

export class TimerSetUp extends Component {
  render() {
    return (
      <div className={timerCSS.timer}>
        <div>
          {this.props.label}
        </div>
        <button onClick={this.props.onClick} value='-' className={timerCSS.timerAdjust}>
          <FontAwesomeIcon icon='angle-down' size='md' />
        </button>
        <div className={timerCSS.timerAdjust}>
          {this.props.length}
        </div>
        <button onClick={this.props.onClick} value='+' className={timerCSS.timerAdjust}>
          <FontAwesomeIcon icon='angle-up' size='md' />
        </button>
      </div>               
    )
  }
};