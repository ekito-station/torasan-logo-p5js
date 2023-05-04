function setup() {
    createCanvas(500, 500);
    background(240);
    noLoop();
}

function draw() {
    // face
    fill(255);
    strokeWeight(10);
    circle(width / 2, height / 2, 250);

    // eyes
    const distFromCenter = 60;
    const eyeDiameter = 64;
    const pupilDiameter = eyeDiameter / 2;
    const rightEyeCenter = width / 2 - distFromCenter;
    const leftEyeCenter = width / 2 + distFromCenter;

    strokeWeight(4);
    circle(rightEyeCenter, height / 2, eyeDiameter);  // right eye
    circle(leftEyeCenter, height / 2, eyeDiameter);  // left eye

    fill(0);
    noStroke();
    circle(rightEyeCenter - eyeDiameter / 4, height / 2, pupilDiameter);  // right pupil
    circle(leftEyeCenter - eyeDiameter / 4, height / 2, pupilDiameter);   // left pupil

    // mustache
    const mustacheY = 300;
    const mustacheInterval = 40;
    const sideLength = 22;
    square(width / 2 - sideLength / 2 - mustacheInterval, mustacheY, sideLength);
    square(width / 2 - sideLength / 2, mustacheY, sideLength);
    square(width / 2 - sideLength / 2 + mustacheInterval, mustacheY, sideLength);

    // hair
    triangle(180, 130, 320, 130, 250, 210);

    // hat brim
    const brimY = 160;
    ellipse(width / 2, brimY, 350, 50);

    // hat crown
    const crownWidth = 180;
    const crownHeight = 70;
    rect(width / 2 - crownWidth / 2, brimY - crownHeight, crownWidth, crownHeight);
    circle(width / 2 - crownWidth / 4, brimY - crownHeight, crownWidth / 2);
    circle(width / 2 + crownWidth / 4, brimY - crownHeight, crownWidth / 2);
}