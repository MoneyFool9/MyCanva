
window.addEventListener('load', function () {
    // 状态栏切换

    //获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var slide = document.querySelector('.slide');
    var ul = slide.querySelector('ul');
    var li = ul.children[0];
    var slideWidth = li.offsetWidth;
    var num = 0;

    //封装一个函数实现判断箭头状态
    function updateArrowDisplay() {
        arrow_l.style.display = num === 0 ? 'none' : '';
        arrow_r.style.display = num === ul.children.length - 1 ? 'none' : '';
    }
    // 左右箭头点击事件
    arrow_r.addEventListener('click', function () {
        if (num >= ul.children.length - 1) return;
        num++;
        animate(ul, -num * slideWidth, updateArrowDisplay);
    });
    arrow_l.addEventListener('click', function () {
        if (num <= 0) return;
        num--;
        animate(ul, -num * slideWidth, updateArrowDisplay);
    });
    updateArrowDisplay(); 

    // 封装一个动画函数
    function animate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (Math.abs(target - obj.offsetLeft) < Math.abs(step)) {
                obj.style.left = target + 'px';
                clearInterval(obj.timer);
                if (callback) callback();
            } else {
                obj.style.left = obj.offsetLeft + step + 'px';
            }
        }, 15);
    }

    // 实现瀑布流效果
    var flow = document.querySelector('.flow');
    var flow_ul = flow.querySelector('ul');
    // 做无缝衔接效果
    var firstItemClone = flow_ul.children[0].cloneNode(true);
    flow_ul.appendChild(firstItemClone);
    var flowWidth = li.offsetWidth; 
    var num1 = 0;
    var timer = setInterval(flowPlay, 1000); //调用定时器实现瀑布流

    
    function flowPlay() {
        if (num1 > flow_ul.children.length - 2) {
            flow_ul.style.left = 0;
            num1 = 0;
        }
        num1++;
        animate(flow_ul, -num1 * flowWidth);
    }
    // 添加鼠标事件
    flow.addEventListener('mousemove', function () {
        clearInterval(timer);
    });
    flow.addEventListener('mouseleave', function () {
        timer = setInterval(flowPlay, 1000);
    });
});