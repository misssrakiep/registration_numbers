var regNumbers = [];
var box = [];
var display = document.getElementById("display");
var cptBtn = document.getElementById("capeTown");
var paarlBtn = document.getElementById("paarl");
var stelliesBtn = document.getElementById("stellenbosch");
var bellvilleBtn = document.getElementById("bellville");
var regNum = document.getElementById("regNum"); //input
var makePlate = document.getElementById("makePlate") //button

makePlate.addEventListener('click', function generate(){

  var registration = document.getElementById("regNum").value;
  var list = document.querySelector('.list');

  var regValue = registration.toUpperCase();

  if (registration.length > 0) {
    var li = document.createElement('li');
    li.innerHTML = regNum.value;
    li.setAttribute('id', 'cool');
    list.appendChild(li);
    regNumbers.push(regValue);
  }
});

cptBtn.addEventListener("click", function(){
  //console.log(regNumbers);
  Display();
});

function Display() {
  display.innerHTML = "";
  for (var i =0;i < regNumbers.length;i++) {
    if (regNumbers[i].startsWith('CA')) {
      box.push(regNumbers[i]);
      var li = document.createElement("li");
      li.innerHTML = box[i];
      li.setAttribute("id", "vetkop");
      display.appendChild(li);
  }
};

paarlBtn.addEventListener("click", function(){
  show();
});


function show(){
  display.innerHTML = "";

  for (var i =0;i < regNumbers.length;i++) {
    if (regNumbers[i].startsWith('CJ')) {
      box.push(regNumbers[i]);
      var li = document.createElement("li");
      li.innerHTML = box[i];
      li.setAttribute("id", "vetkop");
      display.appendChild(li);
  }
  }
};

stelliesBtn.addEventListener("click", function(){
  make();
});




function make(){
  for (var i =0;i < regNumbers.length;i++){
    if (regNumbers[i].startsWith('CY')) {
      box.push(regNumbers[i]);
      var li = document.createElement("li");
      li.innerHTML = box[i];
      li.setAttribute("id", "vetkop");
      display.appendChild(li);
    }
  }
};

bellvilleBtn.addEventListener("click", function(){
  offer();
});

  function offer(){
    for (var i =0;i < regNumbers.length;i++){
      if (regNumbers[i].startsWith('CN')) {
        box.push(regNumbers[i]);
        var li = document.createElement("li");
        li.innerHTML = box[i];
        li.setAttribute("id", "vetkop");
        display.appendChild(li);
      }
      }
  }};
