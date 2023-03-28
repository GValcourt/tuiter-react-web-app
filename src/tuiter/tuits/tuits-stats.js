import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";


const TuitStats = (_id) => {
  //console.log(useSelector(state => state))
  const tuit = useSelector(state => state).tuitsData.tuits.find((tuit) => tuit._id === _id)
  const dispatch = useDispatch();
  const likeTuitHandler = () => {
    tuit.liked ? dispatch(updateTuitThunk({...tuit,likes: tuit.likes -1, liked: false})) : dispatch(updateTuitThunk({...tuit,likes: tuit.likes + 1, liked: true}));
  }
  const dislikeTuitHandler = () => {
    //console.log(tuit.disliked)
    if (tuit.disliked === undefined){
        tuit.disliked = false
        tuit.dislikes = 0
    }
    tuit.disliked ? dispatch(updateTuitThunk({...tuit,dislikes: tuit.dislikes -1, disliked: false})):
                    dispatch(updateTuitThunk({...tuit,dislikes: tuit.dislikes + 1, disliked: true}));
  }

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
            <button className="btn" onClick={likeTuitHandler}>
                {tuit.liked ? <><i className="bi bi-heart-fill text-danger"></i>&#8195;{tuit.likes}</>
                            : <><i className="bi bi-heart"></i>&#8195;{tuit.likes}</>}
            </button>
            
        </div>
        <div className="col">
            <button className="btn" onClick={dislikeTuitHandler}>
                {tuit.disliked ? <><i className="bi bi-hand-thumbs-down-fill text-warning"></i>&#8195;{tuit.dislikes}</>
                            : <><i className="bi bi-hand-thumbs-down-fill"></i>&#8195;{tuit.dislikes}</>}
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