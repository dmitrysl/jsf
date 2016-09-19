var javaee = javaee || {};
javaee.jsf = javaee.jsf || {};
javaee.jsf.component = javaee.jsf.component || {};
javaee.jsf.component.login = javaee.jsf.component.login || {};
javaee.jsf.component.login.checkLoginForm = function (form, ccId) {
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

javaee.jsf.component.login.loginFormCheckUsernameError = function (data) {
    console.log("loginFormCheckUsernameError: ", arguments);

    if (data.status == "httpError") {

    } else if (data.status == "emptyResponse") {

    } else if (data.status == "malformedXML") {

    } else if (data.status == "serverError") {

    }

    console.log("desc", data.description);
    console.log("errName", data.errorName);
    console.log("errMess", data.errorMessage);
}

javaee.jsf.component.login.showProgress = function (data) {
    console.log("showProgress: ", arguments);
    var inputId = data.source.id;
    var progressBarId = inputId.substring(0, inputId.length - "username".length) + "pole";
    console.log(progressBarId)
    if (data.status == "begin") {
        document.getElementById(progressBarId).style.display = "inline-block";
    } else if (data.status == "success") {
        document.getElementById(progressBarId).style.display = "none";
    } else if (data.status == "complete") {

    }
}