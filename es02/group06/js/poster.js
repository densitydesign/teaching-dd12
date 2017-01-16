function poster() {
    var findImg1 = document.getElementById("movies");
    var findImgItem1 = findImg1.querySelectorAll("li");
    var rightImg1 = document.getElementById("poster");
    var rightImgItem1 = rightImg1.querySelectorAll("div");
    var last = findImgItem1[0];

    for (var i = 0; i < findImgItem1.length; i++) {
        findImgItem1[i].index = i;
        findImgItem1[i].onclick = function () {
            //            last.className = "movies2button";
            rightImgItem1[last.index].className = "myhide";
            //            this.className = "movies2button-selected";
            rightImgItem1[this.index].className = "myshow";
            last = this;
        }
    }
}

window.onload = function () {
    poster();
}
