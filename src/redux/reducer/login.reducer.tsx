import {LoginAction} from '../actions/login.action'
import {loginState} from '../state/state'
const user=(state=loginState,action:LoginAction)=>{
    if (action.type === 'LOGIN') {
        return {...state,...action.payload};
    } else {
        return state;
    }
};
export default user;
//actions creator
