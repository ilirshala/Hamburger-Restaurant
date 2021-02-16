import React from "react";
import "../css/SearchPage.css";
import { useStateValue } from "../StateProvider";
import HamburgerProd from "./HamburgerProd";
import PizzaProd from "./PizzaProd";

function SearchPage() {
  const [{ item }] = useStateValue();

  return (
    <div className='searchPage'>
      <div className='inputs'>
        <p className='titleParagraf'>Search by typing & pressing enter</p>
        <form onSubmit={() => alert("Submited")}>
          <input type='text' className='searchInput' placeholder='Search' />
        </form>
      </div>
      <div className='searchItem'>
        {item === "hamburger" ? <HamburgerProd /> : " "}
        {item === "pizza" ? <PizzaProd /> : " "}
      </div>
    </div>
  );
}
// {item === "Hamburger" ? <HamburgerProd /> : "Check your search words"}
export default SearchPage;
