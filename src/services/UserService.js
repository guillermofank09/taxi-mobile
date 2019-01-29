import axios from 'axios';
import { LAZARUS_URL } from '../utils/resources';

export const getUserScore = (distance, user) => {
    const data = {
        user: user,
        score: distance
    }
    return axios.post(LAZARUS_URL + '/score', data);
}