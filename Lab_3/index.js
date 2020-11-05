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
const a = 5;

let main_text_1 = document.getElementById("area_1").value;
let main_text_2 = document.getElementById("area_2").value;
let main_text_3 = document.getElementById("area_3").value;
let main_text_4 = document.getElementById("area_4").value;
let main_text_5 = document.getElementById("area_5").value;
let main_text_6 = document.getElementById("area_6").value;

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

//обчислити площу п’ятикутника, взявши данні зі змінних, результат в кінець 4-го блоку
function task2() {
  let S = (Math.sqrt(Math.pow(a, 2) + 10 * Math.sqrt(a)) * Math.pow(a, 2)) / 4;
  block_4.firstElementChild.innerHTML +=
    "<p>The area of the pentagon is: " + S.toFixed(3) + "</p>";
}

function Flip_Int(n) {
  var digit,
    result = 0;
  while (n) {
    digit = n % 10; // get last digit
    result = result * 10 + digit;
    n = (n / 10) | 0; // remove last digit (|0 отбрасывает дробную часть)
  }
  return result;
}
function Load_Converted_Number() {
  document.cookie.split(";").map((item) => {
    if (item.includes("Num=")) {
      alert(
        "Converted number from cookies= " +
          item.substring(item.indexOf("=") + 1, item.length) +
          '\nCookies will be deleted after pressing "Ok" button!'
      );
      deleteAllCookies();
      alert("Cookies were deleted!");
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

function Load_Borders() {
  if (localStorage.color != 0) {
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
function task4() {
  btnColorRed.onclick = () => {
    localStorage.setItem("color", "#F5A9A9");
    Load_Borders();
  };
  btnColorGreen.onclick = () => {
    localStorage.setItem("color", "#A9F5A9");
    Load_Borders();
  };
  btnColorBlue.onclick = () => {
    localStorage.setItem("color", "#81DAF5");
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

let task6 = () => {
  Btn_Submit_1.onclick = () => {
    localStorage.setItem("block_1", document.getElementById("area_1").value);
    Load_Text();
  };
  Btn_Submit_2.onclick = () => {
    localStorage.setItem("block_2", document.getElementById("area_2").value);
    Load_Text();
  };
  Btn_Submit_3.onclick = () => {
    localStorage.setItem("block_3", document.getElementById("area_3").value);
    Load_Text();
  };
  Btn_Submit_4.onclick = () => {
    localStorage.setItem("block_4", document.getElementById("area_4").value);
    Load_Text();
  };
  Btn_Submit_5.onclick = () => {
    localStorage.setItem("block_5", document.getElementById("area_5").value);
    Load_Text();
  };
  Btn_Submit_6.onclick = () => {
    localStorage.setItem("block_6", document.getElementById("area_6").value);
    Load_Text();
  };
  btnClearText_1.onclick = () => {
    localStorage.removeItem("block_1");
    Load_Text();
  };
  btnClearText_2.onclick = () => {
    localStorage.removeItem("block_2");
    Load_Text();
  };
  btnClearText_3.onclick = () => {
    localStorage.removeItem("block_3");
    Load_Text();
  };
  btnClearText_4.onclick = () => {
    localStorage.removeItem("block_4");
    Load_Text();
  };
  btnClearText_5.onclick = () => {
    localStorage.removeItem("block_5");
    Load_Text();
  };
  btnClearText_6.onclick = () => {
    localStorage.removeItem("block_6");
    Load_Text();
  };
};
function isHTML(str) {
  return /<(br|basefont|hr|input|source|frame|param|area|meta|!--|col|link|option|base|img|wbr|!DOCTYPE).*?>|<(a|abbr|acronym|address|applet|article|aside|audio|b|bdi|bdo|big|blockquote|body|button|canvas|caption|center|cite|code|colgroup|command|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frameset|head|header|hgroup|h1|h2|h3|h4|h5|h6|html|i|iframe|ins|kbd|keygen|label|legend|li|map|mark|menu|meter|nav|noframes|noscript|object|ol|optgroup|output|p|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video).*?<\/\2>/.test(
    str
  );
}
//link https://regex101.com/r/pE1mT5/1

function Load_block_text(block, Storage_ID, area, main_text) {
  text = localStorage.getItem(Storage_ID);
  if (text) {
    document.getElementById(area).value = text;
    if (isHTML(text)) {
      document.getElementById(block).innerHTML = text;
    } else {
      document.getElementById(block).innerText = text;
    }
  } else {
    document.getElementById(block).innerHTML = main_text;
    document.getElementById(area).value = main_text;
  }
}

function Load_Text() {
  Load_block_text("first", "block_1", "area_1", main_text_1);
  Load_block_text("second", "block_2", "area_2", main_text_2);
  Load_block_text("third", "block_3", "area_3", main_text_3);
  Load_block_text("fourth", "block_4", "area_4", main_text_4);
  Load_block_text("fifth", "block_5", "area_5", main_text_5);
  Load_block_text("sixth", "block_6", "area_6", main_text_6);
}

Load_Text();
task1();
task2();
Load_Converted_Number();
task3();
Load_Borders();
task4();
task5();
task6();
