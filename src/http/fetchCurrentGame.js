import axios from 'axios';

export const fetchCurrentgGame = async (id) => {
    const {data} = await axios.get(`https://api.rawg.io/api/games/${id}?key=463f1fe1191c4fb39539fdad285dd397`);
    return data;
}