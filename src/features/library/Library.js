import React, {Component} from 'react';
import Header from '../../containers/header';
import Section from '../../containers/section';
import Input from '../../components/input';
import List from '../../components/list';
// api from '../../_config/api';
import './Library.css';

class Library extends Component{

  constructor(props){
    super(props);
  	this.state = {sectionData:props.sectionData}
    //this.filterList = this.filterList.bind(this);
    //this.fetchData = this.fetchData.bind(this);
  }

  render(){

    //const {sectionData} = this.state;

    const sectionClassSearch = 'SectionSearch';
    
    const sectionClassData = 'SectionData';

    const searchButton = '🔍';
//callback={this.filterList}
//<List data={sectionData}/>
    return(
      <div className="Library">
        <Header title={process.env.REACT_APP_TITLE}></Header>

        <Section className={sectionClassSearch}>
          <Input mglass={searchButton}/>
        </Section>

      	<Section className={sectionClassData}>
          
        </Section>
      </div>
    );
  }
}

export default Library;