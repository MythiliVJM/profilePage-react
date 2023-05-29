import React from "react";
import "./Profile.css";
import Card from '../reuseCard/Card';
export default function Profile() {
  return (
    <div>
      <div className="main-content">
        <div className="main-1">
          <img
            className="main-img"
            src="https://friendkit.cssninja.io/assets/img/demo/bg/4.png"
          />
          <div className="button-main">
            <div className="button-1">
              <button>Timeline</button>
              <button>About</button>
              
            </div>
            <img
              className="profile-main"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
            ></img>
            <div className="button-2">
              <button>Friends</button>
              <button>photos</button>
            </div>
            </div>
            {/* <div className="name-content">
              <div className="followers">
                <p>3.4K</p>
                <p>Friends</p>
              </div>
              <div>
                <button>
                  <img
                    className="history-icon"
                    src="https://img.icons8.com/ios/1x/time-machine--v2.gif" alt="img"
                  />
                  History
                </button>
              </div>
            </div> */}
            <div className="followers">
                 <p>4.3K</p>
                 <p>FRIENDS</p>
            </div>
          
        </div>
      </div>
      <Card/>
    </div>
  );
}
