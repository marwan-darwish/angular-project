import { createReducer, on } from '@ngrx/store';
import { addToWishList,removeFromWishList } from './wishlist.action';
interface wishListState {
    items: Array<any>;
  }
  const initialState: wishListState = {
    items: [],
  };

  export const wishListReducer=createReducer(
    initialState,
    on(addToWishList,(state,action)=>{
        const isAlreadyThereCheck = (element:any) => element.id===action.item.id;
if(state.items.some(isAlreadyThereCheck)){
return {
    items:state.items
}
} else{
    console.log(action);
    console.log(state.items);
    
    const tempArr=[...state.items,action.item]
    return{
        items:tempArr
    }
}

     
        
    }),

    on(removeFromWishList,(state,action)=>{
        console.log(action.id);
        
        const index:any=  state.items.findIndex((obj=>obj.id==action.id))
        console.log(index);
        const tempArr=[...state.items]
        tempArr.splice(parseInt(index),1)
        return{
items:[...tempArr]
        }
    })
  )