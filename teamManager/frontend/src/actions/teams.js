import axios from 'axios';

import { GET_TEAMS, DELETE_TEAM, ADD_TEAM } from './types';

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

export const deleteTEAM = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/teams/${id}/`).then(res => {
        dispatch({
            type: DELETE_TEAM,
            payload: id
        });
    }).catch(err => console.log(err));
};

export const addTEAM = (team) => dispatch => {

    axios.post('http://localhost:8000/api/teams/', team).then(res => {
        dispatch({
            type: ADD_TEAM,
            payload: res.data
        });
    }).catch(err => console.log(err));
};
