  
import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { selectCheckerState, updateSelectedChecker, checkersState, updatePossibleMovesChecker} from '../../websocket/websocket';
import  styles from './Checkers.module.css';
import { isPossibleMove } from '../../../Utils';




export default function CheckersGameBoard() {
    const dispatch = useDispatch();
    const GameState = useSelector(selectCheckerState);
     function renderTiles(){
        const BoardState = GameState.board;

        var test:any = [];
        var rowindex = 0;
       BoardState.map(function(row,index){
            
            test.push(<div>{Row(row, rowindex,GameState.possibleMoves)}</div>);
            rowindex ++;
       });
        
        
        return(test)
    }
     function handleClick(e:any) {
         var act = e.target.id
        dispatch(updateSelectedChecker(act)); 
        
    }

    

    return (
        <div>
            <div className={styles.chessboard}>{renderTiles()}</div>
        
        </div>
    )


 function Row(rowArray: Array<number>,rowindex:number,posMoves:Array<Array<number>>){

        var test:any = []
        rowArray.map((data, index) =>{
        test.push(Cell(data, (index.toString() + ':' +rowindex.toString()),posMoves))
        
        })
        
        return test;
    


}

 function Cell(color:number, location:string, posMoves:Array<Array<Number>>) {


if(color === -1){
return(<div className={styles.white_square}>
    
</div>)
}
else{
    if(color ===1){
    return(<div onClick={handleClick.bind(this)} className={styles.black_square}><svg height="48" width="48">
    <circle id={"red:"+location} cx="24" cy="24" r="18" stroke={GameState.selected === "red:"+location ? "orange" :"grey"} stroke-width="3" fill="red" />
  </svg></div>)
} else if(color === 2) {
    return(<div onClick={handleClick.bind(this)} className={styles.black_square}><svg height="48" width="48">
    <circle id={"blue:"+location} cx="24" cy="24" r="18" stroke={GameState.selected === "blue:"+location ? "orange" :"grey"} stroke-width="3" fill="blue" />
  </svg></div>)
}
else {
    return(<div id={"blank:"+location} onClick={handleClick.bind(this)} className={isPossibleMove(location, GameState.possibleMoves)? styles.black_square_canMove : styles.black_square}></div>)
}
}
}

}