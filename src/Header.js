import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Header = (props) => {
  let{CategoriesDataHandler}=props

  return (
    <div className="Head_1">
      <div className="logo">
        <img src="logo1.png" alt="" />
      </div>
      <div className="Head_2">
        <div className="Head_2A">
          <ul>
            <li>
              <Link to="/">
                <a href="Home.js" className="home" >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link to="/API">
                <a href="" className="api" >
                  API
                </a>
              </Link>
            </li>
            <li>
              <Link to="/categories">
                <a href="" className="Categories" onClick={()=>CategoriesDataHandler()}>
                  Categories
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="Head_2B">
          <SocialIcon url="https://facebook.com/jaketrent" className="h2b1" />
          <SocialIcon url="https://twitter.com/jaketrent" className="h2b2" />
        </div>
        {/* <div className="Head_2C">
          <input type="text" placeholder="Search..." />
        </div> */}
      </div>
    </div>
  );
};
export default Header;
