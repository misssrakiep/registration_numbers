var regNumbers = [];
var box = [];
var display = document.getElementById("display");
var cptBtn = document.getElementById("capeTown");
var paarlBtn = document.getElementById("paarl");
var stelliesBtn = document.getElementById("stellenbosch");
var welliesBtn = document.getElementById("wellington");
var worcesterBtn =document.getElementById("worcester");
var bellvilleBtn =document.getElementById("bellville");

cptBtn.addEventListener("click", function(){
  Display();
 });
paarlBtn.addEventListener("click", function(){
  show();
});
stelliesBtn.addEventListener("click", function(){
  make();
});
welliesBtn.addEventListener("click", function(){
  create();
 });
 worcesterBtn.addEventListener("click", function(){
  give();
});
bellvilleBtn.addEventListener("click", function(){
  offer();
});

makePlate.addEventListener('click', function generate(){
  var regNum = document.getElementById("regNum"); //input
  var makePlate = document.getElementById("makePlate") //button
  var registration = document.getElementById("regNum").value;
  var list = document.querySelector('.list');

if (registration.length > 0) {
    var li = document.createElement('li');
    li.innerHTML = regNum.value;
    li.setAttribute('id', 'cool');
    list.appendChild(li);
    regNumbers.push(registration);
}
});
function Display() {
  for (var i =0;i < regNumbers.length;i++) {
    if (regNumbers[i].startsWith('CA')) {
      box.push(regNumbers[i]);
      var li = document.createElement("li");
      li.innerHTML = box[i];
      li.setAttribute("id", "vetkop");
      display.appendChild(li);
  }
}};

function show(){
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

function make(){
  for (var i =0;i < regNumbers.length;i++){
    if (regNumbers[i].startsWith('CL')) {
      box.push(regNumbers[i]);
      var li = document.createElement("li");
      li.innerHTML = box[i];
      li.setAttribute("id", "vetkop");
      display.appendChild(li);
    }
  }
}

  function create(){
    for (var i =0;i < regNumbers.length;i++){
      if (regNumbers[i].startsWith('CN')) {
        box.push(regNumbers[i]);
        var li = document.createElement("li");
        li.innerHTML = box[i];
        li.setAttribute("id", "vetkop");
        display.appendChild(li);
      }
    }
  };

  function give(){
  for (var i =0;i < regNumbers.length;i++){
    if (regNumbers[i].startsWith('CW')) {
      box.push(regNumbers[i]);
      var li = document.createElement("li");
      li.innerHTML = box[i];
      li.setAttribute("id", "vetkop");
      display.appendChild(li);
    }
  }
  }

  function offer(){
  for (var i =0;i < regNumbers.length;i++){
    if (regNumbers[i].startsWith('CL')) {
      box.push(regNumbers[i]);
      var li = document.createElement("li");
      li.innerHTML = box[i];
      li.setAttribute("id", "vetkop");
      display.appendChild(li);
    }
  }
  }
