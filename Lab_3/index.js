let block_X = document.getElementById("X");
let block_Y = document.getElementById("Y");
let block_1 = document.getElementById("1");
let block_2 = document.getElementById("2");
let block_3 = document.getElementById("3");
let block_4 = document.getElementById("4");
let block_5 = document.getElementById("5");
let block_6 = document.getElementById("6");
let block_7 = document.getElementById("7");

let Btn_Event = document.getElementById("Btn_Ch_Bg");
let Btn_Submit_5 = document.getElementById("Btn_Submit_5");
let btnClearText_5 = document.getElementById("btnClearText_5");

let Btn_Submit_2 = document.getElementById("Btn_Submit_2");
let btnClearText_2 = document.getElementById("btnClearText_2");
let a = 5;

function deleteAllCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

//поміняти місцями контент блоків Х та У
function task1() {
  let x = block_X.innerHTML;
  block_X.innerHTML = block_Y.innerHTML;
  block_Y.innerHTML = x;
}

//обчислити площу прямокутника, взявши данні зі змінних, результат в кінець 4-го блоку
function task2() {
  let S = (Math.sqrt(Math.pow(a, 2) + 10 * Math.sqrt(a)) * Math.pow(a, 2)) / 4;
  block_4.firstElementChild.innerHTML +=
    "<p>The area of the pentagon is: " + S.toFixed(3) + "</p>";
}

function Flip_Int(n) {
  var digit,
    result = 0;
  while (n) {
    digit = n % 10;    // get last digit
    result = result * 10 + digit;
    n = (n / 10) | 0;  // remove last digit (|0 отбрасывает дробную часть)
  }
  return result;
}
function Load_Converted_Number(){
  document.cookie.split(';').map(item => {
    if (item.includes('Num=')) {
      if (window.confirm('Converted number from cookies= ' + item.substring(item.indexOf('=') + 1, item.length)
      + '\nCookies will be deleted after pressing "Ok" button!')){
          //document.cookie.replace('Num=12','hiiiii');
          deleteAllCookies();
          alert("Cookies were deleted!");
      }
    }
});
}
//перевернути задане в формі блока 4 число, зберегти в куках, вивести діалогове вікно з результатом
function task3() {
  Btn_Done.onclick = () => {
    let number = Number(document.getElementById("Num_1").value);
    if (number != 0) {
      let date = new Date(Date.now() + 86400e3);
      date = date.toUTCString();
      document.cookie = "Num =" + number + "; expires=" + date + "; path=/";
      converted_number = Flip_Int(number);
      alert("Converted number = " + converted_number);
    }
  };
}

function Load_Borders(){
  if(localStorage.color != 0){
    block_1.style.borderColor = localStorage.color;
    block_2.style.borderColor = localStorage.color;
    block_3.style.borderColor = localStorage.color;
    block_4.style.borderColor = localStorage.color;
    block_5.style.borderColor = localStorage.color;
    block_6.style.borderColor = localStorage.color;
    block_7.style.borderColor = localStorage.color;
  }
}
//змінти колір рамок на вказаний користувачем, зберегти в локальному сховищі
function task4(){
  btnColorRed.onclick = () => {
    localStorage.setItem('color', '#F5A9A9');
    Load_Borders();
  };
  btnColorGreen.onclick = () => {
    localStorage.setItem('color', '#A9F5A9');
    Load_Borders();
  };
  btnColorBlue.onclick = () => {
    localStorage.setItem('color', '#81DAF5');
    Load_Borders();
  };
}

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function Bg_Change() {
  var Rnd_Col =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  block_2.style.background = Rnd_Col;
}

//при настанні події click колір фону четвертого блоку змінюється на рандомний
function task5() {
  Btn_Event.addEventListener("click", Bg_Change);
}

function Load_Text_5() {
  if(localStorage.text_5){
    document.getElementById("For_User_5").innerHTML += localStorage.text_5 + "\n";
  }
}

function Load_Text_2() {
  if(localStorage.text_2){
    document.getElementById("For_User_2").innerHTML += localStorage.text_2 + "\n";
  }
}

let task6 = () => {
  Btn_Submit_2.onclick = () => {
    let User_Text = document.getElementById("inputUserText_2").value;
    if (User_Text != "") {
        localStorage.setItem('text_2', User_Text);
        Load_Text_2();
    }
  };
  btnClearText_2.onclick = () => {
    document.getElementById("For_User_2").innerHTML = "";
    localStorage.removeItem('text_2');
  };

  Btn_Submit_5.onclick = () => {
    let User_Text = document.getElementById("inputUserText_5").value;
    if (User_Text != "") {
        localStorage.setItem('text_5', User_Text);
        Load_Text_5();
    }
  };
  btnClearText_5.onclick = () => {
    document.getElementById("For_User_5").innerHTML = "";
    localStorage.removeItem('text_5');
  };
};

task1();
task2();
Load_Converted_Number();
task3();
Load_Borders();
task4();
task5();
Load_Text_2();
Load_Text_5();
task6();