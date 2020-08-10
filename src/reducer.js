export const initialState={
    basket: [],
    user: ''

};

export const  getBasketTotal = (basket)=>{
return basket?.reduce((amount, item)=> item.price + amount,0
)
}

const reducer = (state, action)=>{
    console.log('action ', action)
    switch(action.type){

        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            //logic for adding to baseket
            return {
                ...state,
            basket:[...state.basket, action.item]
        }
            break;

            case 'REMOVE':
            //logic to remove
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem)=>{

          return basketItem.id == action.item
            })
            if(index >= 0){
                //item exists remove it
                newBasket.splice(index, 1);

            }else{
                console.warn(`Cannot remove item with id (${action.id}), it does not exist in basket`)
            }
            return {...state, basket: newBasket}
            break;
            default:
                return state;
    }

}

export default  reducer;