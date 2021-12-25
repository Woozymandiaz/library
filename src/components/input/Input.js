import React, {Component} from 'react';
import './Input.css';

class Input extends Component{
  constructor(props){
    super(props);
    this.state = {term:''};
    this.handleChangeValue = this.handleChangeValue.bind(this);
  }

  handleChangeValue(event){
    const {callback} = this.props;
    this.setState({term:event.target.value});
    callback(event.target.value);
  }

  render(){
    const {mglass} = this.props;
    return(
      <div class="Input">
        <input type='text' onChange={this.handleChangeValue}></input>
        <button class="button">{mglass}</button>
      </div>
    );
	}
}

export default Input;