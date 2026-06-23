function checkIsPower(number, power) {
  var isTrue;
  var i = 1;
  while (i <= number) {
    if (i === number) {
      isTrue = true;
    } else {
      isTrue = false;
    }
    i = i*power;
  }
  return isTrue; 
}

function findFactor(number, power) {
  for (var i = number; true; i--) {
    if (checkIsPower(i, power)) {
      return i;
      break;
    }
  }
}

function getFactors(number, power) {
  var factorList = [];
  var i = number;
  while (i >= 1) {
    factorList.push(findFactor(i, power));
    i = i - findFactor(i, power);
  }
  return factorList;
}

function createDigits(number, base) {
  var digits = [];
  var factors = getFactors(number, base);
  var i = factors[0];
  var temp = 0;
  while (i >= 1) {
    while (factors.includes(i)) {
    temp++;
    factors.splice(0, 1);
    }
    digits.push(temp);
    i = i/base;
    temp = 0;
  }
  return digits;
}

function createString(number, base) {
  var string = '';
  if (base === 0 || base === 1) {
    return 'Please choose a base of 2 or greater.';
  } else if (base > 10) {
    return 'Please choose a base of 10 or under.';
  } else {
    var digits = createDigits(number, base);
    var i = 0
    for (var i = 0; i < digits.length; i++) {
      string = `${string}${digits[i]}`;
    }
    return string;
  }
}

function displayNumber() { 
  var number = Number(document.getElementById('input').value);
  var base = Number(document.getElementById('base').value);
document.getElementById('display').innerHTML = createString(number, base);
  document.getElementById('display').style.padding = '3px'
}
