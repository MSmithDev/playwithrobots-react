import { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";

function createWsMiddleware(): Middleware {
  return ({ dispatch }: MiddlewareAPI) => (next) => (action: any) => {
    if (action.type === "REDUX_WEBSOCKET::MESSAGE") {
      const msg = JSON.parse(action.payload.message);
      if ("type" in msg) {
        dispatch({ ...msg, type: "websocket/" + msg.type });
        return action;
      }
    }
    return next(action);
  };
}
const wsmiddle = createWsMiddleware();

export default wsmiddle;
