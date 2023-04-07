import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ticketsSlice from './slices/tickets.slice';


export const store = configureStore({
  reducer: {
    ticketsReducer:ticketsSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
