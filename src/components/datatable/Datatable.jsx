import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import {userColumn ,userRow} from "../../DatatableSource"


  
const Datatable = () => {

    const actionColumn =[{field :"action" , headerName: "Action" ,width : 200 ,renderCell:()=>{
        return(
            <div className="cellAction">
                <div className="viewButton">View</div>
                <div className="deleteButton">Delete</div>
            </div>
        )
    }}]
  return (
    <div className="datatable" style={{ height: 400, width: '100%' }}>
    <DataGrid
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