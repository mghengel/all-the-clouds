import React, { Component } from 'react';
import Api from './api';


export class Cloud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopStart: true,
      color: 'black'
    }
    this.timer = null;
  }
  componentDidMount() {
    this.startTimer();
  }
  getImagePath() {
    return 'img/' + this.props.name + '.png';
  }
  getImageClass() {
    return 'img-fluid ' + this.state.color;
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
        if(res && res.color) {
          this.setState({color: res.color});
        } else {
          this.setState({color: 'red'}); //error color
        }
      })
  };
  render() {
    return (
      <img class={this.getImageClass()} src={this.getImagePath()}/>
    );
  }
}

export default Cloud;
