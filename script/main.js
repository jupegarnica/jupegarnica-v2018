var bg = [];
var i = 3;

var colors = [
  "#1E8C93",
  "#ffc000",
  "tomato",
  "#0078A7",
  "#413123",
  "#333340",
  "#000",
];
bg[0] = new FloorBG();
bg[1] = new BirdsBG();
bg[2] = new AsciiBG();
bg[3] = new CubesBG();
bg[4] = new JailBG();
bg[5] = new LinesBG();
bg[6] = new ISOcubesBG();
var bgCurrent = bg[i];
bgCurrent.play();
$("body").css("background", colors[i]);

function changeBackground() {
  if (i != bg.length - 1) {
    i++;
  } else {
    //return; //not looping
    i = 0;
  }
  //             console.log(i);
  bgCurrent.stop();
  bgCurrent = bg[i];
  bgCurrent.play();
  $("body").css("background", colors[i]);
}
setInterval(changeBackground, 20000);
