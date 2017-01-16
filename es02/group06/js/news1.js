function pressnews() {
    var findImg1 = document.getElementById("newsButton");
    var findImgItem1 = findImg1.querySelectorAll("li");
    var rightImg1 = document.getElementById("newsContent");
    var rightImgItem1 = rightImg1.querySelectorAll("img");
    var last = findImgItem1[0];

    for (var i = 0; i < findImgItem1.length; i++) {
        findImgItem1[i].index = i;
        findImgItem1[i].onclick = function () {
            last.className = "newsbutton";
            rightImgItem1[last.index].className = "myhide";
            this.className = "newsbutton-selected";
            rightImgItem1[this.index].className = "myshow";
            last = this;
        }
    }
}

window.onload = function () {
    pressnews();
}
