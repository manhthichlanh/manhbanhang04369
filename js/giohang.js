var tongthanhtien = 0;
var index = 0;
var formatmn = 0;
var data_old = "";
var data = "";

function them(btn) {

    //Các thành phần quan trọng
    var father = btn.parentNode;

    var anh = father.children[1].children[0].src;

    var ten = father.children[2].innerText;

    var gia = father.children[3].children[0].children[0].innerText;




    if (localStorage.getItem("key_1") != null && localStorage.getItem("key_1").includes(ten)) {
        alert("Sản phẩm đã có trong giỏ hàng!")
    } else {
        addlocal(anh, ten, gia);
        alert("Đã thêm sản phẩm vào giỏ hàng!")
    }


}

function addlocal(x, y, z) {
    data_old = localStorage.getItem("key_1");
    if (data_old == null) data_old = "";

    data =
        '<tr>' +
        '<td><img src="' + x + '" alt="" id="anh"></td>' +
        '<td> ' + y + ' </td>' +
        '<td><span id="gia">' + z + '</span> ₫ </td>' +
        '<td><input type="number" name="" onclick="thaydoi();" value="1" min="0"></td>' +
        '<td ><span id="thanhtien"></span> <u>đ</u></td>' +
        '</tr>'
    localStorage.setItem("key_1", data_old + data);
}

function thaydoi() {
    tongthanhtien = 0;

    var sosanpham = document.querySelectorAll("tbody tr")


    for (var i = 0; i < sosanpham.length; i++) {
        //xóa sản phẩm khi số lượng về 0
        var input = sosanpham[i].querySelector("input").value;

        if (input == 0) {
            var hoi = prompt("Bạn có muốn xóa sản phẩm này không yes(y) or no(n)");
            if (hoi == "y") {

                sosanpham[i].remove();
                var newhtml = document.getElementById("place").innerHTML
                localStorage.setItem("key_1", newhtml)
            }

        }
        //Lấy giá từ id
        var gia = sosanpham[i].querySelector("#gia").innerText;

        index = gia.split(",");


        var tong = Number(format(index) * input);



        var outputprice = sosanpham[i].querySelector("#thanhtien");

        outputprice.innerText = tong.toLocaleString('de-DE');

        tongthanhtien += tong;


    }
    var outputsum = document.querySelector("#ttt").innerText = tongthanhtien.toLocaleString('de-DE');

}

function format(x) {
    formatmn = 0;
    for (var i = 0; i < x.length - 1; i++) {
        formatmn += Number(index[i] * (Math.pow(Math.pow(10, 3), index.length - 1 - i)));

    }

    return formatmn;
}

function thanhtoan() {
    var sosanpham = document.querySelectorAll("tbody tr")
    if (sosanpham.length == 0) {
        alert("Vui lòng chọn sản phẩm trước khi thanh toán")

    } else {
        localStorage.clear();

        alert("Thanh toán thành công")
        location.reload();
    }

}