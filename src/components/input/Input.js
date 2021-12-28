import React, {Component} from 'react';
import './Input.css';

class Input extends Component{
  constructor(props){
    super(props);
    this.state = {term:''};
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(event){
    this.setState({term:event.target.value});
  }

  handleClick(){
    const {callback} = this.props;
    callback(this.state.term);
  }

  render(){
    const {mglass} = this.props;
    return(
      <div class="Input">
        <input type="text" onChange={this.handleInput}/>
        <button class="button" onClick={this.handleClick}>{mglass}</button>
      </div>
    );
	}
}

export default Input;