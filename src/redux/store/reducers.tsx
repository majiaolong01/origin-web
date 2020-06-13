//合并reducer并且返回
import {combineReducers } from 'redux'
import user from '../reducer/login.reducer'
export default combineReducers ({user});
