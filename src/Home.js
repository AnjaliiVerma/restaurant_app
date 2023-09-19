import React from "react";

const Home=(props)=>{
    let{item}=props
    let{strMeal, strMealThumb, idMeal}=item

    return(
        <div className="data1">
            <img src={strMealThumb} alt=""  />
            <p>strMeal={strMeal}</p>
            {/* <p>idMeal={idMeal}</p> */}
        </div>
    )
}
export default Home;