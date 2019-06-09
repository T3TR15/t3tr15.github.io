function Particle(motion,life,color)
{
    if (particlesOn == true)
    { 
        this.motion = motion;
        this.life = life;
        this.color = color;
        this.move = function()
        {
            for(var i = this.motion.length - 1; i >= 2; i --)
            {
                this.motion[i - 2] += this.motion[i];
            }
            ctx.fillStyle = colors[this.color + 3];
            ctx.font = "bold " + scale(this.life,0,250,0,50) + "px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
            if (comboParticles == true)
                ctx.fillText(combo,this.motion[0],this.motion[1]);
            ctx.fillRect(this.motion[0],this.motion[1],scale(this.life,0,250,0,bSize),scale(this.life,0,250,0,bSize));
            this.life --;
        }
    }
}