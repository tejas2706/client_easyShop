import { combineReducers } from 'redux'
import cartItemsReducer from './cartItemsReducer'

export default combineReducers({
  cartItems: cartItemsReducer
})