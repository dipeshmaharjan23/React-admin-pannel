import React from 'react'
import './feature.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const Feature = () => {
    return (
        <div className='feature'>
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertOutlinedIcon />
            </div>
            <div className="bottom">
                <div className="featureChart">
                    <CircularProgressbar value={50} text="50%" strokeWidth={3} />
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">$34</p>
                <p className="desc">
                    Previous transactions processing. Last payments may not be included.
                </p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon style={{fontSize:'small'}} />
                            <div className="resultAmount">$10k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon style={{fontSize:'small'}}/>
                            <div className="resultAmount">$10k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon style={{fontSize:'small'}}/>
                            <div className="resultAmount">$10k</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Feature