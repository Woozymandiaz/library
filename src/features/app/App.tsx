import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../redux/reducer';
import { Header } from '../../containers/header';
import { Section } from '../../containers/section';
import { Input } from '../../components/input';
import { List } from '../../components/list';
import { api } from '../../_config/api';
import './App.css';

export const App: React.FC = () => {

  const [sectionData, setSectionData] = React.useState([]);
  const searchData = useSelector<IState, IState["data"]>(state => state.data);

  const sectionClassSearch = 'SectionSearch'; 
  const sectionClassData = 'SectionData';
  const searchButton = '🔍';

  const fetchData = async () => {
    const response = await api.get('/search?query=' + searchData);
    setSectionData(response.data.hits);
    console.log(response.data);
  }

  useEffect(() => { fetchData() }, []);

  return(
    <div className="App">
      <Header title={process.env.REACT_APP_TITLE}></Header>

      <Section className={sectionClassSearch}>
        <Input mglass={searchButton} callback={fetchData}/>
      </Section>

      <Section className={sectionClassData}>
        <List data={sectionData}/>
      </Section>
    </div>
  );
};
