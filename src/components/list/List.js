import React, {Component} from 'react';
import './List.css';

class List extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    const {data} = this.props;
    return(
      <div className="List">
        {data?.map((item, index) => (
          <div className="Item" key={index}>
            <h3>🌍 {item.title?item.title:"Unknown author"}</h3>
            <p>💻 {item.author}</p>
            <p>🪄 <a href={item.url} target='_blank' rel="noreferrer">{item.url?item.url:"link unavailable"}</a></p>
          </div>
        ))}
      </div>
    );
  }
}

export default List;