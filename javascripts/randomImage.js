function randomPick(arr) {

  var selected = arr[Math.floor(Math.random()*arr.length)]

  return selected;
}


images = 
[ 

"zombie",
"waldo",
"turbin",
"trek",
"super",
"spider",
"sketch",
"skeleton",
"royal",
"ninja",
"mega",
"magic",
"link",
"jobs",
"fancy",
"digi",
"baseball",
"aviator",
"adventure"
]



function randomHover () {

  var myImage = document.getElementById('hover');
  var selImage = randomPick(images);

  myImage.src = '../images/cat-' + selImage + '.png';
  

}

function resetState() {

  var myImage = document.getElementById('hover');
  myImage.src = "../images/github.png";

}
