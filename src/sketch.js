let time = 0;
let wave = [];

function setup() {
    canvas = createCanvas(600, 400);

    canvas.parent("sketch-holder");

    ellipseMode(RADIUS);
}

function draw() {
    background(0);
    translate(200, 200);

    let x = 0;
    let y = 0;

    for (let i = 0; i < 10; i++) {
        let prevX = x;
        let prevY = y
  
        let n = i * 2 + 1;
        let radius = 50 * (4 / (n * PI));
        x += radius * cos(n * time);
        y += radius * sin(n * time);
        stroke(125);
        noFill();
        ellipse(prevX, prevY, radius);

        stroke(255)
        fill(255);
        line(prevX, prevY, x, y);
        ellipse(x, y, 2);
        
    }
    wave.unshift(y);
    strokeWeight(1.5);
    stroke(255, 0, 0)
    line(x, y, 150, y)

    push();
    noFill()
    stroke(255)
    strokeWeight(1);
    beginShape();
    
    for (let i = 0; i < wave.length; i++) {
        vertex(i + 150, wave[i]);
    }

    endShape()

    if(wave.length > 250){
        wave.pop();
    }

    time += 0.05;
}