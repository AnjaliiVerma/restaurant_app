import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';
import Header from './Header';
import Section1 from './Section1';
import Searchbox from './Searchbox';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Categories from './Categories';



const App=()=> {
 
  // Home
  const[foodname, setFoodName]=useState([])
  useEffect(()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=indian`)
    .then(response=>response.json())
    .then(data=>setFoodName(data.meals))
  },[])

  const [ctgryData, setCtgryData]=useState([])
  const CategoriesDataHandler=()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    .then(response=>response.json())
    .then(data=>setCtgryData(data.categories))
  }
  console.log(ctgryData, "ctgry")
  var a;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' component={Home} />
          <Route exact path='/categories' component={Categories} />
          {/* <Route exact path='/API' component={API}/> */}
        </Routes>
      {/* Header */}
      <div className="header">
      <Header/>
      </div>
      <div>
        {ctgryData && ctgryData.length>0 && ctgryData.map((item, index)=>{
        return <Categories item={item} key={index}  />
        })}
      </div>
      {/* Section 1 */}
      <div className="Section1">
        <Section1/>
      </div>
      {/* Section 2 */}
      <div className="divider">
        <hr />
      </div>
      <div className="inputbox">
        <Searchbox/>
      </div>
      <div className="divider">
        <hr />
      </div>
      {/* HomePage */}
      <div className='home_container'>
      {foodname && foodname.length>0 && foodname.map((item, index)=>{
        return <Home key={index} item={item} CategoriesDataHandler={CategoriesDataHandler} />
      })}
      </div>
      <div className="divider">
        <hr />
      </div>
      </Router>
      
    </div>
  );
}
export default App;