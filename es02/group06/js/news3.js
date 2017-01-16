function pressbook() {
    var findImg1 = document.getElementById("news3Button");
    var findImgItem1 = findImg1.querySelectorAll("li");
    var rightImg1 = document.getElementById("news3Content");
    var rightImgItem1 = rightImg1.querySelectorAll("img");
    var last = findImgItem1[0];

    for (var i = 0; i < findImgItem1.length; i++) {
        findImgItem1[i].index = i;
        findImgItem1[i].onclick = function () {
            last.className = "news3button";
            rightImgItem1[last.index].className = "myhide";
            this.className = "news3button-selected";
            rightImgItem1[this.index].className = "myshow";
            last = this;
        }
    }
}

window.onload = function () {
    pressbook();
}
