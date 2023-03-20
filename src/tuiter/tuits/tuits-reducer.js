import {createSlice}
  from "@reduxjs/toolkit";
import tuits from './tuits.json';
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
   },
   [findTuitsThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         state.tuits = payload
   },
   [findTuitsThunk.rejected]:
      (state) => {
         state.loading = false
   },
   [deleteTuitThunk.fulfilled] :
   (state, { payload }) => {
   state.loading = false
   state.tuits = state.tuits
     .filter(t => t._id !== payload)
 },
   [createTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits.push(payload)
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