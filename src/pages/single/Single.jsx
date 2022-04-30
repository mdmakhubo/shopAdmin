import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';
import { useLocation } from 'react-router-dom';

import './single.scss';

const Single = () => {
  const location = useLocation();
  const product = location.state.rowProducts;

  return (
    <div className='single'>
      <Sidebar />
        <div className="singleContainer">
            <Navbar />
            <div className='singleTop'>
              <div className="singleLeft">
                <div className="editButton">Edit</div>
                <h1 className='title'>Information</h1>
                <div className="item">
                  <img src="https://cdn.pixabay.com/photo/2016/12/21/00/36/woman-1921883__340.jpg" alt="profile-pic" className='itemImg' />
                  <div className="details">
                    <h1 className="itemTitle">Jane Doe</h1>
                    <div className="detailItem">
                      <span className="itemKey">Email: </span>
                      <span className="itemValue">janedoe@example.com</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Phone: </span>
                      <span className="itemValue">+27 12 345 6789</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Address: </span>
                      <span className="itemValue">456 Main Reef Road, JHB</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Country: </span>
                      <span className="itemValue">South Africa</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="singleRight">
                <Chart aspect={3.5 / 1} title="Your Sales - Last 6 (Months)" />
              </div>
            </div>

            <div className="bottom">
          <div className="left">
            <img src={product.img ? product.img : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="edit-user" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>Title</label>
                <input type="text" 
                readOnly
                value={product.title}
                 />
              </div>
              <div className="formInput">
                <label>Description</label>
                <input type="text" 
                readOnly
                value={product.desc}
                 />
              </div>
              <div className="formInput">
                <label>Color</label>
                <input type="text" 
                readOnly
                value={product.color[0]}
                 />
              </div>
              <div className="formInput">
                <label>Size</label>
                <input type="text" 
                readOnly
                value={product.size[0]}
                 />
              </div>
              <div className="formInput">
                <label>Price</label>
                <input type="text" 
                readOnly
                value={product.price}
                 />
              </div>
              <div className="formInput">
                <label>inStock</label>
                <input type="text" 
                readOnly
                value={product.inStock}
                 />
              </div>
              
              {/* <button>Send</button> */}
            </form>
          </div>
        </div>

            <div className='singleBottom'>
              <h1 className='title'>Last Transactions</h1>
              <List />
            </div>
        </div>
    </div>
  )
}

export default Single