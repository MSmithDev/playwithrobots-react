import {
  createSlice,
  PayloadAction,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";
import { AppThunk, RootState, store } from "../../app/store";
import { act } from "react-dom/test-utils";

interface XYZR {
  X: number;
  Y: number;
  Z: number;
  R: number;
}
interface Joint {
  J1: number;
  J2: number;
  J3: number;
  J4: number;
}

interface Position {
  XYZR: XYZR;
  Joint: Joint;
}

interface websocketState {
  Position: Position;
}

const initialState: websocketState = {
  Position: {
    XYZR: {
      X: 0,
      Y: 0,
      Z: 0,
      R: 0,
    },
    Joint: {
      J1: 0,
      J2: 0,
      J3: 0,
      J4: 0,
    },
  },
};

const updatePosition = createAction("websocket/robotPosition");
export const testReducer = createReducer(initialState, {
  [updatePosition.type]: (state, action) => {
    state.Position.XYZR.X = action.robotPosition.x;
    state.Position.XYZR.Y = action.robotPosition.y;
    state.Position.XYZR.Z = action.robotPosition.z;
    state.Position.XYZR.R = action.robotPosition.r;

    state.Position.Joint.J1 = action.robotPosition.j1;
    state.Position.Joint.J2 = action.robotPosition.j2;
    state.Position.Joint.J3 = action.robotPosition.j3;
    state.Position.Joint.J4 = action.robotPosition.j4;
  },
});

export const selectPosition = (state: RootState) => state.robotposition;

interface userState {
  loggedIn: boolean;
  userName: string;
}

const initialUserState: userState = {
  loggedIn: false,
  userName: "null"
};

export const updateUser = createAction("UPDATE::USER", function prepare(
    jsonObject
    ) {
      return {
        payload: {
          jsonObject
        },
      };
    });

export const userReducer = createReducer(initialUserState, {
  [updateUser.type]: (state, action) => {
    state.loggedIn = action.payload.jsonObject.loggedIn;
    state.userName = action.payload.jsonObject.userName;
  },
});

export const selectUser = (state: RootState) => state.user;

interface robotState {
  connected: boolean;
  estop: boolean;
  high_power: boolean;
  executing: boolean;
  max_speed: number;
}

const initialRobotState: robotState = {
  connected: false,
  estop: true,
  high_power: false,
  executing: false,
  max_speed: 0,
};

const updateRobotState = createAction("websocket/robotState");
export const robotStateReducer = createReducer(initialRobotState, {
  [updateRobotState.type]: (state, action) => {
    state.connected = action.robotState.connected;
    state.estop = action.robotState.estop;
    state.executing = action.robotState.executing;
    state.high_power = action.robotState.high_power;
    state.max_speed = action.robotState.max_speed;
  },
});

export const selectRobotState = (state: RootState) => state.robotstate;

interface toolState {
  tool1: boolean;
  tool2: boolean;
  selectedTool: string;
}

const initialToolState: toolState = {
  tool1: false,
  tool2: false,
  selectedTool: "a",
};

const updateToolState = createAction("websocket/toolState");
export const toolStateReducer = createReducer(initialToolState, {
  [updateToolState.type]: (state, action) => {
    state.selectedTool = action.toolState.selected;
    state.tool1 = action.toolState.a;
    state.tool2 = action.toolState.b;
  },
});

export const selectToolState = (state: RootState) => state.toolstate;
