// 获取dv元素
let dv = document.getElementById("dv");
// 获取点击开始按钮
let btu = document.getElementById("btu");
// 获取点击结束按钮
let btu1 = document.getElementById("btu1");
// 创建ul列表
let ula = document.createElement("ul");
// 将ul追加到父级元素div中
dv.appendChild(ula);
// 获取js中插入的Li标签；
let oLi = document.getElementsByTagName("li");
// 插入数组
let arr = ["肖鹏", "自韬", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
// 动态创建li，追加到ul
for (let i = 0; i < arr.length; i++) {
    // 创建li标签
    let liObj = document.createElement("li");
    liObj.innerText = arr[i];
    ula.appendChild(liObj);
}
// 声明timer
let timer = null;
// 点击开始进行随机选择
btu.onclick = function () {
    // 每次运行之前清除timer;
    clearInterval(timer);
    // 设置定时器
    timer = setInterval(function () {
        // 根据数组长度范围生成随机数
        let i = Math.floor(Math.random() * arr.length);
        // 通过for循环清空所有class类样式
        for (let j = 0; j < oLi.length; j++) {
            oLi[j].removeAttribute("class");
        }
        // 为随机选择的li重新设置类样式
        oLi[i].className = "change";
    }, 50);
};
btu1.onclick = function () {
    // 清除timer;
    clearInterval(timer);
    // 根据类样式找到选中的元素
    let choice = document.getElementsByClassName("change")[0];
    // 获取选中元素的内容
    let name = choice.innerText;
    // 获取选中展示位置
    let nameSpan = document.getElementsByClassName('name')[0];
    // 位置添加内容
    nameSpan.innerText = name + "号";
}
