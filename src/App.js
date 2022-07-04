import './App.css';
import Searchbar from './Components/Searchbar';
import Footer from './Components/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = "https://beta.gigvistas.com/web-app-api/website/api/v1/gig/search?searchTerm=java&pageNumber=0"

function App() {

  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios. get(apiUrl);
    setFilterData(response.data);
    console.log(response.data.jobs);
  }

  return (
    <>
    <Searchbar/>
    <Footer/>
    </>
  )
}
export default App;