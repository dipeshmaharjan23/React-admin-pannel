import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumn, userRow } from "../../DatatableSource"
import { Link } from 'react-router-dom';


const Datatable = () => {

  const actionColumn = [{
    field: "action", headerName: "Action", width: 200, renderCell: () => {
      return (
        <div className="cellAction">
          <Link to='/users/test' style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
          </Link>
          <div className="deleteButton">Delete</div>
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
        rows={userRow}
        columns={userColumn.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable