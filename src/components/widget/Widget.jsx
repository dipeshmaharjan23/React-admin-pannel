import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

const Widget = ({ type }) => {
  let data;

  const amount =100;
  const diff = 30;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (<PersonOutlineRoundedIcon className='icon' />)
      };
      break;

    case "order":
      data = {
        title: "ORDER",
        isMoney: false,
        link: "See all orders",
        icon: (<ProductionQuantityLimitsOutlinedIcon className='icon' />)
      };
      break;

    case "earning":
      data = {
        title: "EARNING",
        isMoney: false,
        link: "See all earnings",
        icon: (<CurrencyRupeeOutlinedIcon className='icon' />)
      };
      break;

    case "balance":
      data = {
        title: "BALANCE",
        isMoney: false,
        link: "See all balance",
        icon: (<AccountBalanceOutlinedIcon className='icon' />)
      };
      break;

    default:
      break;
  }


  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage negative">
          <KeyboardArrowUpIcon /> -{diff}%
        </div>
         {data.icon} 
      </div>
    </div>
  )
}

export default Widget