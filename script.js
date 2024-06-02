function convertCurrency() {
    var amount = document.getElementById("amount").value;
    var rate = document.getElementById("currency").value;
    var result = amount * rate;
    document.getElementById("result").innerText = "Hasil konversi: " + result;
}