let INITIAL_STATE = []

export default function ordersReducer(state = INITIAL_STATE, action) {

  switch(action.type){
    case 'GENERATE_ORDER':
      return [...state,action.payload]

    default: 
      return state;
  }
}