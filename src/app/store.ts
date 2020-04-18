import { applyMiddleware } from 'redux';
import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {  testReducer } from '../features/websocket/websocket';
import reduxWebsocket from '@giantmachines/redux-websocket';


const reduxWebsocketMiddleware = reduxWebsocket({
  reconnectOnClose: true
});

//const enhancer = applyMiddleware(reduxWebsocketMiddleware)

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    message: testReducer
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
