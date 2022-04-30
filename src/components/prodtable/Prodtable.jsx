import React, {useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './prodtable.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, deleteProduct } from '../../redux/apiCalls';

const Prodtable = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);
    const navigate = useNavigate();

    console.log(products);

    useEffect(() => {
       getProducts(dispatch)
    }, [dispatch])
    

    const handleDelete = (id) => {
        deleteProduct(id, dispatch)
    }

    const prodColumns = [
    { field: '_id', headerName: 'ID', width: 220 },
    { field: "product", headerName: "Product", width:230, renderCell: (params) => (
        <div className="cellWithImg">
            <img src={params.row.img} alt="img" className="cellImg" />
            {params.row.title}
        </div>
    )},
    { field: "desc", headerName: "Description", width: 220 },
    { field: "price", headerName: "Price", width: 120 },
    { field: "inStock", headerName: "Stock", width: 100 }
    
];

    const actionColumn = { field: "action", headerName: "Action", width: 150, renderCell: (params) => {
        const rowId = params.row._id;
        const rowProducts = params.row;

        const handleClick = () => {
          navigate("/products/"+ rowId, {state:{rowProducts}})
        }

        return (
            <div className="cellAction">
            <button onClick={() => handleClick()} className="viewButton">View</button>           
            <div className="deleteButton" onClick={() => handleDelete(params.row._id)}>Delete</div>
        </div>
        );        
    } 
};
    
  return (
    <div className='datatable'>
        <div className="dataTitle">
             Add New Product
            <Link to="/products/new" className="link" >
                Add New
            </Link>
        </div>
        <DataGrid
            className='dataGrid'
            rows={products}
            columns={prodColumns.concat(actionColumn)}
            pageSize={7}
            getRowId={row => row._id}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
    </div>
  )
}

export default Prodtable