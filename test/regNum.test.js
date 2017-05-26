describe('generateNumPlate()', function(){
  it('Should generate number plates with values entered into the text box', function(){
    var regNumbers = [];
    // var regNum = document.getElementById("regNum"); //input
    var registration = 'cy 1234';
    var list = document.querySelector('.list');
    var regValue = registration.toUpperCase();
    if (registration.length > 0) {
      // var li = document.createElement('li');
      // li.innerHTML = regNum.value;
      // li.setAttribute('id', 'cool');
      // list.appendChild(li);
      regNumbers.push(regValue);
  }
  assert.equal('CY 1234', regNumbers);
});
});
