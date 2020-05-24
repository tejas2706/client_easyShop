import _ from 'lodash';

let INITIAL_STATE = []

export default function cartItemsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TO_CART': 
      let itemIndex = state.findIndex((eachCartItem)=>{
        return eachCartItem.id === action.payload.id
      })

      const updatedProducts = [...state];
      if(itemIndex >= 0 ){
        const updatedUnits = {
          ...updatedProducts[itemIndex],
          units: updatedProducts[itemIndex].units + 1
        }
        
        updatedProducts[itemIndex] = updatedUnits
        return [...updatedProducts]
      }else{

        return [...state, {...action.payload, units: 1}]
      }

    case 'REMOVE_FROM_CART':
      let itemIndex2 = state.findIndex((eachCartItem)=>{
        return eachCartItem.id === action.payload
      })
      
      const updatedProducts2 = [...state];
      if(itemIndex2 >= 0 ){
        if(updatedProducts2[itemIndex2].units - 1 <= 0 ){
          return [...updatedProducts2.slice(0,itemIndex2), ...updatedProducts2.slice(itemIndex2+1)]
        }
        const updatedUnits2 = {
          ...updatedProducts2[itemIndex2],
          units: updatedProducts2[itemIndex2].units - 1
        }
        
        updatedProducts2[itemIndex2] = updatedUnits2
        return [...updatedProducts2]
      }
    case 'RESET_CART': 
      return INITIAL_STATE;
      
    default:
      return state
  }
}