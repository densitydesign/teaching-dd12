function pressbook3() {
    var findImg2 = document.getElementById("book3");
    var findImgItem2 = findImg2.querySelectorAll("li");
    var rightImg2 = document.getElementById("book3Svg");
    var rightImgItem2 = rightImg2.querySelectorAll("div");
    var last = findImgItem2[0];

    for (var i = 0; i < findImgItem2.length; i++) {
        findImgItem2[i].index = i;
        findImgItem2[i].onclick = function () {
            last.className = "book3";
            rightImgItem2[last.index].className = "myhide";
            this.className = "book3-selected";
            rightImgItem2[this.index].className = "myshow";
            last = this;
        }
    }
}

window.onload = function () {
    pressbook3();
}
