import React from 'react';
import styles from './VerticalReadout.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { SquareReadout } from '../squareReadout/squareReadout';
import { selectPosition } from '../../websocket/websocket';

export function VerticalReadout() {

    const positions = useSelector(selectPosition);

    return (

        <div className={styles.container}>
            <div className={styles.gridcontent}>
                <div className={styles.gridcontentitem}>
                <SquareReadout axis = {"X"} value={positions.Position.XYZR.X.toString()}/>
                </div>
                <div className={styles.gridcontentitem}>
                <SquareReadout axis = {"Y"} value={positions.Position.XYZR.Y.toString()}/>
                </div>
                <div className={styles.gridcontentitem}>
                <SquareReadout axis = {"Z"} value={positions.Position.XYZR.Z.toString()}/>
                </div>
                <div className={styles.gridcontentitem}>
                <SquareReadout axis = {"R"} value={positions.Position.XYZR.R.toString()}/>
                </div>
            </div>
            <div className={styles.gridcontent}>
                <div className={styles.gridcontentitem}>
                <SquareReadout axis = {"J1"} value={positions.Position.Joint.J1.toString() + "°"}/>
                </div>
                <div className={styles.gridcontentitem}>
                <SquareReadout axis = {"J2"} value={positions.Position.Joint.J2.toString() + "°"}/>
                </div>
                <div className={styles.gridcontentitem}>
                <SquareReadout axis = {"J3"} value={positions.Position.Joint.J3.toString() + "°"}/>
                </div>
                <div className={styles.gridcontentitem}>
                <SquareReadout axis = {"J4"} value={positions.Position.Joint.J4.toString() + "°"}/>
                </div>
            </div>
              
              
              
        </div>

    );
}