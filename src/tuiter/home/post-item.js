import React from "react";
import {Link} from "react-router-dom";
//import "./index.css";

const PostItem = (
 {
   post = {
     "id" : 0,
     "userName": "SpaceX",
     "handle": "SpaceX",
     "avatarIcon": "spacex.jpg",
     "time": "2h",
     "text": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
     "image": "starship_center.jpg",
     "comments":"4.2K",
     "retuits":"3.5K",
     "saves":"37.5K",
     "retuit":true,
     "retuitUsername":"Elon Musk",
     "retuitId": -1,
   }
 }
) => {
  const retuitFormat = () =>{
    return(
      ` ${post.retuitUsername} Retuited`
    );
  };

 return(
  <li className="list-group-item border">
   <div className="row">
   <div className="col-2 text-center wd-width-48px">
      {post.retuit ? <div className="ms-4"><i class="bi bi-megaphone"></i></div>: ''}
      <img className="rounded-circle" height={48} width={48} src={`/images/${post.avatarIcon}`} alt={post.handle}/> 
    </div>
    <div className="col-10 ps-0">
    <div className="fw-bold wd-text-point7rem">{post.retuit ? retuitFormat() : ''}</div>
      <div><b className="fw-bolder">{post.userName} </b>
        <i className="bi bi-check-circle-fill text-primary"></i> <b className="fw-light"> @{post.handle} &#x2022; {post.time}</b>
        <div className="float-end"><i className="bi bi-three-dots"></i></div>
      </div>
      
      <div>{post.text}</div>
      <img className="float-center rounded-3 mt-2 wd-full-width" src={`/images/${post.image}`}/>
      <div className="row my-2 p-1 text-nowrap">
        <div className="col">
          <p>
            <i className="bi bi-chat"></i>&#8195;{post.comments}
            </p>
        </div>
        <div className="col">
          <i class="bi bi-megaphone"></i>&#8195;{post.retuits}
        </div>
        <div className="col">
          <i className="bi bi-heart"></i>&#8195;{post.saves}
        </div>
        <div className="col ms-3">
          <i className="bi bi-upload"></i>
        </div>
      </div>
      <div className="mb-3">
        {post.retuit ? <Link>Show this thread</Link> : ''}
      </div>
    </div>
    
   </div>
  </li>
 );
};
export default PostItem;