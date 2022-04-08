let img;
let input;

function setup() {
    input = createFileInput(handleFile);
    input.position(0, 0);
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
        rotateY(frameCount * 0.05);
        noStroke();
        texture(img);
        sphere(400);
    }
}