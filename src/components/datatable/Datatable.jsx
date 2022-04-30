import React, {useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './datatable.scss';
import { userRows } from '../../datasource';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, deleteUser } from '../../redux/apiCalls';

const Datatable = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.user.users);
    const navigate = useNavigate();

    console.log(users);

    useEffect(() => {
       getUsers(dispatch)
    }, [dispatch])

    const handleDelete = (id) => {
        deleteUser(id, dispatch)
    }

    const userColumns = [
        { field: '_id', headerName: 'ID', width: 200 },
        { field: "username", headerName: "UserName", width: 200 },
        { field: "email", headerName: "Email", width: 200 },
        { field: "isAdmin", headerName: "isAdmin", width: 120 },
        { field: "createdAt", headerName: "Created", width: 120 },        
    ];

    const actionColumn = { field: "action", headerName: "Action", width: 150, renderCell: (params) => {
        const rowId = params.row._id;
        const rowUsers = params.row;

        const handleClick = () => {
          navigate("/users/"+ rowId, {state:{rowUsers}})
        }

        return (
            <div className="cellAction">
            <button onClick={() => handleClick()} className="viewButton">View</button>           
            <div className="deleteButton" onClick={() => handleDelete(params.row._id)}>Delete</div>
        </div>
        );        
    } 

}

  return (
    <div className='datatable'>
        <div className="dataTitle">
             Add New User
            <Link to="/users/new" className="link" >
                Add New
            </Link>
        </div>
        <DataGrid
            className='dataGrid'
            rows={users}
            columns={userColumns.concat(actionColumn)}
            pageSize={5}
            getRowId={row => row._id}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
    </div>
  )
}

export default Datatable