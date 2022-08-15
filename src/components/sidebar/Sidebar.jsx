import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import image from "../../assets/logo.jpg"
// import { display } from '@mui/system';
import { DarkModeContext } from '../context/darkModeContext';


const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)

    return (
        <div className='sidebar'>
            <div className="top">
                <Link to='/' style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
                    <img src={image} alt="logo" />
                    <span className="logo" >mhrdipesh</span>
                </Link>

            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardCustomizeRoundedIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to='/users' style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineRoundedIcon className='icon' />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to='/products' style={{ textDecoration: "none" }}>
                        <li>
                            <ProductionQuantityLimitsOutlinedIcon className='icon' />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <CreditCardOutlinedIcon className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <AirportShuttleIcon className='icon' />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>

                    <li>
                        <QueryStatsIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsIcon className='icon' />
                        <span>Notification</span>
                    </li>
                    <p className="title">SERVICE</p>

                    <li>
                        <LocalHospitalIcon className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className='icon' />
                        <span>Setting</span>
                    </li>
                    <p className="title">USER</p>

                    <li>
                        <AccountCircleOutlinedIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className='icon' />
                        <span>logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <p>Theme</p>
                <div className='theme'>
                    <div className='colorOption' onClick={() => dispatch({ type: "Light" })}></div>
                    <div className='colorOption' onClick={() => dispatch({ type: "Dark" })}></div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar