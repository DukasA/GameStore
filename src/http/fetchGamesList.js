import axios from 'axios';

export const fetchGamesList = async (page) => {
    const {data} = await axios.get(`https://api.rawg.io/api/games?key=463f1fe1191c4fb39539fdad285dd397&page=${page}`);
    return data;
}