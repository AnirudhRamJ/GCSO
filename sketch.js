var barrier1, barrier2, barrier3, barrier4;
var MarutiSwift, FordTaurus, ChevroletBolt, TeslaModel3;
var MarutiSwiftSpeed, FordTaurusSpeed, ChevroletBoltSpeed, TeslaModel3Speed;
var MarutiSwiftWeight, FordTaurusWeight, ChevroletBoltWeight, TeslaModel3Weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  // Dividers
  createSprite(400, 100, 800, 10);
  createSprite(400, 200, 800, 10);
  createSprite(400, 300, 800, 10);
  // Random speed and weight
  MarutiSwiftWeight = random(400, 1800);
  FordTaurusWeight = random(400, 1800);
  ChevroletBoltWeight = random(400, 1800);
  TeslaModel3Weight = random(400, 1800);
  MarutiSwiftSpeed = random(55,90);
  FordTaurusSpeed = random(55,90);
  ChevroletBoltSpeed = random(55,90);
  TeslaModel3Speed = random(55,90);

  // Barriers
  barrier1 = createSprite(780,50,20,75);
  barrier1.setCollider("rectangle",0,0,20,75,0);
  barrier2 = createSprite(780,150,20,75);
  barrier2.setCollider("rectangle",0,0,20,75,0);
  barrier3 = createSprite(780,250,20,75);
  barrier3.setCollider("rectangle",0,0,20,75,0);
  barrier4 = createSprite(780,350,20,75);
  barrier4.setCollider("rectangle",0,0,20,75,0);

  // Cars
  MarutiSwift = createSprite(20,50,30,15);
  MarutiSwift.shapeColor = color(255,255,255);
  MarutiSwift.setSpeed(MarutiSwiftSpeed);

  FordTaurus = createSprite(20,150,30,15);
  FordTaurus.shapeColor = color(255,255,255);
  FordTaurus.setSpeed(FordTaurusSpeed);

  ChevroletBolt = createSprite(20,250,30,15);
  ChevroletBolt.shapeColor = color(255,255,255);
  ChevroletBolt.setSpeed(ChevroletBoltSpeed);

  TeslaModel3 = createSprite(20,350,30,15);
  TeslaModel3.shapeColor = color(255,255,255);
  TeslaModel3.setSpeed(TeslaModel3Speed);
  
  







}

function draw() {
  background("black");
  if (barrier1.isTouching(MarutiSwift)) {
    calculateDeformation(MarutiSwift, MarutiSwiftWeight, MarutiSwiftSpeed);
  }
  if (barrier2.isTouching(FordTaurus)) {    
    calculateDeformation(FordTaurus, FordTaurusWeight, FordTaurusSpeed);
  }
  if (barrier3.isTouching(ChevroletBolt)) {
    calculateDeformation(ChevroletBolt, ChevroletBoltWeight, ChevroletBoltSpeed);
  }
  if (barrier4.isTouching(TeslaModel3)) {
    calculateDeformation(TeslaModel3, TeslaModel3Weight, TeslaModel3Speed);
  }

  fill("white");
  textSize(25);
  text("GCSO NCAP",800,25);

  fill("white");
  textSize(15);
  text("Red = 1 stars",1150,100);
  text("Yellow = 3 stars",1150,125);
  text("Green = 5 stars",1150,150);
  drawSprites();
}

// Calculate deformation based on car weight and speed
function calculateDeformation(car, carWeight, carSpeed) {
  car.velocityX = 0;
  deformation = (0.5 * carWeight * carSpeed * carSpeed)/22500;
  if (deformation <= 100) {
    car.shapeColor = color(0,255,0);
  } else if (deformation > 100 && deformation <= 180) {
    car.shapeColor = color(230,230,0);
  } else if (deformation > 180) {
    car.shapeColor = color(255,0,0);
  }

  
}

