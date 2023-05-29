import React from "react";
import personData from "./Datastore";
import "./Card.css";
import Follwers from '../reuseCard/basicInfo';
const Card = () => {
  return (
    <div className="review-page">
      <div className="col-1">
           <Follwers/>c
      </div>
      <div className="col-2">
        {personData.map((item) => (
          <div className="card-container">
            <div className="header-card">
                <img className="profile-img" src={item.profileImg} />
                <div className="name-date">
                <div className="name">
                   <p>{item.name}</p>
                </div>
                <div className="date">
                   <p>{item.date}</p>
                </div>

                </div>
                
                   
                
                
            </div>
            <div className="content-card">
               <p>{item.content}</p>
            </div>
            <div className="img-card">
                  <img className="review-img" src={item.imageURL} />
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card;
