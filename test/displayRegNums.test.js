describe('displayCA()', function(){
  it('Should display all number plates from Cape Town', function(){
    var regNumbers = ['CA 123', 'CJ 234', 'CY 123', 'CL 678'];
    var box = [];
    var display = document.getElementById("display");

    for (var i =0;i < regNumbers.length;i++) {
      if (regNumbers[i].startsWith('CA')) {
        box.push(regNumbers[i]);
        var li = document.createElement("li");
        li.innerHTML = box[i];
        // li.setAttribute("id", "vetkop");
        // display.appendChild(li);
      }
    }
    assert.equal('CA 123', box);
  });
});

describe('displayCJ()', function(){ //PAARL
  it('Should display all number plates from Paarl', function(){
    var regNumbers = ['CA 123', 'CJ 234', 'CY 123', 'CL 678'];
    var box = [];
    var display = document.getElementById("display");

    for (var i =0;i < regNumbers.length;i++) {
      if (regNumbers[i].startsWith('CJ')) {
        box.push(regNumbers[i]);
        var li = document.createElement("li");
        li.innerHTML = box[i];
        // li.setAttribute("id", "vetkop");
        // display.appendChild(li);
      }
    }
    assert.equal('CJ 234', box);
  });
});

describe('displayCY()', function(){
  it('Should display all number plates from Bellville', function(){
    var regNumbers = ['CA 123', 'CJ 234', 'CY 123', 'CL 678'];
    var box = [];
    var display = document.getElementById("display");

    for (var i =0;i < regNumbers.length;i++){
      if (regNumbers[i].startsWith('CY')) {
        box.push(regNumbers[i]);
        var li = document.createElement("li");
        li.innerHTML = box[i];
        // li.setAttribute("id", "vetkop");
        // display.appendChild(li);
      }
    }
    assert.equal('CY 123', box);
  });
});

describe('displayCN()', function(){
  it('Should display all number plates from Stellenbosch', function(){
    var regNumbers = ['CA 123', 'CJ 234', 'CY 123', 'CN 678'];
    var box = [];
    var display = document.getElementById("display");

    for (var i =0;i < regNumbers.length;i++){
      if (regNumbers[i].startsWith('CN')) {
        box.push(regNumbers[i]);
        var li = document.createElement("li");
        li.innerHTML = box[i];
        // li.setAttribute("id", "vetkop");
        // display.appendChild(li);
      }
    }
    assert.equal('CN 678', box);
  });
});
