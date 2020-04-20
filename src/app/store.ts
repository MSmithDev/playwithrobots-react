import { applyMiddleware } from 'redux';
import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import {  testReducer, userReducer } from '../features/websocket/websocket';
import reduxWebsocket from '@giantmachines/redux-websocket';


const reduxWebsocketMiddleware = reduxWebsocket({
  reconnectOnClose: true
});

export const store = configureStore({
  reducer: {
    message: testReducer,
    user: userReducer
  },
  middleware: [reduxWebsocketMiddleware, ...getDefaultMiddleware({
    serializableCheck: { ignoredActionPaths: ['meta.arg','meta.timestamp','payload.event']}
  })],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
