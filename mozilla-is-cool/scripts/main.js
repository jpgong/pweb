/*
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!'

let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('我最喜欢巧克力冰激淋了。');
} else {
  alert('但是巧克力才是我的最爱呀……');
}

//函数定义

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;

}
multiply(4, 23)
multiply(8, 91)

//事件定义

document.querySelector('html').onclick = function(){
    alert('别戳我，我怕疼');
}*/

// 图片切换代码
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src','images/firefox2.png');
  } else {
     myImage.setAttribute('src','images/firefox-icon.png');
  }
}

// 个性化欢迎信息
/*
let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   setHeading(storedName);
}*/

let myButton = document.querySelector('button');
myButton.onclick = setUserName;


function setUserName() {
  let myName = prompt('请输入你的名字');
  localStorage.setItem('name', myName);
  setHeading(myName);
}

function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'Mozilla 酷毙了，' + name + '！';
}