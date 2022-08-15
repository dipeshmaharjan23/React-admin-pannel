import React, { useState } from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumn, userRow } from "../../DatatableSource"
import { Link } from 'react-router-dom';


const Datatable = () => {
  const [data, setData] = useState(userRow);

  const handleDelete = (id) => {
    console.log(id)
    setData(data.filter(item => item.id !== id ))
  }
  console.log(data)

  const actionColumn = [{
    field: "action", headerName: "Action", width: 200, renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link to='/users/test' style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
          </Link>
          <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
        </div>
      )
    }
  }]
  return (
    <div className="datatable" style={{ height: 400, width: '100%' }}>
      <div className="datatableTitle">
        Add New User
        <Link to='/users/new' style={{ textDecoration: "none" }} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className='datagrid'
        rows={data}
        columns={userColumn.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable