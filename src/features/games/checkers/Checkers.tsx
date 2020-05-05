  
import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { selectCheckerState, updateSelectedChecker, checkersState, updatePossibleMovesChecker} from '../../websocket/websocket';
import  styles from './Checkers.module.css';




export default function CheckersGameBoard() {
    const dispatch = useDispatch();
    const GameState = useSelector(selectCheckerState);
     function renderTiles(){
        const BoardState = GameState.board;

        var test:any = [];
        var rowindex = 0;
       BoardState.map(function(row,index){
            
            test.push(<div>{Row(row, rowindex)}</div>);
            rowindex ++;
       });
        
        
        return(test)
    }
     function handleClick(e:any) {
         var act = e.target.id
        dispatch(updateSelectedChecker(act));
          
        
        
        
    }

    function findMoveableSpaces(GameState:checkersState) {
        console.log("GS: "+GameState.selected);
        if(GameState.selected !== "") {
            console.log("running check");
        var spaces:Array<string> =[""];

        var XYS = GameState.selected.split(":");
        XYS.shift()
        var XY = XYS.map(Number);
        var posMoves:Array<Array<Number>> =[];
            if(GameState.board[XY[1]+1][XY[0]+1] === 0){
                console.log("Move Found");
                posMoves.push([XY[1]+1,XY[0]+1]);
            }
            if(GameState.board[XY[1]-1][XY[0]+1] === 0){
                console.log("Move Found");
                posMoves.push([XY[1]-1,XY[0]+1]);
            }
            if(GameState.board[(XY[1]-1)][(XY[0]-1)] === 0){
                console.log("Move Found");
                posMoves.push([XY[1]-1,XY[0]-1]);
            }
            if(GameState.board[XY[1]+1][XY[0]-1] === 0){
                console.log("Move Found");
                posMoves.push([XY[1]+1,XY[0]-1]);
            }
        console.log("pos moves: " ,posMoves)
        console.log("cur moves: " ,GameState.possibleMoves)
        if(GameState.possibleMoves.toString() !== posMoves.toString()){
            dispatch(updatePossibleMovesChecker(posMoves));
        }
        
       
        
        
    }
}
    findMoveableSpaces(GameState);

    return (
        <div>
            <div className={styles.chessboard}>{renderTiles()}</div>
        
        </div>
    )


 function Row(rowArray: Array<number>,rowindex:number){

        var test:any = []
        rowArray.map((data, index) =>{
        test.push(Cell(data, (index.toString() + ':' +rowindex.toString())))
        
        })
        
        return test;
    


}

 function Cell(color:number, location:string) {


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
    return(<div id={"blank:"+location} onClick={handleClick.bind(this)} className={styles.black_square}></div>)
}
}
}

}