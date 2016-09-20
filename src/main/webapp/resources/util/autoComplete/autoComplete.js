var javaee = javaee || {};
javaee.jsf = javaee.jsf || {};
javaee.jsf.component = javaee.jsf.component || {};
javaee.jsf.component.autoComplete = javaee.jsf.component.autoComplete || {};

javaee.jsf.component.autoComplete.processError = function(data) {
    console.warn("error: ", arguments);
}
javaee.jsf.component.autoComplete.timeout = null;
javaee.jsf.component.autoComplete.updateCompletionItems = function (element, event) {
    console.log("javaee.jsf.component.autoComplete.updateCompletionItems", arguments);
    jsf.ajax.addOnError(javaee.jsf.component.autoComplete.processError);

    window.clearTimeout(javaee.jsf.component.autoComplete.timeout);
    javaee.jsf.component.autoComplete.timeout = window.setTimeout(function() {
        console.log("jsf.ajax.request", javaee.jsf.component.autoComplete.getListboxId(element))
        jsf.ajax.request(element, event, {
            render: javaee.jsf.component.autoComplete.getListboxId(element),
            x: 100,
            y: 200
        })
    }, 350);
}
javaee.jsf.component.autoComplete.lostFocusTimeout = null;
javaee.jsf.component.autoComplete.lostFocus = function(element) {
    console.log(arguments)
    window.clearTimeout(javaee.jsf.component.autoComplete.lostFocusTimeout);
    javaee.jsf.component.autoComplete.lostFocusTimeout = window.setTimeout(function(){
        document.getElementById(javaee.jsf.component.autoComplete.getListboxId(element)).style.display = "none";
    }, 200);
}

javaee.jsf.component.autoComplete.listboxGainedFocus = function() {
    console.log(arguments);
    window.clearTimeout(javaee.jsf.component.autoComplete.lostFocusTimeout);
}

javaee.jsf.component.autoComplete.getListboxId = function(element) {
    var clientId = element.name + "";
    var lastIndex = clientId.lastIndexOf(":");
    return clientId.substring(0, lastIndex) + ":autocomplete-list";
}
