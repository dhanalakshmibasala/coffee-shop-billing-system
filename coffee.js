function generateBill(){

    let name =
    document.getElementById("customerName").value;

    let cappuccino =
    parseInt(document.getElementById("cappuccino").value);

    let latte =
    parseInt(document.getElementById("latte").value);

    let espresso =
    parseInt(document.getElementById("espresso").value);

    let coldcoffee =
    parseInt(document.getElementById("coldcoffee").value);

    let total =
    (cappuccino * 120) +
    (latte * 150) +
    (espresso * 100) +
    (coldcoffee * 180);

    let gst = total * 0.05;

    let finalAmount = total + gst;

    document.getElementById("bill").innerHTML =
    `
    <h3>Bill Details</h3>

    Customer Name : ${name}<br><br>

    Total : ₹${total}<br>

    GST (5%) : ₹${gst}<br>

    Final Amount : ₹${finalAmount}
    `;
}

function clearOrder(){

    document.getElementById("customerName").value = "";

    document.getElementById("cappuccino").value = 0;

    document.getElementById("latte").value = 0;

    document.getElementById("espresso").value = 0;

    document.getElementById("coldcoffee").value = 0;

    document.getElementById("bill").innerHTML = "";
}