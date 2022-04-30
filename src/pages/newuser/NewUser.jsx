import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './newUser.scss';
import { addUser } from '../../redux/apiCalls';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NewUser = ({title}) => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs(prev => {
      return {...prev, [e.target.name] : e.target.value}
    })
  }

  const handleClick = (e) => {
    e.preventDefault();
    
    // const user = { ...inputs };
    // console.log(inputs);
    addUser(inputs, dispatch)
    navigate("/users")
  }

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>UserName</label>
                <input type="text" name='username' onChange={handleChange} placeholder="SiphoM" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="text" name='email' onChange={handleChange} placeholder="siphom@webcorner.co.za" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="text" name='password' onChange={handleChange} />
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewUser