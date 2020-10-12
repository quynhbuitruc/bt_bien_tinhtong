function tinhTong() {
    let so1 = Number(document.getElementById("soThuNhat").value);
    let so2 = Number(document.getElementById("soThuNhi").value);
    let sum = so1 + so2;
    document.getElementById("hienthi").innerText = sum;;
}