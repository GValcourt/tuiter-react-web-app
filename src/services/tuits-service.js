import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_MONGOOSE;
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    //console.log(response.data)
    return response.data;
}

export const findTuits = async () => {
    const response = await axios.get(TUITS_API);
    //console.log(response)
    const tuits = response.data;
    return tuits;
}

export const deleteTuit = async (tid) => {
    const response = await axios
      .delete(`${TUITS_API}/${tid}`)
    return response.data
}

export const updateTuit = async (tuit) => {
    const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
    console.log(response === 200)
    return tuit;
}
