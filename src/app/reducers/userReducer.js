const userReducer = (state = {
    fname: null,
    lname: null,
    email: null,
    islogin: false,
    isloading: true 
},action) => {
    switch (action.type) {
        case "SET_USER":
            state = {
                ...state,
                fname: action.payload.fname,
                lname: action.payload.lname,
                email: action.payload.email,
                islogin: action.payload.islogin                                                
            };
            break;    
        default:
            break;
    }
    return state;
}

export default  userReducer;