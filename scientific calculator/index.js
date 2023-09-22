var screen = document.querySelector("#screen");
var btn = document.querySelectorAll(".btn");
let stack=[]

// ACCESS BUTTON VALUES
for (item of btn) {
  item.addEventListener("click", (e) => {
    btntext = e.target.innerText;

    if (btntext == "×") {
      btntext = "*";
    }

    if (btntext == "÷") {
      btntext = "/";
    }
    stack.push(btntext);
    console.log(stack)
    screen.value=""
    for(i=0;i<stack.length;i++){
      screen.value+=stack[i];
    }
    
  });
}
function clearAll(){
  screen.value="";
  stack=[];
}
//complex operations
function sin() {
  let tempHolder=stack.pop()
  let temp=Math.sin(tempHolder);
  screen.value += temp;
}

function cos() {
  let tempHolder=stack.pop()
  let temp=Math.cos(tempHolder)
  screen.value += temp;
}

function tan() {
  let tempHolder=stack.pop()
  let temp = Math.tan(tempHolder);
  screen.value += temp;
}

function pow() {
  let tempHolder=stack.pop()
  let temp = Math.pow(tempHolder, 2);
  screen.value += temp;
}

function sqrt() {
  let tempHolder=stack.pop()
  let temp=Math.sqrt(tempHolder, 2);
  screen.value = temp;
}

function log() {
  let tempHolder=stack.pop()
  let temp=Math.log(tempHolder);
  screen.value = temp;
}

function pi() {
  screen.value = 3.14159265359;
}

function e() {
  screen.value += 2.71828182846;
}
//find factorial of number
function fact() {
  var i, num, f;
  f = 1;
  num = screen.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }

  i = i - 1;

  screen.value = f;
}

function backspc() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
}

