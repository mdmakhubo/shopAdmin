import React, { useContext } from 'react';
import './navbar.scss';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { DarkContext } from '../../context/DarkContext';

const Navbar = () => {
  const {dispatch} = useContext(DarkContext)
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <YoutubeSearchedForIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            <span className='langs'>English</span>
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" onClick={() => dispatch({type: "TOGGLE"})} />            
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />            
          </div>
          <div className="item">
            <CircleNotificationsOutlinedIcon className="icon" />
            <div className="counter">1</div>            
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />            
            <div className="counter">2</div>            
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />            
          </div>
          <div className="item">
            <img src='https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg' 
            alt="my-avatar" className='avatar' />            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar