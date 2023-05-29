import React from 'react'
// import Record from './info';
import './basicInfo.css';

const basicInfo = () => {
  return (
    <div className='main'>
        {/* {Record.map((item)=>
        <div className='main'>
        <div className='content'>
            <p>{item.role}</p>
            <p>{item.place}</p>
        </div>
            
            <img className='image' src={item.imgURl}/>
        </div>
        )} */}
        <div className='content'>
           <p style={{fontWeight:'bold',fontSize:"13px",color:"black"}}>Studied at</p>
           <p style={{fontSize:"14px",fontWeight:"490"}}>Georgetown University</p>
        </div>
        <div className='img-icon'>
           <img src='https://cdn-icons-png.flaticon.com/128/3119/3119338.png'></img>
        </div>
        <div>
            
        </div>

    </div>
  )
}
export default basicInfo;
