import React from 'react';
import './products.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Prodtable from '../../components/prodtable/Prodtable';

const Products = () => {  
  
  return (
    <div className='products'>
        <Sidebar />
        <div className="productsContainer">
            <Navbar />
            <Prodtable />
        </div>
    </div>
  )
}

export default Products