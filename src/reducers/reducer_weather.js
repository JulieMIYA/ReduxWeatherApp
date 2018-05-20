import { FETCH_WEATHER } from '../actions';

export default function (state= [], action){
    if (action.error) {
        action.type = 'HANDLE_XHR_ERROR'; // change the type
    } 
    switch(action.type){
        case FETCH_WEATHER : 
            console.log('received data', action);
            // return state.concat([action.payload.data]); // create a new array with new element inserted in the end 
            return [ action.payload.data, ...state ];
        case 'HANDLE_XHR_ERROR' : 
            console.log(action.payload);
        default: return state;
    }
    return state;
}