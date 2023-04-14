import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find book of your choice.</h2><br />
                <p className='header-text fs-18 fw-5'>Need help finding books' info? You are at right place. You can get info about any book from here. We have information about around 1.7 million books. <br/>Try searching something and see the magic.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header
