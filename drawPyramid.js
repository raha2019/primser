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
    // img.resize(50, 100);
  } else {
    img = null;
  }
}

function draw() {
    if (img) {
      background(255);
      rotateY(frameCount*0.05);
    
      texture(img);
      textureMode(NORMAL);
    
      translate(-125,-125, 125);
    
      beginShape();
      // Face one
      vertex(125,0,-125,0.5,-0.5);
      vertex(125,0,-125,0.5,-0.5);
      
      vertex(0,250,0,-0.25,1);
      vertex(250,250,0,1.30,1);
    
      // Face two
      vertex(125,0,-125,0.5,-0.5);
      vertex(125,0,-125,0.5,-0.5);
      
      vertex(250,250,-250,-0.25,1);
      vertex(0,250,-250,1.30,1);
    
      // Face three
      vertex(125,0,-125,0.5,-0.5);
      vertex(125,0,-125,0.5,-0.5);
      
      vertex(0,250,-250,-0.25,1);
      vertex(0,250,0,1.30,1);
      
      // Face four
      vertex(125,0,-125,0.5,-0.5);
      vertex(125,0,-125,0.5,-0.5);
      
      vertex(250,250,0,-0.25,1);
      vertex(250,250,-250,1.30,1);
      
      endShape(CLOSE);
    }
}
