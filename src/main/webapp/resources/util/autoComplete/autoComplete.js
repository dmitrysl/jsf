var javaee = javaee || {};
javaee.jsf = javaee.jsf || {};
javaee.jsf.component = javaee.jsf.component || {};
javaee.jsf.component.autoComplete = javaee.jsf.component.autoComplete || {};

javaee.jsf.component.autoComplete.processError = function(data) {

}
javaee.jsf.component.autoComplete.updateCompletionItems = function (element, event) {
    var timeout;
    jsf.ajax.addOnError(javaee.jsf.component.autoComplete.processError);

    window.clearTimeout(timeout);
    timeout = window.setTimeout(function() {
        jsf.ajax.request(element, event, {
            render: javaee.jsf.component.autoComplete.getListboxId(element)
        })
    }, 350);
}

javaee.jsf.component.autoComplete.lostFocus = function(element) {
    window.setTimeout(function(){
        document.getElementById(javaee.jsf.component.autoComplete.getListboxId(element)).style.display = "none";
    }, 200);
}

javaee.jsf.component.autoComplete.listboxGainedFocus = function() {

}

javaee.jsf.component.autoComplete.getListboxId = function(element) {
    var clientId = element.name + "";
    var lastIndex = clientId.lastIndexOf(":");
    return clientId.substring(0, lastIndex) + ":autocomplete-list";
}
