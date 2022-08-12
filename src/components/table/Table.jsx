import React from 'react'
import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import image from '../../assets/hplaptop.jpg';

const Tables = () => {
 
const rows = [
  {
    id:1111,
    product : 'Dell laptop' ,
    // img : require('../../assets/hplaptop.jpg') ,
    img : image,
    customer : 'ramesh',
    date : '1 january',
    amount : 100,
    method : 'Cash on Delivery',
    status : "Pending",
  } ,
  {
    id:1121,
    product : 'Hp laptop' ,
    img:image,
    customer : 'suresh',
    date : '1 january',
    amount : 100,
    method : 'Cash on Delivery',
    status : "Approved",
  },
   {
    id:1231,
    product : 'Samsung laptop' ,
    img:image,
    customer : 'jarosj',
    date : '1 january',
    amount : 100,
    method : 'Cash on Delivery',
    status : "Pending",
  }, {
    id:4111,
    product : 'Apple laptop' ,
    img:image,
    customer : 'harish',
    date : '1 january',
    amount : 100,
    method : 'Online Payment',
    status : "Approved",
  }
]

  
  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell className='tablecell'>Product</TableCell>
          <TableCell className='tablecell'>Customer</TableCell>
          <TableCell className='tablecell'>Date</TableCell>
          <TableCell className='tablecell'>Amount</TableCell>
          <TableCell className='tablecell'>Payment Method</TableCell>
          <TableCell className='tablecell'>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
          >
            <TableCell >
              {row.id}
            </TableCell>
            <TableCell className='tablecell'>
                <div className="cellWrapper">
                  <img src={row.img} alt="product " />
                  {row.product}
                </div>
              </TableCell>
            <TableCell className='tablecell'>{row.customer}</TableCell>
            <TableCell className='tablecell'>{row.date}</TableCell>
            <TableCell className='tablecell'>{row.amount}</TableCell>
            <TableCell className='tablecell'>{row.method}</TableCell>
            <TableCell className='tablecell'>
              <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Tables