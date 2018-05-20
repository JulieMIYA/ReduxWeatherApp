import { FETCH_WEATHER } from '../actions';

export default function (state= [], action){
    console.log(action);
    switch(action.type){
        case FETCH_WEATHER : 
            console.log(action.payload.data);
            return state.concat([action.payload.data]); // create a new array with new element inserted in the end 
            // return [...state, action.payload.data ];
        default: return state;
    }
    return state;
}