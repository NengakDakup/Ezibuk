const initialState = {
    userDetails: {
        signedIn: false,
        name: 'Nengak Dakup'
    }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                userDetails: {
                    ...action.payload
                }
            };
        case 'CHANGE_NAME':
            return {
                ...state,
                userDetails: {
                    ...state.userDetails,
                    name: action.payload
                }
            }
    
        default:
            return {...state};
    }
};

export default rootReducer;