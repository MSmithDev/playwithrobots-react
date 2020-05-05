export function validateCoord(location: number) {
  if (location !== null) {
    return location;
  } else {
    console.log("Invalid Coord");
    return -5;
  }
}

export function isPossibleMove(loc: string, posMoveArr: Array<Array<number>>) {
  for (var i = 0; i < posMoveArr.length; i++) {
    var move = posMoveArr[i];
    var moveString = move[1] + ":" + move[0];
    console.log("move: ", move);
    console.log("moveString: ", moveString);
    if (loc === moveString) {
      return true;
    }
  }
}
