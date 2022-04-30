import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { format } from 'timeago.js';

import './table.scss';
import axios from 'axios';

const List = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
        try {
          const res = await axios.get("http://localhost:5000/api/orders");
          setOrders(res.data)
        } catch (error) {
          console.log(error);
        }
    }

    getOrders()
  }, [])
  

    // const rows = [
    //     {
    //         id: 1122121,
    //         product: "Acer Nitro 5",
    //         img: "https://m.media-amazon.com/images/I/71At5zZn6fL._AC_UY218_.jpg",
    //         customer: "Mike Epps",
    //         date: "2 March",
    //         amount: 779,
    //         method: "Cash on Delivery",
    //         status: "Approved"
    //     },
    //     {
    //         id: 2548954,
    //         product: "Apple IPad",
    //         img: "https://m.media-amazon.com/images/I/61PnHlc0HCL._AC_UY218_.jpg",
    //         customer: "Sizwe Dlomo",
    //         date: "2 March",
    //         amount: 603,
    //         method: "Cash on Delivery",
    //         status: "Approved"
    //     },
    //     {
    //         id: 3657485,
    //         product: "Apple Macbook",
    //         img: "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UY218_.jpg",
    //         customer: "Michael Brady",
    //         date: "2 March",
    //         amount: 996,
    //         method: "Online Paymen",
    //         status: "Pending"
    //     },
    //     {
    //         id: 5842578,
    //         product: "Playstation 5",
    //         img: "https://m.media-amazon.com/images/I/61n7Z3G5WYL._AC_UY218_.jpg",
    //         customer: "John Smith",
    //         date: "2 March",
    //         amount: 689,
    //         method: "Cash on Deliveryt",
    //         status: "Approved"
    //     },
    //     {
    //         id: 4587569,
    //         product: "ASUS ROG Strix",
    //         img: "https://m.media-amazon.com/images/I/71LTfKsKDHS._AC_UY218_.jpg",
    //         customer: "Harold Greene",
    //         date: "2 March",
    //         amount: 578,
    //         method: "Online Payment",
    //         status: "Pending"
    //     }
    // ];

  return (
    <TableContainer component={Paper} className="tableContainer">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='topCell'>Tracking ID</TableCell>
            <TableCell className='topCell'>Address</TableCell>
            <TableCell className='topCell'>Customer</TableCell>
            <TableCell className='topCell'>Created</TableCell>
            <TableCell className='topCell'>Amount</TableCell>
            <TableCell className='topCell'>Updated</TableCell>
            <TableCell className='topCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow key={row._id}>    
              <TableCell className="tableCell">{row._id}</TableCell>
              <TableCell className="tableCell">
                {row.address.street}, {row.address.town}  {row.address.city}    
              </TableCell>
              <TableCell className="tableCell">{row.userId}</TableCell>
              <TableCell className="tableCell">{format(row.createdAt)}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{format(row.updatedAt)}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List