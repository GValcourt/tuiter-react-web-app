import React from "react";
import TuitStats from "./tuits-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";


const TuitItem = (
 {
   tuit = {
    "_id": 234,
    "topic": "Space",
    "userName": "SpaceX",
    "time": "2h",
    "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    "image": "spacex.jpg",
    "liked": true,
    "hasImage": false,
    "tuitImage": null,
    "replies": 123,
    "retuits": 432,
    "likes": 2346,
    "handle": "@spacex",
    "tuit": "You want to wake up in the morning and think the future is going to be great - \
             and that’s what being a spacefaring civilization is all about. It’s about believing in the \
             future and thinking that the future will be better than the past. And I can’t think of anything \
             more exciting than going out there and being among the stars"
   }
 }
) => {
    //console.log(`${tuit._id}`)
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
      dispatch(deleteTuitThunk(id));
    }

 return(
  <li className="list-group-item border">
   <div className="row">
        <div className="col-2 wd-avatar-image-format text-center p-0">
            <img className="rounded-circle" height={48} width={48} src={`/images/${tuit.image}`} alt={tuit.handle}/> 
        </div>
    <div className="col ps-0">
      <div><b className="fw-bolder">{tuit.userName} </b>
        <i className="bi bi-check-circle-fill text-primary"></i> <b className="fw-light"> {tuit.handle} &#x2022; {tuit.time}</b>
        <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}></i>
      </div>
      
      <div>{tuit.tuit}</div>
      {TuitStats(tuit._id)}
    </div>
    
   </div>
  </li>
 );
};
export default TuitItem;