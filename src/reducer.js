export const initialState = {
    basket: [],
    user:null
};

//selector
export const getBasketTotal=(basket)=>
    basket?.reduce((amount,item)=>item.price + amount,0);
    // The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across
    // all elements of the array is a single value.
const reducer = (state,action) =>{
    // console.log(action);
    switch (action.type){
        case "ADD_TO_BASKET": 
            return {
                ...state,
                basket: [...state.basket,action.item],
            };

    //         case 'EMPTY_BASKET':
    //   return {
    //     ...state,
    //     basket: []
    //   };

     case "REMOVE_FROM_BASKET":
    const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
          );
          let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);

      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        )
      }
      return {
        ...state,
        basket: newBasket
      }
      case "Set_USER":
        return {
          ...state, 
          user:action.user
        };
            default:
                    return state;
    }
};

export default reducer;