function checkLoginForm(form, ccId) {
    console.log(form)
    console.log(ccId)
    var name = form[form.id + ":username"].value;
    var pass = form[form.id + ":pass"].value;
    console.log(name, pass)
    if (!name || !pass) {
        alert("Please enter name and password.");
        return false;
    }
    return true;
}

function loginFormCheckUsernameError() {
    console.log("loginFormCheckUsernameError: ", arguments);
}

function showProgress(data) {
    console.log("showProgress: ", arguments);
    var inputId = data.source.id;
    var progressBarId = inputId.substring(0, inputId.length - "username".length) + "pole";
    console.log(progressBarId)
    if (data.status == "begin") {
        document.getElementById(progressBarId).style.display = "inline-block";
    } else if (data.status == "success") {
        document.getElementById(progressBarId).style.display = "none";
    }
}