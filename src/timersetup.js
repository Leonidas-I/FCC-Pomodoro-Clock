export default class TimerSetUp extends React.Component {
  render() {
    return (
      <div className='timer'>
        <div id={this.props.labelID}>
          {this.props.label}
        </div>
        <button id={this.props.decrementID} onClick={this.props.onClick} value='-' className='timerAdjust'>
          <i className='fas fa-angle-down fa-2x'/>
        </button>
        <div id={this.props.lengthID} className='timerAdjust'>
          {this.props.length}
        </div>
        <button id={this.props.incrementID} onClick={this.props.onClick} value='+' className='timerAdjust'>
          <i className='fas fa-angle-up fa-2x'/>
        </button>
      </div>               
    )
  }
};