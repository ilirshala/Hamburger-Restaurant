import { IconButton, Modal } from "@material-ui/core";
import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchIcon.css";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function MySearchIcon({ title }) {
  const [open, setOpen] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [{ item }, dispatch] = useStateValue();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const addToSearchPage = () => {
    //Add food to search page
    dispatch({
      type: "SEARCH_FOOD",
      item: inputSearch,
    });
    console.log(item);
    handleClose();
  };
  return (
    <div className='searchBar'>
      <IconButton>
        <SearchIcon onClick={handleOpen} />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'>
        <div className='searchContent'>
          <div className='searchContentTitle'>
            <h1>Hamburger's</h1>
            <CloseOutlinedIcon
              style={{
                fontSize: "35px",
                cursor: "pointer",
                marginRight: "30px",
                float: "right",
              }}
              onClick={handleClose}
            />
          </div>

          <div className='inputs'>
            <p className='titleParagraf'>Search for hamburgers and pizza</p>
            <form onSubmit={() => {}}>
              <div className='inputButton'>
                <input
                  onChange={(e) => setInputSearch(e.target.value)}
                  value={inputSearch}
                  type='text'
                  className='searchInput'
                  placeholder='Search'
                />
                <Link to={`/search/${inputSearch}`}>
                  <button
                    style={{ marginTop: "20px" }}
                    onClick={addToSearchPage}>
                    Search
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default MySearchIcon;
