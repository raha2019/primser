let img;
let input;

function setup() {
    input = createFileInput(handleFile);
    input.position(100, 55);
    createCanvas(500, 500, WEBGL);
    background(255);
}

function handleFile(file) {
    print(file);
    if (file.type === 'image') {
      if (file.subtype === 'heic') {
        console.log("This image is a heic");
        document.getElementById("error").innerHTML = "This is a .HEIC image file, please upload a different image";
      }
      img = createImg(file.data, '');
      img.hide();
    } else {
      img = null;
    }
}

function draw() {;
    if (img) {
        rotateY(frameCount * 0.05);
        noStroke();
        texture(img);
        sphere(200);
    }
}