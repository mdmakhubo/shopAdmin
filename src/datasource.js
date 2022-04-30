import { format } from 'timeago.js';

export const userColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: "user", headerName: "User", width:230, renderCell: (params) => (
        <div className="cellWithImg">
            <img src={params.row.img} alt="cell-with-img" className="cellImg" />
            {params.row.username}
        </div>
    )},
    { field: "email", headerName: "Email", width: 230 },
    { field: "age", headerName: "Age", width: 100 },
    { field: "status", headerName: "Status", width: 230, renderCell: (params) => (
        <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
    ) },
];

export const userRows = [
    {
        id: 1,
        username: "Jon",
        img: "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__340.jpg",
        status: "active",
        email: "jon@example.com",
        age: 33
    },
    {
        id: 2,
        username: "Carol",
        img: "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__340.jpg",
        status: "passive",
        email: "carol@example.com",
        age: 42
    },
    {
        id: 3,
        username: "Harry",
        img: "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__340.jpg",
        status: "pending",
        email: "harry@example.com",
        age: 25
    },
    {
        id: 4,
        username: "Keith",
        img: "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__340.jpg",
        status: "active",
        email: "keith@example.com",
        age: 47
    },
    {
        id: 5,
        username: "Tamie",
        img: "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__340.jpg",
        status: "passive",
        email: "tamie@example.com",
        age: 23
    },
    {
        id: 6,
        username: "Lannister",
        img: "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__340.jpg",
        status: "pending",
        email: "lannister@example.com",
        age: 34
    },
    {
        id: 7,
        username: "Sipho",
        img: "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__340.jpg",
        status: "active",
        email: "sipho@example.com",
        age: 52
    },
    {
        id: 8,
        username: "Mandela",
        img: "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__340.jpg",
        status: "passive",
        email: "mandela@example.com",
        age: 44
    },
    {
        id: 9,
        username: "Thokozane",
        img: "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__340.jpg",
        status: "active",
        email: "thokozane@example.com",
        age: 63
    },
    {
        id: 10,
        username: "Xolani",
        img: "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__340.jpg",
        status: "pending",
        email: "xolani@example.com",
        age: 27
    }
];

export const prodColumns = [
    { field: '_id', headerName: 'ID', width: 100 },
    { field: "product", headerName: "Product", width:230, renderCell: (params) => (
        <div className="cellWithImg">
            <img src={params.row.img} alt="img" className="cellImg" />
            {params.row.title}
        </div>
    )},
    { field: "desc", headerName: "Description", width: 230 },
    { field: "price", headerName: "Price", width: 100 },
    { field: "inStock", headerName: "Stock", width: 100 },
    { field: "createdAt", headerName: "CreatedAt", width: 100 },
    
];

export const prodRows = [
    {
        id: 1,
        product: "Acer",
        img: "https://m.media-amazon.com/images/I/71233PTgAjL._AC_SX679_.jpg",
        price: 1999,
        description: "Acer Laptop + Laptop Bag",
        stock: "In Stock"
    },
    {
        id: 2,
        product: "Apple MAcBook",
        img: "https://m.media-amazon.com/images/I/41Yhy+L-06L._AC_.jpg",
        price: 1999,
        description: "Apple MacBook Pro",
        stock: "In Stock"
    },
    {
        id: 3,
        product: "Playstation 5",
        img: "https://m.media-amazon.com/images/I/71OOiIuZHDL._AC_UY218_.jpg",
        price: 1999,
        description: "Playstation 5 Console + Faceplate Protective Skin",
        stock: "In Stock"
    },
    {
        id: 4,
        product: "Xbox Series S",
        img: "https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_UL320_.jpg",
        price: 1999,
        description: "jon@example.com",
        stock: "In Stock"
    },
    {
        id: 5,
        product: "Playstation 5 Console",
        img: "https://m.media-amazon.com/images/I/51Z0hlHy8GL._AC_UY218_.jpg",
        price: 4999,
        description: "Playstation 5 Console + Faceplate Protective Cover",
        stock: "In Stock"
        
    },
    {
        id: 6,
        product: "Apple IPad Pro",
        img: "https://m.media-amazon.com/images/I/815KnP2wjDS._AC_UY218_.jpg",
        price: 8899,
        description: "2021 Apple 12.9-inch iPad Pro (Wi-Fi, 128GB) - Silver",
        stock: "In Stock"
    },
    {
        id: 7,
        product: "Apple IPhone 12 Pro",
        img: "https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_UY218_.jpg",
        price: 10999,
        description: "Apple iPhone 12 Pro Max, 256GB, Pacific Blue",
        stock: "In Stock"
    },
    {
        id: 8,
        product: "TCL 32-inch",
        img: "https://m.media-amazon.com/images/I/81uF-LZ2LRL._AC_UY218_.jpg",
        price: 1999,
        description: "TCL 32-inch 3-Series 720p Roku Smart TV",
        stock: "In Stock"
    },
    {
        id: 9,
        product: "Acer",
        img: "https://m.media-amazon.com/images/I/71233PTgAjL._AC_SX679_.jpg",
        price: 1999,
        description: "jon@example.com",
        stock: "In Stock"
    },
    {
        id: 10,
        product: "Acer",
        img: "https://m.media-amazon.com/images/I/71233PTgAjL._AC_SX679_.jpg",
        price: 1999,
        description: "jon@example.com",
        stock: "In Stock"
    }
    
];




