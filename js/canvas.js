// section2点击事件
var btn_list = document.querySelector('.section2-left');
var lis = document.querySelectorAll('.section2-left button');
var items = document.querySelectorAll('.section2-img');

for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', i);
    lis[i].onclick = function () {
        for (var i = 0; i < lis.length; i++) {
            lis[i].classList.remove('current');
        }
        this.classList.add('current');
        var index = this.getAttribute('index');
        console.log(index);
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'none';
        }
        items[index].style.display = 'block';
    }
}

//封装动画函数
function animate(obj, target, callback) {
    obj.timer = setInterval(() => {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft >= target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 30);
}

//实现瀑布流
