import {TYPES} from '../Actions/activateActions'
export const initialStateActivate = {activate: false};

export function emojiReducer(state, action){
    switch(action.type){
        case TYPES.ACTIVATE:
            return {activate: !state.activate}
        default:
            return state
    }
}