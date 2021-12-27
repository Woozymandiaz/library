import React, {Component} from 'react';
import Header from '../../containers/header';
import Section from '../../containers/section';
import Input from '../../components/input';
import List from '../../components/list';
import api from '../../_config/api';
import './Library.css';

class Library extends Component{

  constructor(props){
    super(props);
  	this.state = {sectionData:props.sectionData}
    this.filterList = this.filterList.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  filterList(value){
    this.fetchData(value);
  }
  
  async fetchData(value) {
    const response = await api.get('/search?query='+value)

    this.setState({sectionData:response?.data.hits})
  }

  async componentDidMount(){
    this.fetchData('');
  }

  render(){

    const {sectionData} = this.state;

    const sectionClassSearch = 'SectionSearch';
    
    const sectionClassData = 'SectionData';

    const searchButton = '🔍';

    return(
      <div className="Library">
        <Header title={process.env.REACT_APP_TITLE}></Header>

        <Section className={sectionClassSearch}>
          <Input mglass={searchButton} callback={this.filterList}/>
        </Section>

      	<Section className={sectionClassData}>
          <List data={sectionData}/>
        </Section>
      </div>
    );
  }
}

export default Library;