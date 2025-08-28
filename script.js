let canvas;
let ctx;
let flowField
let flowFieldAnimation

window.onload = function() {
    canvas = document.getElementById("canvas1");
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate();
};

window.addEventListener('resize', function() {
    this.cancelAnimationFrame(flowFieldAnimation);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate();
})


const mouse = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
})

class FlowFieldEffect {
    #ctx;
    #width;
    #hight;
    constructor(ctx, width, hight) {
        this.#ctx = ctx;
        this.#ctx.strokeStyle = "white";
        this.#width = width;
        this.#hight = hight;
        this.angle = 0;
    }
    #draw(x,y){
        const length = 500;
        this.#ctx.beginPath();
        this.#ctx.moveTo(x,y);
        this.#ctx.lineTo(x + length,y + length);
        this.#ctx.stroke();
    }
    animate(){
        this.angle += 0.01;
        this.#ctx.clearRect(0,0,this.#width,this.#hight);
        //this.#draw(this.x/2 + Math.sin(this.angle)*10, this.y/2 + Math.cos(this.angle)*10);
        //console.log("animate");
        flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));
    }

}