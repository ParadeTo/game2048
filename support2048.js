// 格子的宽度
var gridSize = 100;

function getPosTop(i,j) {
	return 20 + i*(gridSize+20)
}

function getPosLeft(i,j) {
	return 20 + j*(gridSize+20)
}

function getNumberBackgroundColor(number) {
	switch( number ){
		case 2:return "#eee4da";break;
		case 4:return "#ede0c8";break;
		case 8:return "#f2b179";break;
		case 16:return "#f59563";break;
		case 32:return "#f67c5f";break;
		case 64:return "#f65e3b";break;
		case 128:return "#edcf72";break;
		case 256:return "#edcc61";break;
		case 512:return "#9c0";break;
		case 1024:return "#33b5e5";break;
		case 2048:return "#09c";break;
		case 4096:return "#a6c";break;
		case 8192:return "#93c";break;
	}
	return "black";
}

function getNumberColor( number ){
    if( number <= 4 )
        return "#776e65";

    return "white";
}

function nospace( board ){

    for( var i = 0 ; i < 4 ; i ++ )
        for( var j = 0 ; j < 4 ; j ++ )
            if( board[i][j] == 0 )
                return false;

    return true;
}

function nomove (board) {
	if(canMoveLeft(board) ||
		canMoveRight(board) ||
		canMoveUp(board) ||
		canMoveDown(board) 
		)
		return false;
	return true;
}

function canMoveLeft(board) {
	for (var i = 0; i < 4; i++) {
		for (var j = 1; j < 4.; j++) {
			if (board[i][j] !== 0) {
				// 左侧的元素为0 or 左侧的数字与自己一样
				if (board[i][j-1] == 0 || board[i][j-1] == board[i][j] ) {
					return true;
				}
			}
		}
	}
	return false;
}
function canMoveRight(board) {
	for (var i = 0; i < 4; i++) {
		for (var j = 2; j >= 0.; j--) {
			if (board[i][j] !== 0) {
				// 右边侧的元素为0 or 右侧的数字与自己一样
				if (board[i][j+1] == 0 || board[i][j+1] == board[i][j] ) {
					return true;
				}
			}
		}
	}
	return false;
}
function canMoveUp(board) {
	for (var i = 1; i < 4; i++) {
		for (var j = 0; j < 4.; j++) {
			if (board[i][j] !== 0) {
				// 上边侧的元素为0 or 上侧的数字与自己一样
				if (board[i-1][j] == 0 || board[i-1][j] == board[i][j] ) {
					return true;
				}
			}
		}
	}
	return false;
}
function canMoveDown(board) {
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 4.; j++) {
			if (board[i][j] !== 0) {
				// 下边侧的元素为0 or 下侧的数字与自己一样
				if (board[i+1][j] == 0 || board[i+1][j] == board[i][j] ) {
					return true;
				}
			}
		}
	}
	return false;
}


// 检查是否有障碍物
function noBlockHorizontal(row,col1,col2,board) {
	for(var i = col1 + 1;i < col2;i++) {
		if (board[row][i] != 0) {
			return false;
		}
	}
	return true;
}

function noBlockVertical(col,row1,row2,board) {
	for(var i = row1 + 1;i < row2;i++) {
		if (board[i][col] != 0) {
			return false;
		}
	}
	return true;
}
