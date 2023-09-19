import React from "react";

const Categories=(props)=>{
    let{item}=props
    let{strCategory, strCategoryThumb,}=item
    return(
        <div>
            <img src={strCategoryThumb} alt="" />
            <p>strCategory={strCategory}</p>

        </div>
    )
}
export default Categories;