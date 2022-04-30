import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';
import { useLocation } from 'react-router-dom';

import './userSingle.scss';

const UserSingle = () => {
  const location = useLocation();
  const user = location.state.rowUsers;

  return (
    <div className='userSingle'>
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
          <div className="right">
            <form>
              <div className="formInput">
                <label>UserName</label>
                <input type="text" 
                readOnly
                value={user.username}
                 />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="text" 
                readOnly
                value={user.email}
                 />
              </div>
              <div className="formInput">
                <label>isAdmin</label>
                <input type="text" 
                readOnly
                value={user.isAdmin}
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

export default UserSingle