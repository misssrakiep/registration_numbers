var Display = function () {
  for (var i =0;i < regNumbers.length;i++) {
    if (regNumbers[i].startsWith('CA')) {
      box.push(regNumbers[i]);
      var li = document.createElement("li");
      li.innerHTML = box[i];
      li.setAttribute("id", "vetkop");
      display.appendChild(li);
    }
  }
};

var show = function (){
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

var make = function (){
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

var offer = function (){
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
