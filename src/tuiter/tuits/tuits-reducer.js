import {createSlice}
  from "@reduxjs/toolkit";
import {findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk}
  from "../../services/tuits-thunks";

const initialState = {
   tuits: [],
   loading: false
}

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState,
 extraReducers: {
   [findTuitsThunk.pending]:
      (state) => {
         state.loading = true
         state.tuits = []
         //console.log("Payload pending")
   },
   [findTuitsThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         state.tuits = payload
         //console.log("Payload has arrived")
   },
   [findTuitsThunk.rejected]:
      (state) => {
         state.loading = false
         //console.log("Failure to launch")
   },
   [deleteTuitThunk.fulfilled] :
   (state, { payload }) => {
   state.loading = false
   state.tuits = state.tuits
     .filter(t => t._id !== payload)
 },
   [createTuitThunk.fulfilled]:
      (state, { payload }) => {
        //console.log(`state: ${state}`)
        //console.log(payload)
        state.loading = false
        state.tuits.push(payload)
        //console.log("Payload sent")
        //console.log(state.tuits)
 },
   [createTuitThunk.pending]:
      (state) => {
        state.loading = true
 },
   [updateTuitThunk.fulfilled]:
 (state, { payload }) => {
   state.loading = false
   const tuitNdx = state.tuits
     .findIndex((t) => t._id === payload._id)
   state.tuits[tuitNdx] = {
     ...state.tuits[tuitNdx],
     ...payload
   }
 }

},



 reducers:{}
});

export default tuitsSlice.reducer;
export const {likesReducer, createTuit, deleteTuit} = tuitsSlice.actions