import { combineReducers } from 'redux'
import cartItemsReducer from './cartItemsReducer';
import ordersReducer from './ordersReducer';

export default combineReducers({
  cartItems: cartItemsReducer,
  orders: ordersReducer
})