var dict = {
	'2':"小白",
'4':"天真",
'8':"涉世",
'16':"开窍",
'32':"爱美",
'64':"好色",
'128':"小流氓",
'256':"大流氓",
'512':"淫魔",
'1024':"禽兽",
'2048':"OOXX"
}

// 数字显示动画
function showNumberWithAnimation (i,j,randNumber) {
	var theNumberCell = $("#number-cell-"+i+"-"+j);
	theNumberCell.css('background-color',getNumberBackgroundColor(randNumber));
	theNumberCell.css('color',getNumberColor(randNumber));
	theNumberCell.text(dict[randNumber]);

	theNumberCell.animate({
		width:'100px',
		height:'100px',
		top:getPosTop(i,j),
		left:getPosLeft(i,j)
	},200);
}

// 移动动画，move完后更新数据到页面
function showMoveAnimation(fromx,fromy,tox,toy,cb){
	var theNumberCell = $("#number-cell-"+fromx+"-"+fromy);
	theNumberCell.animate({
		top:getPosTop(tox,toy),
		left:getPosLeft(tox,toy)
	},200,cb);
}

function updateScore(score) {
	$('#score').text(score);
}