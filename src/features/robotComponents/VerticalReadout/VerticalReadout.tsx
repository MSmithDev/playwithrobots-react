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
                <SquareReadout axis = {"Y"} value={"10.0"}/>
                </div>
                <div className={styles.gridcontentitem}>
                <SquareReadout axis = {"Z"} value={"10.0"}/>
                </div>
                <div className={styles.gridcontentitem}>
                <SquareReadout axis = {"R"} value={"10.0"}/>
                </div>
            </div>
            <div className={styles.gridcontent}>
                <div className={styles.gridcontentitem}>
                <SquareReadout axis = {"J1"} value={"10.0°"}/>
                </div>
                <div className={styles.gridcontentitem}>
                <SquareReadout axis = {"J2"} value={"20.0°"}/>
                </div>
                <div className={styles.gridcontentitem}>
                <SquareReadout axis = {"J3"} value={"30.0°"}/>
                </div>
                <div className={styles.gridcontentitem}>
                <SquareReadout axis = {"J4"} value={"40.0°"}/>
                </div>
            </div>
              
              
              
        </div>

    );
}