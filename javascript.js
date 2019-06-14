function ActiveTetromino()
{
    this.color = rnd();
    this.blocks = tetrominos[this.color];
    this.x = Math.floor(bw / 2);
    this.y = 1;
    this.nextBlocks = function(index)
    {
        this.color = index;
        this.blocks = tetrominos[this.color];
        this.x = Math.floor(bw / 2);
        this.y = 1;
    }
    this.display = function(color)
    {
        if(color == 0 || color == 1 || color == 2)
        {
            this.displayBlock(color);
            this.displayGhost(0);
        }
        else
        {
            this.displayGhost(1);
            this.displayBlock(color);
        }
    }
    this.displayBlock = function(color)
    {
        for(var i = 0; i < this.blocks.length; i++)
        {
            grid[Math.floor(this.y + this.blocks[i][1])][Math.floor(this.x + this.blocks[i][0])] = color;
        }
    }
    this.displayGhost = function(color)
    {
        var tempY = 0;
        while(this.test(0,tempY,0) != ("next"))
        {
            tempY++;
        }
        for(var i = 0; i < this.blocks.length; i++)
        {
            grid[Math.floor(this.y + this.blocks[i][1] + tempY - 1)][Math.floor(this.x + this.blocks[i][0])] = color;
        }
    }
    this.test = function(xOff,yOff,rot)
    {
        rot = rot * (Math.PI / 180);
        var newBlocks = [];
        for(var i = 0; i < this.blocks.length; i++)
        {
            newBlocks.push(mul([[Math.cos(rot),-Math.sin(rot)],[Math.sin(rot),Math.cos(rot)]],[this.blocks[i][0],this.blocks[i][1]]));
        }
        for(var i = 0; i < this.blocks.length; i++)
        {
            var newX = Math.floor(this.x + xOff + newBlocks[i][0]);
            var newY = Math.floor(this.y + yOff + newBlocks[i][1]);
            if(newX < 0 || newX > grid[0].length - 1)
            {
                xOffset += 4 * xOff;
                return ("nothing");
            }
            else if(newY <= grid.length - 1)
            {
                if(newY < 0)
                {
                    this.y++;
                }
                else if((grid[newY][newX] != 0 && grid[newY][newX] != 1 && grid[newY][newX] != 2) && xOff == 0 && rot == 0)
                {
                    return ("next");
                }
                else if(grid[newY][newX] != 0 && grid[newY][newX] != 1 && grid[newY][newX] != 2)
                {
                    return ("nothing");
                }
            }
            else
            {
                return ("next");
            }
        }
        return newBlocks;
    }
    this.move = function(xOff,yOff,rot)
    {
        this.display(0);
        var direction = this.test(xOff,yOff,rot);
        if(direction == ("next"))
        {
            if(delay)
            {
                this.display(this.color + 3);
            }
            else
            {
                this.display(this.color + 3);
                this.nextBlocks(nextB.splice(0,1)[0]);
                nextB.push(rnd());
                var counter = 0;
                for(var y = 0; y < grid.length; y++)
                {
                    if(!(grid[y].includes(0) || grid[y].includes(2)))
                    {
                        lastClear = true;
                        for(var i = 0; i < bw; i++)
                        {
                            p.push(new Particle([xOffset + (i * bSize),yOffset + (y * bSize),0,rndNumber(-10,10),0,rndNumber(-1,-0.25)],rndNumber(100,200),grid[y][i] - 3));
                        }
                        for(var i = y; i > 0; i --)
                        {
                            grid[i] = grid[i - 1].slice();
                        }
                        points += counter;
                        if (totalClears++%20==0)
                        {
                            clearInterval(displayIntervalID);
                            displayIntervalID = setInterval(display,(displayIntervalMod--));
                        }
                        if (!minimalVFX)
                        {
                            bSize *= 1.2;
                            xOffset = (c.width / 2) - ((bw * bSize) / 2);
                            yOffset = (c.height / 2) - ((bh * bSize) / 2);
                        }
                        counter++;
                    }
                }
                if(lastClear)
                {
                    points += combo;
                    combo++;
                    if (highestCombo < combo)
                        highestCombo = combo;
                    lastClear = false;
                }
                else
                {
                    combo = 0;
                }
            }
        }
        else if(direction == ("nothing"))
        {
            this.display(this.color + 3);
        }
        else
        {
            this.display(2);
            this.x += xOff;
            this.y += yOff;
            this.blocks = direction;
            this.display(this.color + 3);
        }
        return direction;
    }
}