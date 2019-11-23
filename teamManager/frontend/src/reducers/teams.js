import { GET_TEAMS, DELETE_TEAM, ADD_TEAM } from '../actions/types.js';

const initialState = {
    teams: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TEAMS:
            return {
                ...state,
                teams: action.payload
            };
        case DELETE_TEAM:
            return {
                ...state,
                teams: state.teams.filter(team => team.id !== action.payload)
            };
        case ADD_TEAM:
            return {
                ...state,
                teams: [...state.teams, action.payload]
            };
        default:
            return state;
    }
}