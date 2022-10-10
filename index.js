var i = 0;
var src, fileName = "hai";
document.getElementById("btn").onclick = function () {
    i = 1;
    var mainh = document.getElementById("main").value,
    subh = document.getElementById("sub").value;
    if (mainh == "" || subh == "") {
    alert("Please enter both headings");
    } else {
    src = "https://svg-banners.vercel.app/api?type=origin&text1=" + mainh + "%20&text2=" + subh + "&width=1130&height=600";
    svg = document.getElementById("svg");
    svg.src = src;
    document.getElementById("download").setAttribute("href",src)
    document.getElementById("download").removeAttribute("hidden")
    document.getElementById("btn").style.display = "none"

    }
};
