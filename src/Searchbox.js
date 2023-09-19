import React, { useCallback, useState } from "react";

const Searchbox = () => {
  const [inputhandler, setInputhandler] = useState("");
  const [buttondata, setbuttondata] = useState([]);
  const mealsData =useCallback( (name) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then((response) => response.json())
      .then((data) => setbuttondata(data.meals));
  },[]);
  
  const btnhandler = useCallback(() => {
    mealsData(inputhandler);
  }, [inputhandler,mealsData]);
console.log(buttondata, "buttondata");
  return (
    <div className="Search_box">
      <input
        type="text"
        onChange={(event) => setInputhandler(event.target.value)}
        value={inputhandler}
        placeholder="Search..."
      />
      <button onClick={() => btnhandler()}>Search</button>

      <div className="meal_data">
        {buttondata &&
          buttondata.length > 0 &&
          buttondata.map((buttondata) => (
            <div>
              <p>strMeal:{buttondata.strMeal}</p>
              <img src={buttondata.strMealThumb} alt="" />
            </div>
          ))}
      </div>
      <div className="description">
        <img src="meals.png" alt="" />
        <span>Total Meals: 286</span>
        <img src="ingredients.png" alt="" />
        <span>Total Ingredients: 574</span>
        <img src="images.png" alt="" />
        <span> Images: 285</span>
      </div>
        {/* {<h2>no meals found</h2>} */}
    </div>
    
  );
};
export default Searchbox;
