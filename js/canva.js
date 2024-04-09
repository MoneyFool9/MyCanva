// 轮播图事件




// section2点击事件
document.addEventListener("DOMContentLoaded", function () {
  var btn1 = document.getElementById('btn1');
  var btn2 = document.getElementById('btn2');
  var btn3 = document.getElementById('btn3');
  var isExpanded = false; // 用来跟踪状态，默认为 false

  btn1.addEventListener('click', function () {
    if (!isExpanded) {
      btn1.classList.add('expanded');
      isExpanded = true; // 点击后更改状态为 true
      btn2.classList.remove('expanded');
      var pTags = btn2.querySelectorAll('p');
      pTags.forEach(function (p) {
        p.parentNode.removeChild(p);
      });
      // 创建一个新的 <p> 元素
      var pTag = document.createElement('p');
      // 设置其内容
      pTag.textContent = "使用自己的媒体文件或现成的模板开始设计，或将脑海中想象的设计实现出来。";
      // 添加 hide 类，初始状态隐藏
      pTag.classList.add('hide');
      // 将新创建的 <p> 元素添加到 box 中
      btn1.appendChild(pTag);
    } else {
      btn1.classList.remove('expanded');
      isExpanded = false; // 再次点击后更改状态为 false

      // 移除所有新增的 <p> 元素
      var pTags = btn1.querySelectorAll('p');
      pTags.forEach(function (p) {
        p.parentNode.removeChild(p);
      });
    }
  });
  btn2.addEventListener('click', function () {
    if (!isExpanded) {
      btn2.classList.add('expanded');
      isExpanded = true; // 点击后更改状态为 true
      btn1.classList.remove('expanded');
      var pTags = btn1.querySelectorAll('p');
      pTags.forEach(function (p) {
        p.parentNode.removeChild(p);
      })
      // 创建一个新的 <p> 元素
      var pTag = document.createElement('p');
      // 设置其内容
      pTag.textContent = "使用自己的媒体文件或现成的模板开始设计，或将脑海中想象的设计实现出来。";
      // 添加 hide 类，初始状态隐藏
      pTag.classList.add('hide');
      // 将新创建的 <p> 元素添加到 box 中
      btn2.appendChild(pTag);
    } else {
      btn2.classList.remove('expanded');
      isExpanded = false; // 再次点击后更改状态为 false

      // 移除所有新增的 <p> 元素
      var pTags = btn2.querySelectorAll('p');
      pTags.forEach(function (p) {
        p.parentNode.removeChild(p);
      });
    }
  });
});



var btn_list = document.querySelector('.section2-left');
var lis = document.querySelectorAll('.section2-left button');
var items = document.querySelectorAll('.section2-img');
var isOnclick = false;

for (var i = 0; i < lis.length; i++) {
  lis[i].setAttribute('index', i);
  lis[i].onclick = function () {
    for (var i = 0; i < lis.length; i++) {
      lis[i].classList.remove('current');
    }
    if (!isOnclick) {
      this.classList.add('current');
      isOnclick = true;
    } else {
      this.classList.remove('current');
      isOnclick = false;
    }

    var index = this.getAttribute('index');
    console.log(index);
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = 'none';
    }
    items[index].style.display = 'block';
  }
}