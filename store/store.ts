import {
    Action,
    configureStore,
    ThunkAction,
  } from '@reduxjs/toolkit';
import routeFilteringSlice from './features/routeFiltering';

export const store = configureStore({
  reducer: {
    routeFiltering: routeFilteringSlice,
  }
})
  

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
     ReturnType,
     RootState,
     unknown,
     Action<string>
  >;