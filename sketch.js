 function useStrict() {}
 /*
   Johan Karlsson (DonKarlssonSan)
   Dragging images
 */

 class Rectangle {
   constructor(pos, img) {
     this.pos = pos;
     this.img = img;
     this.width = img.width;
     this.height = img.height;
   }

   draw() {
     image(this.img, this.pos.x, this.pos.y);

   }

   hits(hitpos) {
     if (hitpos.x > this.pos.x &&
       hitpos.x < this.pos.x + this.width &&
       hitpos.y > this.pos.y &&
       hitpos.y < this.pos.y + this.height) {
       return true;
     }
     return false;
   }
 }

 let rects;
 let dragRec;
 let isDragging;
 let clickOffset;
 let imgCb;


 function preload() {

   //SKIN
   imgCb = loadImage("images/skin_01.png");
   imgCb2 = loadImage("images/skin_02.png");
   imgCb3 = loadImage("images/skin_03.png");
   imgCb4 = loadImage("images/skin_04.png");
   imgCb5 = loadImage("images/skin_05.png");

   //HAIR
   imgCb6 = loadImage("images/hair_01.png");

   imgCb7 = loadImage("images/hair_02.png");
   imgCb8 = loadImage("images/hair_03.png");
   imgCb9 = loadImage("images/hair_04.png");
   imgCb28 = loadImage("images/hair_05.png");
   imgCb29 = loadImage("images/hair_06.png");
   imgCb30 = loadImage("images/hair_07.png");
   imgCb31 = loadImage("images/hair_08.png");
   imgCb32 = loadImage("images/hair_09.png");
   imgCb33 = loadImage("images/hair_10.png");
   imgCb34 = loadImage("images/hair_11.png");
   imgCb35 = loadImage("images/hair_12.png");

   //EYES
   imgCb10 = loadImage("images/eyes_01.png");
   imgCb11 = loadImage("images/eyes_02.png");
   imgCb12 = loadImage("images/eyes_03.png");
   imgCb13 = loadImage("images/eyes_04.png");

   //NOSE
   imgCb14 = loadImage("images/nose_01.png");
   imgCb15 = loadImage("images/nose_02.png");
   imgCb16 = loadImage("images/nose_03.png");
   imgCb17 = loadImage("images/nose_04.png");

   //MOUTH
   imgCb18 = loadImage("images/mouth_01.png");
   imgCb19 = loadImage("images/mouth_02.png");
   imgCb20 = loadImage("images/mouth_03.png");
   imgCb21 = loadImage("images/mouth_04.png");

   //SHIRT
   imgCb22 = loadImage("images/shirt_01.png");
   imgCb23 = loadImage("images/shirt_02.png");
   imgCb24 = loadImage("images/shirt_03.png");
   imgCb25 = loadImage("images/shirt_04.png");
   imgCb26 = loadImage("images/shirt_05.png");
   imgCb27 = loadImage("images/shirt_06.png");

   //EYEBROWS

   imgCb36 = loadImage("images/eyebrows_01.png");
   imgCb37 = loadImage("images/eyebrows_02.png");
   imgCb38 = loadImage("images/eyebrows_03.png");



 }

 function setup() {
   rects = [];
   placeImages();
   isDragging = false;
   createCanvas(windowWidth, windowHeight);
 }

 function placeImages() {
   var numImage = 1;
   for (var i = 0; i < numImage; i++) {
     let pos = randomPos();
     let pos2 = randomPos();

     //SKIN
     rects.push(new Rectangle(createVector(-100, -60), imgCb));
     rects.push(new Rectangle(createVector(100, -50), imgCb2));
     rects.push(new Rectangle(createVector(300, -50), imgCb3));
     rects.push(new Rectangle(createVector(500, -50), imgCb4));
     rects.push(new Rectangle(createVector(700, -50), imgCb5));

     //HAIR
     rects.push(new Rectangle(createVector(-100, 315), imgCb6));
     rects.push(new Rectangle(createVector(250, 315), imgCb7));
     rects.push(new Rectangle(createVector(600, 315), imgCb8));
     rects.push(new Rectangle(createVector(-100, 500), imgCb9));
     rects.push(new Rectangle(createVector(250, 500), imgCb28));
     rects.push(new Rectangle(createVector(600, 480), imgCb29));
     rects.push(new Rectangle(createVector(-100, 725), imgCb30));
     rects.push(new Rectangle(createVector(260, 720), imgCb31));
     rects.push(new Rectangle(createVector(600, 720), imgCb32));
     rects.push(new Rectangle(createVector(-75, 1050), imgCb33));
     rects.push(new Rectangle(createVector(300, 1050), imgCb34));
     rects.push(new Rectangle(createVector(675, 1050), imgCb35));

     //EYES
     rects.push(new Rectangle(createVector(1060, 400), imgCb10));
     rects.push(new Rectangle(createVector(1065, 475), imgCb11));
     rects.push(new Rectangle(createVector(1065, 550), imgCb12));
     rects.push(new Rectangle(createVector(1065, 625), imgCb13));

     //NOSE
     rects.push(new Rectangle(createVector(1080, 700), imgCb14));
     rects.push(new Rectangle(createVector(1075, 785), imgCb15));
     rects.push(new Rectangle(createVector(1080, 845), imgCb16));
     rects.push(new Rectangle(createVector(1080, 900), imgCb17));

     //MOUTH
     rects.push(new Rectangle(createVector(1150, 700), imgCb18));
     rects.push(new Rectangle(createVector(1163, 800), imgCb19));
     rects.push(new Rectangle(createVector(1167, 875), imgCb20));
     rects.push(new Rectangle(createVector(1170, 925), imgCb21));

     //SHIRT
     rects.push(new Rectangle(createVector(50, 1500), imgCb22));
     rects.push(new Rectangle(createVector(300, 1540), imgCb23));
     rects.push(new Rectangle(createVector(500, 1540), imgCb24));
     rects.push(new Rectangle(createVector(800, 1540), imgCb25));
     rects.push(new Rectangle(createVector(1050, 1540), imgCb26));
     rects.push(new Rectangle(createVector(1250, 1515), imgCb27));

     //EYEBROWS
     rects.push(new Rectangle(createVector(1075, 1025), imgCb36));
     rects.push(new Rectangle(createVector(1075, 1075), imgCb37));
     rects.push(new Rectangle(createVector(1075, 1125), imgCb38));


   }
 }

 function randomPos() {
   return createVector(random(0, windowWidth), random(0, windowHeight));
 }

 function draw() {
   clear();
   rects.forEach(r => r.draw());

 }

 function mousePressed() {
   let m = createVector(mouseX, mouseY);
   let index;
   rects.forEach((r, i) => {
     if (r.hits(m)) {
       clickOffset = p5.Vector.sub(r.pos, m);
       isDragging = true;
       dragRec = r;
       index = i;

     }
   });
   if (isDragging) {
     putOnTop(index);
   }
 }

 function putOnTop(index) {
   rects.splice(index, 1);
   rects.push(dragRec);
 }

 function mouseDragged() {
   if (isDragging) {
     let m = createVector(mouseX, mouseY);
     dragRec.pos.set(m).add(clickOffset);
   }
 }

 function mouseReleased() {
   isDragging = false;
 }



 function windowResized() {
   resizeCanvas(windowWidth, windowHeight);

 }

 function keyPressed() {
   if (keyCode === DOWN_ARROW) {
     save("mySVG.svg");
     print("saved svg");
     noLoop();
   }
 }