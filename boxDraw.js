let img;
let input;

function setup() {
    input = createFileInput(handleFile);
    input.position(10, 55);
    createCanvas(500, 500, WEBGL);
    background(255);
}

function handleFile(file) {
    print(file);
    if (file.type === 'image') {
      img = createImg(file.data, '');
      img.hide();
    } else {
      img = null;
    }
}

function draw() {
    if (img) {
        background(250);
        rotateY(frameCount * 0.01);
        texture(img);
        box(width / 2);
    }
    else {
    background(250);
    rotateY(frameCount * 0.01);
    // texture(img);
    box(width / 2);
    }
}