import React from "react";


const Section1 = () => {
  return (
    <div className="Section-1">
      {/* <div className="left_Plate"> */}
        <img src="meal-icon.png" alt="meal" />
      {/* </div> */}
      <div className="content">
        <h1>Welcome To TheMealDB</h1>
        <p>
          Welcome to TheMealDB: An open, crowd-sourced database of Recipes from
          around the world.
        </p>
        <p>
          We also offer a{" "}
          <a href="https://www.themealdb.com/api.php">free JSON API</a> for
          anyone wanting to use it, with additional features for subscribers.
        </p>
        <button><b>Pay</b><b >Pal</b> Subscribe</button>
        <p>Click to Support $2 per month (cancel anytime)</p>
        <p>Currently 50 supporters</p>
      </div>
      {/* <div className="right_Plate"> */}
        <img src="meal-icon.png" alt="meal"  />
      {/* </div> */}
    </div>
  );
};
export default Section1;
