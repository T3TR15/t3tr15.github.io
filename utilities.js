function line(x1,y1,x2,y2)
{
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}
function circle(x,y,s)
{
    ctx.beginPath();
    ctx.arc(x,y,s,0,2 * Math.PI);
    ctx.fill();
}
function rnd()
{
    rndNum = Math.floor(Math.random() * tetrominos.length);
    if(rndNum == pre)
    {
        rndNum = Math.floor(Math.random() * tetrominos.length);
    }
    pre = rndNum;
    return rndNum;
}
function rndNumber(min,max)
{
    return (Math.random() * (max - min)) + min;
}
function scale(num,in_min,in_max,out_min,out_max)
{
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
function mul(rot,vector)
{
    var newVector = Array(vector.length).fill(0);
    for(var y = 0; y < rot.length; y ++)
    {
        for(var x = 0; x < rot[y].length; x ++)
        {
            newVector[x] += Number(parseFloat(vector[y] * rot[x][y]).toFixed(2));
        }
    }
    return newVector;
}
function displayBlocks(x,y,index)
{
    for(var i = 0; i < tetrominos[index].length; i ++)
    {
        ctx.fillStyle = colors[index + 3];
        ctx.fillRect(x + tetrominos[index][i][0] * bSize,y + tetrominos[index][i][1] * bSize,bSize,bSize);
    }
}
