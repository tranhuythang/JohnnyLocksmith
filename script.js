function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        console.log("inside getCookie: c = " + c + "| name = " + name);
        console.log("inside getCookie: " + c.substring(name.length));
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function generateFooter() {
    let footer = document.createElement("footer");
    let hr = document.createElement("hr");
    let h4 = document.createElement("h4");
    h4.innerHTML = "Johnny Locksmith: 1940 E Camelback rd #201 Phoenix, AZ 85016; +1(480)779-9144"
    footer.appendChild(hr);
    footer.appendChild(h4);
    document.body.appendChild(footer);
}

function viewLogInButton () {
    document.getElementById("emailBox").style.display = "inline";
    document.getElementById("passwordBox").style.display = "inline";
    document.getElementById("loggedInStatus").style.display = "none";
    document.getElementById("signInUpOutButton").value = "Sign In";     
}

function viewLogOutButton () {
    let emailCookie = getCookie("JohnnyLocksmith_email");
    console.log("emailCookie = " + emailCookie);
    document.getElementById("emailBox").style.display = "none";
    document.getElementById("passwordBox").style.display = "none";
    document.getElementById("loggedInStatus").style.display = "inline";
    document.getElementById("loggedInStatus").innerHTML = emailCookie + " signed in! ";
    document.getElementById("signInUpOutButton").value = "Sign Out";     
}


function signInOut() {
    let emailCookie = getCookie("JohnnyLocksmith_email");
    if (emailCookie == "") {
        let enteredEmail = document.getElementById("email").value;
        let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (enteredEmail.match(regEx)) {
            setCookie("JohnnyLocksmith_email", enteredEmail, 1);
            viewLogOutButton();
        } else {
            alert("Email does not match this form: x@y.z where z has 2 or 3 letters, x and y have at least 1 letter.");
        }
        
    } else {
        setCookie("JohnnyLocksmith_email", "", -1);
        viewLogInButton();
    } 
}

function generateHeader(tab) {
    document.title = "Johnny Locksmith in Arizona";
    
    let header = document.createElement("header");
    header.innerHTML = ' \
    <header> \
        <h1>Johnny Locksmith in Arizona</h1> \
        <nav style="display: flex;"> \
            <section style="flex-grow: 4; text-align: left; display: flex; justify-content: space-evenly"> \
                <a id="homeTab" href="index.html" class="navTab"> Home </a> \
                <a id="orderTab" href="order.html" class="navTab"> Order </a> \
                <a id="feedbackTab" href="feedback.html" class="navTab"> Feedback </a> \
            </section> \
            <section style="flex-grow: 1; text-align: right"> \
                <label id="emailBox">Email: <input id="email" type="email" name="email"></label> \
                <label id="passwordBox">Password: <input type="password" name="password"></label> \
                <span id="loggedInStatus"></span>\
                <input id="signInUpOutButton" type="button" onClick="signInOut()" value="Sign In/Out"> \
            </section>        \
        </nav> \
    </header> \
    '
    document.body.appendChild(header);

    let emailCookie = getCookie("JohnnyLocksmith_email");
    if (emailCookie == "") {
        viewLogInButton();                        
    } else {
        viewLogOutButton();           
    }

    document.getElementById(tab).style.color = "red";
}

function checkCarKeyPrice() {
    let manufacturer = document.getElementById("Manufacturer").value;
    let model = document.getElementById("Model").value;
    let year = document.getElementById("Year").value;
    if (manufacturer == "" || model == "" || year == "") {
        alert("You have to fill in all 3 fields: Manufacturer - Model - Year");
    } else {
        document.getElementById("CarDescription").innerHTML = manufacturer + " " + model + " " + year + ": ";
        document.getElementById("CarKeyPrice").innerHTML = "$" + (70 + Math.floor(Math.random() * 100));
    }
    
}

function estimateTimeArrival() {
    let address = document.getElementById("address").value;
    if (address.trim() == "") {
        alert("You have to fill in a address");
    } else {
        document.getElementById("addressDesc").innerHTML = "We will get to <strong> " + address + "</strong> in ";
        document.getElementById("eta").innerHTML = (150 + Math.floor(Math.random() * 100)) + " minutes";
    }
}

