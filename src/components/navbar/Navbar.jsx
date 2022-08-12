import React from 'react'
import './navbar.scss'
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">

        <div className="search">
          <input type="text" placeholder='Search ....' />
          <SavedSearchIcon className='icon' />
        </div>

        <div className="items">

          <div className="item">
            <DarkModeIcon className='icon' />
          </div>
          <div className="item">
            <NotificationsNoneIcon className='icon' />
            <div className="counter">4</div>
          </div>
          <div className="item">
            <EmailOutlinedIcon className='icon' />
            <div className='counter'>2</div>
          </div>
          <div className="item">
            <FullscreenOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <TocOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <img src={require("../../assets/mine.jpg")} alt="mine" className='photo'/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar