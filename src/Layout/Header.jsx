import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="header bg-gray-900 bg">

      <div className="nav-container flex justify-around align-middle text-white p-4">
        <Link to={"/"} className="text-red-700 text-3xl font-black">
            Mymovies
        </Link>
        <div className="font-medium text-lg header_btn">
          <Link to={"/popular"}>Popular</Link>
        </div>
        <div className="font-medium text-lg header_btn">
          <Link to={'/top_rated'}>Top Rated</Link>
        </div>
        <div className="font-medium text-lg header_btn">
          <Link to={'/upcoming'}>Upcoming</Link>
        </div>

      </div>
    </div>
  );
};

export default Header;
