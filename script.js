function generateFooter() {
    let footer = document.createElement("footer");
    let hr = document.createElement("hr");
    let h4 = document.createElement("h4");
    h4.innerHTML = "Johnny Locksmith: 1940 E Camelback rd #201 Phoenix, AZ 85016; +1(480)779-9144"
    footer.appendChild(hr);
    footer.appendChild(h4);
    document.body.appendChild(footer);
}

function generateHeader(tab) {
    let header = document.createElement("header");
    header.innerHTML = ' \
    <header> \
        <h1>Johnny Locksmith in Arizona</h1> \
        <nav style="background-color: black; padding-top: 10px; padding-bottom: 10px; text-align: center;"> \
            <a id="homeTab" href="index.html" style="color: white">Home</a> \
            <a id="orderTab" href="order.html" style="color: white">Order</a> \
            <a id="feedbackTab" href="feedback.html" style="color: white">Feedback</a> \
        </nav> \
    </header> \
    '
    document.body.appendChild(header);

    document.getElementById(tab).setAttribute("style", "color: red");
}