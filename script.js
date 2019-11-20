var img;
var col;
var row;
var size;
var offset;
var step;
var ran;
var ran2;
var loadImage;
let img1, img2, img3, img4, img5, img6, img7, img8, img9;
let img_1, img_2, img_3, img_4, img_5, img_6, img_7;
let video;
let poseNet;
let poses = [];
var flag;
var flag2;


function setup() {
    var canvas = createCanvas(innerWidth, innerHeight);
    canvas.parent('sketch-div');

    img1 = loadImage('new/1.png');
    img2 = loadImage('new/2.png');
    img3 = loadImage('new/3.png');
    img4 = loadImage('new/4.png');
    img5 = loadImage('new/5.png');
    img6 = loadImage('new/6.png');
    img7 = loadImage('new/7.png');
    img8 = loadImage('new/8.png');
    img9 = loadImage('new/9.png');

    img_1 = loadImage('old/1.png');
    img_2 = loadImage('old/2.png');
    img_3 = loadImage('old/3.png');
    img_4 = loadImage('old/4.png');
    img_5 = loadImage('old/5.png');
    img_6 = loadImage('old/6.png');
    img_7 = loadImage('old/7.png');
    
    video = createCapture(VIDEO);
    video.size(width, height);

    poseNet = ml5.poseNet(video, modelReady);
    poseNet.on('pose', function(results) {
         poses = results;
    });

    video.hide();
    // col = 619;
    // row = 619;
    // size = innerWidth % col;
    size = 50;
    col = innerWidth / size;
    row = innerHeight / size;
    offset = 15;
    step = size + offset ; 
}

function modelReady() {
//   select('#status').html('Model Loaded');
}

function draw() {
    background(255);
    //tint(255, 200);
    translate(-11,-11);
    if(poses.length == 0){
      for(i=0;i<row;i++){
        for(j=0;j<col;j++){
              ran2 = random(1,7.9);
                    switch (int(ran2)) {
                      case 1:
                        image(img_1, step*j, step*i, size, size);
                        break;
                      case 2:
                        image(img_2, step*j, step*i, size, size);
                        break;
                      case 3:
                        image(img_3, step*j, step*i, size, size);
                        break;
                      case 4:
                        image(img_4, step*j, step*i, size, size);
                        break;
                      case 5:
                        image(img_5, step*j, step*i, size, size);
                        break;
                      case 6:
                        image(img_6, step*j, step*i, size, size);
                        break;
                      case 7:
                        image(img_7, step*j, step*i, size, size);
                        break;
                      default:
                        break;
                    }
        }
      }
    }
    else{
      for(i=0;i<row;i++){
        for(j=0;j<col;j++){
          flag = 0;
              for (let k = 0; k < poses.length; k++) {
                  let poseKeypointX = poses[k].pose.keypoints[0].position.x;
                  let poseKeypointY = poses[k].pose.keypoints[0].position.y;
                  if((step*j <= poseKeypointX && poseKeypointX <= step*(j+1))&&(step*i <= poseKeypointY && poseKeypointY <= step*(i+1)))
                  {
                    flag = 1;
                    // tint(255, 220);
                    ran = random(1,9.9); 
                    switch (int(ran)) {
                      case 1:
                        image(img1, step*j, step*i, size, size);
                        break;
                      case 2:
                        image(img2, step*j, step*i, size, size);
                        break;
                      case 3:
                        image(img3, step*j, step*i, size, size);
                        break;
                      case 4:
                        image(img4, step*j, step*i, size, size);
                        break;
                      case 5:
                        image(img5, step*j, step*i, size, size);
                        break;
                      case 6:
                        image(img6, step*j, step*i, size, size);
                        break;
                      case 7:
                        image(img7, step*j, step*i, size, size);
                        break;
                      case 8:
                        image(img8, step*j, step*i, size, size);
                        break;
                      case 9:
                        image(img9, step*j, step*i, size, size);
                        break;
                      default:
                        break;
                    }
                    console.log("kpl");
                  }
              }
              if(flag==0){
                ran2 = random(1,7.9);
                switch (int(ran2)) {
                  case 1:
                    image(img_1, step*j, step*i, size, size);
                    break;
                  case 2:
                    image(img_2, step*j, step*i, size, size);
                    break;
                  case 3:
                    image(img_3, step*j, step*i, size, size);
                    break;
                  case 4:
                    image(img_4, step*j, step*i, size, size);
                    break;
                  case 5:
                    image(img_5, step*j, step*i, size, size);
                    break;
                  case 6:
                    image(img_6, step*j, step*i, size, size);
                    break;
                  case 7:
                    image(img_7, step*j, step*i, size, size);
                    break;
                  default:
                    break;
                }
                console.log("pl");
              }
        }
      }
    }
    sleep(500);
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }