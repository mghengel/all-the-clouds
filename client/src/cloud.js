import React, { Component } from 'react';
import Api from './api';


export class Cloud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopStart: true,
      status: 'Loading'
    }
    this.timer = null;
  }
  componentDidMount() {
    this.startTimer();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  startTimer = () => {
    this.timer = setInterval(() => this.getApi(), 1000);
  }
  stopStart = e => {
    let { stopStart } = this.state;
    if (stopStart) {
      clearInterval(this.timer);
    } else {
      this.startTimer();
    }
    this.setState({ stopStart: !this.state.stopStart });
  };
  getApi = () => {
    Api.getApi(this.props.api)
      .then(res => {
        console.log(res);
        if(res) {
          this.setState({status: res.color});
        } else {
          this.setState({status: 'green'});
        }
      })
  };
  render() {
    return (
      <div>{this.props.name}: <span onClick={this.stopStart}>{this.state.status} {this.state.stopStart ? `Stop` : `Start`}</span></div>
    );
  }
}

export default Cloud;
