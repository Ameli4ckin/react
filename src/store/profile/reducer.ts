import { Reducer } from 'redux'
import { CHANGE_NAME, TOGGLE_PROFILE } from "./actions";
import { ProfileActions } from "./types";

export interface PrifileState {
    name: string;
    visible: boolean;
}
 
const initialState: PrifileState = {
    name: 'GB',
    visible: true,
};

export const profileReducer: Reducer<PrifileState, ProfileActions> = (
    state = initialState, 
    action
) => {
    switch(action.type) {
        case TOGGLE_PROFILE: {
            return {
                ...state,
                action: !state.visible,
            };
        }
        case CHANGE_NAME: {
            return {
                ...state,
                name: action.name,
            };
        }
        default:
            return state;
    }
};