import { createStore, applyMiddleware } from 'redux'
const initialState = {
  cartItem:[],
  cartCount:0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'add':
      return {
        ...state,
        cartCount: state.cartCount + 1,
        cartItem: [...state.cartItem, action.data]
      }
    case 'remove':
      return {
        ...state,
        cartCount: state.cartCount - 1,
      }
      case 'edit':
          if(action.edit=="add") {
            return { 
              ...state, 
              cartItem: state.cartItem.map(
                  (content, i) => i === action.index ? {...content, quantity:content.quantity+1}
                                          : content
              )
           }

          }
          else if(action.edit=="reduce") {
            return { 
              ...state, 
              cartItem: state.cartItem.map(
                  (content, i) => i === action.index ? {...content, quantity:content.quantity-1}
                                          : content
              )
           }
          }
          else if(action.edit=="remove") {
            return { 
            cartItem: [
              ...state.cartItem.slice(0, action.index),
              ...state.cartItem.slice(action.index + 1)
          ],
        }
      }
          
      case 'reset':
      return {
        ...state,
        cartCount: initialState.cartCount,
      }
    default:
      return state
  }
}
export default cartReducer;

