import { userService } from "../../services/userService";

export function loadUser() {
    return async(dispatch) => {
        try {
            const user = userService.getUser()
            console.log('user from actions',user);
            dispatch({ type: 'SET_USER', user })
        } catch (error) {
            console.log('err', error);
        }
    }
}