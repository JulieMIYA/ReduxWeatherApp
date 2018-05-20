import { FETCH_WEATHER } from '../actions';

export default function (state= [], action){
    switch(action.type){
        case FETCH_WEATHER : 
            return state.concat([action.payload.data]); // create a new array with new element inserted in the end 
            // return [...state, action.payload.data ];
    }
    return state;
}