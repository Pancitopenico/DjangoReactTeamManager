import axios from 'axios';

import { GET_TEAMS } from './types';

export const get_TEAMS = () => dispatch => {
    /*
    GET method like postman do.
    Since I'm using Django + React I don't need to
    write the whole url, because the root is localhost:8000
    and react automatically knows
    */
    axios.get('/api/teams/').then(res => {
        dispatch({
            type: GET_TEAMS,
            payload: res.data
        });
    }).catch(err => console.log(err));
};