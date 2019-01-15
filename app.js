// JavaScript eller jQuery

document.body.innerHTML += "<button id='login'>Login</button>"

document.getElementById('login').addEventListener("click", userLogin);

function userLogin() {
    document.body.innerHTML += "<div id='loginstuff' class='loginmenu' style='display:none; height:180px; width:400px; background: purple;'><h3 class='titleLogin' style='text-align: center;'>Login</h3><form action='' class='form' style='display: flex;flex-flow: column;'><input class='inputform' style='width: 381px;height: 22px;margin-bottom: 10px;' type='text' name='' id='username'><input class='inputform' style='width: 381px;height: 22px;margin-bottom: 10px;' type='password' name='' id='password'><button id='submitbutton' class='submitbutton' style='width: 388px;height: 36px;'>Submit</button></form></div><div id='json'></div>"
    document.getElementById('loginstuff').style.display = "block";
    document.getElementById("submitbutton").addEventListener("click", userAlert);
}

function userAlert() {

    //verify username/password
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username == "steve" && password == "123") {
        alert("Login successful!");   

    } else {
        alert("Wrong username or password");
    }
};




