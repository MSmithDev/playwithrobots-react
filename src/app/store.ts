import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import reduxWebsocket from "@giantmachines/redux-websocket";
import {
  testReducer,
  userReducer,
  robotStateReducer,
  toolStateReducer,
  checkerStateReducer,
} from "../features/websocket/websocket";
import wsmiddle from "../features/websocket/websocketMiddleware";

const reduxWebsocketMiddleware = reduxWebsocket({
  reconnectOnClose: true,
});

export const store = configureStore({
  reducer: {
    robotstate: robotStateReducer,
    toolstate: toolStateReducer,
    robotposition: testReducer,
    user: userReducer,
    checkerState: checkerStateReducer,
  },
  middleware: [
    reduxWebsocketMiddleware,
    wsmiddle,
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ["meta.arg", "meta.timestamp", "payload.event"],
      },
    }),
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
