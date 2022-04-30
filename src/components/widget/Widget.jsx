import React from 'react';
import './widget.scss';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = ({type,userStats}) => {
    let data;
    // Temp data
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                    title: "USERS",
                    isMoney: false,
                    link: "See all users",
                    icon: (
                        <PeopleAltOutlinedIcon className='icon' style={{ color: "crimson", backgroundColor: "rgba(220, 20, 60, 0.3)" }} />
                    )
                }
            break;
            case "order":
            data = {
                    title: "ORDERS",
                    isMoney: false,
                    link: "View all orders",
                    icon: (
                        <ShoppingCartCheckoutOutlinedIcon className='icon' style={{ color: "goldenrod", backgroundColor: "rgba(218, 165, 32, 0.3)" }} />
                    )
                }
            break;
            case "earnings":
            data = {
                    title: "EARNINGS",
                    isMoney: true,
                    link: "View net earnings",
                    icon: (
                        <AddCardOutlinedIcon className='icon' style={{ color: "green", backgroundColor: "rgba(0, 128, 0, 0.3)" }} />
                    )
                }
            break;
            case "balance":
            data = {
                    title: "BALANCE",
                    isMoney: true,
                    link: "View balance",
                    icon: (
                        <AccountBalanceWalletOutlinedIcon className='icon' style={{ color: "purple", backgroundColor: "rgba(128, 0, 128, 0.3)" }} />
                    )
                }
            break;
    
        default:
            break;
    }

  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "R"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <ArrowCircleUpOutlinedIcon /> 
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget