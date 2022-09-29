// Video
let video;

let classifier;

let label = 'waiting...'

let modelURL = 'https://teachablemachine.withgoogle.com/models/ErQh1Tgw7/';

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json')
}

function setup() {
  createCanvas(640, 520);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2 classify!
function classifyVideo() {
  classifier.classify(video, gotResults)
  
  sleep(5000);
  if (label == 'Pulgar Arriba')
  {

    var win = window.open('https://academia.utp.edu.co/sneia/', '_blank');
    sleep(2000);
    win.focus();
    
  }
  else if (label == 'Paz')
  { 
    
    var win = window.open('https://www.youtube.com/channel/UCN5wPgOlk6Lw6FYonpTAtjQ', '_blank');
    sleep(2000);
    win.focus();
    
  }
}

function draw() {
  background(0);
  
  // Draw the video
  image(video, 0, 0);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width/2, height - 16);
  
  let emoji = '😴';
  /*
  if (label == 'Pulgar Arriba')
  {

    var win = window.open('https://web.whatsapp.com/', '_blank');
    win.focus();
    
  }
  else if (label == 'Paz')
  { 
    
    var win = window.open('https://app4.utp.edu.co/pe/index.php', '_blank');
    win.focus();
    
  }
  */
  if (label == 'Fondo')
  {
    
    queAbrir = 'Nada'
    
    emoji = '😴'
  }
  
  textSize(128);
  text(emoji, width/2, height/2);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  if(error){
    console.error(error);
    return;
  }
  label = results[0].label;
  console.log(results);
  classifyVideo();
}