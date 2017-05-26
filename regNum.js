var regNumbers = [];
var regNum = document.getElementById("regNum"); //input

var generate = function(){
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
};
