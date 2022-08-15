import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './new.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New = ({ inputs, title }) => {

  const [file ,setFile] = useState("");
  console.log(file);

  return (
    <div className='new'>
      <Sidebar />
      <div className="sideContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="no avatar" />
          </div>
          <div className="right">
            <form >
              <div className="formInput">
                <label htmlFor='file' >Image :<DriveFolderUploadOutlinedIcon className='icon' /></label>
                <input type="file" id='file' onChange={e=>setFile(e.target.files[0])} style={{ display: 'none' }} />
              </div>

              {inputs.map((input) => {
                return (
                    <div className="formInput" key={input.id}>
                      <label >{input.label}</label>
                      <input type={input.type} placeholder={input.placeholder} />
                    </div>
                )
              })
              }
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New