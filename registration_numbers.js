var box = [];
var display = document.getElementById("display");
var cptBtn = document.getElementById("capeTown");
var paarlBtn = document.getElementById("paarl");
var stelliesBtn = document.getElementById("stellenbosch");
var bellvilleBtn = document.getElementById("bellville");
var makePlate = document.getElementById("makePlate") //button

makePlate.addEventListener('click', function (){
  generate();
});

cptBtn.addEventListener("click", function(){
  Display();
});

paarlBtn.addEventListener("click", function(){
  show();
});

stelliesBtn.addEventListener("click", function(){
  make();
});


bellvilleBtn.addEventListener("click", function(){
  offer();
});
