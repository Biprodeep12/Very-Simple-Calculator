let input = document.getElementById('searchinput');
let result = document.getElementById('symb16');
let del = document.getElementById('symb1');
let multi = document.getElementById('symb2');
let divd = document.getElementById('symb3');
let back = document.getElementById('symb4');
let one = document.getElementById('symb5');
let two = document.getElementById('symb6');
let thr = document.getElementById('symb7');
let plus = document.getElementById('symb8');
let fou = document.getElementById('symb9');
let fiv = document.getElementById('symb10');
let six = document.getElementById('symb11');
let min = document.getElementById('symb12');
let sev = document.getElementById('symb13');
let eig = document.getElementById('symb14');
let nin = document.getElementById('symb15');
let obra = document.getElementById('symb17');
let zer = document.getElementById('symb18');
let cbra = document.getElementById('symb19');
let poi = document.getElementById('symb20');

back.addEventListener('click', function () {
  let CurrentValue = input.value;
  input.value = CurrentValue.slice(0, -1);
});
obra.addEventListener('click', function () {
  input.value += '(';
});
zer.addEventListener('click', function () {
  input.value += '0';
});
cbra.addEventListener('click', function () {
  input.value += ')';
});
poi.addEventListener('click', function () {
  input.value += '.';
});
plus.addEventListener('click', function () {
  let CurrentValue = input.value;
  if (
    CurrentValue.endsWith('+') ||
    CurrentValue.endsWith('-') ||
    CurrentValue.endsWith('/') ||
    CurrentValue.endsWith('*')
  ) {
    input.value = CurrentValue.slice(0, -1);
    input.value += '+';
  } else {
    input.value += '+';
  }
});
min.addEventListener('click', function () {
  let CurrentValue = input.value;
  if (
    CurrentValue.endsWith('+') ||
    CurrentValue.endsWith('-') ||
    CurrentValue.endsWith('/') ||
    CurrentValue.endsWith('*')
  ) {
    input.value = CurrentValue.slice(0, -1);
    input.value += '-';
  } else {
    input.value += '-';
  }
});
divd.addEventListener('click', function () {
  let CurrentValue = input.value;
  if (
    CurrentValue.endsWith('+') ||
    CurrentValue.endsWith('-') ||
    CurrentValue.endsWith('/') ||
    CurrentValue.endsWith('*')
  ) {
    input.value = CurrentValue.slice(0, -1);
    input.value += '/';
  } else {
    input.value += '/';
  }
});
multi.addEventListener('click', function () {
  let CurrentValue = input.value;
  if (
    CurrentValue.endsWith('+') ||
    CurrentValue.endsWith('-') ||
    CurrentValue.endsWith('/') ||
    CurrentValue.endsWith('*')
  ) {
    input.value = CurrentValue.slice(0, -1);
    input.value += '*';
  } else {
    input.value += '*';
  }
});
one.addEventListener('click', function () {
  input.value += 1;
});
two.addEventListener('click', function () {
  input.value += 2;
});
thr.addEventListener('click', function () {
  input.value += 3;
});
fou.addEventListener('click', function () {
  input.value += 4;
});
fiv.addEventListener('click', function () {
  input.value += 5;
});
six.addEventListener('click', function () {
  input.value += 6;
});
sev.addEventListener('click', function () {
  input.value += 7;
});
eig.addEventListener('click', function () {
  input.value += 8;
});
nin.addEventListener('click', function () {
  input.value += 9;
});
del.addEventListener('click', function () {
  document.getElementById('searchinput').value = '';
});

result.addEventListener('click', function () {
  cucu();
});
function clearDisplay() {
  input.value = '';
}
const cucu = function () {
  try {
    let res = eval(input.value);
    input.value = res;
  } catch (error) {
    data = 'Error';
    setTimeout(clearDisplay, 1500);
    input.value = 'ERROR';
  }
};

input.addEventListener('keyup', function (e) {
  if (e.keyCode == 13) {
    cucu();
  }
});
