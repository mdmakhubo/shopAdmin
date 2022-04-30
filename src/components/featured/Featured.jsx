import React, { useEffect, useState } from 'react';
import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import axios from 'axios';


const Featured = () => {
    const [income, setIncome] = useState([]);
    const [perc, setPerc] = useState(0);

    useEffect(() => {
      const getIncome = async () => {
          try {
              const res = await axios.get("http://localhost:5000/api/orders/income");
              setIncome(res.data);
              setPerc(Math.floor((res.data[0].total * 50) / (res.data[0].total - 100)));
          } catch (error) {
              console.log(error);
          }
      }

      getIncome();
    }, [])

  return (
    <div className='featured'>
        <div className="featuredTop">
            <h1 className='title'>Total Revenue</h1>
            <MoreVertIcon fontSize='small' />
        </div>
        <div className="featuredBottom">
            <div className="featuredChart">
                <CircularProgressbar value={perc} text={`${perc}%`} />
            </div>
            <p className='title'>Total sales made today</p>
            <p className='amount'>R {income[0]?.total}</p>
            <p className='desc'>Previous transactions processing. Last paymnets made not be included.</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    {
                        income[0]?.total <= 1000 ? (
                                <div className="itemResult positive">
                                    <ArrowCircleUpOutlinedIcon fontSize='small' />
                                    <div className="resultAmount">R7.8k</div>
                                </div>
                            ) : (
                                <div className="itemResult negative">
                                    <ArrowCircleDownOutlinedIcon fontSize='small' />
                                    <div className="resultAmount">R7.8k</div>
                                </div>
                                ) 
                    }
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                        <ArrowCircleUpOutlinedIcon fontSize='small' />
                        <div className="resultAmount">R12.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <ArrowCircleUpOutlinedIcon fontSize='small' />
                        <div className="resultAmount">R12.4k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured