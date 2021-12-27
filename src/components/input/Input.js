import React, {Component} from 'react';
import './Input.css';

class Input extends Component{
  constructor(props){
    super(props);
    this.state = {
      ivalue:'',
      term:''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(event){
    const {callback} = this.props;
    this.setState({ivalue:event.target.value});
    callback(event.target.value);
  }

  handleClick(event){
    this.setState({term:event.target.value});
  }

  render(){
    const {mglass} = this.props;
    return(
      <div class="Input">
        <input type='text' onChange={this.handleInput}></input>
        <button class="button" onClick={this.handleClick} value={this.ivalue}>{mglass}</button>
      </div>
    );
	}
}

export default Input;