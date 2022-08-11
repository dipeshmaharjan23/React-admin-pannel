import React from 'react'
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


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">mhrdipesh</span>

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

                    <li>
                        <PersonOutlineRoundedIcon className='icon' />
                        <span>Users</span>
                    </li>
                    <li>
                        <ProductionQuantityLimitsOutlinedIcon className='icon' />
                        <span>Products</span>
                    </li>
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
                    <div className='colorOption'></div>
                    <div className='colorOption'></div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar