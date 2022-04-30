import axios from "axios";
import { 
    getProductStart, 
    getProductSuccess, 
    getProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailure,
    updateProductStart,
    updateProductSuccess,
    updateProductFailure,
    addProductStart,
    addProductSuccess,
    addProductFailure
  } from "./productRedux";

  import { 
    loginStart,
    loginSuccess,
    loginFailure,
    getUserStart,
    getUserSuccess,
    getUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    addUserStart,
    addUserSuccess,
    addUserFailure
   } from './userSlice';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

// PRODUCTS

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await axios.get("http://localhost:5000/api/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProducts = async (id,product,dispatch) => {
  dispatch(updateProductStart());
  try {
    // const res = await axios.update("http://localhost:5000/api/products", product);
    dispatch(updateProductSuccess({id,product}));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await axios.post(`http://localhost:5000/api/products/`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

// USERS

export const getUsers = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await axios.get("http://localhost:5000/api/users");
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

export const updateUsers = async (id,user,dispatch) => {
  dispatch(updateUserStart());
  try {
    // const res = await axios.update("http://localhost:5000/api/users", user);
    dispatch(updateUserSuccess({id,user}));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};

export const addUser = async (user, dispatch) => {
  dispatch(addUserStart());
  try {
    const res = await axios.post(`http://localhost:5000/api/users/`, user);
    dispatch(addUserSuccess(res.data));
  } catch (err) {
    dispatch(addUserFailure());
  }
};