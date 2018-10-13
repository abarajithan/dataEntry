const initialSession = {
    user:  null,
    message: null

}

const session = (state = initialSession, action) => {
    switch (action.type) {
        case "LOGIN":
            sessionStorage.setItem("user",JSON.stringify(action.payload));
            return {
                ...state,
                user: action.payload,
                message: null
            }
            break;
        case "LOGIN_FAILED":
            return {
                ...state,
                user: null,
                message: "Invalid Credentials" 
            }
            break;

        case "LOGOUT":
            sessionStorage.removeItem("user")
            return {
                ...state,
                user: null,
                message: null
            }
            break;

        default:
            return {
                ...state,
            }
            break;
    }
}

module.exports = session;