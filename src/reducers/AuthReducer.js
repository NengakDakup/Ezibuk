const initialState = {
    signedIn: false,
    name: 'Nengak Dakup'
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                signedIn: true,
                ...action.payload
            };
        default:
            return {...state}
    }
}

export default AuthReducer;