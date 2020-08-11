const initialState = {
    toast: {
        display: false,
        message: null,
        icon: null,
        color: null
    },
    blocker: {
        display: false
    }, 
    drawer: {
        display: false
    }
}

const UtilReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_TOAST':
            return {
                ...state,
                toast: {
                    display: true,
                    ...action.payload
                }
            };
        case 'HIDE_TOAST':
            return {
                ...state,
                toast: initialState.toast
            };
        case 'SHOW_BLOCKER':
            return {
                ...state,
                blocker: {
                    display: true
                }
            };
        case 'HIDE_BLOCKER':
            return {
                ...state,
                blocker: {
                    display: false
                }
            };
        case 'SHOW_DRAWER':
            return {
                ...state,
                drawer: {
                    display: true
                }
            };
        case 'HIDE_DRAWER':
            return {
                ...state,
                drawer: {
                    display: false
                }
            };
        default:
            return {...state}
    }
}

export default UtilReducer;