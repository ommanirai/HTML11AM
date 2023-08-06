function username() {
    var username = document.getElementById("username").value
    //console.log(username)
    if (!username.match(/^[a-zA-Z]/)) {
        displayerror('usernameerror', 'username must start with alphabet', 'red')
        // document.getElementById("usernameerror").innerHTML='username must start with alphabet'
        // document.getElementById("usernameerror").style.color='red'

    }
    else if (username.length < 5) {
        displayerror('usernameerror', 'username must be atleast four character', 'red')
        //document.getElementById("usernameerror").innerHTML='username must be atleast four character'
        //document.getElementById("usernameerror").style.color='red'

    }
    else {
        displayerror('usernameerror', 'valid username', 'green')
        // document.getElementById("usernameerror").innerHTML='valid username'
        //document.getElementById("usernameerror").style.color='green'

    }
}

function displayerror(id, msg, color) {
    document.getElementById(id).innerHTML = msg
    document.getElementById(id).style.color = color


}
function email() {
    var email = document.getElementById("email").value
    if (!email.match(/^[a-z]/)) {
        document.getElementById("emails").innerHTML = 'email must start with alphabet'
        document.getElementById("emails").style.color = 'red'
    }

    else if(!email.match(/(@)/)) {
        document.getElementById("emails").innerHTML = 'email must include @'
        document.getElementById("emails").style.color = 'red'
    }
    else if(!email.match(/(gmail.com)/)) {
        document.getElementById("emails").innerHTML = 'email must end with gmail.com'
        document.getElementById("emails").style.color = 'red'
    }
    else {
        displayerror('emails', 'valid email', 'green')
    }
}