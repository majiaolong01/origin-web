import {LOGIN, LOGIN_TYPE} from '../const/const'
export interface LoginAction {
    type: LOGIN_TYPE,
    payload:Object
}
export type action=LoginAction;
export const login = (data: Object): LoginAction => ({
    type: LOGIN,
    payload:data
})