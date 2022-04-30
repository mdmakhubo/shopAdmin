import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import List from './pages/list/List';
import Products from './pages/products/Products';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { userInputs, productInputs } from './formSource';
import { DarkContext } from "./context/DarkContext";
import './themestyle/dark.scss'; 
import { useSelector } from "react-redux"; 
import UserSingle from "./pages/usersingle/UserSingle";
import NewUser from "./pages/newuser/NewUser";

function App() {
  const {darkMode} = useContext(DarkContext); 

  // const user = JSON.parse(
  //   JSON.parse(localStorage.getItem("persist:root")).user
  //   ).currentUser;
  const user = useSelector(state => state.user.currentUser);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>        
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route exact path="/" element={user ? <Home /> : <Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<UserSingle />} />
              <Route path="new" element={<NewUser inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path="products">
              <Route index element={<Products />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
            </Route>
      </Routes>
    </div>
  );
}

export default App;
