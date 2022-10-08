var i = 0;
var src, fileName = "hai";
document.getElementById("btn").onclick = function () {
    i = 1;
    var mainh = document.getElementById("main").value,
    subh = document.getElementById("sub").value;
    if (mainh == "" || subh == "") {
    alert("Please enter both heading");
    } else {
    src = "https://svg-banners.vercel.app/api?type=origin&text1=" + mainh + "%20&text2=" + subh + "&width=800&height=400";
    svg = document.getElementById("svg");
    svg.src = src;
    }
};
const download = document.getElementById("download");
download.addEventListener("click", function onClick(event) {
    const a = document.createElement("a");
    a.href = src;
    a.download = "output.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    document.body.style.backgroundColor = "black";
});

document.getElementById("download").onclick = function () {};