import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};
   
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,
 reducers: {
    likesReducer(state, action){
                const tuit = state.find((tuit) =>
                    tuit._id === action.payload._id)
                //console.log(tuit)
                if (tuit.liked){
                    console.log("Liked was true")
                    tuit.likes -= 1
                    tuit.liked =! tuit.liked
                    console.log(`likes = ${tuit.likes}`)
                }
                else{
                    console.log("Liked was false")
                    tuit.likes += 1
                    tuit.liked =! tuit.liked
                    console.log(`likes = ${tuit.likes}`)
                }
                return(state)
  },
  deleteTuit(state, action) {
    const index = state
       .findIndex(tuit =>
          tuit._id === action.payload);
    state.splice(index, 1);
  },
  createTuit(state, action) {
    state.unshift({
      ...action.payload,
      ...templateTuit,
      _id: (new Date()).getTime(),
    })
  }
}
 
});

export default tuitsSlice.reducer;
export const {likesReducer, createTuit, deleteTuit} = tuitsSlice.actions