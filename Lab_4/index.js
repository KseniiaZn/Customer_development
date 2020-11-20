let area_1 = document.getElementById("area_1");
let area_2 = document.getElementById("area_2");
let area_4 = document.getElementById("area_4");
let block_0 = document.getElementById("0");
let block_1 = document.getElementById("1");
let block_2 = document.getElementById("2");
let block_3 = document.getElementById("3");
let block_4 = document.getElementById("4");
let block_5 = document.getElementById("5");
let block_6 = document.getElementById("6");
let block_7 = document.getElementById("7");
let Btn_Event = document.getElementById("Btn_Ch_Bg");
let Btn_Get_Commits = document.getElementById("Btn_Get_Commits");
let Btn_Clear_Commits = document.getElementById("Btn_Clear_Commits");
let Git_Resp_1 = document.getElementById("git_resp_1");
var x;
let mas_Blocks = [
  block_1,
  block_2,
  block_3,
  block_4,
  block_5,
  block_6,
  block_7,
];

function Swap_Content(ind) {
  if (typeof mas_Blocks[ind] != "undefined") {
    [mas_Blocks[ind].innerHTML, mas_Blocks[(ind + 1) % 7].innerHTML] = [
      mas_Blocks[(ind + 1) % 7].innerHTML,
      mas_Blocks[ind].innerHTML,
    ];
  }
}
function Task_1() {
  let time = 0;
  for (let i = mas_Blocks.length; i > 0; i--) {
    time += 500;
    setTimeout(Swap_Content, time, i);
  }
}

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
function Bg_Change() {
  var Rnd_Col =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  block_2.style.background = Rnd_Col;
}
function Blue_Black_Change() {
  if (x === 1) {
    color = "blue";
    x = 2;
  } else {
    color = "black";
    x = 1;
  }
  document.getElementById("main_cont").style.color = color;
}
function Task_2() {
  x = 1;
  setInterval(Blue_Black_Change, 5000);
  Btn_Event.addEventListener("click", Bg_Change);
  Btn_Event.onclick = () => {
    var Rnd_Col =
      "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    setTimeout(() => {
      (block_1.style.color = Rnd_Col), (block_7.style.color = Rnd_Col);
    }, 5000);
  };
}

function c_main(callback_1, callback_2) {
  console.log("1. Main function");
  callback_1(callback_2);
  console.log("5. Again main function");
}
function c_1(callback_2) {
  console.log("2. First function");
  callback_2();
  console.log("4. Again first function");
}
function c_2() {
  console.log("3. Second function");
}
function Task_4(callback_main, callback_1, callback_2) {
  callback_main(callback_1, callback_2);
}

let Selection_Sort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  return arr;
};
function Task_5() {
  const regex1 = /^\d+$/;
  Btn_Sbm_4.onclick = () => {
    Arr = area_4.value.split(" ");
    let it = Arr.length;
    for (let i = 0; i < it; i++) {
      for (let j = 0; j < Arr.length; j++) {
        if (!regex1.test(Arr[j])) {
          Arr.splice(j, 1);
          break;
        }
      }
    }
    for (var i = 0; i < Arr.length; i++) {
      Arr[i] = parseInt(Arr[i]);
    }
    Arr = Selection_Sort(Arr);
    area_4.value = "";
    for (let i = 0; i < Arr.length; i++) {
      area_4.value += Arr[i] + " ";
    }
  };
}

function Get_Commits(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        Git_Resp_1.style.background = "#FE2E2E";
        Git_Resp_1.style.textAlign = "center";
        Git_Resp_1.style.height = "50px";
        Git_Resp_1.style.border = "2px solid black";
        Git_Resp_1.innerText = response.status + " - " + response.statusText;
        throw new Error(response.message);
      }
      return response.json();
    })
    .then((contents) => {
      let answ = "";
      contents.forEach((i) => {
        answ += `${i.commit.author.name} : ${i.commit.message}\n`;
      });
      Git_Resp_1.style.background = "#cee3f6";
      Git_Resp_1.style.height = "70px";
      Git_Resp_1.style.textAlign = "left";
      Git_Resp_1.style.border = "1px double black";
      Git_Resp_1.innerText = answ;
    })
    .catch((Error) => {
      //alert("error");
    });
}
function Task_3() {
  Btn_Get_Commits.onclick = () => {
    let url =
      "https://api.github.com/repos/" +
      area_1.value +
      "/" +
      area_2.value +
      "/commits";
    Get_Commits(url);
  };
  Btn_Clear_Commits.onclick = () => {
    area_1.value ="";
    area_2.value ="";
    Git_Resp_1.innerText = "";
    Git_Resp_1.style.background = "white";
    Git_Resp_1.style.height = "0px";
    Git_Resp_1.style.border = "none";
  };
}

Task_1();
Task_2();
Task_3();
Task_4(c_main, c_1, c_2);
Task_5();
//https://api.github.com/repos/KseniiaZn/Web_Development/commits
