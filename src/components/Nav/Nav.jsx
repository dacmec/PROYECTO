import SearchBar from "../SearchBar/SearchBar.jsx";
import React from "react";
import { Link } from 'react-router-dom'
const Nav = ({ onSearch }) => {
    return(
        <div>
            <SearchBar onSearch={onSearch} />
            <button>
                <Link to='/About'>ABOUT</Link>
            </button>

            <button>
                <Link to='/Home'>HOME</Link>
            </button>

        </div>
    )
}


    

export default Nav;