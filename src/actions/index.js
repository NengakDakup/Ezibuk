import * as types from './actionTypes';

export const changeName = (payload) => {
    return {
        type: types.CHANGE_NAME,
        payload: payload
    }
}