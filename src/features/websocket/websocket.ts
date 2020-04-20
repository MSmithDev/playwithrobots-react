import { createSlice, PayloadAction, createAction, createReducer } from '@reduxjs/toolkit';
import { AppThunk, RootState, store } from '../../app/store';
import { act } from 'react-dom/test-utils';

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
    XYZR:XYZR;
    Joint:Joint;
}

interface websocketState {
  Position: Position
      
}

const initialState: websocketState = {
  Position: {
      XYZR: {
          X: 0,
          Y: 0,
          Z: 0,
          R: 0
      },
      Joint: {
          J1: 0,
          J2: 0,
          J3: 0,
          J4: 0
      }
  }
};
const onMessage = createAction('REDUX_WEBSOCKET::MESSAGE');
export const testReducer = createReducer(initialState, {
    [onMessage.type]: (state, action) => {
        const robotObj = JSON.parse(action.payload.message);

        switch(robotObj.type) {

            case "robotPosition": {

        state.Position.XYZR.X = robotObj.robotPosition.x;
        state.Position.XYZR.Y = robotObj.robotPosition.y;
        state.Position.XYZR.Z = robotObj.robotPosition.z;
        state.Position.XYZR.R = robotObj.robotPosition.r;

        state.Position.Joint.J1 = robotObj.robotPosition.j1;
        state.Position.Joint.J2 = robotObj.robotPosition.j2;
        state.Position.Joint.J3 = robotObj.robotPosition.j3;
        state.Position.Joint.J4 = robotObj.robotPosition.j4;
                break;
            }
            case "toolState": {
                console.log(robotObj);
                break;
            }
            case "ioState": {
                console.log(robotObj);
                break;
            }
            case "robotState": {
                console.log(robotObj);
                //store.dispatch(updateRobotState(robotObj))
                break;
            }


        }
        
        
    }
})

export const selectPosition = (state: RootState) => state.message;

interface userState {
    loggedIn: boolean
}

const initialUserState: userState = {
    loggedIn: false
  };


  export const updateUser = createAction('UPDATE::USER', function prepare(loggedIn) {
    return {
      payload: {
        loggedIn
      }
    }
  })
  
  export const userReducer = createReducer(initialUserState, {
      [updateUser.type]: (state, action) => {
          state.loggedIn = action.payload.loggedIn;
      }

  })

  export const selectUser = (state: RootState) => state.user;


  interface robotState {
    connected: boolean
    estop: boolean
    high_power: boolean
    executing: boolean
    max_speed: number
}


const initialRobotState: robotState = {
    connected: false,
    estop: true,
    high_power: false,
    executing: false,
    max_speed: 0

  };

  export const updateRobotState = createAction('UPDATE::ROBOTSTATE', function prepare(state) {
    return {
      payload: {
        state
      }
    }
  })

export const robotStateReducer = createReducer(initialRobotState, {
    [updateRobotState.type]: (state, action) => {
        state = action.payload.state
    }
})

