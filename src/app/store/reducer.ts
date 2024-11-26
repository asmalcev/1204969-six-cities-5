import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers, setOffersLoadingStatus } from './actions';
import { State } from './interfaces';
import { cities } from '../../entities/City';

const initialState: State = {
  city: cities.Paris,
};

const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    }),
);

export { reducer };
