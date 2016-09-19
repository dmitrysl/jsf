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