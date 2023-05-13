import { createAction, props } from '@ngrx/store';
export const addToWishList = createAction(
    '[wishlist Page] added to wish list',
    props<{ item: any }>()
  );
  export const removeFromWishList = createAction(
    '[wishlist Page] remove from wish list',
    props<{ id: any }>()
  );