import { createSlice, PayloadAction, createAction, createReducer } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
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
        state.Position.XYZR.X = robotObj.robotPosition.x;
        state.Position.XYZR.Y = robotObj.robotPosition.y;
        state.Position.XYZR.Z = robotObj.robotPosition.z;
        state.Position.XYZR.R = robotObj.robotPosition.r;

        state.Position.Joint.J1 = robotObj.robotPosition.j1;
        state.Position.Joint.J2 = robotObj.robotPosition.j2;
        state.Position.Joint.J3 = robotObj.robotPosition.j3;
        state.Position.Joint.J4 = robotObj.robotPosition.j4;
    }
})

export const selectPosition = (state: RootState) => state.message;


export const websocketSlice = createSlice({
  name: 'websocket',
  initialState,
  reducers: {

    message: (state, action: PayloadAction<string>) => {

    },


    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //state.value += 1;
    },
    decrement: state => {
      //state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      //state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, message } = websocketSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
//export const selectJointPositions = (state: RootState) => state.websocket.value;

export default websocketSlice.reducer;
