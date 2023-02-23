import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {likesReducer} from "./tuits-reducer";


const TuitStats = (_id) => {
  const tuit = useSelector(state => state).tuits.find((tuit) => tuit._id === _id)
  const dispatch = useDispatch();
  const likeTuit = () =>{dispatch(likesReducer(tuit));}

 return(
    <div className="row my-2 p-1 text-nowrap">
        <div className="col">
            <button className="btn">
                <i className="bi bi-chat"></i>&#8195;{tuit.replies}
            </button>
        </div>
        <div className="col">
            <button className="btn">
                <i className="bi bi-megaphone"></i>&#8195;{tuit.retuits}
            </button>
        </div>
        <div className="col">
            <button className="btn" onClick={likeTuit}>
                {tuit.liked ? <><i className="bi bi-heart-fill text-danger"></i>&#8195;{tuit.likes}</>
                            : <><i className="bi bi-heart"></i>&#8195;{tuit.likes}</>}
            </button>
            
        </div>
        <div className="col ms-3">
            <button className="btn">
                <i className="bi bi-share"></i>
            </button>
        </div>
      </div>
 );
};
export default TuitStats;