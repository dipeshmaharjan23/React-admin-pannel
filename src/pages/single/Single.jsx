import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './single.scss'
import image from '../../assets/mine.jpg'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">

          <div className="left">

            <div className="editButton">Edit</div>
            <p className='title'>Information</p>
            
            <div className="item">
              <img src={image} alt="avatar" />

              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className='itemValue'>janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className='itemValue'>+97887784455</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className='itemValue'>somewhere under the earth</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className='itemValue'>USA</span>
                </div>

              </div>
            </div>
          </div>

          <div className="right">
            <Chart aspect={3/1} title="User spending (Last 3 Months)"/>
          </div>
        </div>

        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single