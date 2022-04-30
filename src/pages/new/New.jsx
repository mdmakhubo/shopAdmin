import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import {storage} from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import './new.scss';
import { addProduct } from '../../redux/apiCalls';
import { useDispatch } from 'react-redux';

const New = ({title}) => {
  const [upload, setUpload] = useState("");
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleUpload = (e) => {
    setUpload(e.target.files[0])
  }

  const handleChange = (e) => {
    setInputs(prev => {
      return {...prev, [e.target.name] : e.target.value}
    })
  }

  const handleCategory = (e) => {
    setCat(e.target.value.split(","))
  }

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = JSON.stringify(new Date().getTime() + 1);
      const storageRef = ref(storage, `/shop/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            const product = { ...inputs, img: url, categories: cat };
            addProduct(product, dispatch)
          });
        }
      );
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
          <div className="left">
            <img src={upload ? URL.createObjectURL(upload) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="new-user" />
          </div>
          <div className="right">
            <form>
              <div className="formInput uploadImg">
                <label htmlFor='upload'>Upload Photo: <DriveFolderUploadIcon className='icon' /></label>
                <input type="file" 
                id='upload' 
                onChange={e => handleUpload(e)}
                style={{ display: "none" }} />
              </div>
              <div className="formInput">
                <label>Title</label>
                <input type="text" name='title' onChange={handleChange} placeholder="Apple Macbook pro" />
              </div>
              <div className="formInput">
                <label>Description</label>
                <input type="text" name='desc' onChange={handleChange} placeholder="Description..." />
              </div>
              <div className="formInput">
                <label>Category</label>
                <input type="text" name='category' onChange={handleCategory} placeholder="Skirts, women" />
              </div>
              <div className="formInput">
                <label>Price</label>
                <input type="number" name='price' onChange={handleChange} placeholder="100" />
              </div>
              <div className="formInput">
                <label>inStock</label>
                <select style={{width:"120px"}} name='inStock' onChange={handleChange}>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New