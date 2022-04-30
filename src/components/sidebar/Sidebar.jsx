import React, {useContext} from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { DarkContext } from '../../context/DarkContext';

const Sidebar = () => {
    const {dispatch} = useContext(DarkContext);

  return (
    <div className='sidebar'>
        <div className="sidebarTop">
            <Link to="/" style={{ textDecoration:"none" }}>
                <span className='logo'>My WebAdmin</span>    
            </Link>            
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{ textDecoration:"none" }}>
                    <li>
                        <span className='icon'><DashboardIcon /></span>
                        <span className='name'>Dashboard</span>
                    </li>
                </Link>
                <p className="title">LISTS</p>
                <Link to="/users" style={{ textDecoration:"none" }}>
                    <li>
                        <span className='icon'><PersonOutlineOutlinedIcon /></span>
                        <span className='name'>Users</span>
                    </li>
                </Link>
                <Link to="/products" style={{ textDecoration:"none" }}>
                    <li>
                        <span className='icon'><AddBusinessOutlinedIcon /></span>
                        <span className='name'>Products</span>
                    </li>
                </Link>
                <Link to="/" style={{ textDecoration:"none" }}>
                    <li>
                        <span className='icon'><AddCardOutlinedIcon /></span>
                        <span className='name'>Orders</span>
                    </li>
                </Link>
                <Link to="/" style={{ textDecoration:"none" }}>
                    <li>
                        <span className='icon'><LocalShippingOutlinedIcon /></span>
                        <span className='name'>Deliveries</span>
                    </li>
                </Link>
                <p className="title">USEFUL</p>
                <Link to="/" style={{ textDecoration:"none" }}>
                    <li>
                        <span className='icon'><QueryStatsOutlinedIcon /></span>
                        <span className='name'>Stats</span>
                    </li>
                </Link>
                <Link to="/" style={{ textDecoration:"none" }}>
                    <li>
                        <span className='icon'><NotificationImportantOutlinedIcon /></span>
                        <span className='name'>Notifications</span>
                    </li>
                </Link>
                <p className="title">SERVICE</p>
                <Link to="/" style={{ textDecoration:"none" }}>
                    <li>
                        <span className='icon'><HealthAndSafetyOutlinedIcon /></span>
                        <span className='name'>System Health</span>
                    </li>
                </Link>
                <Link to="/" style={{ textDecoration:"none" }}>
                    <li>
                        <span className='icon'><SummarizeOutlinedIcon  /></span>
                        <span className='name'>Logs</span>
                    </li>
                </Link>
                <Link to="/" style={{ textDecoration:"none" }}>
                    <li>
                        <span className='icon'><SettingsOutlinedIcon /></span>
                        <span className='name'>Settings</span>
                    </li>
                </Link>
                <p className="title">USER</p>
                <Link to="/" style={{ textDecoration:"none" }}>
                    <li>
                        <span className='icon'><FolderSharedOutlinedIcon  /></span>
                        <span className='name'>Profile</span>
                    </li>
                </Link>
                <Link to="/" style={{ textDecoration:"none" }}>
                    <li>
                        <span className='icon'><LogoutIcon /></span>
                        <span className='name'>Logout</span>
                    </li>
                </Link>
            </ul>
        </div>
        <div className="sidebarBottom">
            <div className="colorOption" onClick={() => dispatch({type: "LIGHT"})}></div>
            <div className="colorOption" onClick={() => dispatch({type: "DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar