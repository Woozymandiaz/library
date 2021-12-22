import React, {Component} from 'react';
import Header from '../../containers/header';
import Section from '../../containers/section';
// api from '../../_config/api';
import './Library.css';

class Library extends Component{

    constructor(props){
        super(props);
        this.state = {sectionData:props.sectionData}
        this.filterList = this.filterList.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    render(){

        const sectionClassSearch = 'SectionSearch';
    
        const sectionClassData = 'SectionData';

        return(
            <div className="Library">
                <Header title={process.env.REACT_APP_TITLE}></Header>

                <Section className={sectionClassSearch}></Section>

                <Section className={sectionClassData}></Section>
            </div>
        );
    }
}

export default Library;