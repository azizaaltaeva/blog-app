import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import { fetchSearch } from '../../store/actions/searchActions'
import './header.scss'

const Header = () => {
  const [header, setHeader] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const dispatch = useDispatch();

  const changeBackground = () => {
    if (window.scrollY >= 50 ) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }
  window.addEventListener('scroll', changeBackground)

  const handleSearch = (e) => {
    dispatch(fetchSearch(e.target.value))
  }


  return (
  <>
    <header className={header ? 'header active' : 'header'} >
      <a href="#" className="logo">
          {/* <i class="fas fa-globe-asia"></i>  */}
          <i class="fas fa-map-marked-alt"></i> blog. </a>
      <nav className="navbar">
        {/* <div id="nav-close" className="fas fa-times"></div> */}
        <Link to="/home">home</Link>
        <Link to="/places">places</Link>
        <Link to="/blogs">blogs</Link>
      </nav>

      <div className="icons">
        <div id="menu-btn" className="fas fa-bars"></div>
        <Link to="/profile-account" className="fas fa-user-circle"></Link>

        <div id="search-btn" className="fas fa-search">
          <input 
            type="text" 
            placeholder="Search..." 
            onFocus={() => setSearchActive(true)}
            onChange={handleSearch}
          />
        </div>
          {searchActive && (
            <div className="search-box">
              <Search />
            </div>
          )}
      </div>
    </header>
  </>
  )
}

export default Header
