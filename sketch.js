var last;
var colorz = 0;
const l = 15;
const r = 20;

function setup() {
    createCanvas(windowWidth, windowHeight);
    strokeWeight(l / 7.5)
    strokeCap(SQUARE);
    textSize(28);
    textFont('Verdana');


    var b = random();
    var c = random();
    var d = random();
    var e = random();
    last = new Array(Math.floor(width / r) + 1);
    for (let i = 0; i < (width / r) + 1; i++) {
        last[i] = new Array(Math.floor(height / r) + 1);
        for (let j = 0; j < (height / r) + 1; j++) {
            last[i][j] = (((cos(i * b) * c + cos(j * d) * e) / 4) + 0.5) * 360
        }
    }
}

function draw() {
    background(0);
    var mod, ra;
    colorMode(HSL);
    mouseIsPressed ? colorz += 5 : null;
    for (let i = 0; i < (width / r) + 1; i++) {
        stroke((colorz + (i * 10)) % 360, 58, 63);
        for (let j = 0; j < (height / r) + 1; j++) {
            mouseIsPressed ? ra = ((last[i][j] += 5) / 180) * Math.PI : ra = ((last[i][j]) / 180) * Math.PI;
            mod = [cos(ra) * l, sin(ra) * l];
            line((i * r) + 5, (j * r) + 5, (i * r) + 5 + mod[0], (j * r) + 5 + mod[1])
        }
    }
    stroke(0);
    fill(255);
    text('Reload for a different pattern', 15, 35);
    text('Click?', width - 150, height - 35);
}
