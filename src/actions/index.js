import * as types from './actionTypes';

export const showToast = (payload) => {
    return {
        type: types.SHOW_TOAST,
        payload
    }
}

export const hideToast = (payload) => {
    return {
        type: types.HIDE_TOAST,
        payload
    }
}

export const showBlocker = (payload) => {
    return {
        type: types.SHOW_BLOCKER,
        payload
    }
}

export const hideBlocker = (payload) => {
    return {
        type: types.HIDE_BLOCKER,
        payload
    }
}

export const showDrawer = (payload) => {
    return {
        type: types.SHOW_DRAWER,
        payload
    }
}

export const hideDrawer = (payload) => {
    return {
        type: types.HIDE_DRAWER,
        payload
    }
}

export const changeName = (payload) => {
    return {
        type: types.CHANGE_NAME,
        payload: payload
    }
}