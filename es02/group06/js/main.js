function pressButton() {
    var findImg = document.getElementById("buttons");
    var findImgItem = findImg.querySelectorAll("li");
    var rightImg = document.getElementById("imgs");
    var rightImgItem = rightImg.querySelectorAll("img");
    var last = findImgItem[0];

    for (var i = 0; i < findImgItem.length; i++) {
        findImgItem[i].index = i;
        findImgItem[i].onclick = function () {
            last.className = "button";
            rightImgItem[last.index].className = "myhide";
            this.className = "button-selected";
            rightImgItem[this.index].className = "myshow";
            last = this;
        }

    }
}


window.onload = function () {
    pressButton();
}
