var selectedMenu = "";
function toggleWoList(a) {
    imageButton = document.getElementById("imgtoggle_" + a);
    listItem = document.getElementById("wogroup_" + a);
    "wo_list_group_closed" === listItem.className ? (listItem.className = "wo_list_group_opened", imageButton.src = "../resources/img/icon/go_down_icon.png") : (listItem.className = "wo_list_group_closed", imageButton.src = "../resources/img/icon/go_up_icon.png")
}
function toggleWoListOffline(a) {
    imageButton = document.getElementById("imgtoggle_" + a);
    listItem = document.getElementById(a);
    "wo_list_group_closed" === listItem.className ? (listItem.className = "wo_list_group_opened", null !== imageButton && (imageButton.src = "/mportal/resources/img/icon/go_down_icon.png")) : (listItem.className = "wo_list_group_closed", null !== imageButton && (imageButton.src = "/mportal/resources/img/icon/go_up_icon.png"))
}
function toggleWiList(a, b, c) {
    c = c.target ? c.target : c.srcElement;
    var d = null !== c.getAttribute("src") ? -1 < c.getAttribute("src").indexOf("callicon") : !1;
    if ("tel" !== c.id && !d)return imageButton = document.getElementById("imgtoggle_" + a), listItem = document.getElementById("wigroup_" + a), listItem.className === "wo_list_group_closed_" + b ? (listItem.className = "wo_list_group_opened_" + b, null !== imageButton && (imageButton.src = "../resources/img/icon/go_down_icon.png")) : (listItem.className = "wo_list_group_closed_" + b, null !== imageButton &&
    (imageButton.src = "../resources/img/icon/go_up_icon.png")), event.preventDefault(), !1
}
function toggleWiListSimple(a, b) {
    imageButton = document.getElementById("imgtoggle_" + a);
    listItem = document.getElementById("wigroup_" + a);
    listItem.className === "wo_list_group_closed_" + b ? (listItem.className = "wo_list_group_opened_" + b, imageButton.src = "../resources/img/icon/go_down_icon.png") : (listItem.className = "wo_list_group_closed_" + b, imageButton.src = "../resources/img/icon/go_up_icon.png");
    event.preventDefault();
    return !1
}
function toggleDashboard(a) {
    listItem = document.getElementById("dashboard_" + a);
    imageButton = document.getElementById("dashboardForm:imgtoggle_" + a);
    "dashboard_group_closed" === listItem.className ? (listItem.className = "dashboard_group_opened", imageButton.src = "../resources/img/icon/go_down_icon.png") : (listItem.className = "dashboard_group_closed", imageButton.src = "../resources/img/icon/go_up_icon.png")
}
function toggleFilters() {
    listItem = document.getElementById("filters");
    imageButton = document.getElementById("filtersForm:imgtoggle_filter");
    "showLess" === listItem.className ? (listItem.className = "showMore", imageButton.src = "../resources/img/icon/go_down_icon.png") : (listItem.className = "showLess", imageButton.src = "../resources/img/icon/go_up_icon.png")
}
function toggleMoreOptions() {
    listItem = document.getElementById("moreOptions");
    imageButton = document.getElementById("wodetailForm:imgtoggle_");
    "showLess" === listItem.className ? (listItem.className = "showMore", imageButton.src = "/mportal/resources/img/icon/go_down_icon.png") : (listItem.className = "showLess", imageButton.src = "/mportal/resources/img/icon/go_up_icon.png")
}
function toggleSiteDetails() {
    group = document.getElementById("siteDetails");
    btnM = document.getElementById("btnShowMore");
    btnL = document.getElementById("btnShowLess");
    "showLess" === group.className ? (group.className = "showMore", btnM.className = "showLess", btnL.className = "showMore") : (group.className = "showLess", btnM.className = "showMore", btnL.className = "showLess");
    return !1
}
function toggleMaterialDetails() {
    group = document.getElementById("materialDetails");
    btnM = document.getElementById("btnShowMoreMaterials");
    btnL = document.getElementById("btnShowLessMaterials");
    "showLess" === group.className ? (group.className = "showMore", btnM.className = "showLess", btnL.className = "showMore") : (group.className = "showLess", btnM.className = "showMore", btnL.className = "showLess");
    return !1
}
function toggleMaterialMinorDetails(a) {
    console.log(a);
    group = document.getElementById("details_" + a);
    btnM = document.getElementById("btnShowMoreMaterials_" + a);
    btnL = document.getElementById("btnShowLessMaterials_" + a);
    "showLess" === group.className ? (group.className = "showMore", btnM.className = "showLess", btnL.className = "showMore") : (group.className = "showLess", btnM.className = "showMore", btnL.className = "showLess");
    return !1
}
function toggleExternalServicesDetails() {
    group = document.getElementById("externalServicesDetails");
    btnM = document.getElementById("btnShowMoreServices");
    btnL = document.getElementById("btnShowLessServices");
    "showLess" === group.className ? (group.className = "showMore", btnM.className = "showLess", btnL.className = "showMore") : (group.className = "showLess", btnM.className = "showMore", btnL.className = "showLess");
    return !1
}
function toggleFilesDetails() {
    group = document.getElementById("files");
    btnM = document.getElementById("btnShowMoreFiles");
    btnL = document.getElementById("btnShowLessFiles");
    "showLess" === group.className ? (group.className = "showMore", btnM.className = "showLess", btnL.className = "showMore") : (group.className = "showLess", btnM.className = "showMore", btnL.className = "showLess");
    return !1
}
function toggleItemsDetails() {
    group = document.getElementById("itemDetails");
    btnM = document.getElementById("btnShowMoreItem");
    btnL = document.getElementById("btnShowLessItem");
    "showLess" === group.className ? (group.className = "showMore", btnM.className = "showLess", btnL.className = "showMore") : (group.className = "showLess", btnM.className = "showMore", btnL.className = "showLess");
    return !1
}
function toggleActivationsDetails() {
    group = document.getElementById("actDetails");
    btnM = document.getElementById("btnShowMoreAct");
    btnL = document.getElementById("btnShowLessAct");
    "showLess" === group.className ? (group.className = "showMore", btnM.className = "showLess", btnL.className = "showMore") : (group.className = "showLess", btnM.className = "showMore", btnL.className = "showLess");
    return !1
}
function toggleHistoryDetails() {
    group = document.getElementById("historyDetails");
    btnM = document.getElementById("btnShowMoreHistory");
    btnL = document.getElementById("btnShowLessHistory");
    "showLess" === group.className ? (group.className = "showMore", btnM.className = "showLess", btnL.className = "showMore") : (group.className = "showLess", btnM.className = "showMore", btnL.className = "showLess");
    return !1
}
function toggleSummaryDetails() {
    group = document.getElementById("summaryDetails");
    btnM = document.getElementById("btnShowMoreSummary");
    btnL = document.getElementById("btnShowLessSummary");
    "showLess" === group.className ? (group.className = "showMore", btnM.className = "showLess", btnL.className = "showMore") : (group.className = "showLess", btnM.className = "showMore", btnL.className = "showLess");
    return !1
}
function toggleVehicleDetails() {
    group = document.getElementById("vehicleDetails");
    btnM = document.getElementById("btnShowMoreVehicle");
    btnL = document.getElementById("btnShowLessVehicle");
    "showLess" === group.className ? (group.className = "showMore", btnM.className = "showLess", btnL.className = "showMore") : (group.className = "showLess", btnM.className = "showMore", btnL.className = "showLess");
    return !1
}
function toggleWoDetails() {
    group = document.getElementById("woDetailsDetails");
    btnM = document.getElementById("btnShowMoreWoDetails");
    btnL = document.getElementById("btnShowLessWoDetails");
    "showLess" === group.className ? (group.className = "showMore", btnM.className = "showLess", btnL.className = "showMore") : (group.className = "showLess", btnM.className = "showMore", btnL.className = "showLess");
    return !1
}
function toggleInfo() {
    group = document.getElementById("addInfoList");
    btnM = document.getElementById("btnShowMoreInfo");
    btnL = document.getElementById("btnShowLessInfo");
    "showLess" === group.className ? (group.className = "showMore", btnM.className = "showLess", btnL.className = "showMore") : (group.className = "showLess", btnM.className = "showMore", btnL.className = "showLess");
    return !1
}
function toggleWoAttach(a) {
    listItem = document.getElementById("attachs_" + a);
    imageButton = document.getElementById("backForm:imgtoggle_filter_" + a);
    "showLess" === listItem.className ? (listItem.className = "showMore", imageButton.src = "../../resources/img/icon/go_down_icon.png") : (listItem.className = "showLess", imageButton.src = "../../resources/img/icon/go_up_icon.png")
}
function toggleAttach(a) {
    group = document.getElementById("woList_" + a);
    btnM = document.getElementById("btnShowMoreAttach_" + a);
    btnL = document.getElementById("btnShowLessAttach_" + a);
    "showLess" === group.className ? (group.className = "showMore", btnM.className = "showLess", btnL.className = "showMore") : (group.className = "showLess", btnM.className = "showMore", btnL.className = "showLess");
    return !1
}
function toggleWorkOrderAttach() {
    group = document.getElementById("woattach");
    btnM = document.getElementById("btnShowMoreWoAttach");
    btnL = document.getElementById("btnShowLessWoAttach");
    "showLess" === group.className ? (group.className = "showMore", btnM.className = "showLess", btnL.className = "showMore") : (group.className = "showLess", btnM.className = "showMore", btnL.className = "showLess");
    return !1
}
function toggleTopMenu() {
    group = document.getElementById("topActionsMenu");
    "actionMenu_showLess" === group.className ? (group.className = "actionMenu_showMore", group.style.display = "block") : group.className = "actionMenu_showLess";
    return !1
}
function toggleOrderMenu(a) {
    selectedMenu = a;
    group = document.getElementById("orderSubMenu_" + a);
    group.className = "subMenu_showLess" === group.className ? "subMenu_showMore" : "subMenu_showLess";
    return !1
}
function toggleItemMenu(a) {
    console.log("itemSubMenu_" + a);
    group = document.getElementById("itemSubMenu_" + a);
    group.className = "subMenu_showLess" === group.className ? "subMenu_showMore" : "subMenu_showLess";
    return !1
}
function toggleCloseObsDetails() {
    group1 = document.getElementById("closureInfoMinor");
    group2 = document.getElementById("closureInfoMajor");
    btnM = document.getElementById("btnShowMoreCloseObs");
    btnL = document.getElementById("btnShowLessCloseObs");
    "showLess" === group1.className ? (group1.className = "showMore", group2.className = "showLess", btnM.className = "showMore", btnL.className = "showLess") : (group1.className = "showLess", group2.className = "showMore", btnM.className = "showLess", btnL.className = "showMore");
    return !1
}
function toggleCloseObsDetailsOff() {
    group = document.getElementById("closureInfo");
    btnM = document.getElementById("btnShowMoreCloseObs");
    btnL = document.getElementById("btnShowLessCloseObs");
    "showLess" === group.className ? (group.className = "showMore", btnM.className = "showMore", btnL.className = "showLess") : (group.className = "showLess", btnM.className = "showLess", btnL.className = "showMore");
    return !1
}
function toggleWoStatusFilters() {
    group = document.getElementById("filtersWoStatus");
    btnM = document.getElementById("btnShowMoreWoStatus");
    btnL = document.getElementById("btnShowLessWoStatus");
    "showLess" === group.className ? (group.className = "showMore", btnM.className = "showLessBtn", btnL.className = "showMoreBtn") : (group.className = "showLess", btnM.className = "showMoreBtn", btnL.className = "showLessBtn");
    return !1
}
function toggleActStatusFilters() {
    group = document.getElementById("filtersActStatus");
    btnM = document.getElementById("btnShowMoreActStatus");
    btnL = document.getElementById("btnShowLessActStatus");
    "showLess" === group.className ? (group.className = "showMore", btnM.className = "showLessBtn", btnL.className = "showMoreBtn") : (group.className = "showLess", btnM.className = "showMoreBtn", btnL.className = "showLessBtn");
    return !1
}
function toggleWoPriorityFilters() {
    group = document.getElementById("filtersWoPriority");
    btnM = document.getElementById("btnShowMoreWoPriority");
    btnL = document.getElementById("btnShowLessWoPriority");
    "showLess" === group.className ? (group.className = "showMore", btnM.className = "showLessBtn", btnL.className = "showMoreBtn") : (group.className = "showLess", btnM.className = "showMoreBtn", btnL.className = "showLessBtn");
    return !1
}
function toggleEngUtilizationFilters() {
    group = document.getElementById("filtersEngUtilization");
    btnM = document.getElementById("btnShowMoreEngUtilization");
    btnL = document.getElementById("btnShowLessEngUtilization");
    "showLess" === group.className ? (group.className = "showMore", btnM.className = "showLessBtn", btnL.className = "showMoreBtn") : (group.className = "showLess", btnM.className = "showMoreBtn", btnL.className = "showLessBtn");
    return !1
}
function toggleEngProductivityFilters() {
    group = document.getElementById("filtersEngProductivity");
    btnM = document.getElementById("btnShowMoreEngProductivity");
    btnL = document.getElementById("btnShowLessEngProductivity");
    "showLess" === group.className ? (group.className = "showMore", btnM.className = "showLessBtn", btnL.className = "showMoreBtn") : (group.className = "showLess", btnM.className = "showMoreBtn", btnL.className = "showLessBtn");
    return !1
}
function toggleSlaPercFilters() {
    group = document.getElementById("filtersSlaPerc");
    btnM = document.getElementById("btnShowMoreSlaPerc");
    btnL = document.getElementById("btnShowLessSlaPerc");
    "showLess" === group.className ? (group.className = "showMore", btnM.className = "showLessBtn", btnL.className = "showMoreBtn") : (group.className = "showLess", btnM.className = "showMoreBtn", btnL.className = "showLessBtn");
    return !1
}
function limitText(a, b, c) {
    a.value.length > c ? a.value = a.value.substring(0, c) : b.value = c - a.value.length
}
$(document).mouseup(function (a) {
    var b = $("#topActionsMenu");
    $("#headerForm\\:actionMenu").is(a.target) ? b.className = "actionMenu_showLess" === b.className ? "actionMenu_showMore" : "actionMenu_showLess" : b.is(a.target) || 0 !== b.has(a.target).length || $("#topActionsMenu").attr("class", "actionMenu_showLess")
});
$(document).mouseup(function (a) {
    var b = $("#orderSubMenu_" + selectedMenu);
    $("#orderSubmenu_" + selectedMenu).is(a.target) ? b.className = "subMenu_showLess" === b.className ? "subMenu_showMore" : "subMenu_showLess" : b.is(a.target) || 0 !== b.has(a.target).length || $("#orderSubMenu_" + selectedMenu).attr("class", "subMenu_showLess")
});
function clickLogoff() {
    $("#headerForm\\:logoffBtn").click();
    return !1
}
function selectAllMissing() {
    $("#materialsForm\\:missingMaterials option").prop("selected", "selected")
}
function clearAllMissing() {
    $("#materialsForm\\:missingMaterials").val([])
}
function selectAllAck() {
    $("#materialsForm\\:acknowledgeMaterials option").prop("selected", "selected")
}
function clearAllAck() {
    $("#materialsForm\\:acknowledgeMaterials").val([])
}
function toHHMMSS(a) {
    var b = parseInt(a, 10), c = Math.floor(b / 3600);
    a = Math.floor((b - 3600 * c) / 60);
    b = b - 3600 * c - 60 * a;
    10 > a && (a = "0" + a);
    10 > b && (b = "0" + b);
    return a + ":" + b
}
function getMegabBytes(a) {
    return a / 1024 / 1024
}
function sendAttachment() {
    $("#noFile").css("display", "none");
    if ("" === document.getElementById("upload-input").value)$("#noFile").css("display", "block"); else if ("-1" === $("#backForm\\:documentType").val())$("#documentTypeError").css("display", "block"); else {
        var a = $("#upload-input"), b = parseInt(a.attr("dataMaxSize")), c = !0;
        a.get(0).files.length && a.get(0).files[0].size > b && (alert(getResource(!1, "fileSizeLimit") + " " + getMegabBytes(b) + "MB"), c = !1);
        c && (a = new FormData($("#upForm")[0]), $.ajax({
            url: "/mportal/attachment",
            type: "POST", data: a, async: !1, cache: !1, contentType: !1, processData: !1, success: function (a) {
                console.log("Upload ok");
                $("#backForm\\:uploadActionBtn").click()
            }
        }))
    }
}
function cancelUpload() {
    $("#backForm\\:description").val("");
    $("#backForm\\:descriptionCount").val("250");
    $("#backForm\\:documentType").val("-1");
    $("#noFile").css("display", "none");
    var a = $("#upload-input");
    reset(a)
}
function disableButton(a, b) {
    document.getElementById(a + ":" + b).disabled = !0
}
function getFieldValueWo(a, b) {
    return "wo.project" === a ? b.project : "wo.alphaId" === a ? b.woAlphaId : "wo.sla" === a ? b.sla : "wo.age" === a ? b.age : "wo.priority" === a ? b.priority : "wo.ne.id" === a ? b.neID : "wo.site.id" === a ? b.siteId : "wo.status" === a ? getStatusValue(b.status) : "wo.title" === a ? b.title1 : "wo.title.ii" === a ? b.title2 : "wo.type" === a ? b.woType : "wo.alarm.beginning" === a ? b.alarmBeginning : "wo.technical.area" === a ? b.tecArea : "wo.area" === a ? b.area : "wo.services" === a ? b.services : "wo.observation" === a ? b.observation : "wo.creation" === a ?
        b.creation : "wo.source" === a ? b.source : "wo.site.name" === a ? b.siteName : "wo.ne.name" === a ? b.neName : "wo.site.code" === a ? b.siteId : "wo.customer.site.code" === a ? b.customerSiteCode : "wo.work.package.id" === a ? b.workPackageId : "wo.work.package.name" === a ? b.workPackageName : "wo.communication.key" === a ? b.key : "wo.responsible" === a ? b.engineer : ""
}
function getFieldValueWi(a, b) {
    return "wi.activity" === a ? b.wiActivity : "wi.site" === a ? b.wiSite : "wi.planned.on" === a ? b.wiPlannedOn : "wi.deadline" === a ? b.wiDeadline : "wi.duration" === a ? b.wiDuration : "wi.value" === a ? b.wiValue : "wi.description" === a ? b.wiDescription : "wi.status" === a ? getStatusValue(b.wiStatus) : "wi.customer.site.code" === a ? b.customerSiteCode : "wi.work.package.id" === a ? b.workPackageId : "wi.work.package.name" === a ? b.workPackageName : "wi.communication.key" === a ? b.key : "wi.responsible" === a ? b.engineer : "wi.checklist.name" ===
    a ? b.checkListName : "wi.checklist.type" === a ? b.checkListType : ""
}
function getFieldName(a) {
    return "wo.project" === a ? getResource(!1, "fieldProject") : "wo.alphaId" === a ? getResource(!1, "fieldAlphaID") : "wo.sla" === a ? getResource(!1, "fieldSLA") : "wo.age" === a ? getResource(!1, "fieldAge") : "wo.priority" === a ? getResource(!1, "fieldPriority") : "wo.ne.id" === a ? getResource(!1, "fieldNEID") : "wo.site.id" === a ? getResource(!1, "fieldSiteID") : "wo.status" === a ? getResource(!1, "fieldStatus") : "wo.title" === a ? getResource(!1, "fieldTitleI") : "wo.title.ii" === a ? getResource(!1, "fieldTitleII") : "wo.type" === a ?
        getResource(!1, "fieldType") : "wo.alarm.beginning" === a ? getResource(!1, "fieldAlarm") : "wo.technical.area" === a ? getResource(!1, "fieldTechArea") : "wo.area" === a ? getResource(!1, "fieldArea") : "wo.services" === a ? getResource(!1, "fieldServices") : "wo.observation" === a ? getResource(!1, "fieldObs") : "wo.creation" === a ? getResource(!1, "fieldCreation") : "wo.source" === a ? getResource(!1, "fieldSource") : "wo.site.name" === a ? getResource(!1, "fieldSiteName") : "wo.ne.name" === a ? getResource(!1, "fieldNEName") : "wo.site.code" === a ? getResource(!1,
        "fieldSiteCode") : "wo.customer.site.code" === a ? getResource(!1, "fieldCsc") : "wi.activity" === a ? getResource(!1, "fieldWiActivity") : "wi.site" === a ? getResource(!1, "fieldWiSite") : "wi.planned.on" === a ? getResource(!1, "fieldWiPlannedOn") : "wi.deadline" === a ? getResource(!1, "fieldWiDeadline") : "wi.duration" === a ? getResource(!1, "fieldWiDuration") : "wi.value" === a ? getResource(!1, "fieldWiValue") : "wi.description" === a ? getResource(!1, "fieldWiDescription") : "wi.status" === a ? getResource(!1, "fieldStatus") : "wi.customer.site.code" ===
    a ? getResource(!1, "fieldWiCsc") : "wo.work.package.id" === a ? getResource(!1, "fieldWPID") : "wo.work.package.name" === a ? getResource(!1, "fieldWPName") : "wo.communication.key" === a ? getResource(!1, "fieldCommKey") : "wi.work.package.id" === a ? getResource(!1, "fieldWPID") : "wi.work.package.name" === a ? getResource(!1, "fieldWPName") : "wi.communication.key" === a ? getResource(!1, "fieldCommKey") : "wo.responsible" === a || "wi.responsible" === a ? getResource(!1, "fieldResponsible") : "wi.checklist.name" === a ? getResource(!1, "fieldWiChecklistName") :
        "wi.checklist.type" === a ? getResource(!1, "fieldWiChecklistType") : a
}
function getIcon(a, b) {
    return "ASSIGNED" !== a && "DISPATCHED" !== a && "RECEIVED" !== a && "ACKNOWLEDGED" !== a || "PENDING" === b ? "ACCEPTED" === a && "PENDING" !== b ? "/mportal/resources/img/icon/accepted_icon.png" : "DISPLACEMENT" === a && "PENDING" !== b ? "/mportal/resources/img/icon/displacement_started_icon.png" : "DISPLACED" === a && "PENDING" !== b ? "/mportal/resources/img/icon/displacement_finalized_icon.png" : "EXECUTION" === a && "PENDING" !== b ? "/mportal/resources/img/icon/execution_icon.png" : "INTERRUPTED" === a && "PENDING" !== b ? "/mportal/resources/img/icon/interrupted_icon.png" :
        "CLOSE_REQUEST" === a && "PENDING" !== b ? "/mportal/resources/img/icon/close_request_icon.png" : "REFUSED" === a && "PENDING" !== b ? "/mportal/resources/img/icon/refused_icon.png" : "CLOSED" === a && "PENDING" !== b || "EXECUTED" === a && "PENDING" !== b ? "/mportal/resources/img/icon/closed_icon.png" : "INFO" === a ? "/mportal/resources/img/icon/info_icon.png" : "PENDING" === b ? "/mportal/resources/img/icon/pending_icon.png" : "" : "/mportal/resources/img/icon/dispatched_icon.png"
}
function parseDate(a, b) {
    if (null !== a && void 0 !== a && "" !== a) {
        if ("en" === b) {
            var c = a.split("/"), d = c[2].split(" "), e = d[1].split(":");
            2 === d[0].length && (d[0] = "20" + d[0]);
            return new Date(d[0], c[0] - 1, c[1], e[0], e[1])
        }
        if ("es" === b || "pt_BR" === b)return c = a.split("/"), d = c[2].split(" "), e = d[1].split(":"), 2 === d[0].length && (d[0] = "20" + d[0]), new Date(d[0], c[1], c[0] - 1, e[0], e[1]);
        if ("zh" === b)return c = a.split("-"), d = c[2].split(" "), -1 < d[1].indexOf("下午") && (e = d[1].split("下午"), e = e[1].split(":")), -1 < d[1].indexOf("上午") && (e = d[1].split("上午"),
            e = e[1].split(":")), 2 === c[0].length && (c[0] = "20" + c[0]), new Date(c[0], c[1] - 1, d[0], e[0], e[1]);
        c = a.split("/");
        d = c[2].split(" ");
        e = d[1].split(":");
        2 === d[0].length && (d[0] = "20" + d[0]);
        return new Date(d[0], c[0] - 1, c[1], e[0], e[1])
    }
}
function getResource(a, b) {
    if (a) {
        c = window.localStorage.getItem("localeLogin");
        if (void 0 === c || "" === c || null === c)c = "en";
        "en" !== c && "pt" !== c && "es" !== c && "zh" !== c && (c = "en")
    } else {
        var c = window.localStorage.getItem("locale_" + getLoggedUser());
        if (void 0 === c || "" === c || null === c)c = "en"
    }
    var d = {
        workOrders: "Work Orders",
        errorLoading: "Error loading items. Please contact support. Error is",
        noDataMsg: "No data available. Check synchronization settings.",
        workItemsTitle: "Work Items",
        sla: "SLA",
        endingDate: "Ending date",
        expiredSla: "Expired SLA",
        onSiteError: "Cannot perform On Site. Displacement is mandatory on this project, but it is not available on Offline Mode.",
        acceptBtn: "Accept",
        acceptBtnConfirm: "Confirm Accept?",
        backBtn: "Back",
        refuseBtn: "Refuse",
        refuseType: "Refusal Type",
        refuseBtnConfirm: "Confirm Refuse?",
        onSiteBtn: "On Site",
        OnSiteBtnConfirm: "Confirm On Site?",
        closeRequestBtn: "Close Request",
        closureType: "Closure Type",
        closureClass: "Closure Cause Class",
        closeRequestBtnConfirm: "Confirm Close Request?",
        materialsTitle: "Materials",
        materialsAck: "Acknowledge Materials",
        materialsMiss: "Missing Materials",
        siteDetails: "Site Details",
        historyTitle: "History",
        closureInfo: "Closure info",
        woDetails: "Work Order Details",
        externalServices: "External Services",
        checklistTitle: "Checklist",
        activityTitle: "Activity",
        woTitle: "WO",
        targetTitle: "Target On",
        plannedTitle: "Planned On",
        cscTitle: "Customer Site Code",
        fileUploadNotAvailable: "File Upload is not available in offline mode",
        fileNameTitle: "File Name",
        fileTypeTitle: "File Type",
        fileSizeTitle: "File Size",
        uploadingMsg: "Uploading... Please wait...",
        uploadSuccess: "File successfully uploaded",
        uploadSelect: "Please select a file to upload",
        fileTitle: "File",
        uploadCompress: "Compressing file... please wait ",
        uploadCompressSize: "Compressed file size",
        uploadCompressQuality: "Compression quality",
        uploadCompressPreview: "Preview File",
        saveBtn: "Save",
        clearAll: "Clear All",
        selectAllCheck: "Select All",
        closeBtn: "Close",
        selectBtn: "Select...",
        uploadBtn: "Upload",
        removeBtn: "Remove",
        siteId: "Site ID",
        siteName: "Site Name",
        cityLabel: "City",
        areaLabel: "Area",
        addressLabel: "Address",
        drivingDirections: "Driving Directions",
        specialRequirements: "Special Requirements",
        healthSafety: "Health Safety",
        latitudeLabel: "Latitude",
        longitudeLabel: "Longitude",
        keyLoc: "Key Location",
        antennaLabel: "Antenna Description",
        lastUpdate: "Last Update",
        dispatchDate: "Dispatch Date",
        acceptanceDate: "Acceptance Date",
        refuseDate: "Refusal Date",
        onSiteDate: "On Site Date",
        closeReqDate: "Close Request Date",
        crType: "Close Request Type",
        crCloseClass: "Closure Cause Class",
        crSiteVisit: "Site Visits",
        crObservation: "Closure Observation",
        crReason: "Closure Reason",
        crSolution: "Closure Solution",
        crServices: "Close Request Services",
        crSpare: "Close Request Spare Parts",
        assType: "Assignment Closure Type",
        assDate: "Assignment Closure Date",
        assObs: "Assignment Closure Observation",
        woClosureType: "Work Order Closure Type",
        woClosureObs: "Work Order Closure Observation",
        refType: "Refusal Type",
        refDate: "Refusal Date",
        title1: "Title I",
        title2: "Title II",
        priorityLabel: "Priority",
        woType: "WO Type",
        alarmBeg: "Alarm Beginning",
        tecArea: "Technical Area",
        workProfile: "Work Profile",
        neID: "NE ID",
        neName: "NE Name",
        neModel: "NE Model",
        servicesLabel: "Services",
        sourceLabel: "Source",
        obs: "Observation",
        recSpareParts: "Recommended Spare Parts",
        keyLabel: "Key",
        serviceImpact: "Service Impact",
        wpID: "Work Package ID",
        wpName: "Work Package Name",
        shortNameTitle: "Short Name",
        descriptionDetail: "Description",
        quantityDetail: "Quantity",
        projectDetail: "Project",
        wiSite: "WI Site",
        wiDesc: "WI Desc",
        plannedDate: "Planned Date",
        matCode: "Material Code",
        matItemType: "Item Type",
        matQuantity: "Quantity",
        matSAP: "SAP Qty",
        matMaterial: "Material",
        matLocation: "Location",
        matOrigin: "Origin",
        matSup: "Supplier / Vendor",
        matPrice: "Price",
        statusTitle: "Status",
        selectMaterial: "Select Materials to acknowledge",
        selectMaterialMiss: "Select missing Materials",
        actStatus: "Activation Status",
        wiStatus: "Work Item Status",
        alertAcceptanceSuccess: "Acceptance successfully stored",
        alertOnSiteSuccess: "On Site successfully stored",
        alertRefusalSuccess: "Refusal succcessfully stored",
        alertAckSuccess: "Acknowledge successfully stored",
        alertMissMaterials: "Missing materials successfully stored",
        alertMandatoryFiles: "Action not allowed. Checklist has mandatory files that must be uploaded using Online flow",
        alertMandatoryFields: "Some mandatory checklist fields were not answered. Close Request not performed",
        alertMandatoryFieldsCheck: "Some mandatory checklist fields were not answered.",
        mandatoryClosureType: "Closure Type is mandatory",
        mandatoryCauseClass: "Cause class is mandatory",
        mandatorySiteVisit: "Site Visit is mandatory",
        mandatorySiteVisitNumber: "Site Visit is mandatory and must be a number",
        mandatoryGpsValue: "GPS value is mandatory",
        alertCloseRequestSuccess: "Close Request successfully stored",
        alertChecklistSuccess: "Checklist successfully stored",
        alertChecklistDraft: "Checklist draft succesfully stored",
        fieldProject: "Project",
        fieldAlphaID: "WO Alpha ID",
        fieldSLA: "SLA",
        fieldAge: "Age",
        fieldPriority: "Priority",
        fieldNEID: "NE ID",
        fieldSiteID: "Site ID",
        fieldStatus: "Status",
        fieldTitleI: "Title I",
        fieldTitleII: "Title II",
        fieldType: "Type",
        fieldAlarm: "Alarm Beginning",
        fieldTechArea: "Technical Area",
        fieldArea: "Area",
        fieldServices: "Services",
        fieldObs: "Observation",
        fieldCreation: "Creation",
        fieldSource: "Source",
        fieldSiteName: "Site Name",
        fieldNEName: "NE Name",
        fieldSiteCode: "Site Code",
        fieldCsc: "Customer Site Code",
        fieldWiActivity: "Activity",
        fieldWiSite: "Site",
        fieldWiPlannedOn: "Planned On",
        fieldWiDeadline: "Deadline",
        fieldWiDuration: "Duration",
        fieldWiValue: "Value",
        fieldWiDescription: "Description",
        fieldWiCsc: "Customer Site Code",
        fieldWPID: "Work Package ID",
        fieldWPName: "Work Package Name",
        fieldCommKey: "Communication Key",
        fieldResponsible: "Responsible",
        fieldWiChecklistName: "Checklist Name",
        fieldWiChecklistType: "Checklist Type",
        checklistInvalidTypes: "Invalid file selected, valid files are ",
        alertContentSaved: "Content is saved. Redirecting to details...",
        waitingSync: "Waiting synchronization...",
        inboxBox: "Inbox",
        workingBox: "Working",
        waitBox: "Wait. Close",
        closedBox: "Closed",
        options: "Options",
        timeToRefresh: "Time to Refresh",
        logoff: "Logoff",
        btnClear: "Clear",
        btnSaveDraft: "Save Draft",
        statusOpen: "Open",
        statusPlanned: "Planned",
        statusSubmitted: "Submitted",
        statusDispatched: "Dispatched",
        statusAssigned: "Assigned",
        statusAccepted: "Accepted",
        statusWip: "Work In Progress",
        statusCloseRequest: "Close Request",
        statusReadyToClose: "Ready to Close",
        statusPending: "Pending",
        statusClosed: "Closed",
        statusCloseRefused: "Close Refused",
        statusReceived: "Received",
        statusAcknowledge: "Acknowledged",
        statusRefused: "Refused",
        statusDisplacement: "Displacement",
        statusDisplaced: "Displaced",
        statusExecuted: "Executed",
        statusInterrupted: "Interrupted",
        statusPendingApproval: "Pending Approval",
        statusApproved: "Approved",
        statusRejected: "Rejected",
        notWorked: "Not worked",
        confirmClosure: "Confirm Closure?",
        onSiteExecution: "Cannot start execution due to orders already being executed",
        downloadingOfflineResources: "Downloading offline resources...",
        resourcesUpdated: "Resources updated. Reloading...",
        cacheDownloaded: "Cache downloaded. No update available",
        resourcesDownloaded: "All resources downloaded",
        cacheError: "Could not store files. Check private mode settings.",
        enterLogin: "Please enter a username",
        enterPassword: "Please enter a password",
        userNotAvailable: "User not available to offline login",
        wrongPassword: "Wrong password",
        releaseNotes: "Release Notes",
        forgotPass: "Forgot my password",
        changePass: "Change password",
        login: "Login",
        password: "Password",
        valueRequired: "Value required",
        indexeddbNotSup: "IndexedDB is not supported on this browser",
        fileStored: "File stored in local database. When online, application will ask for confirmation to send it",
        fileSizeLimit: "File Size is more than",
        fileSizeTotal: "Total of Checklist files",
        fileSizeNotAllowd: "This file will exceed the file limit set by the project",
        notPossibleCompress: "Not possible to compress this file. Using normal upload instead",
        actionsOffline: "Some offline actions were performed and will be synchronized when on Online flow",
        actionsOfflineUploading: "Uploading",
        actionsOfflineUploadingFrom: "from",
        actionsOfflineUploadingCompleted: "Upload completed"
    }, e = {
        workOrders: "Work Orders",
        errorLoading: "Erro carregando items. Contate o suporte. Erro é",
        noDataMsg: "Sem dados disponiveis. Verifique as opções de sincronização",
        workItemsTitle: "Work Items",
        sla: "SLA",
        endingDate: "Data final",
        expiredSla: "SLA expirado",
        onSiteError: "Não é possível realizar Execução. Deslocamento é obrigatório, mas não está disponível no modo offline.",
        acceptBtn: "Aceite",
        acceptBtnConfirm: "Confirmar aceite?",
        backBtn: "Voltar",
        refuseBtn: "Recusar",
        refuseType: "Tipo de recusa",
        refuseBtnConfirm: "Confirmar recusa?",
        onSiteBtn: "Execução",
        OnSiteBtnConfirm: "Confirmar execução?",
        closeRequestBtn: "Req. de Fechamento",
        closureType: "TIpo de fechamento",
        closureClass: "Causa do fechamento",
        closeRequestBtnConfirm: "Confirmar Req. de Fechamento?",
        materialsTitle: "Materiais",
        materialsAck: "Reconhecer Materiais",
        materialsMiss: "Materiais faltantes",
        siteDetails: "Detalhes do Site",
        historyTitle: "Histórico",
        closureInfo: "Info de fechamento",
        woDetails: "Detalhes da Work Order",
        externalServices: "Serviços externos",
        checklistTitle: "Checklist",
        activityTitle: "Atividade",
        woTitle: "WO",
        targetTitle: "Data alvo",
        plannedTitle: "Planejado em",
        cscTitle: "Customer Site Code",
        fileUploadNotAvailable: "Envio de arquivos não está disponível no modo offline",
        fileNameTitle: "Nome do arquivo",
        fileTypeTitle: "Tipo do arquivo",
        fileSizeTitle: "Tamanho do arquivo",
        uploadingMsg: "Enviando... Aguarde...",
        uploadSuccess: "Arquivo enviado com sucesso",
        uploadSelect: "Escolha um arquivo para enviar",
        fileTitle: "Arquivo",
        uploadCompress: "Comprimindo arquivo... Aguarde...",
        uploadCompressSize: "Tamanho do arquivo comprimido",
        uploadCompressQuality: "Qualidade da compressão",
        uploadCompressPreview: "Prévia do arquivo",
        saveBtn: "Salvar",
        clearAll: "Limpar todos",
        selectAllCheck: "Selecionar todos",
        closeBtn: "Fechar",
        selectBtn: "Escolha...",
        uploadBtn: "Enviar",
        removeBtn: "Remover",
        siteId: "Site ID",
        siteName: "Nome do Site",
        cityLabel: "Cidade",
        areaLabel: "Area",
        addressLabel: "Endereço",
        drivingDirections: "Direções de direção",
        specialRequirements: "Requerimentos especiais",
        healthSafety: "Cuidados com saúde",
        latitudeLabel: "Latitude",
        longitudeLabel: "Longitude",
        keyLoc: "Ponto chave",
        antennaLabel: "Descrição da antena",
        lastUpdate: "Última atualização",
        dispatchDate: "Data de despacho",
        acceptanceDate: "Data de aceite",
        refuseDate: "Data de recusa",
        onSiteDate: "Data de execução",
        closeReqDate: "Data do req. de fechamento",
        crType: "Tipo do req. de fechamento",
        crCloseClass: "Causa do fechamento",
        crSiteVisit: "Visitas ao site",
        crObservation: "Observação de fechamento",
        crReason: "Razão de fechamento",
        crSolution: "Solução do fechamento",
        crServices: "Serviços",
        crSpare: "Partes sobresalentes",
        assType: "Tipo do fechamtno da designação",
        assDate: "Data do fechamento da designação",
        assObs: "Observação do fechamento da designação",
        woClosureType: "Tipo do fechamento da WO",
        woClosureObs: "Observacão do fechamento da WO",
        refType: "Tipo de recusa",
        refDate: "Data de recusa",
        title1: "Titulo I",
        title2: "Titulo II",
        priorityLabel: "Prioridade",
        woType: "Tipo da WO",
        alarmBeg: "Inicio do Alarme",
        tecArea: "Area Técnica",
        workProfile: "Perfil de trabalho",
        neID: "ID da NE",
        neName: "Nome da NE",
        neModel: "Modelo da NE",
        servicesLabel: "Serviços",
        sourceLabel: "Fonte",
        obs: "Observação",
        recSpareParts: "Peças sobresalentes recomendadas",
        keyLabel: "Chave",
        serviceImpact: "Impacto no serviço",
        wpID: "ID do pacote",
        wpName: "Nome do pacte",
        shortNameTitle: "Nome abreviado",
        descriptionDetail: "Descrição",
        quantityDetail: "Quantidade",
        projectDetail: "Projeto",
        wiSite: "Site do WI",
        wiDesc: "Descrição do WI",
        plannedDate: "Data de planejamento",
        matCode: "Código do Material",
        matItemType: "Tipo do item",
        matQuantity: "Quantidade",
        matSAP: "Quantiadde SAP",
        matMaterial: "Material",
        matLocation: "Localizaçào",
        matOrigin: "Origem",
        matSup: "Vendedor",
        matPrice: "Preço",
        statusTitle: "Status",
        selectMaterial: "Escolha os materiais para reconehcer",
        selectMaterialMiss: "Escolha os materiais faltantes",
        actStatus: "Status da ativação",
        wiStatus: "Status do Work Item",
        alertAcceptanceSuccess: "Aceite salvo com sucesso",
        alertOnSiteSuccess: "Execução salva com sucesso",
        alertRefusalSuccess: "Recusa salva com sucesso",
        alertAckSuccess: "Reconhecimento salvo com sucesso",
        alertMissMaterials: "Materiais faltantes salvos com sucesso",
        alertMandatoryFiles: "Ação não permitida. O Checklist contem arquivos obrigatórios que devem ser enviados usando o modo online",
        alertMandatoryFields: "Alguns campos obrigatórios do Checklist não foram preenchidos. Req. de fechamento não realizado.",
        alertMandatoryFieldsCheck: "Alguns campos obrigatórios do Checklist não foram preenchidos.",
        mandatoryClosureType: "Tipo de fechamento é obrigatório",
        mandatoryCauseClass: "Causa é obrigatória",
        mandatorySiteVisit: "Visitas ao site é obrigatório",
        mandatorySiteVisitNumber: "Visitas ao site é obrigatório e deve ser um número",
        mandatoryGpsValue: "Valor do GPS é obrigatório",
        alertCloseRequestSuccess: "Req. de fechamento salvo com sucesso",
        alertChecklistSuccess: "Checklist salvo com sucesso",
        alertChecklistDraft: "Rascunho do checklist salvo com sucesso",
        fieldProject: "Projeto",
        fieldAlphaID: "Alpha ID",
        fieldSLA: "SLA",
        fieldAge: "Idade",
        fieldPriority: "Prioridade",
        fieldNEID: "ID da NE",
        fieldSiteID: "ID do site",
        fieldStatus: "Status",
        fieldTitleI: "Titulo I",
        fieldTitleII: "Titulo II",
        fieldType: "Tipo",
        fieldAlarm: "Inicio do Alarme",
        fieldTechArea: "Area Tecnica",
        fieldArea: "Area",
        fieldServices: "Seviços",
        fieldObs: "Observação",
        fieldCreation: "Criação",
        fieldSource: "Fonte",
        fieldSiteName: "Nome do Site",
        fieldNEName: "Nome da NE",
        fieldSiteCode: "Código do Site",
        fieldCsc: "Customer Site Code",
        fieldWiActivity: "Atividade",
        fieldWiSite: "Site",
        fieldWiPlannedOn: "Planejado em",
        fieldWiDeadline: "Data limite",
        fieldWiDuration: "Duraçào",
        fieldWiValue: "Valor",
        fieldWiDescription: "Descriçào",
        fieldWiCsc: "Customer Site Code",
        fieldWPID: "ID do Work Package",
        fieldWPName: "Nome do Work Package",
        fieldCommKey: "Chave de comunoicaçào",
        fieldResponsible: "Responsável",
        fieldWiChecklistName: "Nome do Checklist",
        fieldWiChecklistType: "Tipo do Checklist",
        checklistInvalidTypes: "Arquivo invalido selecionado, tipos válidos são ",
        alertContentSaved: "Conteúdo salvo. Redirecionando para os detalhes...",
        waitingSync: "Aguardando sincronização",
        inboxBox: "Novas",
        workingBox: "Trab.",
        waitBox: "Aguar. Fech.",
        closedBox: "Fech.",
        options: "Opções",
        timeToRefresh: "Tempo para atualizar",
        logoff: "Sair",
        btnClear: "Limpar",
        btnSaveDraft: "Salvar Rascunho",
        statusOpen: "Open",
        statusPlanned: "Planejado",
        statusSubmitted: "Submetida",
        statusAssigned: "Asignado",
        statusDispatched: "Despachado",
        statusAccepted: "Aceite",
        statusWip: "Trabalho em Andamento",
        statusCloseRequest: "Pedido de fechamento",
        statusReadyToClose: "Pronto para fechar",
        statusPending: "Suspensão",
        statusClosed: "Fechado",
        statusCloseRefused: "Fechamento negado",
        statusReceived: "Recebido",
        statusAcknowledge: "Reconhecido",
        statusRefused: "Recusado",
        statusDisplacement: "Em deslocamento",
        statusDisplaced: "Deslocado",
        statusExecuted: "Execuçào",
        statusInterrupted: "Interrompido",
        statusPendingApproval: "Aprovação pendente",
        statusApproved: "Aprovado",
        statusRejected: "Rejeitado",
        notWorked: "Não trabalhadas",
        confirmClosure: "Confirmar Fechamento?",
        onSiteExecution: "Não é possível iniciar a execução devido a ordens já sendo executadas.",
        downloadingOfflineResources: "Baixando recursos do offline",
        resourcesUpdated: "Recursos baixados... Recarregando...",
        cacheDownloaded: "Cache baixado. Não é necessário atualizar",
        resourcesDownloaded: "Todos os recursos baixados",
        cacheError: "Não foi possível armazenar recursos. Verifique as configurações.",
        enterLogin: "Entre um usuário",
        enterPassword: "Entre uma senha",
        userNotAvailable: "Usuário não disponível para login offline",
        wrongPassword: "Senha incorreta",
        releaseNotes: "Notas da versão",
        forgotPass: "Esqueci minha senha",
        changePass: "Alterar senha",
        login: "Login",
        password: "Senha",
        valueRequired: "Valor obrigatório",
        indexeddbNotSup: "IndexedDB não é suportado neste navegador",
        fileStored: "Arquivo armazenado localmente. Quando online, a aplicação ira pedir uma confirmação para o envio",
        fileSizeLimit: "O tamanho do arquivo é maior que",
        fileSizeTotal: "Total dos arquivos do Checklist",
        fileSizeNotAllowd: "Este arquivo vai ultrapassar o tamanho de arquivos configurado no projeto",
        notPossibleCompress: "Não foi possível comprimir esta imagem. Utilizando o upload normal",
        actionsOffline: "Algumas ações foram executadas offline e serão sincronizadas quando acessar o fluxo Online",
        actionsOfflineUploading: "Enviando",
        actionsOfflineUploadingFrom: "de",
        actionsOfflineUploadingCompleted: "Envio completo"
    }, h = {
        workOrders: "Work Orders",
        errorLoading: "Error artículos de carga. Por favor, póngase en contacto con soporte. El error es ",
        noDataMsg: "No hay datos disponibles. Compruebe la configuración de sincronización. ",
        workItemsTitle: "Elementos de trabajo",
        sla: "SLA",
        endingDate: "Fecha de finalización",
        expiredSla: "caducado SLA",
        onSiteError: "No se puede realizar en el sitio. El desplazamiento es obligatoria en este proyecto, pero no está disponible en modo sin conexión. ",
        acceptBtn: "Aceptar",
        acceptBtnConfirm: "Confirmar Aceptar?",
        backBtn: "Volver",
        refuseBtn: "basura",
        refuseType: "Tipo Negativa",
        refuseBtnConfirm: "? Confirmar Rechazar",
        onSiteBtn: "En el sitio",
        OnSiteBtnConfirm: "Confirmar en el sitio?",
        closeRequestBtn: "Cerrar Solicitud",
        closureType: "Tipo de cierre ",
        closureClass: "Cierre Causa Clase",
        closeRequestBtnConfirm: "Confirmar Cerrar Solicitud?",
        materialsTitle: "Materiales",
        materialsAck: "Reconocer Materiales",
        materialsMiss: "Materiales Missing",
        siteDetails: "Información sobre el emplazamiento",
        historyTitle: "Historia",
        closureInfo: "Información de Cierre",
        woDetails: "Trabajo Detalles Orden",
        externalServices: "Servicios Externos",
        checklistTitle: "Lista de verificación",
        activityTitle: "Actividad",
        woTitle: "WO",
        targetTitle: "Objetivo On",
        plannedTitle: "planeado",
        cscTitle: "Código del Sitio del Cliente",
        fileUploadNotAvailable: "Subir archivo no está disponible en el modo fuera de línea",
        fileNameTitle: "Nombre de archivo",
        fileTypeTitle: "Tipo de archivo",
        fileSizeTitle: "Tamaño del archivo",
        uploadingMsg: "Subiendo ... Por favor, espere ...",
        uploadSuccess: "archivo cargado con éxito ",
        uploadSelect: "Por favor, seleccione un archivo para cargar",
        fileTitle: "Archivo",
        uploadCompress: "La compresión de archivos ... por favor espere ",
        uploadCompressSize: "tamaño del archivo comprimido",
        uploadCompressQuality: "calidad de compresión ",
        uploadCompressPreview: "Vista previa del archivo",
        saveBtn: "Guardar",
        clearall: "Borrar todo",
        selectAllCheck: "Seleccionar todo",
        closeBtn: "Close",
        selectBtn: "Seleccionar ...",
        uploadBtn: "Subir",
        removeBtn: "Eliminar",
        SiteID: "Sitio ID",
        siteName: "Nombre del sitio",
        cityLabel: "City",
        areaLabel: "Zona",
        "direcciónEtiqueta": "Dirección",
        drivingDirections: "Instrucciones para llegar",
        specialrequirements: "Requisitos especiales ",
        healthSafety: "Seguridad de la Salud",
        latitudeLabel: "Latitud",
        longitudeLabel: "Longitud",
        keyLoc: "Key Lugar",
        antennaLabel: "Antena Descripción",
        lastUpdate: "Última actualización",
        dispatchDate: "Fecha de Despacho ",
        acceptanceDate: "Fecha de Aceptación ",
        refuseDate: "Fecha Negativa",
        onSiteDate: "On Site Date",
        closeReqDate: "Cerrar Fecha de solicitud",
        crType: "Cerrar Solicitud Tipo ",
        crCloseClass: "Cierre Causa Clase",
        crSiteVisit: "Visitas del sitio",
        crObservation: "Cierre Observación",
        crReason: "Cierre Razón",
        crSolution: "Cierre Solution",
        crServices: "Close Solicitar Servicios",
        crSpare: "Close Solicitar Repuestos",
        assType: "Asignación Tipo de cierre ",
        assDate: "Asignación Clausura Fecha",
        assObs: "Asignación Clausura de observación",
        woClosureType: "Orden de Trabajo Cierre Tipo",
        woClosureObs: "Orden de Trabajo Cierre de observación",
        refType: "Tipo Negativa",
        refDate: "Fecha Negativa",
        title1: "Título I",
        title2: "Título II",
        priorityLabel: "Prioridad",
        woType: "WO Escriba",
        alarmBeg: "A partir de alarma",
        tecArea: "Área Técnica",
        workProfile: "Perfil de Trabajo ",
        Neid: "NE ID ",
        neName: "NE Nombre",
        neModel: "Modelo NE",
        servicesLabel: "Servicios",
        sourceLabel: "Fuente",
        obs: "observación",
        recSpareParts: "Repuestos recomendados",
        keyLabel: "clave",
        serviceImpact: "Servicio de Impacto",
        wpid: "Trabajo paquete ID",
        wpName: "Trabajo Nombre del paquete",
        shortNameTitle: "Nombre corto",
        descriptionDetail: "Descripción",
        quantityDetail: "Cantidad",
        projectDetail: "Proyecto",
        wiSite: "WI Sitio",
        wiDesc: "WI descripción",
        plannedDate: "Planeado Fecha",
        matCode: "Código de Material",
        matItemType: "Tipo de artículo",
        matQuantity: "Cantidad",
        matSAP: "SAP Cantidad",
        matMaterial: "material",
        matLocation: "Localización",
        matOrigin: "Origen",
        matSup: "Proveedor / Vendedor ",
        matPrice: "Precio",
        StatusTitle: "Estado",
        selectMaterial: "Seleccione Materiales reconocer",
        selectMaterialMiss: "Seleccione materiales que faltan",
        actStatus: "Estado de Activación",
        wiStatus: "Trabajo artículo Estado",
        alertAcceptanceSuccess: "Aceptación almacena correctamente ",
        alertOnSiteSuccess: "En el sitio almacena correctamente",
        alertRefusalSuccess: "Rechazo almacena succcessfully",
        alertAckSuccess: "Reconocer almacenado correctamente",
        alertMissMaterials: "materiales que falta almacenan correctamente",
        alertMandatoryFiles: "La acción no admiten. Lista de verificación tiene archivos obligatorios que deben ser cargados utilizando el flujo en línea ",
        alertMandatoryFields: "Algunos campos lista de control obligatorias no fueron contestadas. Cerrar Solicitud no realiza ",
        alertMandatoryFieldsCheck: "Algunos campos de la lista de verificación obligatorias no fueron contestadas.",
        mandatoryClosureType: "Cierre Tipo es obligatorio",
        mandatoryCauseClass: "Porque la clase es obligatoria",
        mandatorySiteVisit: "Visita al Sitio es obligatorio ",
        mandatorySiteVisitNumber: "Visita al Sitio es obligatorio y debe ser un número ",
        mandatoryGpsValue: "El valor es obligatorio",
        alertCloseRequestSuccess: "Cerrar Solicitud almacena correctamente",
        alertChecklistSuccess: "Lista de control almacena correctamente",
        alertChecklistDraft: "Lista de verificación de proyecto almacena con éxito ",
        fieldProject: "Proyecto",
        fieldAlphaID: "WO Alfa ID",
        fieldSLA: "SLA",
        fieldAge: "Edad",
        fieldPriority: "Prioridad",
        fieldNEID: "NE ID",
        fieldSiteID: "Sitio ID",
        fieldStatus: "Estado",
        fieldTitleI: "Título I",
        fieldTitleII: "Título II",
        FieldType: "Tipo",
        fieldAlarm: "Principio de alarma",
        fieldTechArea: "Área Técnica",
        fieldArea: "Zona",
        fieldServices: "Servicios",
        fieldObs: "observación",
        fieldCreation: "Creación",
        fieldSource: "Fuente",
        fieldSiteName: "Nombre del sitio",
        fieldNEName: "NE Nombre",
        fieldSiteCode: "Código Sitio",
        fieldCsc: "Código del Sitio del Cliente",
        fieldWiActivity: "Actividad",
        fieldWiSite: "Sitio",
        fieldWiPlannedOn: "planeado",
        fieldWiDeadline: "Deadline",
        fieldWiDuration: "Duración",
        fieldWiValue: "Valor",
        fieldWiDescription: "Descripción",
        fieldWiCsc: "Código del Sitio del Cliente",
        fieldWPID: "Trabajo paquete ID",
        fieldWPName: "Trabajo Nombre del paquete",
        fieldCommKey: "Clave Comunicación",
        fieldResponsible: "Responsable",
        fieldWiChecklistName: "Lista de verificación Nombre",
        fieldWiChecklistType: "Tipo Lista de verificación",
        checklistInvalidTypes: "Archivo no válido seleccionados, los archivos válidos son ",
        alertContentSaved: "El contenido se guarda. Redirigir a los detalles ...",
        waitingSync: "Esperando sincronización ...",
        inboxBox: "Entrada",
        workingBox: "Trabajo",
        waitBox: "Esp. Cerrar",
        closedBox: "Cerrado",
        options: "Opciones",
        timeToRefresh: "Tiempo para refrescar",
        logoff: "Desconectarse",
        btnClear: "Borrar",
        btnSaveDraft: "Guardar Borrador",
        statusOpen: "Abierta",
        statusPlanned: "Planeado",
        statusSubmitted: "Enviado",
        statusDispatched: "Se distribuye",
        statusAssigned: "Asignado",
        statusAccepted: "Aceptada",
        statusWip: "trabajo en progreso",
        statusCloseRequest: "Cerrar Solicitud",
        statusReadyToClose: "listo para cerrar",
        statusPending: "En espera",
        statusClosed: "Cerrado",
        statusCloseRefused: "Cerrar Refused",
        statusReceived: "Recibido",
        statusAcknowledge: "Reconocido",
        statusRefused: "Refused",
        statusDisplacement: "Desplazamiento",
        statusDisplaced: "desplazados",
        statusExecuted: "Ejecutado",
        statusInterrupted: "interrumpido",
        statusPendingApproval: "Pendiente De Aprobacion",
        statusApproved: "Aprobado",
        statusRejected: "Rechazado",
        notWorked: "sin trabajar",
        confirmClosure: "Confirmar Clausura?",
        onSiteExecution: "No se puede iniciar la ejecución debido a los pedidos ya en ejecución",
        downloadingOfflineResources: "Descarga de recursos fuera de línea ... ",
        resourcesUpdated: "Recursos informado. Recarga de ... ",
        cacheDownloaded: "Caché descargado. Ninguna actualización disponible",
        resourcesDownloaded: "Todos los recursos cargados ",
        cacheError: "No se pudo almacenar archivos. Compruebe los ajustes del modo privado. ",
        enterLogin: "Por favor introduzca un nombre de usuario",
        enterPassword: "Por favor, introduzca una contraseña",
        userNotAvailable: "El usuario no dispone de conexión de inicio de sesión ",
        wrongPassword: "Contraseña incorrecta",
        releaseNotes: "Notas de lanzamiento",
        forgotPass: "He olvidado mi contraseña",
        changePass: "Cambiar contraseña",
        login: "Entrar",
        password: "Password",
        valueRequired: "Valor requerido",
        indexeddbNotSup: "IndexedDB no se admite en este navegador",
        fileStored: "Archivo almacena en la base de datos local. Cuando está en línea, la aplicación le pedirá confirmación para enviarlo",
        fileSizeLimit: "Tamaño del archivo es más de",
        fileSizeTotal: "Total de archivos Lista del Checklist",
        fileSizeNotAllowd: "Este archivo se exceda el límite de archivo definido por el proyecto",
        notPossibleCompress: "No es posible comprimir el archivo. El uso de carga normal en lugar",
        actionsOffline: "Algunas acciones se llevaron a cabo fuera de línea y se sincronizarán cuando el flujo en línea",
        actionsOfflineUploading: "Upload",
        actionsOfflineUploadingFrom: "de",
        actionsOfflineUploadingCompleted: "Upload completado"
    }, m = {
        workOrders: "工作订单",
        errorLoading: "错误加载项。请联系技术支持。错误",
        noDataMsg: "无可用数据。检查同步设置。",
        workItemsTitle: "工作项",
        sla: "要求完成时间",
        endingDate: "要求完成日期",
        expiredSla: "工单超时",
        onSiteError: "无法执行现场。排量是强制在这个项目上，但它不提供离线模式",
        acceptBtn: "接单",
        acceptBtnConfirm: "确认接单?",
        backBtn: "返回",
        refuseBtn: "拒绝",
        refuseType: "拒绝类型",
        refuseBtnConfirm: "确认接单",
        onSiteBtn: "开始工作",
        onSiteBtnConfirm: "确认开始工作？",
        closeRequestBtn: "关闭请求",
        closureType: "关单请求类型",
        closureClass: "关闭原因类型",
        closeRequestBtnConfirm: "确认关单请求？",
        materialsTitle: "物料 ",
        materialsAck: "接收物料 ",
        materialsMiss: "缺少物料",
        siteDetails: "站点详情",
        historyTitle: "历史",
        closureInfo: "关单信息",
        woDetails: "工单详情",
        externalServices: "外部服务",
        checklistTitle: "任务清单",
        activityTitle: "工作",
        woTitle: "工单",
        targetTitle: "最后期限",
        plannedTitle: "计划时间",
        cscTitle: "客户站点号",
        fileUploadNotAvailable: "文件上传是不是在离线模式下可用",
        fileNameTitle: "文件名",
        fileTypeTitle: "文件类型",
        fileSizeTitle: "文件大小",
        uploadingMsg: "上传......请稍候......",
        uploadSuccess: "文件上传成功",
        uploadSelect: "请选择要上传的文件",
        fileTitle: "文件",
        uploadCompress: "压缩文件...请稍候",
        uploadCompressSize: "压缩文件大小",
        uploadCompressQuality: "压缩质量",
        uploadCompressPreview: "预览文件",
        saveBtn: "保存",
        clearAll: "清除所有",
        selectAllCheck: "全选",
        closeBtn: "关闭",
        selectBtn: "选择......",
        uploadBtn: "上传",
        removeBtn: "删除",
        siteId: "站点号",
        siteName: "站点名",
        cityLabel: "市",
        areaLabel: "区域",
        addressLabel: "地址",
        drivingDirections: "行车路线",
        specialRequirements: "进站限制",
        healthSafety: "注意事项",
        latitudeLabel: "纬度",
        longitudeLabel: "经度",
        keyLoc: "钥匙位置",
        antennaLabel: "天线说明",
        lastUpdate: "最后更新",
        dispatchDate: "派发时间",
        acceptanceDate: "接受时间",
        refuseDate: "退单时间",
        onSiteDate: "进站时间",
        closeReqDate: "发送关闭请求时间",
        crType: "关单请求类型",
        crCloseClass: "关闭原因类型",
        crSiteVisit: "上站次数",
        crObservation: "关单请求描述",
        crReason: "故障单关闭原因",
        crSolution: "故障解决措施",
        crServices: "服务类型",
        crSpare: "备件",
        assType: "工作结束类型",
        assDate: "工作结束时间",
        assObs: "工作结束描述",
        woClosureType: "关单类型",
        woClosureObs: "关单描述",
        refType: "关单拒绝类型",
        refDate: "拒绝关单时间",
        title1: "标题1",
        title2: "标题2",
        priorityLabel: "工单等级",
        woType: "工单类型",
        alarmBeg: "告警开始时间",
        tecArea: "专业",
        workProfile: "工作简介",
        neID: "网元号",
        neName: "网元名",
        neModel: "网元类型",
        servicesLabel: "服务类型",
        sourceLabel: "来源",
        obs: "描述",
        recSpareParts: "建议备件",
        keyLabel: "通信密钥",
        serviceImpact: "业务影响",
        wpID: "工作包代码",
        wpName: "工作包名称",
        shortNameTitle: "简称",
        descriptionDetail: "说明",
        quantityDetail: "数量",
        projectDetail: "项目",
        wiSite: "站点",
        wiDesc: "说明",
        plannedDate: "计划时间",
        matCode: "物料代码",
        matItemType: "type",
        matQuantity: "数量",
        matSAP: "SAP中数量",
        matMaterial: "物料",
        matLocation: "位置",
        matOrigin: "原有",
        matSup: "供应商",
        matPrice: "价格",
        statusTitle: "状态",
        selectMaterial: "选择材料并接收",
        selectMaterialMiss: "选择缺少的物料",
        actStatus: "工单状态",
        wiStatus: "状态",
        alertAcceptanceSuccess: "接受成功存储",
        alertOnSiteSuccess: "在现场成功存储",
        alertRefusalSuccess: "拒绝成功存储",
        alertAckSuccess: "确认保存成功",
        alertMissMaterials: "缺少原料存储成功",
        alertMandatoryFiles: "行动不允许的。核对表必须使用网上流上传文件强制性",
        alertMandatoryFields: "部分必填字段未填写。不执行关闭请求",
        alertMandatoryFieldsCheck: "部分必填字段未填写",
        mandatoryClosureType: "本工单类型要求只能由调度关单",
        mandatoryCauseClass: "关闭原因类型必须填写",
        mandatorySiteVisit: "上站站号必须正在使用中，且发至本系统",
        mandatorySiteVisitNumber: "上站站号必须是0-9之间的数",
        mandatoryGpsValue: "GPS值是必需的",
        alertCloseRequestSuccess: "关闭请求存储成功",
        alertChecklistSuccess: "工作清单保存成功",
        alertChecklistDraft: "工作清单草稿保存成功",
        fieldProject: "项目",
        fieldAlphaID: "工单号",
        fieldSLA: "要求完成时间",
        fieldAge: "当前工单历时",
        fieldPriority: "工单等级",
        fieldNEID: "网元号",
        fieldSiteID: "站点号",
        fieldStatus: "状态",
        fieldTitleI: "标题1",
        fieldTitleII: "标题2",
        fieldType: "工单类型",
        fieldAlarm: "告警开始时间",
        fieldTechArea: "专业",
        fieldArea: "区域",
        fieldServices: "服务类型",
        fieldObs: "描述",
        fieldCreation: "创建时间",
        fieldSource: "来源",
        fieldSiteName: "站点名",
        fieldNEName: "网元名",
        fieldSiteCode: "站点号",
        fieldCsc: "客户站点号",
        fieldWiActivity: "工作",
        fieldWiSite: "站点",
        fieldWiPlannedOn: "计划时间",
        fieldWiDeadline: "最后期限",
        fieldWiDuration: "时长",
        fieldWiValue: "价值",
        fieldWiDescription: "说明",
        fieldWiCsc: "客户站点号",
        fieldWPID: "工作包代码",
        fieldWPName: "工作包名称",
        fieldCommKey: "通信密钥",
        fieldResponsible: "主管",
        fieldWiChecklistName: "清单名称",
        fieldWiChecklistType: "清单类型",
        checklistInvalidTypes: "无效的文件中选择，有效的文件 ",
        alertContentSaved: "内容被保存。重定向到的详细信息...",
        waitingSync: "等待同步...",
        inboxBox: "新工单",
        workingBox: "处理中",
        waitBox: "等待关闭",
        closedBox: "已关闭",
        options: "选项",
        timeToRefresh: "时间刷新",
        logoff: "退出",
        btnClear: "清除",
        btnSaveDraft: "保存为草稿",
        statusOpen: "已创建",
        statusPlanned: "已在计划中",
        statusSubmitted: "已提交",
        statusAssigned: "已指派",
        statusDispatched: "已发送",
        statusAccepted: "已接受",
        statusWip: "工作已开始",
        statusCloseRequest: "关闭请求已发送",
        statusReadyToClose: "可以关闭",
        statusPending: "挂起中",
        statusClosed: "已关闭",
        statusCloseRefused: "关闭拒绝",
        statusReceived: "已接收",
        statusAcknowledge: "已应答",
        statusRefused: "拒绝关闭",
        statusDisplacement: "上站",
        statusDisplaced: "排量结束",
        statusExecuted: "结束工作",
        statusInterrupted: "中断",
        statusPendingApproval: "待批准",
        statusApproved: "批准",
        statusRejected: "拒绝",
        notWorked: "没有开始工作",
        confirmClosure: "确认关闭？",
        onSiteExecution: "工单已经开始执行，请勿重复点击[执行]按钮。",
        downloadingOfflineResources: "离线下载资源......",
        resourcesUpdated: "资源更新。重装......",
        cacheDownloaded: "缓存下载。没有可用的更新",
        resourcesDownloaded: "所有的资源下载",
        cacheError: "不能存储文件。检查私人模式设置。",
        enterLogin: "请输入用户名",
        enterPassword: "请输入密码",
        userNotAvailable: "不提供给离线登录用户",
        wrongPassword: "密码错误",
        releaseNotes: "发行说明",
        forgotPass: "忘记我的密码",
        changePass: "更改密码",
        login: "登录",
        password: "密码",
        valueRequired: "所需的值",
        indexeddbNotSup: "索引型数据库不支持该浏览器",
        fileStored: "文件存储在本地数据库。在网上，程序会要求确认发送",
        fileSizeLimit: "文件大小超过",
        fileSizeTotal: "总的清单文件",
        fileSizeNotAllowd: "该文件将超过文件限制的项目设置",
        notPossibleCompress: "不可能压缩此文件。使用正常上传，而不是",
        actionsOffline: "一些离线操作进行，将同步在网上流时，",
        actionsOfflineUploading: "上传",
        actionsOfflineUploadingFrom: "由",
        actionsOfflineUploadingCompleted: "上传完毕"
    };
    return "en" === c || "en_GB" === c ? d[b] : "es" === c ? h[b] : "pt_BR" === c ? e[b] : "zh" === c ? m[b] : d[b]
}
function redirectToDetailAndStoreId(a) {
    verifyAndRedirect();
    checkedOnline || (window.localStorage.setItem("id", a), location.href = "/mportal/offline/wodetailOff.jsf")
}
function getLanguage() {
    var a = (navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage).split("-")[0];
    console.log(a);
    if (void 0 === a || null === a)a = "en";
    window.localStorage.setItem("localeLogin", a);
    $("#loginForm\\:releaseNotes").text(getResource(!0, "releaseNotes"));
    $("#loginForm\\:forgotPass").text(getResource(!0, "forgotPass"));
    $("#loginForm\\:changePass").text(getResource(!0, "changePass"));
    $("#loginForm\\:loginLabel").text(getResource(!0, "login"));
    $("#loginForm\\:passLabel").text(getResource(!0,
        "password"));
    $("#loginForm\\:loginBtn").attr("value", getResource(!0, "login"))
}
function authenticateOff() {
    var a = $("#loginForm\\:loginUser").val(), b = $("#loginForm\\:loginPass").val(), c = window.localStorage.getItem(a.toLowerCase());
    "" === a && alert(getResource(!0, "enterLogin"));
    "enterPassword" === b && alert(getResource(!0, "enterPassword"));
    null === c ? alert(getResource(!0, "userNotAvailable")) : (c !== b && alert(getResource(!0, "wrongPassword")), c === b && (window.localStorage.setItem("loggedUser", a.toLowerCase()), window.location.href = "/mportal/offline/inboxOff.jsf"))
}
function showOfflineOnlineLogin() {
    $("#loginForm\\:loginBtn").attr("type", "submit");
    $("#loginForm\\:loginBtn").attr("onclick", "fillActions();")
}
function showOfflineOfflineLogin() {
    $("#loginForm\\:loginBtn").attr("type", "button");
    $("#loginForm\\:loginBtn").attr("onclick", "authenticateOff()")
}
function showOfflineOnline() {
    var a = jQuery.parseJSON(window.localStorage.getItem("id"));
    $("#inbox").attr("onclick", "clickToInboxBox();");
    $("#working").attr("onclick", "clickToWorkingBox();");
    $("#waiting").attr("onclick", "clickToWaitingBox();");
    $("#closed").attr("onclick", "clickToClosedBox();");
    $("#acceptBtn").attr("onclick", "clickToDetailsBox('" + a + "')");
    $("#acceptBtn").removeAttr("href");
    $("#refuseBtn").attr("onclick", "clickToDetailsBox('" + a + "')");
    $("#refuseBtn").removeAttr("href");
    $("#onsiteBtn").attr("onclick",
        "clickToDetailsBox('" + a + "')");
    $("#onsiteBtn").removeAttr("href");
    $("#closeRequestBtn").attr("onclick", "clickToDetailsBox('" + a + "')");
    $("#closeRequestBtn").removeAttr("href");
    $("#materialBtn").attr("onclick", "clickToDetailsBox('" + a + "')");
    $("#materialBtn").removeAttr("href");
    $("#checklistBtn").attr("onclick", "clickToDetailsBox('" + a + "')");
    $("#checklistBtn").removeAttr("href");
    $("#materialAckBtn").attr("onclick", "clickToDetailsBox('" + a + "')");
    $("#materialAckBtn").removeAttr("href");
    $("#materialMissBtn").attr("onclick",
        "clickToDetailsBox('" + a + "')");
    $("#materialMissBtn").removeAttr("href");
    $("#saveAcceptanceBtn").attr("onclick", "clickToDetailsBox('" + a + "')");
    $("#saveRefuseBtn").attr("onclick", "clickToDetailsBox('" + a + "')");
    $("#saveOnSiteBtn").attr("onclick", "clickToDetailsBox('" + a + "')");
    $("#saveCloseRequestBtn").attr("onclick", "clickToDetailsBox('" + a + "')");
    $("#saveMaterialAckBtn").attr("onclick", "clickToDetailsBox('" + a + "')");
    $("#saveMaterialMissBtn").attr("onclick", "clickToDetailsBox('" + a + "')");
    $("#checklistSave").attr("onclick",
        "prepareToAuthenticateAndSaveVerify();");
    $("#checklistSaveDraft").attr("onclick", "prepareToAuthenticateAndSave();");
    $("#checklistClear").attr("onclick", "prepareToAuthenticateAndSave();");
    $("li").each(function (a) {
        a = $(this);
        var c = $(this).attr("storeid");
        void 0 !== c && a.attr("onclick", "clickToDetailsBox('" + c + "')")
    });
    $("div").each(function (a) {
        a = $(this);
        var c = $(this).attr("storeid"), d = $(this).attr("onclick");
        void 0 !== d && 0 > d.indexOf("toggleWoList") && void 0 !== c && a.attr("onclick", "clickToDetailsBox('" + c + "')")
    })
}
function showOfflineOffline() {
    $("#inbox").attr("onclick", "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#working").attr("onclick", "window.location.href \x3d '/mportal/offline/workingOff.jsf';");
    $("#waiting").attr("onclick", "window.location.href \x3d '/mportal/offline/waitingOff.jsf';");
    $("#closed").attr("onclick", "window.location.href \x3d '/mportal/offline/closedOff.jsf';");
    $("#acceptBtn").attr("href", "acceptanceOff.jsf");
    $("#acceptBtn").removeAttr("onclick");
    $("#refuseBtn").attr("href",
        "refuseOff.jsf");
    $("#refuseBtn").removeAttr("onclick");
    $("#onsiteBtn").attr("href", "onsiteOff.jsf");
    $("#onsiteBtn").removeAttr("onclick");
    $("#closeRequestBtn").attr("href", "closeRequestOff.jsf");
    $("#closeRequestBtn").removeAttr("onclick");
    $("#materialBtn").attr("href", "materialsOff.jsf");
    $("#materialBtn").removeAttr("onclick");
    $("#checklistBtn").attr("href", "checkListOff.jsf");
    $("#checklistBtn").removeAttr("onclick");
    $("#materialAckBtn").attr("href", "materialsAckOff.jsf");
    $("#materialAckBtn").removeAttr("onclick");
    $("#materialMissBtn").attr("href", "materialsMissOff.jsf");
    $("#materialMissBtn").removeAttr("onclick");
    $("#saveAcceptanceBtn").attr("onclick", "storeAcceptance();");
    $("#saveRefuseBtn").attr("onclick", "storeRefusal();");
    $("#saveOnSiteBtn").attr("onclick", "storeOnSite();");
    $("#saveCloseRequestBtn").attr("onclick", "storeCloseRequest();");
    $("#saveMaterialAckBtn").attr("onclick", "storeMaterialsAck();");
    $("#saveMaterialMissBtn").attr("onclick", "storeMaterialsMiss();");
    $("#checklistSave").attr("onclick", "saveValidChecklist();");
    $("#checklistSaveDraft").attr("onclick", "copyValuesToHiddenVar();");
    $("#checklistClear").attr("onclick", "clearDraft();");
    $("li").each(function (a) {
        a = $(this).attr("storeid");
        void 0 !== a && $(this).attr("onclick", "redirectToDetailAndStoreId('" + a + "')")
    });
    $("div").each(function (a) {
        a = $(this);
        var b = $(this).attr("storeid"), c = $(this).attr("onclick");
        void 0 !== c && 0 > c.indexOf("toggleWoList") && void 0 !== b && a.attr("onclick", "redirectToDetailAndStoreId('" + b + "')")
    })
}
function appendSuccessCache() {
    $("#cacheMessage").empty();
    $("#staySignedDiv").empty();
    jQuery("\x3cspan/\x3e", {
        text: getResource(!0, "resourcesDownloaded"),
        style: "color: green; font-size: 10px"
    }).appendTo("#cacheMessage")
}
function appendStorageError() {
    $("#cacheMessage").empty();
    $("#staySignedDiv").empty();
    jQuery("\x3cspan/\x3e", {
        text: getResource(!0, "cacheError"),
        style: "color: red; font-size: 10px"
    }).appendTo("#cacheMessage")
}
function appendProgressCache(a) {
    $("#cacheMessage").empty();
    $("#staySignedDiv").empty();
    jQuery("\x3cspan/\x3e", {text: a, style: "color: black; font-size: 10px"}).appendTo("#cacheMessage")
}
function appendErrorCache() {
    $("#cacheMessage").empty();
    $("#staySignedDiv").empty()
}
function appendUpdateCache() {
    $("#cacheMessage").empty();
    $("#staySignedDiv").empty();
    jQuery("\x3cspan/\x3e", {
        text: getResource(!0, "resourcesUpdated"),
        style: "color: black; font-size: 10px"
    }).appendTo("#cacheMessage")
}
function appendNoUpdateCache() {
    $("#cacheMessage").empty();
    $("#staySignedDiv").empty();
    jQuery("\x3cspan/\x3e", {
        text: getResource(!0, "cacheDownloaded"),
        style: "color: black; font-size: 10px"
    }).appendTo("#cacheMessage")
}
function fillActions() {
    var a = $("#loginForm\\:loginUser").val(), b = $("#loginForm\\:loginPass").val();
    window.localStorage.setItem("loggedUser", a.toLowerCase());
    window.localStorage.setItem("loggedPassword", b);
    fillActionsFields(a)
}
function fillActionsUser(a) {
    a = a.toLowerCase();
    fillActionsFields(a)
}
function fillActionsFields(a) {
    a = a.toLowerCase();
    var b = window.localStorage.getItem("acceptance_" + a), c = window.localStorage.getItem("refuse_" + a), d = window.localStorage.getItem("onsite_" + a), e = window.localStorage.getItem("closerequest_" + a), h = window.localStorage.getItem("materialsAck_" + a), m = window.localStorage.getItem("materialsMiss_" + a), k = window.localStorage.getItem("clSave_" + a);
    a = window.localStorage.getItem("clDraft_" + a);
    $("#loginForm\\:acceptances").val(b);
    $("#loginForm\\:refuses").val(c);
    $("#loginForm\\:onsites").val(d);
    $("#loginForm\\:closerequests").val(e);
    $("#loginForm\\:materialAck").val(h);
    $("#loginForm\\:materialMiss").val(m);
    $("#loginForm\\:checklistSave").val(k);
    $("#loginForm\\:checklistDraft").val(a)
}
var positionGps, checker, isConnected, firstTry, offline, checkedOnline, hrefLink, isLoginBtn;
function check() {
    -1 < window.location.pathname.indexOf("/offline/") && ($("#alertMe").attr("class", "indicatorOff"), $("#alertMe2").attr("class", "indicatorOff"));
    console.log("Navigator");
    console.log(navigator.onLine);
    console.log(window.navigator.onLine);
    $("a").click(verifyAndRedirect);
    $("input").click(verifyAndRedirect);
    verifyActions();
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOfflineStatus);
    window.navigator.onLine ? ($("#alertMe").attr("class", "indicatorOn"),
        $("#alertMe2").attr("class", "indicatorOn"), offline = !1) : ($("#alertMe").attr("class", "indicatorOff"), $("#alertMe2").attr("class", "indicatorOff"), offline = !0)
}
function updateOnlineStatus() {
    $("#alertMe").attr("class", "indicatorOn");
    $("#alertMe2").attr("class", "indicatorOn");
    offline = !0
}
function updateOfflineStatus() {
    $("#alertMe").attr("class", "indicatorOff");
    $("#alertMe2").attr("class", "indicatorOff");
    offline = !1
}
function verifyActions() {
    var a = getLoggedUser(), b = !1, c = window.localStorage.getItem("acceptance_" + a), d = window.localStorage.getItem("refuse_" + a), e = window.localStorage.getItem("onsite_" + a), h = window.localStorage.getItem("closerequest_" + a), m = window.localStorage.getItem("materialsAck_" + a), k = window.localStorage.getItem("materialsMiss_" + a), f = window.localStorage.getItem("clSave_" + a), a = window.localStorage.getItem("clDraft_" + a);
    null !== c && "[]" !== c && (b = !0);
    null !== d && "[]" !== d && (b = !0);
    null !== e && "[]" !== e && (b = !0);
    null !== h && "[]" !== h && (b = !0);
    null !== m && "[]" !== m && (b = !0);
    null !== k && "[]" !== k && (b = !0);
    null !== f && "[]" !== f && (b = !0);
    null !== a && "[]" !== a && (b = !0);
    b && $("#refreshIcon").attr("style", "cursor: pointer; float: right; display: block")
}
function verifyAndRedirect() {
    var a = $(this).attr("id"), b = !1;
    void 0 !== a && null !== a && (-1 < a.indexOf("loginUser") && (b = !0), -1 < a.indexOf("loginPass") && (b = !0), -1 < a.indexOf("loginBtn") && (isLoginBtn = !0));
    b || (hrefLink = $(this).attr("href"), offline ? (redirectToOffline(), checkedOnline = !1) : detectConnectionTest())
}
function redirectToOffline() {
    var a = window.location.pathname, b = -1 < a.indexOf("/offline/");
    if (isLoginBtn)event.preventDefault(), authenticateOff(), isLoginBtn = !1; else if (b)void 0 !== hrefLink && (window.location.href = hrefLink); else {
        event.preventDefault();
        var a = window.location.pathname, b = -1 < a.indexOf("/flow/"), c = -1 < a.indexOf("/login."), d = -1 < a.indexOf("/inbox."), e = -1 < a.indexOf("/working."), h = -1 < a.indexOf("/waitingclose."), a = -1 < a.indexOf("/closed.");
        b ? window.location.href = "/mportal/offline/wodetailOff.jsf" : c ?
            authenticateOff() : window.location.href = d ? "/mportal/offline/inboxOff.jsf" : e ? "/mportal/offline/workingOff.jsf" : h ? "/mportal/offline/waitingOff.jsf" : a ? "/mportal/offline/closedOff.jsf" : "/"
    }
}
function redirectToOnline() {
    $("a").unbind("click");
    $("input").unbind("click");
    var a = window.localStorage.getItem("id"), b = window.location.pathname, c = -1 < b.indexOf("/wodetailOff."), d = -1 < b.indexOf("/inboxOff."), e = -1 < b.indexOf("/workingOff."), h = -1 < b.indexOf("/waitingOff."), m = -1 < b.indexOf("/closedOff."), b = -1 < b.indexOf("/offline/");
    c ? clickToDetailsBox(a) : d ? clickToInboxBox() : e ? clickToWorkingBox() : h ? clickToWaitingBox() : m ? clickToClosedBox() : b && clickToDetailsBox(a)
}
function detectConnectionTest() {
    var a = -1 < window.location.pathname.indexOf("/offline/");
    jQuery.ajax({
        type: "POST", timeout: 3E3, async: !1, url: "/mportal/keepalive.jsf", success: function (b, c, d) {
            a && (event.preventDefault(), checkedOnline = !0, redirectToOnline())
        }, error: function (a, c, d) {
            redirectToOffline();
            checkedOnline = !1
        }, cache: !1
    })
}
function startGpsTrackingOnline() {
    navigator.geolocation.getCurrentPosition(successHandlerOnline, errorHandlerOnline, {
        enableHighAccuracy: !0,
        maximumAge: 0
    });
    void 0 !== checker && clearInterval(checker);
    checker = setInterval(checkNavigator, 1E3)
}
function successHandlerOnline(a) {
    500 < a.coords.accuracy && !trying_accurance && (startGpsTracking(), trying_accurance = !0);
    trying_accurance = !1;
    positionGps = a
}
function callbackhandler(a) {
    isConnected = a ? !0 : !1
}
function checkNavigator() {
    detectConnectionTest();
    isConnected ? showOnline(!0, positionGps) : (detectConnectionTest(), isConnected || showOffline())
}
function errorHandlerOnline(a) {
}
function showOnline(a, b) {
    $("#alertMe").attr("class", "indicatorOn");
    $("#alertMe2").attr("class", "indicatorOn");
    var c = $(location).attr("href"), d = -1 < c.indexOf("/offline/"), c = -1 < c.indexOf("/protected/");
    d || c ? !d && c ? showOnlineOnline(a, b) : showOfflineOnline() : showOfflineOnlineLogin()
}
function refreshTimer() {
    var a = window.localStorage.getItem("loggedUser");
    window.localStorage.getItem("id");
    var b = 60 * window.localStorage.getItem("refreshTime_" + a);
    if (0 !== b) {
        idleTime = 0;
        $(document).ready(function () {
            setInterval(c, 1E3);
            $(this).mousemove(function (a) {
                idleTime = 0
            });
            $(this).click(function (a) {
                idleTime = 0
            });
            $(this).keypress(function (a) {
                idleTime = 0
            })
        });
        var c = function () {
            idleTime += 1;
            var a = b - idleTime;
            0 <= a && $("#refreshTimer").text(getResource(!1, "timeToRefresh") + ":" + toHHMMSS(a));
            0 === a && detectConnectionTestRefresh()
        }
    } else {
        $(document).ready(function () {
            $("#refreshTimer").text(getResource(!1,
                    "timeToRefresh") + ": - ");
            setInterval(d, 1E3)
        });
        var d = function () {
            $("#refreshTimer").text(getResource(!1, "timeToRefresh") + ": - ")
        }
    }
}
function detectConnectionTestRefresh() {
    var a = $("#alertMe").attr("class"), b = window.localStorage.getItem("id");
    if ("indicatorOn" === a) {
        var c = window.location.pathname, a = -1 < c.indexOf("/wodetailOff."), d = -1 < c.indexOf("/inboxOff."), e = -1 < c.indexOf("/workingOff."), h = -1 < c.indexOf("/waitingOff."), m = -1 < c.indexOf("/closedOff."), c = -1 < c.indexOf("/offline/");
        a ? clickToDetailsBox(b) : d ? clickToInboxBox() : e ? clickToWorkingBox() : h ? clickToWaitingBox() : m ? clickToClosedBox() : c && clickToDetailsBox(b)
    } else location.reload()
}
function showOffline() {
    $("#alertMe").attr("class", "indicatorOff");
    $("#alertMe2").attr("class", "indicatorOff");
    var a = $(location).attr("href"), b = -1 < a.indexOf("/offline/"), a = -1 < a.indexOf("/protected/");
    b || a ? !b && a ? showOnlineOffline() : showOfflineOffline() : showOfflineOfflineLogin()
}
function clickToInboxBox() {
    var a = window.localStorage.getItem("loggedUser"), b = window.localStorage.getItem(a);
    null !== b ? ($("#headerForm\\:userHidden").val(a), $("#headerForm\\:passwordHidden").val(b), fillActionsRedirect(), jQuery("#headerForm\\:clickMeInbox").click()) : window.location.href = "/mportal/login.jsf"
}
function clickToWorkingBox() {
    var a = window.localStorage.getItem("loggedUser"), b = window.localStorage.getItem(a);
    null !== b ? ($("#headerForm\\:userHidden").val(a), $("#headerForm\\:passwordHidden").val(b), fillActionsRedirect(), jQuery("#headerForm\\:clickMeWorking").click()) : window.location.href = "/mportal/login.jsf"
}
function clickToWaitingBox() {
    var a = window.localStorage.getItem("loggedUser"), b = window.localStorage.getItem(a);
    null !== b ? ($("#headerForm\\:userHidden").val(a), $("#headerForm\\:passwordHidden").val(b), fillActionsRedirect(), jQuery("#headerForm\\:clickMeWaiting").click()) : window.location.href = "/mportal/login.jsf"
}
function clickToClosedBox() {
    var a = window.localStorage.getItem("loggedUser"), b = window.localStorage.getItem(a);
    null !== b ? ($("#headerForm\\:userHidden").val(a), $("#headerForm\\:passwordHidden").val(b), fillActionsRedirect(), jQuery("#headerForm\\:clickMeClosed").click()) : window.location.href = "/mportal/login.jsf"
}
function clickToDetailsBox(a) {
    var b = window.localStorage.getItem("loggedUser"), c = window.localStorage.getItem(b);
    null !== c ? ($("#headerForm\\:userHidden").val(b), $("#headerForm\\:passwordHidden").val(c), $("#headerForm\\:activationIdHidden").val(a), fillActionsRedirect(), jQuery("#headerForm\\:clickMeDetails").click()) : window.location.href = "/mportal/login.jsf"
}
function fillActionsRedirect() {
    var a = window.localStorage.getItem("loggedUser"), b = window.localStorage.getItem("acceptance_" + a), c = window.localStorage.getItem("refuse_" + a), d = window.localStorage.getItem("onsite_" + a), e = window.localStorage.getItem("closerequest_" + a), h = window.localStorage.getItem("materialsAck_" + a), m = window.localStorage.getItem("materialsMiss_" + a), k = window.localStorage.getItem("clSave_" + a), a = window.localStorage.getItem("clDraft_" + a);
    $("#headerForm\\:acceptances").val(b);
    $("#headerForm\\:refuses").val(c);
    $("#headerForm\\:onsites").val(d);
    $("#headerForm\\:closerequests").val(e);
    $("#headerForm\\:materialAck").val(h);
    $("#headerForm\\:materialMiss").val(m);
    $("#headerForm\\:checklistSave").val(k);
    $("#headerForm\\:checklistDraft").val(a)
}
function prepareToAuthenticateAndSave() {
    var a = window.localStorage.getItem("loggedUser"), b = window.localStorage.getItem(a);
    getAct(getId());
    $("#headerForm\\:userHidden").val(a);
    $("#headerForm\\:passwordHidden").val(b);
    $("#headerForm\\:activationIdHidden").val(getId());
    copyValuesToHiddenVarDraftOffline();
    window.localStorage.setItem(getId() + "lastId", getId());
    alert("Content is saved. Redirecting to details...");
    fillActionsRedirect();
    jQuery("#headerForm\\:clickMeDetails").click()
}
function prepareToAuthenticateAndSaveVerify() {
    if (0 === validateMandatory()) {
        var a = window.localStorage.getItem("loggedUser"), b = window.localStorage.getItem(a);
        getAct(getId());
        $("#headerForm\\:userHidden").val(a);
        $("#headerForm\\:passwordHidden").val(b);
        $("#headerForm\\:activationIdHidden").val(getId());
        copyValuesToHiddenVar();
        window.localStorage.setItem(getId() + "lastId", getId());
        alert("Content is saved. Redirecting to details...");
        fillActionsRedirect();
        jQuery("#headerForm\\:clickMeDetails").click()
    } else alert("Some mandatory checklist fields were not answered")
}
function getLoggedUser() {
    return window.localStorage.getItem("loggedUser")
}
window.reset = function (a) {
    a.wrap("\x3cform\x3e").closest("form").get(0).reset();
    a.unwrap()
};
function getLoggedUser() {
    return window.localStorage.getItem("loggedUser")
}
function getId() {
    return jQuery.parseJSON(window.localStorage.getItem("id"))
}
function getAct(a) {
    return jQuery.parseJSON(window.localStorage.getItem("act" + a))
}
function loadInbox() {
    loadBox(getIds("inboxActsId_"), getFieldsWo(), getFieldsWi())
}
function loadWorking() {
    loadBox(getIds("workingActsId_"), getFieldsWo(), getFieldsWi())
}
function loadWaiting() {
    loadBox(getIds("waitingActsId_"), getFieldsWo(), getFieldsWi())
}
function loadClosed() {
    loadClosedBox(getIds("closedActsId_"), getFieldsWo(), getFieldsWi())
}
function getIds(a) {
    return jQuery.parseJSON(window.localStorage.getItem(a + getLoggedUser()))
}
function getFieldsWo() {
    return jQuery.parseJSON(window.localStorage.getItem("fieldsWo_" + getLoggedUser()))
}
function getFieldsWi() {
    return jQuery.parseJSON(window.localStorage.getItem("fieldsWi_" + getLoggedUser()))
}
window.onerror = function (a, b, c) {
    jQuery("\x3cdiv/\x3e", {id: "errorDiv", style: "padding-top: 10px;"}).appendTo("#checklistGroup");
    jQuery("\x3cdiv/\x3e", {id: "errorDiv", style: "padding-top: 10px;"}).appendTo("#details");
    jQuery("\x3clabel/\x3e", {
        id: "errorLabel",
        text: getResource(!1, "errorLoading") + ": " + a,
        style: "padding-top: 5px;",
        class: "warning message_box_details"
    }).appendTo("#errorDiv")
};
function loadBox(a, b, c) {
    $("#inbox").text(getResource(!1, "inboxBox"));
    var d = c = b = 0, e = 0, h = "", m = "", k = "", f = !1, q = new Date;
    q.getFullYear();
    q.getMonth();
    q.getDate();
    q.getHours();
    q.getMinutes();
    q.getSeconds();
    $("#checklistGroup").empty();
    if (null === a)jQuery("\x3cdiv/\x3e", {
        id: "noDataDiv",
        style: "padding-top: 10px;"
    }).appendTo("#checklistGroup"), jQuery("\x3clabel/\x3e", {
        id: "noDataLabel",
        text: getResource(!1, "noDataMsg"),
        style: "padding-top: 5px;"
    }).appendTo("#noDataDiv"); else {
        loadCounters();
        q = window.localStorage.getItem("locale_" +
            getLoggedUser());
        if (void 0 === q || "" === q || null === q)q = "en";
        for (var h = [], n = 0; n < a.length; n++) {
            var l = jQuery.parseJSON(window.localStorage.getItem("act" + a[n]));
            l.isWorkItem && (0 === $("#liExpired").length ? (d = 1, jQuery("\x3cli/\x3e", {
                id: "liExpired",
                class: "wo_list_header exp",
                onclick: "toggleWoListOffline('expiredDiv')"
            }).appendTo("#checklistGroup"), $("#liExpired").html(getResource(!1, "workOrders") + " (" + d + ")"), jQuery("\x3cdiv/\x3e", {id: "expiredDiv"}).appendTo("#checklistGroup"), jQuery("\x3cimg/\x3e", {
                id: "imgtoggle_expiredDiv",
                src: "/mportal/resources/img/icon/go_down_icon.png", class: "icon_headers_right"
            }).appendTo("#liExpired"), h.push(l.woAlphaId)) : -1 === h.indexOf(l.woAlphaId) && (h.push(l.woAlphaId), d++, $("#liExpired").text(getResource(!1, "workOrders") + " (" + d + ")"), jQuery("\x3cimg/\x3e", {
                id: "imgtoggle_expiredDiv",
                src: "/mportal/resources/img/icon/go_down_icon.png",
                class: "icon_headers_right"
            }).appendTo("#liExpired")))
        }
        for (n = 0; n < a.length; n++) {
            l = jQuery.parseJSON(window.localStorage.getItem("act" + a[n]));
            d = parseDate(l.sla, l.language);
            h = d.getMonth() + 1;
            if (!l.isWorkItem) {
                if ("en" === q || "en_GB" === q || "es" === q || "pt_BR" === q)0 === $("#li" + d.getDate() + "_" + h + "_" + d.getFullYear()).length ? (c = 1, jQuery("\x3cli/\x3e", {
                    id: "li" + d.getDate() + "_" + h + "_" + d.getFullYear(),
                    class: "wo_list_header",
                    onclick: "toggleWoListOffline('div" + d.getDate() + "_" + h + "_" + d.getFullYear() + "')",
                    text: "SLA: " + d.getDate() + "/" + h + "/" + d.getFullYear() + " (" + c + ")"
                }).appendTo("#checklistGroup"), jQuery("\x3cdiv/\x3e", {
                    id: "div" + d.getDate() + "_" + h + "_" + d.getFullYear(),
                    class: "wo_list_group_opened"
                }).appendTo("#checklistGroup"),
                    d.getDate(), d.getFullYear()) : (c++, $("#li" + d.getDate() + "_" + h + "_" + d.getFullYear()).html(getResource(!1, "sla") + ": " + d.getDate() + "/" + h + "/" + d.getFullYear() + " (" + c + ")")), jQuery("\x3cimg/\x3e", {
                    id: "imgtoggle_div" + d.getDate() + "_" + h + "_" + d.getFullYear(),
                    src: "/mportal/resources/img/icon/go_up_icon.png",
                    class: "icon_headers_right"
                }).appendTo("#li" + d.getDate() + "_" + h + "_" + d.getFullYear());
                "zh" === q && (0 === $("#li" + d.getDate() + "_" + h + "_" + d.getFullYear()).length ? (c = 1, jQuery("\x3cli/\x3e", {
                    id: "li" + d.getDate() + "_" + h + "_" +
                    d.getFullYear(),
                    class: "wo_list_header",
                    onclick: "toggleWoListOffline('div" + d.getDate() + "_" + h + "_" + d.getFullYear() + "')",
                    text: getResource(!1, "sla") + ": " + d.getFullYear() + "-" + h + "-" + d.getDate() + " (" + c + ")"
                }).appendTo("#checklistGroup"), jQuery("\x3cdiv/\x3e", {
                    id: "div" + d.getDate() + "_" + h + "_" + d.getFullYear(),
                    class: "wo_list_group_opened"
                }).appendTo("#checklistGroup"), d.getDate(), d.getFullYear()) : (c++, $("#li" + d.getDate() + "_" + h + "_" + d.getFullYear()).html(getResource(!1, "sla") + ": " + d.getFullYear() + "-" + h + "-" + d.getDate() +
                    " (" + c + ")")), jQuery("\x3cimg/\x3e", {
                    id: "imgtoggle_div" + d.getDate() + "_" + h + "_" + d.getFullYear(),
                    src: "/mportal/resources/img/icon/go_up_icon.png",
                    class: "icon_headers_right"
                }).appendTo("#li" + d.getDate() + "_" + h + "_" + d.getFullYear()))
            }
            l.isWorkItem ? l.woAlphaId !== m && (m = l.woAlphaId, k = l.id, f = !1, h = "expiredDiv", jQuery("\x3cli/\x3e", {
                id: "li" + l.id,
                class: "zebra" + b,
                style: "border: 2px solid #1D448E; margin-bottom: 5px"
            }).appendTo("#" + h)) : (k = m = "", h = "div" + d.getDate() + "_" + h + "_" + d.getFullYear(), jQuery("\x3cli/\x3e", {
                id: "li" +
                l.id, class: "zebra" + b, style: "border: 2px solid #1D448E; margin-bottom: 5px"
            }).appendTo("#" + h));
            jQuery("\x3cdiv/\x3e", {
                id: "mainDiv" + l.id,
                onclick: "",
                storeid: l.id,
                class: "headerWo"
            }).appendTo("#li" + l.id);
            jQuery("\x3cdiv/\x3e", {id: "avatar" + l.id, class: "avatar"}).appendTo("#mainDiv" + l.id);
            jQuery("\x3cdiv/\x3e", {id: "info" + l.id, class: "info"}).appendTo("#mainDiv" + l.id);
            jQuery("\x3cimg/\x3e", {src: getIcon(l.actStatus, l.status)}).appendTo("#avatar" + l.id);
            l.isWorkItem ? $("#mainDiv" + l.id).attr("onclick", "toggleWoListOffline('divWi" +
                k + "')") : $("#mainDiv" + l.id).attr("onclick", "redirectToDetailAndStoreId('" + l.id + "')");
            d = $("#info" + l.id);
            h = $.parseHTML(l.woTemplate);
            d.append(h);
            l.isWorkItem && m === l.woAlphaId && !f && (e = 0, jQuery("\x3cli/\x3e", {
                id: "liWi" + k,
                class: "wo_list_header",
                onclick: "toggleWoListOffline('divWi" + k + "')",
                style: "clear: none !important",
                text: getResource(!1, "workItemsTitle") + "(" + c + ")"
            }).appendTo("#li" + k), jQuery("\x3cdiv/\x3e", {
                id: "divWi" + k,
                class: "wo_list_group_closed"
            }).appendTo("#li" + k), f = !0);
            l.isWorkItem && m === l.woAlphaId &&
            f && (e++, jQuery("\x3cli/\x3e", {
                id: "liWiMain" + l.id,
                onclick: "redirectToDetailAndStoreId('" + l.id + "')",
                storeid: l.id,
                style: "clear: none !important"
            }).appendTo("#divWi" + k), jQuery("\x3cdiv/\x3e", {
                id: "mainDivWi" + l.id,
                class: "headerWi"
            }).appendTo("#liWiMain" + l.id), jQuery("\x3cdiv/\x3e", {
                id: "avatarWi" + l.id,
                class: "avatar"
            }).appendTo("#mainDivWi" + l.id), jQuery("\x3cdiv/\x3e", {
                id: "infoWi" + l.id,
                class: "info"
            }).appendTo("#mainDivWi" + l.id), jQuery("\x3cimg/\x3e", {src: getIcon(l.actStatus, l.status)}).appendTo("#avatarWi" +
                l.id), d = $("#infoWi" + l.id), h = $.parseHTML(l.wiTemplate), d.append(h), $("#liWi" + k).html(getResource(!1, "workItemsTitle") + " (" + e + ")"), jQuery("\x3cimg/\x3e", {
                id: "imgtoggle_divWi" + k,
                src: "/mportal/resources/img/icon/go_up_icon.png",
                class: "icon_headers_right"
            }).appendTo("#liWi" + k));
            b = 0 === b ? 1 : 0
        }
    }
    $(".wo_list_group_closed").first().attr("class", "wo_list_group_opened");
    $(".checks").height($("*[class^\x3d'zebrawi']").height());
    $(".wo_list_group_opened").first().attr("class", "wo_list_group_closed");
    showItem()
}
function myFunction(a, b) {
    console.log(b);
    if ($("#check" + b).is(":checked"))if (confirm(getResource(!1, "confirmClosure"))) {
        for (var c = getAct(getId()), d = getLoggedUser(), d = jQuery.parseJSON(window.localStorage.getItem("closeRequestTypes_" + d)), e = !1, h = !1, m = !1, k = 0; k < d.length; k++)d[k].projectId === c.projectId && (d[k].mandatory && (e = !0), d[k].useCauseClass && (h = !0), d[k].useSiteVisit && (m = !0));
        window.localStorage.setItem("id", b);
        storeCloseRequestCheck(e, h, m);
        $("#headerForm").get(0).setAttribute("action", "/mportal/offline/workingOff.jsf?#mainDiv" +
            a);
        $("#headerForm").submit()
    } else $("#check" + b).prop("checked", !1)
}
function showItem() {
    var a = $(location).attr("href"), b = a.split("#"), c = $("#" + b[1]).parent().parent().attr("class"), d = $("#" + b[1]).parent().parent().attr("id");
    void 0 !== d && "wo_list_header exp" !== d && "wo_list_group_closed" === c && toggleWoListOffline(d);
    void 0 !== b[1] && (c = b[1].split("mainDiv"), b = $("#divWi" + c[1]).attr("class"), c = "divWi" + c[1], "wo_list_group_closed" === b && (toggleWoListOffline(c), window.location = a))
}
function loadClosedBox(a, b, c) {
    var d = c = b = 0, e = 0, h = "", m = "", k = "", f = !1;
    $("#checklistGroup").empty();
    var q = window.localStorage.getItem("locale_" + getLoggedUser());
    if (void 0 === q || "" === q || null === q)q = "en";
    for (var n = 0; n < a.length; n++) {
        var l = jQuery.parseJSON(window.localStorage.getItem("act" + a[n])), p = parseDate(l.lastUpdateDate, l.language), r = p.getMonth() + 1;
        "en" !== q && "en_GB" !== q && "es" !== q && "pt_BR" !== q || "" === l.closeRequestDate || (0 === $("#li" + p.getDate() + "_" + r + "_" + p.getFullYear()).length && (jQuery("\x3cli/\x3e", {
            id: "li" +
            p.getDate() + "_" + r + "_" + p.getFullYear(),
            class: "wo_list_header",
            onclick: "toggleWoListOffline('div" + p.getDate() + "_" + r + "_" + p.getFullYear() + "')",
            text: getResource(!1, "endingDate") + ": " + p.getDate() + "/" + r + "/" + p.getFullYear() + " (" + c + ")"
        }).appendTo("#checklistGroup"), jQuery("\x3cdiv/\x3e", {
            id: "div" + p.getDate() + "_" + r + "_" + p.getFullYear(),
            class: "wo_list_group_opened"
        }).appendTo("#checklistGroup")), h = "div" + p.getDate() + "_" + r + "_" + p.getFullYear(), jQuery("\x3cimg/\x3e", {
            id: "imgtoggle_div" + p.getDate() + "_" + r + "_" + p.getFullYear(),
            src: "/mportal/resources/img/icon/go_up_icon.png", class: "icon_headers_right"
        }).appendTo("#li" + p.getDate() + "_" + r + "_" + p.getFullYear()));
        "zh" === q && "" !== l.closeRequestDate && (0 === $("#li" + p.getDate() + "_" + r + "_" + p.getFullYear()).length && (jQuery("\x3cli/\x3e", {
            id: "li" + p.getDate() + "_" + r + "_" + p.getFullYear(),
            class: "wo_list_header",
            onclick: "toggleWoListOffline('div" + p.getDate() + "_" + r + "_" + p.getFullYear() + "')",
            text: getResource(!1, "endingDate") + ": " + p.getFullYear() + "-" + r + "-" + p.getDate() + " (" + c + ")"
        }).appendTo("#checklistGroup"),
            jQuery("\x3cdiv/\x3e", {
                id: "div" + p.getDate() + "_" + r + "_" + p.getFullYear(),
                class: "wo_list_group_closed"
            }).appendTo("#checklistGroup")), h = "div" + p.getDate() + "_" + r + "_" + p.getFullYear(), jQuery("\x3cimg/\x3e", {
            id: "imgtoggle_div" + p.getDate() + "_" + r + "_" + p.getFullYear(),
            src: "/mportal/resources/img/icon/go_up_icon.png",
            class: "icon_headers_right"
        }).appendTo("#li" + p.getDate() + "_" + r + "_" + p.getFullYear()));
        "" === l.closeRequestDate && (0 === $("#liExpired").length ? (d = 1, jQuery("\x3cli/\x3e", {
            id: "liExpired", class: "wo_list_header notworked",
            onclick: "toggleWoListOffline('expiredDiv')", text: getResource(!1, "expiredSla") + " (" + d + ")"
        }).appendTo("#checklistGroup"), jQuery("\x3cdiv/\x3e", {id: "expiredDiv"}).appendTo("#checklistGroup"), h = "expiredDiv") : (d++, h = "expiredDiv", $("#liExpired").html(getResource(!1, "notWorked") + " (" + d + ")")), jQuery("\x3cimg/\x3e", {
            id: "imgtoggle_expiredDiv",
            src: "/mportal/resources/img/icon/go_down_icon.png",
            class: "icon_headers_right"
        }).appendTo("#liExpired"));
        l.isWorkItem ? l.woAlphaId !== m && (m = l.woAlphaId, k = l.id, f = !1, jQuery("\x3cli/\x3e",
            {
                id: "li" + l.id,
                class: "zebra" + b,
                style: "border: 2px solid #1D448E; margin-bottom: 5px"
            }).appendTo("#" + h), $("#li" + p.getDate() + "_" + r + "_" + p.getFullYear()).html(getResource(!1, "endingDate") + ": " + p.getFullYear() + "-" + r + "-" + p.getDate() + " (" + c + ")"), c++) : (k = m = "", jQuery("\x3cli/\x3e", {
            id: "li" + l.id,
            class: "zebra" + b,
            style: "border: 2px solid #1D448E; margin-bottom: 5px"
        }).appendTo("#" + h));
        jQuery("\x3cdiv/\x3e", {
            id: "mainDiv" + l.id,
            onclick: "",
            storeid: l.id,
            class: "headerWo"
        }).appendTo("#li" + l.id);
        jQuery("\x3cimg/\x3e",
            {src: getIcon(l.actStatus, l.status)}).appendTo("#mainDiv" + l.id);
        jQuery("\x3cdiv/\x3e", {id: "avatar" + l.id, class: "avatar"}).appendTo("#mainDiv" + l.id);
        jQuery("\x3cdiv/\x3e", {id: "info" + l.id, class: "info"}).appendTo("#mainDiv" + l.id);
        l.isWorkItem ? $("#mainDiv" + l.id).attr("onclick", "toggleWoListOffline('divWi" + k + "')") : $("#mainDiv" + l.id).attr("onclick", "redirectToDetailAndStoreId('" + l.id + "')");
        p = $("#info" + l.id);
        r = $.parseHTML(l.woTemplate);
        p.append(r);
        l.isWorkItem && m === l.woAlphaId && !f && (e = 0, jQuery("\x3cli/\x3e",
            {
                id: "liWi" + k,
                class: "wo_list_header",
                onclick: "toggleWoListOffline('divWi" + k + "')",
                style: "clear: none !important",
                text: getResource(!1, "workItemsTitle") + " (" + c + ")"
            }).appendTo("#li" + k), jQuery("\x3cdiv/\x3e", {
            id: "divWi" + k,
            class: "wo_list_group_closed"
        }).appendTo("#li" + k), f = !0);
        l.isWorkItem && m === l.woAlphaId && f && (e++, jQuery("\x3cli/\x3e", {
            id: "liWiMain" + l.id,
            onclick: "redirectToDetailAndStoreId('" + l.id + "')",
            storeid: l.id
        }).appendTo("#divWi" + k), jQuery("\x3cdiv/\x3e", {
            id: "mainDivWi" + l.id,
            class: "headerWi"
        }).appendTo("#liWiMain" +
            l.id), jQuery("\x3cdiv/\x3e", {
            id: "avatarWi" + l.id,
            class: "avatar"
        }).appendTo("#mainDivWi" + l.id), jQuery("\x3cdiv/\x3e", {
            id: "infoWi" + l.id,
            class: "info"
        }).appendTo("#mainDivWi" + l.id), jQuery("\x3cimg/\x3e", {src: getIcon(l.actStatus, l.status)}).appendTo("#avatarWi" + l.id), $("#liWi" + k).html(getResource(!1, "workItemsTitle") + " (" + e + ")"), jQuery("\x3cimg/\x3e", {
            id: "imgtoggle_divWi" + k,
            src: "/mportal/resources/img/icon/go_up_icon.png",
            class: "icon_headers_right"
        }).appendTo("#liWi" + k));
        p = $("#infoWi" + l.id);
        r = $.parseHTML(l.wiTemplate);
        p.append(r);
        b = 0 === b ? 1 : 0
    }
    loadCounters()
}
function loadCounters() {
    $("#inbox").text(getResource(!1, "inboxBox"));
    $("#working").text(getResource(!1, "workingBox"));
    $("#waiting").text(getResource(!1, "waitBox"));
    $("#closed").text(getResource(!1, "closedBox"));
    document.getElementById("actionMenu").setAttribute("value", getResource(!1, "options"));
    $("#logoffA").text(getResource(!1, "logoff"));
    for (var a = getIds("inboxActsId_"), b = getIds("workingActsId_"), c = getIds("waitingActsId_"), d = getIds("closedActsId_"), e = "", h = 0, m = 0; m < a.length; m++) {
        var k = jQuery.parseJSON(window.localStorage.getItem("act" +
            a[m]));
        k.woAlphaId !== e && (h++, e = k.woAlphaId)
    }
    null !== a && (e = $("#inbox").text(), $("#inbox").text(e + " (" + h + ")"));
    e = "";
    for (m = h = 0; m < b.length; m++)k = jQuery.parseJSON(window.localStorage.getItem("act" + b[m])), k.woAlphaId !== e && (h++, e = k.woAlphaId);
    null !== b && (e = $("#working").text(), $("#working").text(e + " (" + h + ")"));
    e = "";
    for (m = b = 0; m < c.length; m++)k = jQuery.parseJSON(window.localStorage.getItem("act" + c[m])), k.woAlphaId !== e && (b++, e = k.woAlphaId);
    null !== c && (e = $("#waiting").text(), $("#waiting").text(e + " (" + b + ")"));
    e = "";
    for (m = c = 0; m < d.length; m++)k = jQuery.parseJSON(window.localStorage.getItem("act" + d[m])), k.woAlphaId !== e && (c++, e = k.woAlphaId);
    null !== d && (e = $("#closed").text(), $("#closed").text(e + " (" + c + ")"));
    $("#name").html(getLoggedUser())
}
function verifyOtherExecution() {
    var a = getAct(getId());
    if (!a.isCanMultipleOnSite) {
        var b = getIds("workingActsId_");
        if (null !== b)for (var c = 0; c < b.length; c++)if (a = jQuery.parseJSON(window.localStorage.getItem("act" + b[c])), "EXECUTION" === a.actStatus)return !1
    }
    return !0
}
function loadDetails() {
    var a = getAct(getId());
    if (null !== a)if (loadCounters(), a.isWorkItem) {
        createActions(a);
        if (a.displacementMandatory && "ACCEPTED" === a.status || !verifyOtherExecution() && "ACCEPTED" === a.status)jQuery("\x3cdiv/\x3e", {
            id: "errorDiv",
            style: "padding-top: 10px;"
        }).appendTo("#details"), a.displacementMandatory && jQuery("\x3clabel/\x3e", {
            id: "errorLabel",
            text: getResource(!1, "onSiteError"),
            style: "padding-top: 5px;",
            class: "warning message_box_details"
        }).appendTo("#errorDiv"), verifyOtherExecution() ||
        jQuery("\x3clabel/\x3e", {
            id: "errorLabel",
            text: getResource(!1, "onSiteExecution"),
            style: "padding-top: 5px;",
            class: "warning message_box_details"
        }).appendTo("#errorDiv");
        createWorkItemDetails(a)
    } else createActions(a), a.displacementMandatory && "ACCEPTED" === a.status && (jQuery("\x3cdiv/\x3e", {
        id: "errorDiv",
        style: "padding-top: 10px;"
    }).appendTo("#details"), jQuery("\x3clabel/\x3e", {
        id: "errorLabel",
        text: getResource(!1, "onSiteError"),
        style: "padding-top: 5px;",
        class: "warning message_box_details"
    }).appendTo("#errorDiv")),
        createWorkOrderDetails(a); else jQuery("\x3cdiv/\x3e", {
        id: "noDataDiv",
        style: "padding-top: 10px;"
    }).appendTo("#details"), jQuery("\x3clabel/\x3e", {
        id: "noDataLabel",
        text: getResource(!1, "noDataMsg"),
        style: "padding-top: 5px;"
    }).appendTo("#noDataDiv")
}
function loadAcceptance() {
    var a = getAct(getId());
    jQuery("\x3ch1/\x3e", {class: "title"}).appendTo("#details").append(jQuery("\x3cimg/\x3e", {src: getIcon("ACCEPTED", a.status)})).append(jQuery("\x3cspan/\x3e", {
        text: getResource(!1, "acceptBtn"),
        class: "title"
    }));
    a.isWorkItem ? appendWorkItemHeader(a) : appendWorkOrderHeader(a);
    jQuery("\x3cdiv/\x3e", {id: "btns", class: "buttons"}).appendTo("#details");
    jQuery("\x3cspan/\x3e", {text: getResource(!1, "acceptBtnConfirm"), class: "confirmation"}).appendTo("#btns");
    jQuery("\x3cbr/\x3e").appendTo("#btns");
    jQuery("\x3ca/\x3e", {
        href: "/mportal/offline/wodetailOff.jsf",
        class: "btn btn_back",
        text: getResource(!1, "backBtn")
    }).appendTo("#btns");
    jQuery("\x3cinput/\x3e", {
        type: "submit",
        id: "saveAcceptanceBtn",
        value: getResource(!1, "saveBtn"),
        class: "btn btn_save",
        onclick: "storeAcceptance();"
    }).appendTo("#btns");
    loadCounters()
}
function appendWorkItemHeader(a) {
    appendSpan(getResource(!1, "activityTitle"), a.wiActivity, "details");
    appendSpan(getResource(!1, "targetTitle"), a.wiDeadline, "details");
    appendSpan(getResource(!1, "woTitle"), a.woAlphaId, "details")
}
function appendWorkOrderHeader(a) {
    appendSpan(getResource(!1, "woTitle"), a.woAlphaId, "details");
    appendSpan(getResource(!1, "sla"), a.sla, "details");
    appendSpan(getResource(!1, "title1"), a.title1, "details")
}
function loadRefuse() {
    var a = getAct(getId()), b = jQuery.parseJSON(window.localStorage.getItem("refusalTypes_" + getLoggedUser()));
    jQuery("\x3ch1/\x3e", {class: "title"}).appendTo("#details").append(jQuery("\x3cimg/\x3e", {src: getIcon("REFUSED", a.status)})).append(jQuery("\x3cspan/\x3e", {
        text: getResource(!1, "refuseBtn"),
        class: "title"
    }));
    a.isWorkItem ? appendWorkItemHeader(a) : appendWorkOrderHeader(a);
    jQuery("\x3cbr/\x3e").appendTo("#details");
    jQuery("\x3cspan/\x3e", {
        id: "confirm", text: getResource(!1, "refuseType") +
        ":", class: "confirmation"
    }).appendTo("#details");
    jQuery("\x3cspan/\x3e", {text: " *", style: "color: red"}).appendTo("#confirm");
    jQuery("\x3cbr/\x3e").appendTo("#details");
    jQuery("\x3cselect /\x3e").attr({id: "refusalTypes"}).appendTo("#details");
    for (var c = 0; c < b.length; c++)b[c].projectId === a.projectId && jQuery("\x3coption /\x3e").attr({value: b[c].id}).text(b[c].abbreviation).appendTo("#refusalTypes");
    jQuery("\x3cdiv/\x3e", {id: "btns", class: "buttons"}).appendTo("#details");
    jQuery("\x3cspan/\x3e", {
        text: getResource(!1,
            "refuseBtnConfirm"), class: "confirmation"
    }).appendTo("#btns");
    jQuery("\x3cbr/\x3e").appendTo("#btns");
    jQuery("\x3ca/\x3e", {
        href: "/mportal/offline/wodetailOff.jsf",
        class: "btn btn_back",
        text: getResource(!1, "backBtn")
    }).appendTo("#btns");
    jQuery("\x3cinput/\x3e", {
        type: "submit",
        id: "saveRefuseBtn",
        value: getResource(!1, "saveBtn"),
        class: "btn btn_save",
        onclick: "storeRefusal();"
    }).appendTo("#btns");
    loadCounters()
}
function loadOnSite() {
    var a = getAct(getId());
    jQuery("\x3ch1/\x3e", {class: "title"}).appendTo("#details").append(jQuery("\x3cimg/\x3e", {src: getIcon("EXECUTION", a.status)})).append(jQuery("\x3cspan/\x3e", {
        text: getResource(!1, "onSiteBtn"),
        class: "title"
    }));
    a.isWorkItem ? appendWorkItemHeader(a) : appendWorkOrderHeader(a);
    jQuery("\x3cdiv/\x3e", {id: "btns", class: "buttons"}).appendTo("#details");
    jQuery("\x3cspan/\x3e", {text: getResource(!1, "OnSiteBtnConfirm"), class: "confirmation"}).appendTo("#btns");
    jQuery("\x3cbr/\x3e").appendTo("#btns");
    jQuery("\x3ca/\x3e", {
        href: "/mportal/offline/wodetailOff.jsf",
        class: "btn btn_back",
        text: getResource(!1, "backBtn")
    }).appendTo("#btns");
    jQuery("\x3cinput/\x3e", {
        type: "submit",
        id: "saveOnSiteBtn",
        value: getResource(!1, "saveBtn"),
        class: "btn btn_save",
        onclick: "storeOnSite();"
    }).appendTo("#btns");
    loadCounters()
}
function loadCloseRequest() {
    var a = getAct(getId()), b = getLoggedUser(), c = jQuery.parseJSON(window.localStorage.getItem("closeRequestTypes_" + b)), b = jQuery.parseJSON(window.localStorage.getItem("causeClassTypes_" + b)), d = !1, e = !1, h = !1;
    jQuery("\x3ch1/\x3e", {class: "title"}).appendTo("#details").append(jQuery("\x3cimg/\x3e", {src: getIcon("CLOSE_REQUEST", a.status)})).append(jQuery("\x3cspan/\x3e", {
        text: getResource(!1, "closeRequestBtn"),
        class: "title"
    }));
    a.isWorkItem ? appendWorkItemHeader(a) : appendWorkOrderHeader(a);
    jQuery("\x3cbr/\x3e").appendTo("#details");
    jQuery("\x3cspan/\x3e", {
        id: "closType",
        text: getResource(!1, "closureType") + ":",
        class: "confirmation"
    }).appendTo("#details");
    jQuery("\x3cbr/\x3e").appendTo("#details");
    jQuery("\x3cselect /\x3e").attr({id: "closureTypes", style: "width: 150px"}).appendTo("#details");
    jQuery("\x3coption /\x3e").attr({value: 0}).text(getResource(!1, "selectBtn")).appendTo("#closureTypes");
    for (var m = 0; m < c.length; m++)c[m].projectId === a.projectId && (jQuery("\x3coption /\x3e").attr({value: c[m].id}).text(c[m].name).appendTo("#closureTypes"),
    c[m].mandatory && (d = !0), c[m].useCauseClass && (e = !0), c[m].useSiteVisit && (h = !0));
    d && jQuery("\x3cspan/\x3e", {text: " *", style: "color: red"}).appendTo("#closType");
    if (e)for (jQuery("\x3cbr/\x3e").appendTo("#details"), jQuery("\x3cspan/\x3e", {
        id: "closClass",
        text: getResource(!1, "closureClass") + ":",
        class: "confirmation"
    }).appendTo("#details"), jQuery("\x3cspan/\x3e", {
        text: " *",
        style: "color: red"
    }).appendTo("#closClass"), jQuery("\x3cbr/\x3e").appendTo("#details"), jQuery("\x3cselect /\x3e").attr({
        id: "causeTypes",
        style: "width: 150px"
    }).appendTo("#details"), jQuery("\x3coption /\x3e").attr({value: 0}).text(getResource(!1, "selectBtn")).appendTo("#causeTypes"), m = 0; m < b.length; m++)b[m].projectId === a.projectId && jQuery("\x3coption /\x3e").attr({value: b[m].id}).text(b[m].name).appendTo("#causeTypes");
    jQuery("\x3cbr/\x3e").appendTo("#details");
    h && (jQuery("\x3clabel /\x3e").attr({id: "siteVisitNumber"}).appendTo("#details"), $("#siteVisitNumber").html(getResource(!1, "crSiteVisit")), jQuery("\x3cspan/\x3e", {
        text: "*",
        style: "color: red"
    }).appendTo("#siteVisitNumber"),
        jQuery("\x3cinput /\x3e").attr({
            type: "text",
            maxlength: "1",
            size: "1",
            style: "margin-left: 4px",
            id: "siteVisitInput"
        }).appendTo("#siteVisitNumber"));
    jQuery("\x3clabel /\x3e").attr({id: "closeObservation"}).appendTo("#details");
    $("#closeObservation").html(getResource(!1, "crObservation"));
    jQuery("\x3ctextarea /\x3e").attr({
        id: "closeObservationTextArea",
        onkeyup: "limitText(this, document.getElementById('closeRequestCount'), 700)",
        onkeydown: "limitText(this, document.getElementById('closeRequestCount'), 700)",
        style: "width: 95%"
    }).appendTo("#closeObservation");
    jQuery("\x3cinput /\x3e").attr({
        id: "closeRequestCount",
        value: "700",
        size: "4",
        type: "text",
        style: "width: 25px; margin-left: 4px",
        disabled: "disabled"
    }).appendTo("#closeObservation");
    jQuery("\x3clabel /\x3e").attr({id: "closeReason"}).appendTo("#details");
    $("#closeReason").html(getResource(!1, "crReason"));
    jQuery("\x3ctextarea /\x3e").attr({
        id: "closeReasonTextArea",
        onkeyup: "limitText(this, document.getElementById('closeReasonCount'), 700)",
        onkeydown: "limitText(this, document.getElementById('closeReasonCount'), 700)",
        style: "width: 95%"
    }).appendTo("#closeReason");
    jQuery("\x3cinput /\x3e").attr({
        id: "closeReasonCount",
        value: "700",
        size: "4",
        type: "text",
        style: "width: 25px; margin-left: 4px",
        disabled: "disabled"
    }).appendTo("#closeReason");
    jQuery("\x3clabel /\x3e").attr({id: "closeSolution"}).appendTo("#details");
    $("#closeSolution").html(getResource(!1, "crSolution"));
    jQuery("\x3ctextarea /\x3e").attr({
        id: "closeSolutionTextArea",
        onkeyup: "limitText(this, document.getElementById('closeSolutionCount'), 700)",
        onkeydown: "limitText(this, document.getElementById('closeSolutionCount'), 700)",
        style: "width: 95%"
    }).appendTo("#closeSolution");
    jQuery("\x3cinput /\x3e").attr({
        id: "closeSolutionCount",
        value: "700",
        size: "4",
        type: "text",
        style: "width: 25px; margin-left: 4px",
        disabled: "disabled"
    }).appendTo("#closeSolution");
    jQuery("\x3cdiv/\x3e", {id: "btns", class: "buttons"}).appendTo("#details");
    jQuery("\x3cspan/\x3e", {text: getResource(!1, "closeRequestBtnConfirm"), class: "confirmation"}).appendTo("#btns");
    jQuery("\x3cbr/\x3e").appendTo("#btns");
    jQuery("\x3ca/\x3e", {
        href: "/mportal/offline/wodetailOff.jsf",
        class: "btn btn_back", text: getResource(!1, "backBtn")
    }).appendTo("#btns");
    jQuery("\x3cinput/\x3e", {
        type: "submit",
        id: "saveCloseRequestBtn",
        value: getResource(!1, "saveBtn"),
        class: "btn btn_save",
        onclick: "storeCloseRequest(" + d + "," + e + "," + h + ");"
    }).appendTo("#btns");
    a.viewChecklist && loadChecklistView();
    loadCounters()
}
function appendMaterialsInfos(a) {
    appendSpan(getResource(!1, "plannedTitle"), a.wiPlannedOn, "details");
    appendSpan(getResource(!1, "targetTitle"), a.wiDeadline, "details");
    appendSpan(getResource(!1, "cscTitle"), a.customerSiteCode, "details")
}
function loadMaterials() {
    var a = getAct(getId());
    jQuery("\x3ch1/\x3e", {class: "title"}).appendTo("#details").append(jQuery("\x3cimg/\x3e", {src: getIcon("INFO", "")})).append(jQuery("\x3cspan/\x3e", {
        text: getResource(!1, "materialsTitle"),
        class: "title"
    }));
    jQuery("\x3ch1/\x3e", {class: "title"}).appendTo("#details").append(jQuery("\x3cspan/\x3e", {
        text: a.wiActivity,
        class: "title"
    }));
    createActionsMaterials(a);
    appendMaterialsInfos(a);
    jQuery("\x3cfieldset/\x3e", {
        id: "materialsField",
        class: "fieldset"
    }).appendTo("#details").append(jQuery("\x3clegend/\x3e",
        {text: getResource(!1, "materialsTitle")}));
    jQuery("\x3cdiv/\x3e", {id: "btnShowMoreMaterials", class: "showMore"}).appendTo("#materialsField");
    jQuery("\x3cinput/\x3e", {
        type: "button",
        onclick: "return toggleMaterialDetails()",
        value: " ",
        class: "det btn_mdetails",
        style: "margin-top: -5px"
    }).appendTo("#btnShowMoreMaterials");
    jQuery("\x3cdiv/\x3e", {id: "btnShowLessMaterials", class: "showLess"}).appendTo("#materialsField");
    jQuery("\x3cinput/\x3e", {
        type: "button", onclick: "return toggleMaterialDetails()", value: " ", class: "det btn_ldetails",
        style: "margin-top: -5px"
    }).appendTo("#btnShowLessMaterials");
    jQuery("\x3cspan/\x3e", {
        text: getResource(!1, "materialsTitle") + ": ",
        style: "font-weight: bold;"
    }).appendTo("#materialsField").after(jQuery("\x3cbr/\x3e")).after(jQuery("\x3cspan/\x3e", {text: a.materials.length}));
    jQuery("\x3cdiv/\x3e", {id: "materialDetails", class: "showLess"}).appendTo("#materialsField");
    jQuery("\x3cbr/\x3e").appendTo("#materialDetails");
    jQuery("\x3cbr/\x3e").appendTo("#materialDetails");
    for (var b = 0; b < a.materials.length; b++)jQuery("\x3cdiv/\x3e",
        {
            id: "matDetail_" + b,
            class: "detailsBoxes"
        }).appendTo("#materialDetails"), jQuery("\x3cdiv/\x3e", {
        id: "btnShowMoreMaterials_" + a.materials[b].id,
        class: "showMore"
    }).appendTo("#matDetail_" + b), jQuery("\x3cinput/\x3e", {
        type: "button",
        onclick: "return toggleMaterialMinorDetails('" + a.materials[b].id + "')",
        value: " ",
        class: "det btn_mdetails",
        style: "margin-top: -5px"
    }).appendTo("#btnShowMoreMaterials_" + a.materials[b].id), jQuery("\x3cdiv/\x3e", {
        id: "btnShowLessMaterials_" + a.materials[b].id,
        class: "showLess"
    }).appendTo("#matDetail_" +
        b), jQuery("\x3cinput/\x3e", {
        type: "button",
        onclick: "return toggleMaterialMinorDetails('" + a.materials[b].id + "')",
        value: " ",
        class: "det btn_ldetails",
        style: "margin-top: -5px"
    }).appendTo("#btnShowLessMaterials_" + a.materials[b].id), appendSpan(getResource(!1, "matCode"), a.materials[b].code, "matDetail_" + b), appendSpan(getResource(!1, "shortNameTitle"), a.materials[b].shortName, "matDetail_" + b), jQuery("\x3cdiv/\x3e", {
        id: "details_" + a.materials[b].id,
        class: "showLess"
    }).appendTo("#matDetail_" + b), appendSpan(getResource(!1,
        "descriptionDetail"), a.materials[b].description, "details_" + a.materials[b].id), appendSpan(getResource(!1, "matItemType"), a.materials[b].description, "details_" + a.materials[b].id), appendSpan(getResource(!1, "matQuantity"), a.materials[b].quantity, "details_" + a.materials[b].id), appendSpan(getResource(!1, "matSAP"), a.materials[b].sapQuantity, "details_" + a.materials[b].id), appendSpan(getResource(!1, "matMaterial"), a.materials[b].material, "details_" + a.materials[b].id), appendSpan(getResource(!1, "matLocation"), a.materials[b].location,
        "details_" + a.materials[b].id), appendSpan(getResource(!1, "matOrigin"), a.materials[b].origin, "details_" + a.materials[b].id), appendSpan(getResource(!1, "matSup"), a.materials[b].vendor, "details_" + a.materials[b].id), appendSpan(getResource(!1, "matPrice"), a.materials[b].price, "details_" + a.materials[b].id), appendSpan(getResource(!1, "statusTitle"), a.materials[b].status, "details_" + a.materials[b].id);
    appendSpan(getResource(!1, "cityLabel"), a.city, "siteDetails");
    appendSpan(getResource(!1, "areaLabel"), a.area, "siteDetails");
    appendSpan(getResource(!1, "addressLabel"), a.address, "siteDetails");
    appendSpan(getResource(!1, "drivingDirections"), a.drivingDirections, "siteDetails");
    appendSpan(getResource(!1, "specialRequirements"), a.specialReqs, "siteDetails");
    appendSpan(getResource(!1, "healthSafety"), a.healthSafety, "siteDetails");
    appendSpan(getResource(!1, "latitudeLabel"), a.latitude, "siteDetails");
    appendSpan(getResource(!1, "longitudeLabel"), a.longitude, "siteDetails");
    appendSpan(getResource(!1, "keyLoc"), a.keyLocation, "siteDetails");
    appendSpan(getResource(!1, "antennaLabel"), a.antennaDescription, "siteDetails");
    jQuery("\x3cdiv/\x3e", {id: "btns", class: "buttons"}).appendTo("#details");
    jQuery("\x3cbr/\x3e").appendTo("#btns");
    jQuery("\x3ca/\x3e", {
        href: "/mportal/offline/wodetailOff.jsf",
        class: "btn btn_back",
        text: getResource(!1, "backBtn")
    }).appendTo("#btns");
    loadCounters()
}
function loadMaterialsAck() {
    var a = jQuery.parseJSON(window.localStorage.getItem("id")), a = jQuery.parseJSON(window.localStorage.getItem("act" + a));
    jQuery("\x3ch1/\x3e", {class: "title"}).appendTo("#details").append(jQuery("\x3cimg/\x3e", {src: getIcon("INFO", "")})).append(jQuery("\x3cspan/\x3e", {
        text: getResource(!1, "materialsAck"),
        class: "title"
    }));
    jQuery("\x3ch1/\x3e", {class: "title"}).appendTo("#details").append(jQuery("\x3cspan/\x3e", {
        text: a.wiActivity,
        class: "title"
    }));
    appendMaterialsInfos(a);
    jQuery("\x3cbr/\x3e").appendTo("#details");
    appendSpan(getResource(!1, "selectMaterial"), "", "details");
    jQuery("\x3cselect/\x3e", {
        id: "acknowledgeMaterials",
        name: "acknowledgeMaterials",
        class: "combobox",
        multiple: "multiple",
        size: "4",
        style: "height: 89px; width: 150px"
    }).appendTo("#details");
    for (var b = 0; b < a.materials.length; b++)jQuery("\x3coption/\x3e", {
        value: a.materials[b].id,
        html: a.materials[b].shortName
    }).appendTo("#acknowledgeMaterials");
    jQuery("\x3cbr/\x3e").appendTo("#details");
    jQuery("\x3cbr/\x3e").appendTo("#details");
    jQuery("\x3cinput/\x3e",
        {
            type: "button",
            name: "clear",
            value: getResource(!1, "clearAll"),
            class: "btn btn_clear",
            onclick: 'return $("#acknowledgeMaterials option:selected").removeAttr("selected");'
        }).appendTo("#details");
    jQuery("\x3cinput/\x3e", {
        type: "button",
        name: "select",
        value: getResource(!1, "selectAllCheck"),
        class: "btn btn_save",
        onclick: 'return $("#acknowledgeMaterials option").attr("selected", "selected")'
    }).appendTo("#details");
    jQuery("\x3cdiv/\x3e", {id: "btns", class: "buttons"}).appendTo("#details");
    jQuery("\x3cbr/\x3e").appendTo("#btns");
    jQuery("\x3ca/\x3e", {
        href: "/mportal/offline/wodetailOff.jsf",
        class: "btn btn_back",
        text: getResource(!1, "backBtn")
    }).appendTo("#btns");
    jQuery("\x3cinput/\x3e", {
        type: "submit",
        id: "saveMaterialAckBtn",
        value: getResource(!1, "saveBtn"),
        class: "btn btn_save",
        onclick: "storeMaterialsAck();"
    }).appendTo("#btns");
    loadCounters()
}
function loadMaterialsMiss() {
    var a = jQuery.parseJSON(window.localStorage.getItem("id")), a = jQuery.parseJSON(window.localStorage.getItem("act" + a));
    jQuery("\x3ch1/\x3e", {class: "title"}).appendTo("#details").append(jQuery("\x3cimg/\x3e", {src: getIcon("INFO", "")})).append(jQuery("\x3cspan/\x3e", {
        text: getResource(!1, "materialsMiss"),
        class: "title"
    }));
    jQuery("\x3ch1/\x3e", {class: "title"}).appendTo("#details").append(jQuery("\x3cspan/\x3e", {
        text: a.wiActivity,
        class: "title"
    }));
    appendMaterialsInfos(a);
    jQuery("\x3cbr/\x3e").appendTo("#details");
    appendSpan(getResource(!1, "selectMaterialMiss"), "", "details");
    jQuery("\x3cselect/\x3e", {
        id: "missingMaterials",
        name: "missingMaterials",
        class: "combobox",
        multiple: "multiple",
        size: "4",
        style: "height: 89px; width: 150px"
    }).appendTo("#details");
    for (var b = 0; b < a.materials.length; b++)jQuery("\x3coption/\x3e", {
        value: a.materials[b].id,
        html: a.materials[b].shortName
    }).appendTo("#missingMaterials");
    jQuery("\x3cbr/\x3e").appendTo("#details");
    jQuery("\x3cbr/\x3e").appendTo("#details");
    jQuery("\x3cinput/\x3e", {
        type: "button",
        name: "clear",
        value: getResource(!1, "clearAll"),
        class: "btn btn_clear",
        onclick: 'return $("#missingMaterials option:selected").removeAttr("selected");'
    }).appendTo("#details");
    jQuery("\x3cinput/\x3e", {
        type: "button",
        name: "select",
        value: getResource(!1, "selectAllCheck"),
        class: "btn btn_save",
        onclick: 'return $("#missingMaterials option").attr("selected", "selected")'
    }).appendTo("#details");
    jQuery("\x3cdiv/\x3e", {id: "btns", class: "buttons"}).appendTo("#details");
    jQuery("\x3cbr/\x3e").appendTo("#btns");
    jQuery("\x3ca/\x3e",
        {
            href: "/mportal/offline/wodetailOff.jsf",
            class: "btn btn_back",
            text: getResource(!1, "backBtn")
        }).appendTo("#btns");
    jQuery("\x3cinput/\x3e", {
        type: "submit",
        id: "saveMaterialMissBtn",
        value: getResource(!1, "saveBtn"),
        class: "btn btn_save",
        onclick: "storeMaterialsMiss();"
    }).appendTo("#btns");
    loadCounters()
}
function loadChecklistView() {
    var a = getId();
    null !== document.getElementById("checklistBack") && document.getElementById("checklistBack").setAttribute("value", getResource(!1, "backBtn"));
    null !== document.getElementById("checklistSave") && document.getElementById("checklistSave").setAttribute("value", getResource(!1, "saveBtn"));
    null !== document.getElementById("checklistSaveDraft") && document.getElementById("checklistSaveDraft").setAttribute("value", getResource(!1, "btnSaveDraft"));
    null !== document.getElementById("checklistClear") &&
    document.getElementById("checklistClear").setAttribute("value", getResource(!1, "btnClear"));
    var b;
    b = jQuery.parseJSON(window.localStorage.getItem(a + "cl"));
    $("#checklistHeader").empty();
    var c;
    c = jQuery.parseJSON(window.localStorage.getItem("act" + a));
    jQuery("\x3cimg/\x3e", {src: "/mportal/resources/img/icon/info_icon.png"}).appendTo("#checklistHeader");
    jQuery("\x3cspan/\x3e", {
        text: getResource(!1, "checklistTitle"),
        style: "font-weight: bold; font-size: 14px; margin-bottom: 6px; padding-left: 5px"
    }).appendTo("#checklistHeader").after(jQuery("\x3cbr/\x3e"));
    jQuery("\x3cspan/\x3e", {
        text: getResource(!1, "activityTitle") + ": ",
        style: "font-weight: bold;"
    }).appendTo("#checklistHeader").after(jQuery("\x3cbr/\x3e")).after(jQuery("\x3cspan/\x3e", {text: c.wiActivity}));
    jQuery("\x3cspan/\x3e", {
        text: getResource(!1, "checklistTitle") + ": ",
        style: "font-weight: bold;"
    }).appendTo("#checklistHeader").after(jQuery("\x3cbr/\x3e")).after(jQuery("\x3cspan/\x3e", {text: c.checkListName + " v" + c.checkListVersion}));
    jQuery("\x3cspan/\x3e", {
        text: getResource(!1, "woTitle") + ": ",
        style: "font-weight: bold;"
    }).appendTo("#checklistHeader").after(jQuery("\x3cbr/\x3e")).after(jQuery("\x3cspan/\x3e",
        {text: c.woAlphaId}));
    jQuery("\x3cbr/\x3e").appendTo("#checklistHeader");
    group = document.getElementById("container");
    null !== group && void 0 !== group && (group.className = "showLess");
    group = document.getElementById("storage_container");
    group.className = "showMore";
    var d = window.localStorage.getItem(a + "rp");
    null !== d && void 0 !== d && (b = jQuery.parseJSON(d));
    setActivationId(a);
    "CLOSED" === c.status ? setClosedActivation(!0) : setClosedActivation(!1);
    setCurrentCheckListOff(b);
    setResponseId(b.responseId);
    setChecklistOffline(!0);
    setIosVersion(isIOS8());
    setCompressionRation(b.imageCompressionQuality);
    setFileUploadLimit(b.fileUploadLimit);
    setValidationMessage(getResource(!1, "valueRequired"));
    setChecklistPanel($("#checklist-form"));
    startChecklist();
    startFileCounter();
    loadCounters()
}
function startFileCounter() {
    $("#div-total-general").remove();
    $("#div-progress-general").remove();
    var a = $("#file-form"), b = jQuery("\x3cdiv\x3e").attr({id: "div-total-general"});
    a.append(b);
    var b = jQuery("\x3cdiv\x3e").attr({
        id: "div-progress-general",
        class: "progress"
    }), c = jQuery("\x3cdiv\x3e").attr({
        id: "div-bar-general",
        class: "bar"
    }), d = jQuery("\x3cdiv\x3e").attr({id: "div-percent-general", class: "percentTotal"});
    b.append(c);
    b.append(d);
    a.append(b);
    a = $("#div-bar-general");
    b = $("#div-percent-general");
    c = $("#div-total-general");
    getAllFilesSize();
    d = Math.round(100 * getAllFilesSize() / $fileUploadLimit);
    a.width(101 > d ? d + "%" : "100%");
    b.html(getAllFilesSize() + "/" + $fileUploadLimit);
    c.html(getResource(!1, "fileSizeTotal") + ":")
}
function getAllFilesSize() {
    var a;
    a = jQuery.parseJSON(window.localStorage.getItem(getId() + "rp"));
    a = void 0 !== a && null !== a ? a : $currentCheckList;
    for (var b = 0, c = 0; c < a.groups.length; c++)for (var d = 0; d < a.groups[c].items.length; d++) {
        var e = a.groups[c].items[d];
        "IMAGE" === e.type && void 0 !== e.uploadedData && (b += e.uploadedData.fileSize);
        for (var h = 0; h < e.children.length; h++) {
            var m = e.children[h];
            "IMAGE" === m.type && void 0 !== m.uploadedData && (b += m.uploadedData.fileSize)
        }
    }
    return b
}
var isIOS8 = function () {
    var a = navigator.userAgent.toLowerCase();
    console.log(a);
    return /iphone os 8_/.test(a)
};
function getAction(a) {
    return jQuery.parseJSON(window.localStorage.getItem(a + getLoggedUser()))
}
function getUtcDate() {
    var a = new Date, b = new Date(a.getTime() + 6E4 * a.getTimezoneOffset()), a = b.getMonth() + 1;
    10 > b.getMonth() && (a = "0" + a);
    var c = b.getDate();
    10 > c && (c = "0" + c);
    var d = b.getFullYear(), e = b.getHours();
    10 > e && (e = "0" + e);
    b = b.getMinutes();
    10 > b && (b = "0" + b);
    return a + "/" + c + "/" + d + " " + e + ":" + b
}
function storeAcceptance() {
    verifyAndRedirect();
    if (!checkedOnline) {
        var a = jQuery.parseJSON(window.localStorage.getItem("acceptance_" + getLoggedUser())), b = getId();
        if (null !== a) {
            var c = {};
            c.id = b;
            c.datetime = getUtcDate();
            a[a.length] = c
        } else c = {}, c.id = b, c.datetime = getUtcDate(), a = [], a[0] = c;
        window.localStorage.setItem("acceptance_" + getLoggedUser(), JSON.stringify(a));
        alert(getResource(!1, "alertAcceptanceSuccess"));
        changeStatus(getId(), "accept");
        window.location.href = "/mportal/offline/wodetailOff.jsf"
    }
}
function storeOnSite() {
    verifyAndRedirect();
    if (!checkedOnline) {
        var a = getId(), b = getAct(a);
        navigator.geolocation.getCurrentPosition(function (c) {
            b.latitude = c.coords.latitude;
            b.longitude = c.coords.longitude;
            window.localStorage.setItem("act" + b.id, JSON.stringify(b));
            doOnSite(a)
        }, function () {
            b.gpsMandatory ? (alert(getResource(!1, "mandatoryGpsValue")), window.location.href = "/mportal/offline/wodetailOff.jsf") : doOnSite(a)
        }, {enableHighAccuracy: !0, timeout: 5E3, maximumAge: 3E3})
    }
}
function doOnSite(a) {
    var b = jQuery.parseJSON(window.localStorage.getItem("onsite_" + getLoggedUser()));
    if (null !== b) {
        var c = {};
        c.id = a;
        c.datetime = getUtcDate();
        b[b.length] = c;
        window.localStorage.setItem("onsite_" + getLoggedUser(), JSON.stringify(b))
    } else c = {}, c.id = a, c.datetime = getUtcDate(), a = [], a[0] = c, window.localStorage.setItem("onsite_" + getLoggedUser(), JSON.stringify(a));
    alert(getResource(!1, "alertOnSiteSuccess"));
    changeStatus(getId(), "onsite");
    window.location.href = "/mportal/offline/wodetailOff.jsf"
}
function storeRefusal() {
    verifyAndRedirect();
    if (!checkedOnline) {
        var a = jQuery.parseJSON(window.localStorage.getItem("refuse_" + getLoggedUser())), b = getId();
        if (null !== a) {
            var c = {};
            c.id = b;
            c.type = $("#refusalTypes").val();
            c.datetime = getUtcDate();
            a[a.length] = c
        } else c = {}, c.id = b, c.type = $("#refusalTypes").val(), c.datetime = getUtcDate(), a = [], a[0] = c;
        window.localStorage.setItem("refuse_" + getLoggedUser(), JSON.stringify(a));
        alert(getResource(!1, "alertRefusalSuccess"));
        changeStatus(b, "refuse");
        window.location.href = "/mportal/offline/wodetailOff.jsf"
    }
}
function storeMaterialsAck() {
    verifyAndRedirect();
    if (!checkedOnline) {
        var a = jQuery.parseJSON(window.localStorage.getItem("refuse_" + getLoggedUser())), b = getId();
        if (null !== a) {
            var c = {};
            c.id = b;
            c.materials = $("#acknowledgeMaterials").val();
            c.datetime = getUtcDate();
            a[a.length] = c
        } else c = {}, c.id = b, c.materials = $("#acknowledgeMaterials").val(), c.datetime = getUtcDate(), a = [], a[0] = c;
        window.localStorage.setItem("materialsAck_" + getLoggedUser(), JSON.stringify(a));
        alert(getResource(!1, "alertAckSuccess"));
        window.location.href =
            "/mportal/offline/wodetailOff.jsf"
    }
}
function storeMaterialsMiss() {
    verifyAndRedirect();
    if (!checkedOnline) {
        var a = jQuery.parseJSON(window.localStorage.getItem("refuse_" + getLoggedUser())), b = getId();
        if (null !== a) {
            var c = {};
            c.id = b;
            c.materials = $("#missingMaterials").val();
            c.datetime = getUtcDate();
            a[a.length] = c
        } else c = {}, c.id = b, c.materials = $("#missingMaterials").val(), c.datetime = getUtcDate(), a = [], a[0] = c;
        window.localStorage.setItem("materialsMiss_" + getLoggedUser(), JSON.stringify(a));
        alert(getResource(!1, "alertMissMaterials"));
        window.location.href =
            "/mportal/offline/wodetailOff.jsf"
    }
}
function storeCloseRequest(a, b, c) {
    verifyAndRedirect();
    if (!checkedOnline) {
        var d = jQuery.parseJSON(window.localStorage.getItem("closerequest_" + getLoggedUser())), e = getId(), h = getAct(e);
        if (h.viewChecklist) {
            var m = !0, k = !1;
            $(".required").parent().each(function () {
                var a = !1, b = !1;
                $(this).children().each(function () {
                    var c = $(this);
                    c.is("input:radio") && (b = !0, c.is("input:radio:checked") && (a = !0));
                    c.is("input:text") && (b = !0, "" !== c.val() && (a = !0))
                });
                !a && b && (m = !1)
            });
            $(".required-img").each(function () {
                k = !0
            });
            if (k) {
                alert(getResource(!1,
                    "alertMandatoryFiles"));
                return
            }
            if (m)console.log("Checklist validation ok"); else {
                alert(getResource(!1, "alertMandatoryFields"));
                return
            }
        }
        if (null !== d) {
            var f = {};
            f.id = e;
            f.type = $("#closureTypes").val();
            f.cause = $("#causeTypes").val();
            f.closeObservation = $("#closeObservationTextArea").val();
            f.closeReason = $("#closeReasonTextArea").val();
            f.closeSolution = $("#closeSolutionTextArea").val();
            f.siteVisit = $("#siteVisitInput").val();
            f.datetime = getUtcDate();
            if (a && "0" === f.type) {
                alert(getResource(!1, "mandatoryClosureType"));
                return
            }
            if (b && "0" === f.cause) {
                alert(getResource(!1, "mandatoryCauseClass"));
                return
            }
            if (c && void 0 === f.siteVisit) {
                alert(getResource(!1, "mandatorySiteVisit"));
                return
            }
            if (c && !isNumeric(f.siteVisit)) {
                alert(getResource(!1, "mandatorySiteVisitNumber"));
                return
            }
            d[d.length] = f;
            window.localStorage.setItem("closerequest_" + getLoggedUser(), JSON.stringify(d))
        } else {
            f = {};
            f.id = e;
            f.type = $("#closureTypes").val();
            f.cause = $("#causeTypes").val();
            f.closeObservation = $("#closeObservationTextArea").val();
            f.closeReason = $("#closeReasonTextArea").val();
            f.closeSolution = $("#closeSolutionTextArea").val();
            f.siteVisit = $("#siteVisitInput").val();
            f.datetime = getUtcDate();
            f.checkList = h.viewChecklist ? window.localStorage.getItem(getId() + "rp") : "";
            if (a && "0" === f.type) {
                alert(getResource(!1, "mandatoryClosureType"));
                return
            }
            if (b && "0" === f.cause) {
                alert(getResource(!1, "mandatoryCauseClass"));
                return
            }
            if (c && void 0 === f.siteVisit) {
                alert(getResource(!1, "mandatorySiteVisit"));
                return
            }
            if (c && !isNumeric(f.siteVisit)) {
                alert(getResource(!1, "mandatorySiteVisitNumber"));
                return
            }
            a =
                [];
            a[0] = f;
            window.localStorage.setItem("closerequest_" + getLoggedUser(), JSON.stringify(a))
        }
        alert(getResource(!1, "alertCloseRequestSuccess"));
        changeStatus(e, "closerequest");
        window.location.href = "/mportal/offline/wodetailOff.jsf"
    }
}
function storeCloseRequestCheck(a, b, c) {
    verifyAndRedirect();
    if (!checkedOnline) {
        var d = jQuery.parseJSON(window.localStorage.getItem("closerequest_" + getLoggedUser())), e = getId(), h = getAct(e);
        if (h.viewChecklist) {
            var m = !0, k = !1;
            $(".required").parent().each(function () {
                var a = !1, b = !1;
                $(this).children().each(function () {
                    var c = $(this);
                    c.is("input:radio") && (b = !0, c.is("input:radio:checked") && (a = !0));
                    c.is("input:text") && (b = !0, "" !== c.val() && (a = !0))
                });
                !a && b && (m = !1)
            });
            $(".img").parent().each(function () {
                $(this).parent().each(function () {
                    $(this).children().each(function () {
                        $(this).is(".required") &&
                        (k = !0)
                    })
                })
            });
            if (k) {
                alert(getResource(!1, "alertMandatoryFiles"));
                return
            }
            if (m)console.log("Checklist validation ok"); else {
                alert(getResource(!1, "alertMandatoryFields"));
                return
            }
        }
        if (null !== d) {
            var f = {};
            f.id = e;
            f.datetime = getUtcDate();
            a && "0" === f.type ? alert(getResource(!1, "mandatoryClosureType")) : b && "0" === f.cause ? alert(getResource(!1, "mandatoryCauseClass")) : c && !isNumeric(f.siteVisit) ? alert(getResource(!1, "mandatorySiteVisitNumber")) : (d[d.length] = f, window.localStorage.setItem("closerequest_" + getLoggedUser(),
                JSON.stringify(d)), alert(getResource(!1, "alertCloseRequestSuccess")))
        } else f = {}, h.viewChecklist ? f.checkList = window.localStorage.getItem(getId() + "rp") : (f.checkList = "", f.datetime = getUtcDate()), a && "0" === f.type ? alert(getResource(!1, "mandatoryClosureType")) : b && "0" === f.cause ? alert(getResource(!1, "mandatoryCauseClass")) : c ? alert(getResource(!1, "mandatorySiteVisit")) : c ? alert(getResource(!1, "mandatorySiteVisitNumber")) : (a = [], a[0] = f, window.localStorage.setItem("closerequest_" + getLoggedUser(), JSON.stringify(a)),
            alert(getResource(!1, "alertCloseRequestSuccess")))
    }
}
function storeChecklistSave() {
    verifyAndRedirect();
    if (!checkedOnline) {
        var a = jQuery.parseJSON(window.localStorage.getItem("clSave_" + getLoggedUser())), b = getId();
        if (null !== a) {
            var c = {};
            c.id = b;
            c.checklist = window.localStorage.getItem(getId() + "rp");
            c.datetime = getUtcDate();
            for (var d = !0, e = 0; e < a.length; e++)a[e].id === b && (a[e] = c, d = !1);
            d && (a[a.length] = c)
        } else c = {}, c.id = b, c.checklist = window.localStorage.getItem(getId() + "rp"), c.datetime = getUtcDate(), a = [], a[0] = c;
        window.localStorage.setItem("clSave_" + getLoggedUser(),
            JSON.stringify(a));
        alert(getResource(!1, "alertChecklistSuccess"));
        window.location.href = "/mportal/offline/wodetailOff.jsf"
    }
}
function storeChecklistDraft() {
    verifyAndRedirect();
    if (!checkedOnline) {
        var a = jQuery.parseJSON(window.localStorage.getItem("clDraft_" + getLoggedUser())), b = getId();
        if (null !== a) {
            var c = {};
            c.id = b;
            c.checklist = window.localStorage.getItem(getId() + "rp");
            c.datetime = getUtcDate();
            for (var d = !0, e = 0; e < a.length; e++)a[e].id === b && (a[e] = c, d = !1);
            d && (a[a.length] = c)
        } else c = {}, c.id = b, c.checklist = window.localStorage.getItem(getId() + "rp"), c.datetime = getUtcDate(), a = [], a[0] = c;
        window.localStorage.setItem("clDraft_" + getLoggedUser(),
            JSON.stringify(a));
        alert(getResource(!1, "alertChecklistDraft"));
        window.location.href = "/mportal/offline/wodetailOff.jsf"
    }
}
function isNumeric(a) {
    return !isNaN(parseFloat(a)) && isFinite(a)
}
function changeStatus(a, b) {
    var c = getAct(a), d = getLoggedUser(), e = getIds("inboxActsId_"), h = getIds("workingActsId_"), m = getIds("waitingActsId_"), k = getIds("closedActsId_");
    if ("accept" === b) {
        c.actStatus = "ACCEPTED";
        c.status = "ACCEPTED";
        c.wiStatus = "ACCEPTED";
        c.acceptance = !1;
        c.refuse = !1;
        c.onsite = !0;
        for (var f = 0; f < e.length; f++)e[f] === a && e.splice(f, 1);
        window.localStorage.setItem("inboxActsId_" + d, JSON.stringify(e));
        h[h.length] = a;
        window.localStorage.setItem("workingActsId_" + d, JSON.stringify(h));
        c.acceptanceDate = getResource(!1,
            "waitingSync")
    }
    if ("refuse" === b) {
        c.actStatus = "REFUSED";
        c.status = "CLOSED";
        c.wiStatus = "CLOSED";
        c.acceptance = !1;
        c.refuse = !1;
        c.onsite = !1;
        c.closeRequest = !1;
        c.viewChecklist = !1;
        for (f = 0; f < e.length; f++)e[f] === a && e.splice(f, 1);
        window.localStorage.setItem("inboxActsId_" + d, JSON.stringify(e));
        k[k.length] = a;
        window.localStorage.setItem("closedActsId_" + d, JSON.stringify(k));
        c.refusalDate = "Waiting synchronization..."
    }
    "onsite" === b && (c.actStatus = "EXECUTION", c.status = "EXECUTION", c.wiStatus = "EXECUTION", c.acceptance = !1,
        c.refuse = !1, c.onsite = !1, c.closeRequest = !0, c.onSiteDate = "Waiting synchronization...");
    if ("closerequest" === b) {
        c.actStatus = "CLOSE_REQUEST";
        c.status = "CLOSE_REQUEST";
        c.wiStatus = "CLOSE_REQUEST";
        c.acceptance = !1;
        c.refuse = !1;
        c.onsite = !1;
        c.closeRequest = !1;
        c.closeRequest = !1;
        c.viewChecklist = !1;
        for (f = 0; f < h.length; f++)h[f] === a && h.splice(f, 1);
        window.localStorage.setItem("workingActsId_" + d, JSON.stringify(h));
        m[m.length] = a;
        window.localStorage.setItem("waitingActsId_" + d, JSON.stringify(m));
        c.closeRequestDate = "Waiting synchronization..."
    }
    window.localStorage.setItem("act" +
        c.id, JSON.stringify(c))
}
function createWorkItemDetails(a) {
    jQuery("\x3cbr/\x3e").appendTo("#details");
    jQuery("\x3ch1/\x3e", {text: a.wiActivity, class: "title"}).appendTo("#details");
    jQuery("\x3ctable/\x3e", {
        id: "tb1",
        cellpadding: "0",
        cellspacing: "0"
    }).appendTo("#details").append(jQuery("\x3ctbody/\x3e", {id: "tbody1"}));
    jQuery("\x3ctr/\x3e", {id: "line1_table1"}).appendTo("#tbody1");
    jQuery("\x3ctd/\x3e", {id: "cell1_table1_line1"}).appendTo("#line1_table1");
    jQuery("\x3ctd/\x3e", {id: "cell2_table1_line1"}).appendTo("#line1_table1");
    jQuery("\x3ctr/\x3e",
        {id: "line2_table1"}).appendTo("#tbody1");
    jQuery("\x3ctd/\x3e", {id: "cell1_table1_line2"}).appendTo("#line2_table1");
    jQuery("\x3ctd/\x3e", {id: "cell2_table1_line2"}).appendTo("#line2_table1");
    jQuery("\x3ctable/\x3e", {
        id: "tb2",
        cellpadding: "0",
        cellspacing: "0",
        style: "margin-top: 7px"
    }).appendTo("#details").append(jQuery("\x3ctbody/\x3e", {id: "tbody2"}));
    jQuery("\x3ctr/\x3e", {id: "line1_table2"}).appendTo("#tbody2");
    jQuery("\x3ctd/\x3e", {id: "cell1_table2_line1"}).appendTo("#line1_table2");
    jQuery("\x3ctd/\x3e",
        {id: "cell2_table2_line1"}).appendTo("#line1_table2");
    jQuery("\x3ctr/\x3e", {id: "line2_table2"}).appendTo("#tbody2");
    jQuery("\x3ctd/\x3e", {id: "cell1_table2_line2"}).appendTo("#line2_table2");
    jQuery("\x3ctd/\x3e", {id: "cell2_table2_line2"}).appendTo("#line2_table2");
    appendSpanStatusTable(getResource(!1, "actStatus"), a.actStatus, "cell1_table2_line1", "cell2_table2_line1", a);
    appendSpanStatusWiTable(getResource(!1, "wiStatus"), a.wiStatus, "cell1_table2_line2", "cell2_table2_line2", a);
    jQuery("\x3ctable/\x3e",
        {
            id: "tb3",
            cellpadding: "0",
            cellspacing: "0",
            style: "margin-top: 7px"
        }).appendTo("#details").append(jQuery("\x3ctbody/\x3e", {id: "tbody3"}));
    jQuery("\x3ctr/\x3e", {id: "line1_table3"}).appendTo("#tbody3");
    jQuery("\x3ctd/\x3e", {id: "cell1_table3_line1"}).appendTo("#line1_table3");
    a = $.parseHTML(a.content);
    $("#cell1_table3_line1").append(a)
}
function createWorkOrderDetails(a) {
    jQuery("\x3ch1/\x3e", {text: a.woAlphaId, class: "title"}).appendTo("#details");
    jQuery("\x3ctable/\x3e", {
        id: "tb1",
        cellpadding: "0",
        cellspacing: "0",
        style: "margin-top: 7px"
    }).appendTo("#details").append(jQuery("\x3ctbody/\x3e", {id: "tbody1"}));
    jQuery("\x3ctr/\x3e", {id: "line1_table1"}).appendTo("#tbody1");
    jQuery("\x3ctd/\x3e", {id: "cell1_table1_line1"}).appendTo("#line1_table1");
    jQuery("\x3ctd/\x3e", {id: "cell2_table1_line1"}).appendTo("#line1_table1");
    jQuery("\x3ctr/\x3e",
        {id: "line2_table1"}).appendTo("#tbody1");
    jQuery("\x3ctd/\x3e", {id: "cell1_table1_line2"}).appendTo("#line2_table1");
    jQuery("\x3ctd/\x3e", {id: "cell2_table1_line2"}).appendTo("#line2_table1");
    jQuery("\x3ctr/\x3e", {id: "line3_table1"}).appendTo("#tbody1");
    jQuery("\x3ctd/\x3e", {id: "cell1_table1_line3"}).appendTo("#line3_table1");
    jQuery("\x3ctd/\x3e", {id: "cell2_table1_line3"}).appendTo("#line3_table1");
    appendSpanStatusTable(getResource(!1, "statusTitle"), a.actStatus, "cell1_table1_line3", "cell2_table1_line3",
        a);
    jQuery("\x3ctable/\x3e", {
        id: "tb2",
        cellpadding: "0",
        cellspacing: "0",
        style: "margin-top: 7px"
    }).appendTo("#details").append(jQuery("\x3ctbody/\x3e", {id: "tbody2"}));
    jQuery("\x3ctr/\x3e", {id: "line1_table2"}).appendTo("#tbody2");
    jQuery("\x3ctd/\x3e", {id: "cell1_table2_line1"}).appendTo("#line1_table2");
    jQuery("\x3ctd/\x3e", {id: "cell2_table2_line1"}).appendTo("#line1_table2");
    jQuery("\x3ctr/\x3e", {id: "line2_table2"}).appendTo("#tbody2");
    jQuery("\x3ctd/\x3e", {id: "cell1_table2_line2"}).appendTo("#line2_table2");
    jQuery("\x3ctd/\x3e", {id: "cell2_table2_line2"}).appendTo("#line2_table2");
    jQuery("\x3ctable/\x3e", {
        id: "tb3",
        cellpadding: "0",
        cellspacing: "0",
        style: "margin-top: 7px"
    }).appendTo("#details").append(jQuery("\x3ctbody/\x3e", {id: "tbody3"}));
    jQuery("\x3ctr/\x3e", {id: "line1_table3"}).appendTo("#tbody3");
    jQuery("\x3ctd/\x3e", {id: "cell1_table3_line1"}).appendTo("#line1_table3");
    jQuery("\x3ctd/\x3e", {id: "cell2_table3_line1"}).appendTo("#line1_table3");
    jQuery("\x3ctr/\x3e", {id: "line2_table3"}).appendTo("#tbody3");
    jQuery("\x3ctd/\x3e", {id: "cell1_table3_line2"}).appendTo("#line2_table3");
    jQuery("\x3ctd/\x3e", {id: "cell2_table3_line2"}).appendTo("#line2_table3");
    jQuery("\x3ctr/\x3e", {id: "line3_table3"}).appendTo("#tbody3");
    jQuery("\x3ctd/\x3e", {id: "cell1_table3_line3"}).appendTo("#line3_table3");
    jQuery("\x3ctd/\x3e", {id: "cell2_table3_line3"}).appendTo("#line3_table3");
    jQuery("\x3ctr/\x3e", {id: "line4_table3"}).appendTo("#tbody3");
    jQuery("\x3ctd/\x3e", {id: "cell1_table3_line4"}).appendTo("#line4_table3");
    jQuery("\x3ctd/\x3e",
        {id: "cell2_table3_line4"}).appendTo("#line4_table3");
    jQuery("\x3ctr/\x3e", {id: "line5_table3"}).appendTo("#tbody3");
    jQuery("\x3ctd/\x3e", {id: "cell1_table3_line5"}).appendTo("#line5_table3");
    jQuery("\x3ctd/\x3e", {id: "cell2_table3_line5"}).appendTo("#line5_table3");
    a = $.parseHTML(a.content);
    $("#cell1_table3_line1").append(a)
}
function appendSpanStatus(a, b, c, d) {
    jQuery("\x3cspan/\x3e", {
        text: " " + a + ": ",
        style: "font-weight: bold;"
    }).appendTo("#" + c).after(jQuery("\x3cbr/\x3e")).after(jQuery("\x3cimg/\x3e", {src: getIcon(d.actStatus, d.status)})).after(jQuery("\x3cspan/\x3e", {text: b + " "}))
}
function appendSpanStatusTable(a, b, c, d, e) {
    jQuery("\x3cspan/\x3e", {text: " " + a + ": ", style: "font-weight: bold;"}).appendTo("#" + c);
    jQuery("\x3cimg/\x3e", {
        src: getIcon(e.actStatus, e.status),
        style: "margin-left: 5px; margin-right: 5px"
    }).appendTo("#" + d);
    jQuery("\x3cspan/\x3e", {text: getStatusValue(b) + " "}).appendTo("#" + d)
}
function getStatusValue(a) {
    if ("OPEN" === a)return getResource(!1, "statusOpen");
    if ("PLANNED" === a)return getResource(!1, "statusPlanned");
    if ("SUBMITTED" === a)return getResource(!1, "statusSubmitted");
    if ("ASSIGNED" === a)return getResource(!1, "statusAssigned");
    if ("DISPATCHED" === a)return getResource(!1, "statusDispatched");
    if ("ACCEPTED" === a)return getResource(!1, "statusAccepted");
    if ("EXECUTION" === a)return getResource(!1, "statusWip");
    if ("CLOSE_REQUEST" === a)return getResource(!1, "statusCloseRequest");
    if ("READY_TO_CLOSE" ===
        a)return getResource(!1, "statusReadyToClose");
    if ("PENDING" === a)return getResource(!1, "statusPending");
    if ("CLOSED" === a)return getResource(!1, "statusClosed");
    if ("CLOSE_REFUSED" === a)return getResource(!1, "statusCloseRefused");
    if ("RECEIVED" === a)return getResource(!1, "statusReceived");
    if ("ACKNOWLEDGED" === a)return getResource(!1, "statusAcknowledge");
    if ("REFUSED" === a)return getResource(!1, "statusRefused");
    if ("DISPLACEMENT" === a)return getResource(!1, "statusDisplacement");
    if ("DISPLACED" === a)return getResource(!1,
        "statusDisplaced");
    if ("EXECUTED" === a)return getResource(!1, "statusExecuted");
    if ("INTERRUPTED" === a)return getResource(!1, "statusInterrupted");
    if ("PENDING_APPROVAL" === a)return getResource(!1, "statusPendingApproval");
    if ("APPROVED" === a)return getResource(!1, "statusApproved");
    if ("REJECTED" === a)return getResource(!1, "statusRejected")
}
function appendSpanStatusWi(a, b, c, d) {
    jQuery("\x3cspan/\x3e", {
        text: " " + a + ": ",
        style: "font-weight: bold;"
    }).appendTo("#" + c).after(jQuery("\x3cbr/\x3e")).after(jQuery("\x3cimg/\x3e", {src: getIcon(d.wiStatus, d.wiStatus)})).after(jQuery("\x3cspan/\x3e", {text: b + " "}))
}
function appendSpanStatusWiTable(a, b, c, d, e) {
    jQuery("\x3cspan/\x3e", {text: " " + a + ": ", style: "font-weight: bold;"}).appendTo("#" + c);
    jQuery("\x3cimg/\x3e", {
        src: getIcon(e.wiStatus, e.wiStatus),
        style: "margin-left: 5px; margin-right: 5px"
    }).appendTo("#" + d);
    jQuery("\x3cspan/\x3e", {text: getStatusValue(b) + " "}).appendTo("#" + d)
}
function appendSpan(a, b, c) {
    jQuery("\x3cspan/\x3e", {
        text: " " + a + ": ",
        style: "font-weight: bold;"
    }).appendTo("#" + c).after(jQuery("\x3cbr/\x3e")).after(jQuery("\x3cspan/\x3e", {text: b}))
}
function appendSpanOnCell(a, b, c, d) {
    jQuery("\x3cspan/\x3e", {text: " " + a + ": ", style: "font-weight: bold;"}).appendTo("#" + c);
    jQuery("\x3cspan/\x3e", {text: " " + b, style: "margin-left: 5px"}).appendTo("#" + d)
}
function createSiteDetails(a) {
    jQuery("\x3cfieldset/\x3e", {
        id: "siteDetailsField",
        class: "fieldset"
    }).appendTo("#details").append(jQuery("\x3clegend/\x3e", {text: getResource(!1, "siteDetails")}));
    appendSpan(getResource(!1, "fieldSiteID"), a.siteId, "siteDetailsField");
    appendSpan(getResource(!1, "fieldSiteName"), a.siteName, "siteDetailsField");
    jQuery("\x3cdiv/\x3e", {id: "btnShowMore", class: "showMore"}).appendTo("#siteDetailsField");
    jQuery("\x3cinput/\x3e", {
        type: "button", onclick: "return toggleSiteDetails()", value: " ",
        class: "det btn_mdetails", style: "margin-top: -35px"
    }).appendTo("#btnShowMore");
    jQuery("\x3cdiv/\x3e", {id: "btnShowLess", class: "showLess"}).appendTo("#siteDetailsField");
    jQuery("\x3cinput/\x3e", {
        type: "button",
        onclick: "return toggleSiteDetails()",
        value: " ",
        class: "det btn_ldetails",
        style: "margin-top: -35px"
    }).appendTo("#btnShowLess");
    jQuery("\x3cdiv/\x3e", {id: "siteDetails", class: "showLess"}).appendTo("#siteDetailsField");
    appendSpan(getResource(!1, "cityLabel"), a.city, "siteDetails");
    appendSpan(getResource(!1,
        "areaLabel"), a.area, "siteDetails");
    appendSpan(getResource(!1, "addressLabel"), a.address, "siteDetails");
    appendSpan(getResource(!1, "drivingDirections"), a.drivingDirections, "siteDetails");
    appendSpan(getResource(!1, "specialRequirements"), a.specialReqs, "siteDetails");
    appendSpan(getResource(!1, "healthSafety"), a.healthSafety, "siteDetails");
    appendSpan(getResource(!1, "latitudeLabel"), a.latitude, "siteDetails");
    appendSpan(getResource(!1, "longitudeLabel"), a.longitude, "siteDetails");
    appendSpan(getResource(!1, "keyLoc"),
        a.keyLocation, "siteDetails");
    appendSpan(getResource(!1, "antennaLabel"), a.antennaDescription, "siteDetails")
}
function createHistory(a) {
    jQuery("\x3cfieldset/\x3e", {
        id: "historyDetailsField",
        class: "fieldset"
    }).appendTo("#details").append(jQuery("\x3clegend/\x3e", {text: getResource(!1, "historyTitle")}));
    appendSpan(getResource(!1, "lastUpdate"), a.lastUpdateDate, "historyDetailsField");
    jQuery("\x3cdiv/\x3e", {id: "btnShowMoreHistory", class: "showMore"}).appendTo("#historyDetailsField");
    jQuery("\x3cinput/\x3e", {
        type: "button",
        onclick: "return toggleHistoryDetails()",
        value: " ",
        class: "det btn_mdetails",
        style: "margin-top: -20px"
    }).appendTo("#btnShowMoreHistory");
    jQuery("\x3cdiv/\x3e", {id: "btnShowLessHistory", class: "showLess"}).appendTo("#historyDetailsField");
    jQuery("\x3cinput/\x3e", {
        type: "button",
        onclick: "return toggleHistoryDetails()",
        value: " ",
        class: "det btn_ldetails",
        style: "margin-top: -20px"
    }).appendTo("#btnShowLessHistory");
    jQuery("\x3cdiv/\x3e", {id: "historyDetails", class: "showLess"}).appendTo("#historyDetailsField");
    appendSpan(getResource(!1, "dispatchDate"), a.dispatchDate, "historyDetails");
    appendSpan(getResource(!1, "acceptanceDate"), a.acceptanceDate,
        "historyDetails");
    appendSpan(getResource(!1, "refuseDate"), a.refusalDate, "historyDetails");
    appendSpan(getResource(!1, "onSiteDate"), a.onSiteDate, "historyDetails");
    appendSpan(getResource(!1, "closeReqDate"), a.closeRequestDate, "historyDetails")
}
function createCloseDetails(a) {
    jQuery("\x3cfieldset/\x3e", {
        id: "closeDetailsField",
        class: "fieldset"
    }).appendTo("#details").append(jQuery("\x3clegend/\x3e", {text: getResource(!1, "closureInfo")}));
    jQuery("\x3cdiv/\x3e", {id: "btnShowMoreCloseObs", class: "showMore"}).appendTo("#closeDetailsField");
    jQuery("\x3cinput/\x3e", {
        type: "button",
        onclick: "return toggleCloseObsDetailsOff()",
        value: " ",
        class: "det btn_mdetails",
        style: "margin-top: -10px"
    }).appendTo("#btnShowMoreCloseObs");
    jQuery("\x3cdiv/\x3e", {
        id: "btnShowLessCloseObs",
        class: "showLess"
    }).appendTo("#closeDetailsField");
    jQuery("\x3cinput/\x3e", {
        type: "button",
        onclick: "return toggleCloseObsDetailsOff()",
        value: " ",
        class: "det btn_ldetails",
        style: "margin-top: -10px"
    }).appendTo("#btnShowLessCloseObs");
    jQuery("\x3cdiv/\x3e", {id: "closureInfo", class: "showLess"}).appendTo("#closeDetailsField");
    appendSpan(getResource(!1, "crType"), a.closeRequestType, "closureInfo");
    appendSpan(getResource(!1, "crCloseClass"), a.closureCauseClass, "closureInfo");
    appendSpan(getResource(!1, "crSiteVisit"),
        a.siteVisit, "closureInfo");
    appendSpan(getResource(!1, "crObservation"), a.closureObservation, "closureInfo");
    appendSpan(getResource(!1, "crReason"), a.reason, "closureInfo");
    appendSpan(getResource(!1, "crSolution"), a.solution, "closureInfo");
    appendSpan(getResource(!1, "crServices"), a.closeRequestServices, "closureInfo");
    appendSpan(getResource(!1, "crSpare"), a.closeRequestSpareParts, "closureInfo");
    appendSpan(getResource(!1, "assType"), a.assignmentClosureType, "closureInfo");
    appendSpan(getResource(!1, "assDate"),
        a.assignmentClosureDate, "closureInfo");
    appendSpan(getResource(!1, "assObs"), a.assignmentClosureObservation, "closureInfo");
    appendSpan(getResource(!1, "woClosureType"), a.woClosureType, "closureInfo");
    appendSpan(getResource(!1, "woClosureObs"), a.woClosureObservation, "closureInfo");
    "REFUSED" === a.actStatus && (appendSpan(getResource(!1, "refType"), a.refusalType, "closureInfo"), appendSpan(getResource(!1, "refDate"), a.refuseDate, "closureInfo"))
}
function createOrderDetails(a) {
    jQuery("\x3cfieldset/\x3e", {
        id: "orderDetailsField",
        class: "fieldset"
    }).appendTo("#details").append(jQuery("\x3clegend/\x3e", {text: getResource(!1, "woDetails")}));
    jQuery("\x3cdiv/\x3e", {id: "btnShowMoreWoDetails", class: "showMore"}).appendTo("#orderDetailsField");
    jQuery("\x3cinput/\x3e", {
        type: "button",
        onclick: "return toggleWoDetails()",
        value: " ",
        class: "det btn_mdetails",
        style: "margin-top: -5px"
    }).appendTo("#btnShowMoreWoDetails");
    jQuery("\x3cdiv/\x3e", {
        id: "btnShowLessWoDetails",
        class: "showLess"
    }).appendTo("#orderDetailsField");
    jQuery("\x3cinput/\x3e", {
        type: "button",
        onclick: "return toggleWoDetails()",
        value: " ",
        class: "det btn_ldetails",
        style: "margin-top: -5px"
    }).appendTo("#btnShowLessWoDetails");
    jQuery("\x3cdiv/\x3e", {id: "woDetailsDetails", class: "showLess"}).appendTo("#orderDetailsField");
    appendSpan(getResource(!1, "title1"), a.title1, "woDetailsDetails");
    appendSpan(getResource(!1, "title2"), a.title2, "woDetailsDetails");
    appendSpan(getResource(!1, "priorityLabel"), a.priority, "woDetailsDetails");
    appendSpan(getResource(!1, "woType"), a.woType, "woDetailsDetails");
    appendSpan(getResource(!1, "alarmBeg"), a.alarmBeginning, "woDetailsDetails");
    appendSpan(getResource(!1, "tecArea"), a.tecArea, "woDetailsDetails");
    appendSpan(getResource(!1, "workProfile"), a.workProfile, "woDetailsDetails");
    appendSpan(getResource(!1, "neID"), a.neID, "woDetailsDetails");
    appendSpan(getResource(!1, "neName"), a.neName, "woDetailsDetails");
    appendSpan(getResource(!1, "neModel"), a.neModel, "woDetailsDetails");
    appendSpan(getResource(!1,
        "servicesLabel"), a.services, "woDetailsDetails");
    appendSpan(getResource(!1, "sourceLabel"), a.source, "woDetailsDetails");
    appendSpan(getResource(!1, "obs"), a.observation, "woDetailsDetails");
    appendSpan(getResource(!1, "recSpareParts"), a.recommendedSpareParts, "woDetailsDetails");
    appendSpan(getResource(!1, "keyLabel"), a.key, "woDetailsDetails");
    appendSpan(getResource(!1, "serviceImpact"), a.serviceImpact, "woDetailsDetails");
    appendSpan(getResource(!1, "wpID"), a.workPackageId, "woDetailsDetails");
    appendSpan(getResource(!1,
        "wpName"), a.workPackageName, "woDetailsDetails")
}
function createExternalServicesDetails(a) {
    if (0 < a.externalServices.length) {
        jQuery("\x3cfieldset/\x3e", {
            id: "servicesDetailsField",
            class: "fieldset"
        }).appendTo("#details").append(jQuery("\x3clegend/\x3e", {text: getResource(!1, "externalServices")}));
        jQuery("\x3cdiv/\x3e", {id: "btnShowMoreServices", class: "showMore"}).appendTo("#servicesDetailsField");
        jQuery("\x3cinput/\x3e", {
            type: "button",
            onclick: "return toggleExternalServicesDetails()",
            value: " ",
            class: "det btn_mdetails",
            style: "margin-top: -5px"
        }).appendTo("#btnShowMoreServices");
        jQuery("\x3cdiv/\x3e", {id: "btnShowLessServices", class: "showLess"}).appendTo("#servicesDetailsField");
        jQuery("\x3cinput/\x3e", {
            type: "button",
            onclick: "return toggleExternalServicesDetails()",
            value: " ",
            class: "det btn_ldetails",
            style: "margin-top: -5px"
        }).appendTo("#btnShowLessServices");
        jQuery("\x3cspan/\x3e", {
            text: getResource(!1, "externalServices") + ": ",
            style: "font-weight: bold;"
        }).appendTo("#servicesDetailsField").after(jQuery("\x3cbr/\x3e")).after(jQuery("\x3cspan/\x3e", {text: a.externalServices.length}));
        jQuery("\x3cdiv/\x3e", {id: "externalServicesDetails", class: "showLess"}).appendTo("#servicesDetailsField");
        for (var b = 0; b < a.externalServices.length; b++)jQuery("\x3cdiv/\x3e", {
            id: "boxes" + b,
            class: "detailsBoxes"
        }).appendTo("#externalServicesDetails"), appendSpan(getResource(!1, "shortNameTitle"), a.externalServices[b].shortName, "boxes" + b), appendSpan(getResource(!1, "descriptionDetail"), a.externalServices[b].description, "boxes" + b), appendSpan(getResource(!1, "quantityDetail"), a.externalServices[b].quantity, "boxes" +
            b), appendSpan(getResource(!1, "projectDetail"), a.externalServices[b].plannedDate, "boxes" + b)
    }
}
function createActions(a) {
    var b = 0;
    a.acceptance && b++;
    a.refuse && b++;
    a.onsite && verifyOtherExecution() && b++;
    a.closeRequest && b++;
    a.viewMaterials && b++;
    a.viewChecklist && !a.acceptance && b++;
    0 < b && (jQuery("\x3cnav /\x3e", {id: "buttonmenu" + b}).appendTo("#buttonbar"), jQuery("\x3cul /\x3e", {id: "ulMenu"}).appendTo("#buttonmenu" + b), a.acceptance && appendButton("acceptBtn", "acceptanceOff.jsf", "btnMenu btn_accept", getResource(!1, "acceptBtn")), a.refuse && appendButton("refuseBtn", "refuseOff.jsf", "btnMenu btn_refuse", getResource(!1,
        "refuseBtn")), a.onsite && verifyOtherExecution() && appendButton("onsiteBtn", "onsiteOff.jsf", "btnMenu btn_execution", getResource(!1, "onSiteBtn")), a.closeRequest && appendButton("closeRequestBtn", "closeRequestOff.jsf", "btnMenu btn_close_request", getResource(!1, "closeRequestBtn")), a.viewMaterials && appendButton("materialBtn", "materialsOff.jsf", "btnMenu btn_info", getResource(!1, "materialsTitle")), a.viewChecklist && !a.acceptance && appendButton("checklistBtn", "checkListOff.jsf", "btnMenu btn_info", getResource(!1,
        "checklistTitle")))
}
function appendButton(a, b, c, d) {
    jQuery("\x3cli/\x3e").appendTo("#ulMenu").append(jQuery("\x3ca/\x3e", {
        id: a,
        href: b,
        class: c
    }).append(jQuery("\x3cspan /\x3e", {text: d})))
}
function createActionsMaterials(a) {
    jQuery("\x3cnav /\x3e", {id: "buttonmenu2"}).appendTo("#buttonbar");
    jQuery("\x3cul /\x3e", {id: "ulMenu"}).appendTo("#buttonmenu2");
    appendButton("materialAckBtn", "materialsAckOff.jsf", "btnMenu btn_positive", "Acknowledge Materials");
    appendButton("materialMissBtn", "materialsMissOff.jsf", "btnMenu btn_negative", "Missing Materials")
}
var saveChecklistOnclick = "", saveChecklistDraftOnclick = "";
function checkStorageAvailability() {
    return "undefined" === typeof window.localStorage ? (alert("Your browser does not support HTML5 window.localStorage. Try upgrading."), !1) : !0
}
function storeFields(a, b, c, d) {
    c = c.toLowerCase();
    "" !== a && null !== a && (jQuery.parseJSON(a), window.localStorage.setItem("fieldsWo_" + c, a));
    "" !== b && null !== b && (jQuery.parseJSON(b), window.localStorage.setItem("fieldsWi_" + c, b));
    window.localStorage.setItem("locale_" + c, d)
}
function storeId(a) {
    checkStorageAvailability() && window.localStorage.setItem("id", a)
}
function storeBoxes(a, b, c, d, e, h, m, k, f, q, n) {
    window.localStorage.setItem("loggedUser", f.toLowerCase());
    window.localStorage.setItem("loggedPassword", q);
    f = f.toLowerCase();
    if (checkStorageAvailability()) {
        var l = window.localStorage.getItem("inboxActsId_" + f), p = window.localStorage.getItem("workingActsId_" + f), r = window.localStorage.getItem("waitingActsId_" + f), t = window.localStorage.getItem("closedActsId_" + f);
        null !== l && (l = JSON.parse(l));
        null !== p && (p = JSON.parse(p));
        null !== r && (r = JSON.parse(r));
        null !== t && (t = JSON.parse(t));
        if (null !== b && "" !== b)for (var u = JSON.parse(b), s = 0; s < u.length; s++) {
            var w = u[s];
            if (null !== l) {
                var v = l.indexOf(w);
                -1 < v && l.splice(v, 1)
            }
            null !== p && (v = p.indexOf(w), -1 < v && p.splice(v, 1));
            null !== r && (v = r.indexOf(w), -1 < v && r.splice(v, 1));
            null !== t && (v = t.indexOf(w), -1 < v && t.splice(v, 1))
        }
        if (null !== d && "" !== d)for (u = JSON.parse(d), s = 0; s < u.length; s++)w = u[s], null !== l && (v = l.indexOf(w), -1 < v && l.splice(v, 1)), null !== p && (v = p.indexOf(w), -1 < v && p.splice(v, 1)), null !== r && (v = r.indexOf(w), -1 < v && r.splice(v, 1)), null !== t && (v = t.indexOf(w),
        -1 < v && t.splice(v, 1));
        if (null !== h && "" !== h)for (u = JSON.parse(h), s = 0; s < u.length; s++)w = u[s], null !== l && (v = l.indexOf(w), -1 < v && l.splice(v, 1)), null !== p && (v = p.indexOf(w), -1 < v && p.splice(v, 1)), null !== r && (v = r.indexOf(w), -1 < v && r.splice(v, 1)), null !== t && (v = t.indexOf(w), -1 < v && t.splice(v, 1));
        if (null !== k && "" !== k)for (u = JSON.parse(k), s = 0; s < u.length; s++)w = u[s], null !== l && (v = l.indexOf(w), -1 < v && l.splice(v, 1)), null !== p && (v = p.indexOf(w), -1 < v && p.splice(v, 1)), null !== r && (v = r.indexOf(w), -1 < v && r.splice(v, 1)), null !== t && (v = t.indexOf(w),
        -1 < v && t.splice(v, 1));
        if (null !== b && "" !== b && null !== l && "[]" !== l && 0 < l.length)for (u = JSON.parse(b), s = 0; s < u.length; s++)w = !l instanceof Array ? JSON.parse(l) : l, w.push(u[s]), l = w; else l = b;
        if (null !== d && "" !== d && null !== p && 0 < p.length)for (u = JSON.parse(d), s = 0; s < u.length; s++)w = !p instanceof Array ? JSON.parse(p) : p, w.push(u[s]), p = w; else p = d;
        if (null !== h && "" !== h && null !== r && 0 < r.length)for (u = JSON.parse(h), s = 0; s < u.length; s++)w = !r instanceof Array ? JSON.parse(r) : r, w.push(u[s]), r = w; else r = h;
        if (null !== k && "" !== k && null !== t && 0 < t.length)for (u =
                                                                          JSON.parse(k), s = 0; s < u.length; s++)w = !t instanceof Array ? JSON.parse(t) : t, w.push(u[s]), t = w; else t = k;
        l instanceof Array && (l = JSON.stringify(l));
        p instanceof Array && (p = JSON.stringify(p));
        r instanceof Array && (r = JSON.stringify(r));
        t instanceof Array && (t = JSON.stringify(t));
        window.localStorage.setItem("inboxActsId_" + f, l);
        window.localStorage.setItem("workingActsId_" + f, p);
        window.localStorage.setItem("waitingActsId_" + f, r);
        window.localStorage.setItem("closedActsId_" + f, t);
        for (var D in localStorage)if (d = !1, "act" ===
            D.substring(0, 3)) {
            h = D.substring(3, D.length);
            if (null !== l && "" !== l)for (l instanceof Array || (l = JSON.parse(l)), s = 0; s < l.length; s++)w = l[s], w.toString() === h.toString() && (d = !0);
            if (null !== p && "" !== p)for (p instanceof Array || (p = JSON.parse(p)), s = 0; s < p.length; s++)w = p[s], w.toString() === h.toString() && (d = !0);
            if (null !== r && "" !== r)for (r instanceof Array || (r = JSON.parse(r)), s = 0; s < r.length; s++)w = r[s], w.toString() === h.toString() && (d = !0);
            if (null !== t && "" !== t)for (t instanceof Array || (t = JSON.parse(t)), s = 0; s < t.length; s++)w = t[s],
            w.toString() === h.toString() && (d = !0);
            d || (localStorage.removeItem(D), localStorage.removeItem(D + "cl"))
        }
        window.localStorage.setItem("refreshTime_" + f, n);
        for (s = 0; s < a.length; s++)n = a[s], window.localStorage.setItem("act" + n.id, JSON.stringify(n));
        for (s = 0; s < c.length; s++)n = c[s], window.localStorage.setItem("act" + n.id, JSON.stringify(n));
        for (s = 0; s < e.length; s++)n = e[s], window.localStorage.setItem("act" + n.id, JSON.stringify(n));
        for (s = 0; s < m.length; s++)n = m[s], window.localStorage.setItem("act" + n.id, JSON.stringify(n));
        window.localStorage.setItem(f.toLowerCase(),
            q)
    }
}
function storeChecklists(a, b) {
    b.toLowerCase();
    if (checkStorageAvailability())for (var c = a.split("%@%"), d = 0; d < c.length; d++)if ("" !== c[d] && null !== c[d] && "null" !== c[d]) {
        var e = jQuery.parseJSON(c[d]).activationId;
        window.localStorage.setItem(e + "cl", c[d])
    }
}
function storeTypes(a, b, c, d) {
    d = d.toLowerCase();
    checkStorageAvailability() && ("" !== a && null !== a && window.localStorage.setItem("refusalTypes_" + d, a), "" !== b && null !== b && window.localStorage.setItem("closeRequestTypes_" + d, b), "" !== c && null !== c && window.localStorage.setItem("causeClassTypes_" + d, c))
}
function startSync() {
    console.log("Start sync")
}
function fillLoginAndPassword() {
    var a = window.localStorage.getItem("loggedUser"), b = window.localStorage.getItem("loggedPassword");
    $("#filtersForm\\:userHidden").val(a);
    $("#filtersForm\\:passwordHidden").val(b);
    $("#dashboardForm\\:userHidden").val(a);
    $("#dashboardForm\\:passwordHidden").val(b);
    $("#actionsForm\\:userHidden").val(a);
    $("#actionsForm\\:passwordHidden").val(b)
}
function endSync(a) {
    a = a.toLowerCase();
    console.log("Finalized sync");
    var b = new Date, c = b.getUTCDate(), d = b.getUTCMonth() + 1, e = b.getMinutes(), h = b.getUTCMinutes();
    10 > c && (c = "0" + c);
    10 > d && (d = "0" + d);
    10 > e && (e = "0" + e);
    10 > h && (h = "0" + h);
    window.localStorage.setItem("lastSync_" + a, c + "/" + d + "/" + b.getUTCFullYear() + " " + b.getHours() + ":" + e);
    window.localStorage.setItem("lastSyncUTC_" + a, c + "/" + d + "/" + b.getUTCFullYear() + " " + b.getUTCHours() + ":" + h)
}
function showSyncDate(a) {
    a = a.toLowerCase();
    a = window.localStorage.getItem("lastSync_" + a);
    null !== a && ($("#syncDate").css("display", "block"), jQuery("\x3cspan\x3e", {text: a}).appendTo("#syncDate"))
}
function setSyncDateDownload() {
    for (var a = "", b = 0; b < localStorage.length; b++) {
        var c = localStorage.key(b);
        if (-1 < c.indexOf("lastSyncUTC"))var d = c.split("_")[1], c = window.localStorage.getItem(c), a = "" === a ? d + "#" + c : a + ";" + d + "#" + c
    }
    $("#loginForm\\:syncDates").val(a)
}
function clearActions(a) {
    a = a.toLowerCase();
    localStorage.removeItem("acceptance_" + a);
    localStorage.removeItem("refuse_" + a);
    localStorage.removeItem("onsite_" + a);
    localStorage.removeItem("closerequest_" + a);
    localStorage.removeItem("materialsAck_" + a);
    localStorage.removeItem("materialsMiss_" + a);
    localStorage.removeItem("clSave_" + a);
    localStorage.removeItem("clDraft_" + a)
}
function clearSuccess(a, b) {
    b = b.toLowerCase();
    if ("" !== a) {
        var c = jQuery.parseJSON(a), d = jQuery.parseJSON(window.localStorage.getItem("acceptance_" + b));
        if (null !== d) {
            for (var e = 0; e < d.length; e++)for (var h = 0; h < c.length; h++)c[h] === d[e].id && d.splice(e, 1);
            window.localStorage.setItem("acceptance_" + b, JSON.stringify(d))
        }
    }
}
function clearRefuse(a, b) {
    b = b.toLowerCase();
    if ("" !== a) {
        var c = jQuery.parseJSON(a), d = jQuery.parseJSON(window.localStorage.getItem("refuse_" + b));
        if (null !== d) {
            for (var e = 0; e < d.length; e++)for (var h = 0; h < c.length; h++)c[h] === d[e].id && d.splice(e, 1);
            window.localStorage.setItem("refuse_" + b, JSON.stringify(d))
        }
    }
}
function clearOnSite(a, b) {
    b = b.toLowerCase();
    if ("" !== a) {
        var c = jQuery.parseJSON(a), d = jQuery.parseJSON(window.localStorage.getItem("onsite_" + b));
        if (null !== d) {
            for (var e = 0; e < d.length; e++)for (var h = 0; h < c.length; h++)c[h] === d[e].id && d.splice(e, 1);
            window.localStorage.setItem("onsite_" + b, JSON.stringify(d))
        }
    }
}
function clearCloseRequest(a, b) {
    b = b.toLowerCase();
    if ("" !== a) {
        var c = jQuery.parseJSON(a), d = jQuery.parseJSON(window.localStorage.getItem("closerequest_" + b));
        if (null !== d) {
            for (var e = 0; e < d.length; e++)for (var h = 0; h < c.length; h++)c[h] === d[e].id && d.splice(e, 1);
            window.localStorage.setItem("closerequest_" + b, JSON.stringify(d))
        }
    }
}
function clearMaterialAck(a, b) {
    b = b.toLowerCase();
    if ("" !== a) {
        var c = jQuery.parseJSON(a), d = jQuery.parseJSON(window.localStorage.getItem("materialsAck_" + b));
        if (null !== d) {
            for (var e = 0; e < d.length; e++)for (var h = 0; h < c.length; h++)c[h] === d[e].id && d.splice(e, 1);
            window.localStorage.setItem("materialsAck_" + b, JSON.stringify(d))
        }
    }
}
function clearMaterialMiss(a, b) {
    b = b.toLowerCase();
    if ("" !== a) {
        var c = jQuery.parseJSON(a), d = jQuery.parseJSON(window.localStorage.getItem("materialsMiss_" + b));
        if (null !== d) {
            for (var e = 0; e < d.length; e++)for (var h = 0; h < c.length; h++)c[h] === d[e].id && d.splice(e, 1);
            window.localStorage.setItem("materialsMiss_" + b, JSON.stringify(d))
        }
    }
}
function clearChecklistSave(a, b) {
    b = b.toLowerCase();
    if ("" !== a) {
        var c = jQuery.parseJSON(a), d = jQuery.parseJSON(window.localStorage.getItem("clSave_" + b));
        if (null !== d) {
            for (var e = 0; e < d.length; e++)for (var h = 0; h < c.length; h++)c[h] === d[e].id && d.splice(e, 1);
            window.localStorage.setItem("clSave_" + b, JSON.stringify(d))
        }
    }
}
function clearChecklistDraft(a, b) {
    b = b.toLowerCase();
    if ("" !== a) {
        var c = jQuery.parseJSON(a), d = jQuery.parseJSON(window.localStorage.getItem("clDraft_" + b));
        if (null !== d) {
            for (var e = 0; e < d.length; e++)for (var h = 0; h < c.length; h++)c[h] === d[e].id && d.splice(e, 1);
            window.localStorage.setItem("clDraft_" + b, JSON.stringify(d))
        }
    }
}
function showOnlineOnline(a, b) {
    var c = window.location.href;
    -1 < c.indexOf("position") && (-1 < c.indexOf("?") ? window.history.replaceState(null, "Mobile Portal", c + appendPosition(!1, b)) : window.history.replaceState(null, "Mobile Portal", c + appendPosition(!0, b)));
    c = window.localStorage.getItem("id");
    if ("" !== c && void 0 !== c && null !== c)var d = jQuery.parseJSON(c);
    $("#loginForm\\:loginBtn").attr("type", "submit");
    $("#loginForm\\:loginBtn").attr("onclick", "fillActions();");
    $("#inbox").attr("href", "/mportal/protected/inbox.jsf" +
        appendPosition(!0, b));
    $("#working").attr("href", "/mportal/protected/working.jsf" + appendPosition(!0, b));
    $("#waiting").attr("href", "/mportal/protected/waitingclose.jsf" + appendPosition(!0, b));
    $("#closed").attr("href", "/mportal/protected/closed.jsf" + appendPosition(!0, b));
    $("#self").attr("href", "/mportal/protected/selfAssignment.jsf" + appendPosition(!0, b));
    $("#pmview").attr("href", "/mportal/protected/pm.jsf" + appendPosition(!0, b));
    $("#engineers").attr("href", "/mportal/protected/engineers.jsf" + appendPosition(!0,
            b));
    $("#vehicles").attr("href", "/mportal/protected/vehicles.jsf" + appendPosition(!0, b));
    $("div").each(function (a) {
        a = $(this);
        var b = a.attr("onclick");
        if (void 0 !== b && (b = b.split("id\x3d"), !a.attr("storeid"))) {
            if (void 0 !== b[1]) {
                var c = b[1].split("'");
                a.attr("storeid", c[0])
            }
            void 0 !== b[0] && (c = -1 < b[0].indexOf("wodetailSelf"), b = -1 < b[0].indexOf("wodetailManager"), c && a.attr("isself", !0), b && a.attr("ispm", !0))
        }
    });
    $("div").each(function (a) {
        a = $(this).attr("storeid");
        var c = $(this).attr("isself"), d = $(this).attr("ispm");
        void 0 !== a && (c ? $(this).attr("onclick", "window.location \x3d '/mportal/protected/flow/wodetailSelf.jsf?id\x3d" + a + "" + appendPosition(!1, b) + "'") : d ? $(this).attr("onclick", "window.location \x3d '/mportal/protected/flow/wodetailManager.jsf?id\x3d" + a + "" + appendPosition(!1, b) + "'") : $(this).attr("onclick", "window.location \x3d '/mportal/protected/flow/wodetail.jsf?id\x3d" + a + "" + appendPosition(!1, b) + "'"))
    });
    $("div").each(function (a) {
        a = $(this).attr("storeid");
        var c = $(this).attr("isself"), d = $(this).attr("ispm");
        if (void 0 !== a) {
            var k = $(this).find("a"), f = $(this).attr("href");
            void 0 !== f && -1 < f.indexOf("tel") && (c ? k.attr("href", "/mportal/protected/flow/wodetailSelf.jsf?id\x3d" + a + "" + appendPosition(!1, b)) : d ? k.attr("href", "/mportal/protected/flow/wodetailManager.jsf?id\x3d" + a + "" + appendPosition(!1, b)) : k.attr("href", "/mportal/protected/flow/wodetail.jsf?id\x3d" + a + "" + appendPosition(!1, b)))
        }
    });
    $("#settingsForm\\:standBy").attr("href", "/mportal/protected/flow/standBy.jsf" + appendPosition(!0, b));
    $("#settingsForm\\:standBy").removeAttr("onclick");
    $("#settingsForm\\:spareParts").attr("href", "/mportal/protected/flow/spareParts.jsf" + appendPosition(!0, b));
    $("#settingsForm\\:spareParts").removeAttr("onclick");
    $("#settingsForm\\:back").attr("href", "/mportal/protected/inbox.jsf" + appendPosition(!0, b));
    $("#settingsForm\\:back").removeAttr("onclick");
    $("#settingsForm\\:saveBtn").removeAttr("onclick");
    $("#settingsForm\\:saveBtn").attr("type", "submit");
    $("#settingsForm\\:timezoneBtn").removeAttr("onclick");
    $("#settingsForm\\:timezoneBtn").attr("type",
        "submit");
    $("#settingsForm\\:startingPointBtn").attr("type", "submit");
    $("#settingsForm\\:startingPointBtn").removeAttr("onclick");
    $("#settingsForm\\:finishPointBtn").attr("type", "submit");
    $("#settingsForm\\:finishPointBtn").removeAttr("onclick");
    $("#actionsForm\\:saveBtn").removeAttr("onclick");
    $("#actionsForm\\:saveBtn").attr("type", "submit");
    $("#actionsForm\\:back").attr("href", "/mportal/protected/inbox.jsf" + appendPosition(!0, b));
    $("#actionsForm\\:back").removeAttr("onclick");
    $("#filtersForm\\:filter").removeAttr("onclick");
    $("#filtersForm\\:filter").attr("type", "submit");
    $("#filtersForm\\:clear").removeAttr("onclick");
    $("#filtersForm\\:clear").attr("type", "submit");
    $("#wodetailForm\\:editSite").attr("href", "/mportal/protected/flow/site.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#wodetailForm\\:editSite").removeAttr("onclick");
    $("#acceptanceForm\\:btnBack").attr("href", "/mportal/protected/flow/wodetail.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#infoForm\\:btnBack").attr("href", "/mportal/protected/flow/wodetail.jsf?id\x3d" +
        d + "" + appendPosition(!1, b));
    $("#alarmForm\\:btnBack").attr("href", "/mportal/protected/flow/wodetail.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#closeRequestForm\\:btnBack").attr("href", "/mportal/protected/flow/wodetail.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#geoFinishForm\\:btnBack").attr("href", "/mportal/protected/flow/wodetail.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#executionForm\\:btnBack").attr("href", "/mportal/protected/flow/wodetail.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#displacementForm\\:btnBack").attr("href",
        "/mportal/protected/flow/wodetail.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#interruptionForm\\:btnBack").attr("href", "/mportal/protected/flow/wodetail.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#materialsForm\\:btnBack").attr("href", "/mportal/protected/flow/wodetail.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#materialsForm\\:btnBack2").attr("href", "/mportal/protected/flow/wodetail.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#materialsForm\\:btnBackMat").attr("href", "/mportal/protected/flow/materials.jsf?id\x3d" +
        d + "" + appendPosition(!1, b));
    $("#materialsForm\\:btnBack2Mat").attr("href", "/mportal/protected/flow/materials.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#pendingForm\\:btnBack").attr("href", "/mportal/protected/flow/wodetail.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#siteForm\\:btnBack").attr("href", "/mportal/protected/flow/wodetail.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#standbyForm\\:btnBack").attr("href", "/mportal/protected/settings.jsf" + appendPosition(!0, b));
    $("#releaseStandbyForm\\:btnBack").attr("href",
        "/mportal/protected/flow/wodetail.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#geoStartForm\\:btnBack").attr("href", "/mportal/protected/settings.jsf" + appendPosition(!0, b));
    $("#geoFinishForm\\:btnBack").attr("href", "/mportal/protected/settings.jsf" + appendPosition(!0, b));
    $("#checklistForm\\:backBtn").attr("href", "/mportal/protected/flow/wodetail.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#checklistForm\\:backBtnClear").attr("href", "/mportal/protected/flow/checklist.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#dashboardMenu").attr("href", "/mportal/protected/dashboard.jsf" + appendPosition(!0, b));
    $("#settingsMenu").attr("href", "/mportal/protected/settings.jsf" + appendPosition(!0, b));
    $("#selfAssignmentMenu").attr("href", "/mportal/protected/selfAssignment.jsf" + appendPosition(!0, b));
    $("#pmViewMenu").attr("href", "/mportal/protected/pm.jsf" + appendPosition(!0, b));
    $("#offlineActionsMenu").attr("href", "/mportal/protected/offlineActions.jsf" + appendPosition(!0, b));
    $("#logoffA").attr("onclick", "return clickLogoff();");
    $("#acceptanceForm\\:saveBtn").removeAttr("onclick");
    $("#acceptanceForm\\:saveBtn").attr("type", "submit");
    $("#infoForm\\:saveBtn").removeAttr("onclick");
    $("#infoForm\\:saveBtn").attr("type", "submit");
    $("#alarmForm\\:saveBtn").removeAttr("onclick");
    $("#alarmForm\\:saveBtn").attr("type", "submit");
    $("#closeRequestForm\\:saveBtn").removeAttr("onclick");
    $("#closeRequestForm\\:saveBtn").attr("type", "submit");
    $("#geoFinishForm\\:saveBtn").removeAttr("onclick");
    $("#geoFinishForm\\:saveBtn").attr("type", "submit");
    $("#executionForm\\:saveBtn").removeAttr("onclick");
    $("#executionForm\\:saveBtn").attr("type", "submit");
    $("#displacementForm\\:saveBtn").removeAttr("onclick");
    $("#displacementForm\\:saveBtn").attr("type", "submit");
    $("#interruptionForm\\:saveBtn").removeAttr("onclick");
    $("#interruptionForm\\:saveBtn").attr("type", "submit");
    $("#materialsForm\\:saveBtn").removeAttr("onclick");
    $("#materialsForm\\:saveBtn").attr("type", "submit");
    $("#pendingForm\\:saveBtn").removeAttr("onclick");
    $("#pendingForm\\:saveBtn").attr("type",
        "submit");
    $("#siteForm\\:saveBtn").removeAttr("onclick");
    $("#siteForm\\:saveBtn").attr("type", "submit");
    $("#assignForm\\:saveBtnWo").removeAttr("onclick");
    $("#assignForm\\:saveBtnWo").attr("type", "submit");
    $("#assignForm\\:saveBtnWi").removeAttr("onclick");
    $("#assignForm\\:saveBtnWi").attr("type", "submit");
    $("#standbyForm\\:saveBtn").removeAttr("onclick");
    $("#standbyForm\\:saveBtn").attr("type", "submit");
    $("#releaseStandbyForm\\:saveBtn").removeAttr("onclick");
    $("#releaseStandbyForm\\:saveBtn").attr("type",
        "submit");
    $("#geoStartForm\\:saveBtn").removeAttr("onclick");
    $("#geoStartForm\\:saveBtn").attr("type", "submit");
    saveChecklistOnclick = $("#checklistForm\\:saveBtn").attr("onclick");
    saveChecklistDraftOnclick = $("#checklistForm\\:saveDraftBtn").attr("onclick");
    $("#checklistForm\\:saveBtn").attr("type", "button");
    $("#checklistForm\\:saveBtn").attr("onclick", saveChecklistOnclick);
    $("#checklistForm\\:saveDraftBtn").attr("type", "submit");
    $("#checklistForm\\:saveDraftBtn").attr("onclick", saveChecklistDraftOnclick);
    $("#checklistForm\\:clearBtn").attr("type", "submit");
    $("#checklistForm\\:saveBtnClear").attr("type", "submit");
    $("#checklistForm\\:saveBtnClear").attr("onclick", "clearDraftById('" + d + "');");
    $("a").each(function (a) {
        a = $(this);
        var c = a.attr("href"), d = a.attr("id");
        if (void 0 !== c && -1 < c.indexOf("tel"))c.indexOf("tel"); else if (void 0 !== c) {
            var k = -1 < c.indexOf("/acceptance.");
            k && a.attr("id", "acceptanceBtn");
            if (k = -1 < c.indexOf("/acceptanceAll"))k = c.split("id\x3d"), a.attr("storeid") || void 0 === k[1] || (k = k[1].split("\x26"),
                a.attr("storeid", k[0])), a.attr("id", "acceptanceBtnAll");
            if (k = -1 < c.indexOf("/refuseAll"))k = c.split("id\x3d"), a.attr("storeid") || void 0 === k[1] || (k = k[1].split("\x26"), a.attr("storeid", k[0])), a.attr("id", "refuseBtnAll");
            (k = -1 < c.indexOf("/reject")) && a.attr("id", "refuseBtn");
            (k = -1 < c.indexOf("/execution.")) && a.attr("id", "executionBtn");
            if (k = -1 < c.indexOf("/executionAll"))k = c.split("id\x3d"), a.attr("storeid") || void 0 === k[1] || (k = k[1].split("\x26"), a.attr("storeid", k[0])), a.attr("id", "executionBtnAll");
            (k = -1 <
                c.indexOf("/closerequest.")) && a.attr("id", "closeRequestBtn");
            if (k = -1 < c.indexOf("/closerequestAll"))k = c.split("id\x3d"), a.attr("storeid") || void 0 === k[1] || (k = k[1].split("\x26"), a.attr("storeid", k[0])), a.attr("id", "closeRequestBtnAll");
            (k = -1 < c.indexOf("/checklist")) && a.attr("id", "checkListBtn");
            (k = -1 < c.indexOf("/materials.jsf")) && a.attr("id", "materialsBtn");
            (k = -1 < c.indexOf("/materialsMissing.jsf")) && a.attr("id", "materialsMissBtn");
            (k = -1 < c.indexOf("/materialsAck.jsf")) && a.attr("id", "materialsAckBtn");
            (k = -1 < c.indexOf("/startDisplacement")) && a.attr("id", "startDisplacementBtn");
            (k = -1 < c.indexOf("/finalizeDisplacement")) && a.attr("id", "finalizeDisplacementBtn");
            (k = -1 < c.indexOf("/interruption")) && a.attr("id", "interruptionBtn");
            (k = -1 < c.indexOf("/interruptionRelease")) && a.attr("id", "interruptionReleaseBtn");
            (k = -1 < c.indexOf("/pending")) && a.attr("id", "pendingBtn");
            (k = -1 < c.indexOf("/pendingWi")) && a.attr("id", "pendingWiBtn");
            (k = -1 < c.indexOf("/pendingRelease")) && a.attr("id", "pendingReleaseBtn");
            (k = -1 < c.indexOf("/pendingReleaseWi")) &&
            a.attr("id", "pendingReleaseWiBtn");
            (k = -1 < c.indexOf("/woDirections")) && a.attr("id", "directionsBtn");
            (k = -1 < c.indexOf("/checkAlarm")) && a.attr("id", "checkAlarmBtn");
            k = -1 < c.indexOf("/attachment");
            d = void 0 !== d ? -1 < d.indexOf("download") : !1;
            k && !d && a.attr("id", "attachmentsBtn");
            (k = -1 < c.indexOf("/additionalInfo")) && a.attr("id", "additionalInfoBtn");
            (d = -1 < c.indexOf("/assign.")) && a.attr("id", "assignBtn");
            (d = -1 < c.indexOf("/assignAll.")) && a.attr("id", "assignAllBtn");
            (d = -1 < c.indexOf("/unassign.")) && a.attr("id", "unassignBtn")
        }
        d =
            a.attr("id");
        "acceptanceBtnAll" === d && (c = a.attr("storeid"), a.attr("href", "/mportal/protected/flow/acceptanceAll.jsf?id\x3d" + c + "" + appendPosition(!1, b)));
        "refuseBtnAll" === d && (c = a.attr("storeid"), a.attr("href", "/mportal/protected/flow/refuseAll.jsf?id\x3d" + c + "" + appendPosition(!1, b)));
        "executionBtnAll" === d && (c = a.attr("storeid"), a.attr("href", "/mportal/protected/flow/executionAll.jsf?id\x3d" + c + "" + appendPosition(!1, b)));
        "closeRequestBtnAll" === d && (c = a.attr("storeid"), a.attr("href", "/mportal/protected/flow/closerequestAll.jsf?id\x3d" +
            c + "" + appendPosition(!1, b)))
    });
    $("#acceptanceBtn").attr("href", "/mportal/protected/flow/acceptance.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#acceptanceBtn").removeAttr("onclick");
    $("#btnSelf").attr("href", "/mportal/protected/selfAssignment.jsf" + appendPosition(!0, b));
    $("#btnSelf").removeAttr("onclick");
    $("#refuseBtn").attr("href", "/mportal/protected/flow/reject.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#refuseBtn").removeAttr("onclick");
    $("#executionBtn").attr("href", "/mportal/protected/flow/execution.jsf?id\x3d" +
        d + "" + appendPosition(!1, b));
    $("#executionBtn").removeAttr("onclick");
    $("#closeRequestBtn").attr("href", "/mportal/protected/flow/closerequest.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#closeRequestBtn").removeAttr("onclick");
    $("#checkListBtn").attr("href", "/mportal/protected/flow/checklist.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#checkListBtn").removeAttr("onclick");
    $("#materialsBtn").attr("href", "/mportal/protected/flow/materials.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#materialsBtn").removeAttr("onclick");
    $("#materialsAckBtn").attr("href", "/mportal/protected/flow/materialsAck.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#materialsAckBtn").removeAttr("onclick");
    $("#materialsMissBtn").attr("href", "/mportal/protected/flow/materialsMissing.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#materialsMissBtn").removeAttr("onclick");
    $("#startDisplacementBtn").attr("href", "/mportal/protected/flow/startDisplacement.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#startDisplacementBtn").removeAttr("onclick");
    $("#finalizeDisplacementBtn").attr("href",
        "/mportal/protected/flow/finalizeDisplacement.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#finalizeDisplacementBtn").removeAttr("onclick");
    $("#interruptionBtn").attr("href", "/mportal/protected/flow/interruption.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#interruptionBtn").removeAttr("onclick");
    $("#interruptionReleaseBtn").attr("href", "/mportal/protected/flow/interruptionRelease.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#interruptionReleaseBtn").removeAttr("onclick");
    $("#pendingBtn").attr("href", "/mportal/protected/flow/pending.jsf?id\x3d" +
        d + "" + appendPosition(!1, b));
    $("#pendingBtn").removeAttr("onclick");
    $("#pendingWiBtn").attr("href", "/mportal/protected/flow/pendingWi.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#pendingWiBtn").removeAttr("onclick");
    $("#pendingReleaseBtn").attr("href", "/mportal/protected/flow/pendingRelease.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#pendingReleaseBtn").removeAttr("onclick");
    $("#pendingReleaseWiBtn").attr("href", "/mportal/protected/flow/pendingReleaseWi.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#pendingReleaseWiBtn").removeAttr("onclick");
    $("#directionsBtn").attr("href", "/mportal/protected/flow/woDirections.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#directionsBtn").removeAttr("onclick");
    $("#checkAlarmBtn").attr("href", "/mportal/protected/flow/checkAlarm.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#checkAlarmBtn").removeAttr("onclick");
    $("#additionalInfoBtn").attr("href", "/mportal/protected/flow/additionalInfo.jsf?id\x3d" + d + "" + appendPosition(!1, b));
    $("#additionalInfoBtn").removeAttr("onclick");
    $("#orderMap").attr("href", "/mportal/protected/flow/locations.jsf" +
        appendPosition(!0, b));
    $("#orderMap").removeAttr("onclick");
    $("#locationsBtn").attr("href", "/mportal/protected/flow/locations.jsf" + appendPosition(!0, b));
    $("#locationsBtn").removeAttr("onclick");
    $("#vehicleMap").attr("href", "/mportal/protected/flow/locationsVehicle.jsf" + appendPosition(!0, b));
    $("#vehicleMap").removeAttr("onclick");
    $("#locationsVehBtn").attr("href", "/mportal/protected/flow/locationsVehicle.jsf" + appendPosition(!0, b));
    $("#locationsVehBtn").removeAttr("onclick")
}
function appendPosition(a, b) {
    var c = "";
    void 0 !== b && null !== b && (a ? c += "?position\x3d" + getStringPosition(b) : -1 < window.location.href.indexOf(b.coords.latitude + "|" + b.coords.longitude + "|") || (c += "\x26position\x3d" + getStringPosition(b)));
    return c
}
function getStringPosition(a) {
    return a.coords.latitude + "|" + a.coords.longitude + "|" + (new Date).getTime() + "|"
}
function showOnlineOffline() {
    $("#loginForm\\:loginBtn").attr("type", "button");
    $("#loginForm\\:loginBtn").attr("onclick", "authenticateOff()");
    $("#inbox").attr("onclick", "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#inbox").removeAttr("href");
    $("#working").attr("onclick", "window.location.href \x3d '/mportal/offline/workingOff.jsf';");
    $("#working").removeAttr("href");
    $("#waiting").attr("onclick", "window.location.href \x3d '/mportal/offline/waitingOff.jsf';");
    $("#waiting").removeAttr("href");
    $("#closed").attr("onclick", "window.location.href \x3d '/mportal/offline/closedOff.jsf';");
    $("#closed").removeAttr("href");
    $("#self").attr("onclick", "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#self").removeAttr("href");
    $("#pmview").attr("onclick", "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#pmview").removeAttr("href");
    $("#engineers").attr("onclick", "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#engineers").removeAttr("href");
    $("#vehicles").attr("onclick",
        "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#vehicles").removeAttr("href");
    $("div").each(function (a) {
        a = $(this);
        var c = a.attr("onclick");
        void 0 !== c && (c = c.split("id\x3d"), a.attr("storeid") || void 0 === c[1] || (c = c[1].split("'"), a.attr("storeid", c[0])))
    });
    $("div").each(function (a) {
        a = $(this).attr("storeid");
        void 0 !== a && $(this).attr("onclick", "redirectToDetailAndStoreId('" + a + "')")
    });
    $("div").each(function (a) {
        void 0 !== $(this).attr("storeid") && $(this).find("a").attr("href", "/mportal/offline/wodetailOff.jsf")
    });
    $("#settingsForm\\:timezoneBtn").attr("onclick", "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#settingsForm\\:standBy").attr("onclick", "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#settingsForm\\:standBy").removeAttr("href");
    $("#settingsForm\\:spareParts").attr("onclick", "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#settingsForm\\:spareParts").removeAttr("href");
    $("#settingsForm\\:startingPointBtn").attr("onclick", "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#settingsForm\\:startingPointBtn").attr("type", "button");
    $("#settingsForm\\:finishPointBtn").attr("onclick", "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#settingsForm\\:finishPointBtn").attr("type", "button");
    $("#settingsForm\\:back").attr("onclick", "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#settingsForm\\:back").removeAttr("href");
    $("#settingsForm\\:saveBtn").attr("onclick", "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#settingsForm\\:saveBtn").attr("type",
        "button");
    $("#settingsForm\\:timezoneBtn").attr("type", "button");
    $("#actionsForm\\:saveBtn").attr("onclick", "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#actionsForm\\:saveBtn").attr("type", "button");
    $("#actionsForm\\:back").attr("onclick", "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#actionsForm\\:back").removeAttr("href");
    $("#filtersForm\\:clear").attr("onclick", "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#filtersForm\\:clear").attr("type",
        "button");
    $("#filtersForm\\:filter").attr("onclick", "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#filtersForm\\:filter").attr("type", "button");
    $("#wodetailForm\\:editSite").attr("href", "/mportal/offline/wodetailOff.jsf");
    $("#wodetailForm\\:editSite").removeAttr("onclick");
    $("#acceptanceForm\\:btnBack").attr("href", "/mportal/offline/wodetailOff.jsf");
    $("#acceptanceForm\\:btnBackWi").attr("href", "/mportal/offline/inboxOff.jsf");
    $("#assignForm\\:btnBackWi").attr("href", "/mportal/offline/inboxOff.jsf");
    $("#assignForm\\:btnBackWo").attr("href", "/mportal/offline/wodetailOff.jsf");
    $("#infoForm\\:btnBack").attr("href", "/mportal/offline/wodetailOff.jsf");
    $("#alarmForm\\:btnBack").attr("href", "/mportal/offline/wodetailOff.jsf");
    $("#closeRequestForm\\:btnBack").attr("href", "/mportal/offline/wodetailOff.jsf");
    $("#geoFinishForm\\:btnBack").attr("href", "/mportal/offline/wodetailOff.jsf");
    $("#executionForm\\:btnBack").attr("href", "/mportal/offline/wodetailOff.jsf");
    $("#displacementForm\\:btnBack").attr("href",
        "/mportal/offline/wodetailOff.jsf");
    $("#interruptionForm\\:btnBack").attr("href", "/mportal/offline/wodetailOff.jsf");
    $("#materialsForm\\:btnBack").attr("href", "/mportal/offline/wodetailOff.jsf");
    $("#materialsForm\\:btnBack2").attr("href", "/mportal/offline/wodetailOff.jsf");
    $("#pendingForm\\:btnBack").attr("href", "/mportal/offline/wodetailOff.jsf");
    $("#siteForm\\:btnBack").attr("href", "/mportal/offline/wodetailOff.jsf");
    $("#standbyForm\\:btnBack").attr("href", "/mportal/offline/wodetailOff.jsf");
    $("#releaseStandbyForm\\:btnBack").attr("href",
        "/mportal/offline/wodetailOff.jsf");
    $("#geoStartForm\\:btnBack").attr("href", "/mportal/offline/wodetailOff.jsf");
    $("#checklistForm\\:backBtn").attr("href", "/mportal/offline/wodetailOff.jsf");
    $("#acceptanceForm\\:saveBtn").attr("onclick", "window.location.href \x3d '/mportal/offline/wodetailOff.jsf';");
    $("#acceptanceForm\\:saveBtn").attr("type", "button");
    $("#acceptanceForm\\:saveBtnWi").attr("onclick", "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#acceptanceForm\\:saveBtnWi").attr("type",
        "button");
    $("#assignForm\\:saveBtnWi").attr("onclick", "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#assignForm\\:saveBtnWi").attr("type", "button");
    $("#assignForm\\:saveBtnWo").attr("onclick", "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#assignForm\\:saveBtnWo").attr("type", "button");
    $("#infoForm\\:saveBtn").attr("onclick", "window.location.href \x3d '/mportal/offline/wodetailOff.jsf';");
    $("#infoForm\\:saveBtn").attr("type", "button");
    $("#alarmForm\\:saveBtn").attr("onclick",
        "window.location.href \x3d '/mportal/offline/wodetailOff.jsf';");
    $("#alarmForm\\:saveBtn").attr("type", "button");
    $("#closeRequestForm\\:saveBtn").attr("onclick", "window.location.href \x3d '/mportal/offline/wodetailOff.jsf';");
    $("#closeRequestForm\\:saveBtn").attr("type", "button");
    $("#geoFinishForm\\:saveBtn").attr("onclick", "window.location.href \x3d '/mportal/offline/wodetailOff.jsf';");
    $("#geoFinishForm\\:saveBtn").attr("type", "button");
    $("#executionForm\\:saveBtn").attr("onclick", "window.location.href \x3d '/mportal/offline/wodetailOff.jsf';");
    $("#executionForm\\:saveBtn").attr("type", "button");
    $("#displacementForm\\:saveBtn").attr("onclick", "window.location.href \x3d '/mportal/offline/wodetailOff.jsf';");
    $("#displacementForm\\:saveBtn").attr("type", "button");
    $("#interruptionForm\\:saveBtn").attr("onclick", "window.location.href \x3d '/mportal/offline/wodetailOff.jsf';");
    $("#interruptionForm\\:saveBtn").attr("type", "button");
    $("#materialsForm\\:saveBtn").attr("onclick", "window.location.href \x3d '/mportal/offline/wodetailOff.jsf';");
    $("#materialsForm\\:saveBtn").attr("type",
        "button");
    $("#pendingForm\\:saveBtn").attr("onclick", "window.location.href \x3d '/mportal/offline/wodetailOff.jsf';");
    $("#pendingForm\\:saveBtn").attr("type", "button");
    $("#siteForm\\:saveBtn").attr("onclick", "window.location.href \x3d '/mportal/offline/wodetailOff.jsf';");
    $("#siteForm\\:saveBtn").attr("type", "button");
    $("#standbyForm\\:saveBtn").attr("onclick", "window.location.href \x3d '/mportal/offline/wodetailOff.jsf';");
    $("#standbyForm\\:saveBtn").attr("type", "button");
    $("#releaseStandbyForm\\:saveBtn").attr("onclick",
        "window.location.href \x3d '/mportal/offline/wodetailOff.jsf';");
    $("#releaseStandbyForm\\:saveBtn").attr("type", "button");
    $("#geoStartForm\\:saveBtn").attr("onclick", "window.location.href \x3d '/mportal/offline/wodetailOff.jsf';");
    $("#geoStartForm\\:saveBtn").attr("type", "button");
    $("#checklistForm\\:saveBtn").attr("type", "button");
    $("#checklistForm\\:saveBtn").attr("onclick", "saveChecklistAndRedirect();");
    $("#checklistForm\\:saveDraftBtn").attr("type", "button");
    $("#checklistForm\\:saveDraftBtn").attr("onclick",
        "saveChecklistAndRedirect();");
    $("#checklistForm\\:clearBtn").attr("type", "button");
    $("#checklistForm\\:clearBtn").attr("onclick", "window.location.href \x3d '/mportal/offline/wodetailOff.jsf';");
    $("#checklistForm\\:saveBtnClear").attr("type", "button");
    $("#checklistForm\\:saveBtnClear").attr("onclick", "window.location.href \x3d '/mportal/offline/wodetailOff.jsf';");
    $("#checklistForm\\:backBtnClear").attr("type", "button");
    $("#checklistForm\\:backBtnClear").attr("onclick", "window.location.href \x3d '/mportal/offline/wodetailOff.jsf';");
    $("#dashboardMenu").attr("href", "/mportal/offline/inboxOff.jsf");
    $("#settingsMenu").attr("href", "/mportal/offline/inboxOff.jsf");
    $("#selfAssignmentMenu").attr("href", "/mportal/offline/inboxOff.jsf");
    $("#pmViewMenu").attr("href", "/mportal/offline/inboxOff.jsf");
    $("#offlineActionsMenu").attr("href", "/mportal/offline/inboxOff.jsf");
    $("#logoffA").attr("onclick", "window.location.href \x3d '/mportal/login.jsf';");
    $("a").each(function (a) {
        a = $(this);
        var c = a.attr("href");
        if (void 0 !== c) {
            var d = -1 < c.indexOf("/acceptance.");
            d && a.attr("id", "acceptanceBtn");
            if (d = -1 < c.indexOf("/acceptanceAll"))a.attr("id", "acceptanceBtnAll"), a.attr("href", "/mportal/offline/inboxOff.jsf");
            if (d = -1 < c.indexOf("/refuseAll"))a.attr("id", "refuseBtnAll"), a.attr("href", "/mportal/offline/inboxOff.jsf");
            (d = -1 < c.indexOf("/reject")) && a.attr("id", "refuseBtn");
            (d = -1 < c.indexOf("/execution.")) && a.attr("id", "executionBtn");
            if (d = -1 < c.indexOf("/executionAll"))a.attr("id", "executionBtnAll"), a.attr("href", "/mportal/offline/workingOff.jsf");
            (d = -1 < c.indexOf("/closerequest.")) &&
            a.attr("id", "closeRequestBtn");
            if (d = -1 < c.indexOf("/closerequestAll"))a.attr("id", "closeRequestBtnAll"), a.attr("href", "/mportal/offline/workingOff.jsf");
            (d = -1 < c.indexOf("/checklist")) && a.attr("id", "checkListBtn");
            (d = -1 < c.indexOf("/materials.jsf")) && a.attr("id", "materialsBtn");
            (d = -1 < c.indexOf("/materialsMissing.jsf")) && a.attr("id", "materialsMissBtn");
            (d = -1 < c.indexOf("/materialsAck.jsf")) && a.attr("id", "materialsAckBtn");
            (d = -1 < c.indexOf("/startDisplacement")) && a.attr("id", "startDisplacementBtn");
            (d = -1 <
                c.indexOf("/finalizeDisplacement")) && a.attr("id", "finalizeDisplacementBtn");
            (d = -1 < c.indexOf("/interruption")) && a.attr("id", "interruptionBtn");
            (d = -1 < c.indexOf("/interruptionRelease")) && a.attr("id", "interruptionReleaseBtn");
            (d = -1 < c.indexOf("/pending")) && a.attr("id", "pendingBtn");
            (d = -1 < c.indexOf("/pendingWi")) && a.attr("id", "pendingWiBtn");
            (d = -1 < c.indexOf("/pendingRelease")) && a.attr("id", "pendingReleaseBtn");
            (d = -1 < c.indexOf("/pendingReleaseWi")) && a.attr("id", "pendingReleaseWiBtn");
            (d = -1 < c.indexOf("/woDirections")) &&
            a.attr("id", "directionsBtn");
            (d = -1 < c.indexOf("/checkAlarm")) && a.attr("id", "checkAlarmBtn");
            (d = -1 < c.indexOf("/attachment")) && a.attr("id", "attachmentsBtn");
            (d = -1 < c.indexOf("/additionalInfo")) && a.attr("id", "additionalInfoBtn");
            (d = -1 < c.indexOf("/assign.")) && a.attr("id", "assignBtn");
            (d = -1 < c.indexOf("/assignAll.")) && a.attr("id", "assignAllBtn");
            (d = -1 < c.indexOf("/unassign.")) && a.attr("id", "unassignBtn")
        }
    });
    var a = jQuery.parseJSON(window.localStorage.getItem("id"));
    $("#acceptanceBtn").attr("onclick", "redirectToDetailAndStoreId('" +
        a + "')");
    $("#acceptanceBtn").removeAttr("href");
    $("#unassignBtn").attr("onclick", "redirectToDetailAndStoreId('" + a + "')");
    $("#unassignBtn").removeAttr("href");
    $("#unassignBtn").attr("onclick", "redirectToDetailAndStoreId('" + a + "')");
    $("#unassignBtn").removeAttr("href");
    $("#assignBtn").attr("onclick", "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#assignBtn").removeAttr("href");
    $("#btnSelf").attr("onclick", "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#btnSelf").removeAttr("href");
    $("#assignAllBtn").attr("onclick", "window.location.href \x3d '/mportal/offline/inboxOff.jsf';");
    $("#assignAllBtn").removeAttr("href");
    $("#refuseBtn").attr("onclick", "redirectToDetailAndStoreId('" + a + "')");
    $("#refuseBtn").removeAttr("href");
    $("#executionBtn").attr("onclick", "redirectToDetailAndStoreId('" + a + "')");
    $("#executionBtn").removeAttr("href");
    $("#closeRequestBtn").attr("onclick", "redirectToDetailAndStoreId('" + a + "')");
    $("#closeRequestBtn").removeAttr("href");
    $("#checkListBtn").attr("onclick",
        "redirectToDetailAndStoreId('" + a + "')");
    $("#checkListBtn").removeAttr("href");
    $("#materialsBtn").attr("onclick", "redirectToDetailAndStoreId('" + a + "')");
    $("#materialsBtn").removeAttr("href");
    $("#materialsMissBtn").attr("onclick", "redirectToDetailAndStoreId('" + a + "')");
    $("#materialsMissBtn").removeAttr("href");
    $("#materialsAckBtn").attr("onclick", "redirectToDetailAndStoreId('" + a + "')");
    $("#materialsAckBtn").removeAttr("href");
    $("#startDisplacementBtn").attr("onclick", "redirectToDetailAndStoreId('" + a + "')");
    $("#startDisplacementBtn").removeAttr("href");
    $("#finalizeDisplacementBtn").attr("onclick", "redirectToDetailAndStoreId('" + a + "')");
    $("#finalizeDisplacementBtn").removeAttr("href");
    $("#interruptionBtn").attr("onclick", "redirectToDetailAndStoreId('" + a + "')");
    $("#interruptionBtn").removeAttr("href");
    $("#interruptionReleaseBtn").attr("onclick", "redirectToDetailAndStoreId('" + a + "')");
    $("#interruptionReleaseBtn").removeAttr("href");
    $("#pendingReleaseWiBtn").attr("onclick", "redirectToDetailAndStoreId('" + a +
        "')");
    $("#pendingReleaseWiBtn").removeAttr("href");
    $("#directionsBtn").attr("onclick", "redirectToDetailAndStoreId('" + a + "')");
    $("#directionsBtn").removeAttr("href");
    $("#checkAlarmBtn").attr("onclick", "redirectToDetailAndStoreId('" + a + "')");
    $("#checkAlarmBtn").removeAttr("href");
    $("#additionalInfoBtn").attr("onclick", "redirectToDetailAndStoreId('" + a + "')");
    $("#additionalInfoBtn").removeAttr("href");
    $("#locationsBtn").attr("href", "/mportal/offline/inboxOff.jsf");
    $("#locationsVehBtn").attr("href", "/mportal/offline/inboxOff.jsf");
    $("#orderMap").attr("href", "/mportal/offline/inboxOff.jsf");
    $("#vehicleMap").attr("href", "/mportal/offline/inboxOff.jsf")
}
var dbGlobals = {
    db: null,
    description: "This database is used to store files locally.",
    name: "FilesMP",
    version: 1,
    storeName: "filemp",
    message: "",
    empty: !0,
    file: null,
    fileName: null,
    fileSize: null,
    user: null,
    allFiles: !1,
    allFilesCounter: 0,
    allFilesCounterTotal: 0,
    allFilesCounterTotalCompleted: !1
};
function startDB() {
    requiredFeaturesSupported() && openDB()
}
function requiredFeaturesSupported() {
    if (!window.indexedDB)if (window.mozIndexedDB)window.indexedDB = window.mozIndexedDB; else if (window.webkitIndexedDB)window.indexedDB = webkitIndexedDB, IDBCursor = webkitIDBCursor, IDBDatabaseException = webkitIDBDatabaseException, IDBRequest = webkitIDBRequest, IDBKeyRange = webkitIDBKeyRange, IDBTransaction = webkitIDBTransaction; else {
        alert(getResource(!1, "indexeddbNotSup"));
        for (var a = document.querySelectorAll("input[type\x3dfile]"), b = 0; b < a.length; ++b) {
            a[b].className = "showLess";
            var c = a[b].getAttribute("itemid");
            document.getElementById("supported" + c).className = "showMore"
        }
        return !1
    }
    return window.indexedDB.deleteDatabase ? !0 : (alert(getResource(!1, "indexeddbNotSup")), !1)
}
function displayMessage(a) {
    console.log(a)
}
function openDB() {
    console.log("openDB()");
    displayMessage("\x3cp\x3eYour request has been queued.\x3c/p\x3e");
    if (window.indexedDB.open)try {
        var a = window.indexedDB.open(dbGlobals.name, dbGlobals.version);
        a.onerror = function (a) {
            console.log("openRequest.onerror fired in openDB() - error: " + (a.target.error ? a.target.error : a.target.errorCode))
        };
        a.onblocked = openDB_onblocked;
        a.onupgradeneeded = openDB_onupgradeneeded;
        a.onsuccess = openDB_onsuccess
    } catch (b) {
        console.log("window.indexedDB.open exception in openDB() - " +
            b.message)
    } else console.log("window.indexedDB.open is null in openDB()")
}
function openDB_onblocked(a) {
    console.log("openDB_onupgradeneeded()");
    a = "\x3cp\x3eThe database is blocked - error code: " + (a.target.error ? a.target.error : a.target.errorCode) + "\x3c/p\x3e";
    displayMessage(a + "\x3c/p\x3eIf this page is open in other browser windows, close these windows.\x3c/p\x3e")
}
function openDB_onupgradeneeded(a) {
    console.log("openDB_onupgradeneeded()");
    displayMessage("\x3cp\x3eYour request has been queued.\x3c/p\x3e");
    if (a = dbGlobals.db = a.target.result) {
        try {
            var b = a.createObjectStore(dbGlobals.storeName, {keyPath: "ID", autoIncrement: !0});
            b.createIndex("fileName", "fileName", {unique: !1});
            b.createIndex("fileSize", "fileSize", {unique: !1});
            b.createIndex("fileDate", "fileDate", {unique: !1});
            b.createIndex("fileData", "fileData", {unique: !1});
            b.createIndex("itemId", "itemId", {unique: !1});
            b.createIndex("responseId", "responseId", {unique: !1});
            b.createIndex("checklistName", "checklistName", {unique: !1});
            b.createIndex("activationId", "activationId", {unique: !1})
        } catch (c) {
            console.log("Exception in openDB_onupgradeneeded() - " + c.message);
            return
        }
        dbGlobals.message = "\x3cp\x3eThe database has been created.\x3c/p\x3e"
    } else console.log("db (i.e., evt.target.result) is null in openDB_onupgradeneeded()")
}
function openDB_onsuccess(a) {
    console.log("openDB_onsuccess()");
    displayMessage("\x3cp\x3eYour request has been queued.\x3c/p\x3e");
    (dbGlobals.db = a.target.result) ? (dbGlobals.message += "\x3cp\x3eThe database has been opened.\x3c/p\x3e", displayMessage(dbGlobals.message), dbGlobals.message = "", -1 < window.location.href.indexOf("offlineActions") && displayDB()) : console.log("db (i.e., evt.target.result) is null in openDB_onsuccess()")
}
function handleFileOffline(a, b, c) {
    "1" === c ? (dbGlobals.file = $("#response" + b)[0].files[0], handleFileSelection(a, b)) : "2" === c && (c = findItem(parseInt(b)), null !== c.uploadedData.id && "" !== c.uploadedData.id ? (group = document.getElementById("form-" + b), group.className = "showMore", group = document.getElementById("form-remove-" + b), null !== group && (group.className = "showLess"), group = document.getElementById("div-success-" + b), null !== group && (group.className = "showLess"), group = document.getElementById("div-success-" + b), null !==
    group && (group.className = "showLess"), closeUploadDiv(b), delete c.uploadedData, storeChecklistOnUpload()) : deleteFileDb(a, b))
}
function handleFileOfflineCompress(a, b, c) {
    dbGlobals.file = c;
    handleFileSelection(a, b)
}
function handleFileSelection(a, b) {
    var c;
    c = jQuery.parseJSON(window.localStorage.getItem("act" + getId()));
    var d = dbGlobals.file;
    if (d) {
        var e = dbGlobals.db;
        if (e) {
            $("#form-" + b).addClass("hide-item");
            group = document.getElementById("div-uploading-" + b);
            group.className = "showMore";
            group = document.getElementById("div-nofile-" + b);
            group.className = "showLess";
            try {
                var h = d.name, m = d.size, k = "" + d.lastModifiedDate + "", f = new FileReader;
                f.onload = function (d) {
                    d = {
                        name: h,
                        size: m,
                        date: k,
                        data: d.target.result,
                        itemId: b,
                        responseId: a,
                        checklistName: c.checkListName,
                        activationId: getId()
                    };
                    try {
                        var f = e.transaction(dbGlobals.storeName, "readwrite")
                    } catch (q) {
                        console.log("db.transaction exception in handleFileSelection() - " + q.message);
                        return
                    }
                    f.onerror = function (a) {
                        console.log("transaction.onerror fired in handleFileSelection() - error code: " + (a.target.error ? a.target.error : a.target.errorCode))
                    };
                    f.onabort = function () {
                        console.log("transaction.onabort fired in handleFileSelection()")
                    };
                    f.oncomplete = function () {
                        console.log("transaction.oncomplete fired in handleFileSelection()");
                        findItem(parseInt(b)).uploadedData = {fileName: h, summary: "WI " + b, fileSize: m, id: null};
                        storeChecklistOnUpload();
                        startFileCounter()
                    };
                    f = f.objectStore(dbGlobals.storeName).add(d);
                    f.onsuccess = function () {
                        dbGlobals.empty = !1
                    };
                    f.onerror = function (a) {
                        console.log("putRequest.onerror fired in handleFileSelection() - error code: " + (a.target.error ? a.target.error : a.target.errorCode))
                    }
                };
                f.readAsDataURL(d)
            } catch (q) {
                console.log("Transaction and/or put() exception in handleFileSelection() - " + q.message);
                return
            }
            group = document.getElementById("div-uploading-" +
                b);
            group.className = "showLess";
            group = document.getElementById("div-success-" + b);
            group.className = "showMore";
            group = document.getElementById("div-nofile-" + b);
            group.className = "showLess";
            alert(getResource(!1, "fileStored"));
            appendFileName(b)
        } else console.log("db (i.e., dbGlobals.db) is null in handleFileSelection()")
    } else displayMessage("\x3cp\x3eAt least one selected file is invalid - do not select any folders.\x3c/p\x3e\x3cp\x3ePlease reselect and try again.\x3c/p\x3e")
}
function deleteFileDb(a, b) {
    var c = "", d = dbGlobals.db;
    if (d) {
        try {
            var e = d.transaction(dbGlobals.storeName, "readwrite")
        } catch (h) {
            console.log("db.transaction() exception in displayDB() - " + h.message);
            return
        }
        try {
            var m = e.objectStore(dbGlobals.storeName);
            try {
                var k = m.openCursor();
                k.onerror = function (a) {
                    console.log("cursorRequest.onerror fired in displayDB() - error code: " + (a.target.error ? a.target.error : a.target.errorCode))
                };
                var f = "\x3cp\x3e\x3cstrong\x3eFile(s) in database:\x3c/strong\x3e\x3c/p\x3e\x3cul\x3e";
                k.onsuccess = function (d) {
                    console.log("cursorRequest.onsuccess fired in displayDB()");
                    if (d = d.target.result)e.objectStore(dbGlobals.storeName).openCursor().onsuccess = function (a) {
                    }, d.value.itemId === b && d.value.responseId === a && (c = d.key), d.continue();
                    "" !== c && null !== c ? e.objectStore(dbGlobals.storeName).delete(c).onsuccess = function (a) {
                        group = document.getElementById("form-" + b);
                        group.className = "showMore";
                        group = document.getElementById("form-remove-" + b);
                        null !== group && (group.className = "showLess");
                        group = document.getElementById("div-success-" +
                            b);
                        null !== group && (group.className = "showLess");
                        group = document.getElementById("div-success-" + b);
                        null !== group && (group.className = "showLess");
                        closeUploadDiv(b);
                        delete findItem(parseInt(b)).uploadedData;
                        storeChecklistOnUpload();
                        startFileCounter()
                    } : (f += "\x3c/ul\x3e", displayMessage(f));
                    dbGlobals.empty && displayMessage("\x3cp\x3eThe database is empty \x26ndash; there's nothing to display.\x3c/p\x3e")
                }
            } catch (q) {
                console.log("Inner try exception in displayDB() - " + q.message)
            }
        } catch (n) {
            console.log("Outer try exception in displayDB() - " +
                n.message)
        }
    } else displayMessage("\x3cp\x3eThere's no database to display.\x3c/p\x3e"), console.log("db (i.e., dbGlobals.db) is null in displayDB()")
}
function deleteFileAction(a, b) {
    var c = "", d = dbGlobals.db;
    if (d) {
        try {
            var e = d.transaction(dbGlobals.storeName, "readwrite")
        } catch (h) {
            console.log("db.transaction() exception in displayDB() - " + h.message);
            return
        }
        try {
            var m = e.objectStore(dbGlobals.storeName);
            try {
                var k = m.openCursor();
                k.onerror = function (a) {
                    console.log("cursorRequest.onerror fired in displayDB() - error code: " + (a.target.error ? a.target.error : a.target.errorCode))
                };
                var f = "\x3cp\x3e\x3cstrong\x3eFile(s) in database:\x3c/strong\x3e\x3c/p\x3e\x3cul\x3e";
                k.onsuccess = function (d) {
                    console.log("cursorRequest.onsuccess fired in displayDB()");
                    if (d = d.target.result)e.objectStore(dbGlobals.storeName).openCursor().onsuccess = function (a) {
                    }, d.value.itemId === b && d.value.responseId === a && (c = d.key), d.continue();
                    "" !== c && null !== c ? e.objectStore(dbGlobals.storeName).delete(c).onsuccess = function (a) {
                        reload()
                    } : (f += "\x3c/ul\x3e", displayMessage(f));
                    dbGlobals.empty && displayMessage("\x3cp\x3eThe database is empty \x26ndash; there's nothing to display.\x3c/p\x3e")
                }
            } catch (q) {
                console.log("Inner try exception in displayDB() - " +
                    q.message)
            }
        } catch (n) {
            console.log("Outer try exception in displayDB() - " + n.message)
        }
    } else displayMessage("\x3cp\x3eThere's no database to display.\x3c/p\x3e"), console.log("db (i.e., dbGlobals.db) is null in displayDB()")
}
function populateDB() {
    console.log("populateDB()");
    dbGlobals.db ? (document.getElementById("fileSelector").style.display = "block", displayMessage("\x3cp\x3eUsing the below \x3cstrong\x3eBrowse\x3c/strong\x3e button, select one or more files to store in the database.\x3c/p\x3e\x3cp\x3eThen, click the \x3cstrong\x3eDisplay DB\x3c/strong\x3e button to display what's currently in the database.\x3c/p\x3e")) : (displayMessage("\x3cp\x3eThe database hasn't been opened/created yet.\x3c/p\x3e"), console.log("db (i.e., dbGlobals.db) is null in populateDB()"))
}
function displayDB() {
    console.log("displayDB()");
    var a = dbGlobals.db;
    dbGlobals.allFilesCounterTotal = 0;
    if (a) {
        try {
            var b = a.transaction(dbGlobals.storeName, IDBTransaction.READ_ONLY ? IDBTransaction.READ_ONLY : "readonly")
        } catch (c) {
            console.log("db.transaction() exception in displayDB() - " + c.message);
            return
        }
        try {
            var d = b.objectStore(dbGlobals.storeName);
            try {
                var e = d.openCursor();
                e.onerror = function (a) {
                    console.log("cursorRequest.onerror fired in displayDB() - error code: " + (a.target.error ? a.target.error : a.target.errorCode))
                };
                e.onsuccess = function (a) {
                    console.log("cursorRequest.onsuccess fired in displayDB()");
                    var c = $("#files");
                    if (a = a.target.result) {
                        document.getElementById("files");
                        b.objectStore(dbGlobals.storeName).openCursor().onsuccess = function (a) {
                        };
                        dbGlobals.empty = !1;
                        var d = jQuery("\x3cform\x3e").attr({
                                id: "form-" + a.value.itemId,
                                style: "border-bottom: 1px solid #ccc; margin-bottom: 10px; margin-left: 0px !important",
                                enctype: "multipart/form-data"
                            }), h = jQuery("\x3clabel\x3e", {
                                text: getResource(!1, "fileNameTitle") + ": ",
                                style: "margin-bottom: 0px"
                            }),
                            m = jQuery("\x3cspan\x3e", {text: a.value.name});
                        h.append(m);
                        d.append(h);
                        h = jQuery("\x3clabel\x3e", {
                            text: getResource(!1, "fileSizeTitle") + ": ",
                            style: "margin-bottom: 0px"
                        });
                        m = jQuery("\x3cspan\x3e", {text: a.value.size + " bytes"});
                        h.append(m);
                        d.append(h);
                        h = jQuery("\x3clabel\x3e", {
                            text: getResource(!1, "checklistTitle") + ": ",
                            style: "margin-bottom: 0px"
                        });
                        m = jQuery("\x3cspan\x3e", {text: a.value.checklistName});
                        h.append(m);
                        d.append(h);
                        var h = jQuery("\x3cinput\x3e").attr({
                                id: "btn-send-" + a.value.itemId,
                                type: "button",
                                value: getResource(!1,
                                    "uploadBtn"),
                                class: "btn btn_save",
                                style: "margin-top: 2px !important; margin-bottom: 2px;",
                                data: "send",
                                onclick: "sendFileAction('" + a.value.responseId + "','" + a.value.itemId + "','" + a.value.data + "','" + a.value.name + "','" + a.value.activationId + "')"
                            }), m = jQuery("\x3cinput\x3e").attr({
                                id: "btn-send-" + a.value.itemId,
                                type: "button",
                                value: getResource(!1, "removeBtn"),
                                class: "btn btn_remove",
                                style: "margin-top: 2px !important; margin-bottom: 2px;",
                                onclick: "deleteFileAction('" + a.value.responseId + "','" + a.value.itemId + "')"
                            }),
                            e = jQuery("\x3cdiv\x3e").attr({
                                id: "div-progress-" + a.value.itemId,
                                class: "progress",
                                style: "display: none"
                            }), r = jQuery("\x3cdiv\x3e").attr({
                                id: "div-bar-" + a.value.itemId,
                                class: "bar"
                            }), t = jQuery("\x3cdiv\x3e").attr({id: "div-percent-" + a.value.itemId, class: "percent"});
                        e.append(r);
                        e.append(t);
                        d.append(h);
                        d.append(m);
                        d.append(e);
                        d.append("\x3cbr /\x3e");
                        d.append("\x3cbr /\x3e");
                        c.append(d);
                        dbGlobals.allFilesCounterTotal += 1;
                        $("#countFiles").html(dbGlobals.allFilesCounterTotal);
                        a.continue()
                    }
                    dbGlobals.empty && displayMessage("\x3cp\x3eThe database is empty \x26ndash; there's nothing to display.\x3c/p\x3e")
                }
            } catch (h) {
                console.log("Inner try exception in displayDB() - " +
                    h.message)
            }
            0 < dbGlobals.allFilesCounterTotal ? $("#actionsForm\\:saveBtnAll").attr("style", "display:none") : $("#actionsForm\\:saveBtn").attr("style", "display:none")
        } catch (m) {
            console.log("Outer try exception in displayDB() - " + m.message)
        }
    } else displayMessage("\x3cp\x3eThere's no database to display.\x3c/p\x3e"), console.log("db (i.e., dbGlobals.db) is null in displayDB()")
}
function deleteDB() {
    console.log("deletedDB()");
    displayMessage("\x3cp\x3eYour request has been queued.\x3c/p\x3e");
    try {
        dbGlobals.db && dbGlobals.db.close();
        var a = window.indexedDB.deleteDatabase(dbGlobals.name);
        a.onerror = function (a) {
            console.log("deleteRequest.onerror fired in deleteDB() - " + (a.target.error ? a.target.error : a.target.errorCode))
        };
        a.onsuccess = function () {
            dbGlobals.db = null;
            dbGlobals.empty = !0;
            dbGlobals.message = "";
            displayMessage("\x3cp\x3eThe database has been deleted.\x3c/p\x3e")
        }
    } catch (b) {
        console.log("Exception in deleteDB() - " +
            b.message)
    }
}
function sendFileAction(a, b, c, d, e) {
    dbGlobals.allFiles ? ($("#div-progress-general").removeAttr("style"), $("#div-percent-general").html("0%")) : ($("#div-progress-" + b).removeAttr("style"), $("#div-percent-" + b).html("0%"));
    var h = dataURItoBlob(c);
    c = new FormData;
    c.append("canvasImage", h, d);
    d = new XMLHttpRequest;
    d.upload.addEventListener("progress", function (a) {
        if (dbGlobals.allFiles) {
            var c = $("#div-bar-general"), d = $("#div-percent-general"), h = getResource(!1, "actionsOfflineUploading") + " " + dbGlobals.allFilesCounter + " " +
                getResource(!1, "actionsOfflineUploadingFrom") + " " + dbGlobals.allFilesCounterTotal;
            dbGlobals.allFilesCounter === dbGlobals.allFilesCounterTotal && (dbGlobals.allFilesCounterTotalCompleted = !0);
            $("#span-progress").html(h);
            dbGlobals.allFilesCounter += 1
        } else c = $("#div-bar-" + b), d = $("#div-percent-" + b);
        a.lengthComputable ? (a = Math.round(100 * a.loaded / a.total), h = a + "%", c.width(h), d.html(h), 100 <= a && dbGlobals.allFiles && $("#form-" + b).attr("style", "display:none")) : dbGlobals.allFiles ? document.getElementById("div-percent-general").innerHTML =
            "unable to compute" : document.getElementById("div-percent-" + b).innerHTML = "unable to compute"
    }, !1);
    d.addEventListener("load", function (c) {
        c = c.target.responseText;
        null !== c && "" !== c && 0 < c && (dbGlobals.allFiles ? $("#span-progress").html(getResource(!1, "actionsOfflineUploadingCompleted")) : alert(getResource(!1, "uploadSuccess")), updateResponseUpload(a, b, e, c), deleteFileAction(a, b), dbGlobals.allFiles ? dbGlobals.allFilesCounterTotalCompleted && location.reload(!0) : location.reload(!0))
    }, !1);
    d.addEventListener("error",
        function (a) {
            alert("There was an error attempting to upload the file.")
        }, !1);
    d.addEventListener("abort", function (a) {
        alert("The upload has been canceled by the user or the browser dropped the connection.")
    }, !1);
    d.open("POST", "/mportal/upload?responseId\x3d" + a + "\x26itemId\x3d" + b + "\x26type\x3d1");
    d.send(c)
}
function saveAll(a) {
    if ("success" === a.status) {
        dbGlobals.allFiles = !0;
        a = jQuery("\x3cdiv\x3e").attr({id: "div-progress-general", class: "progress", style: "display: block"});
        var b = jQuery("\x3cdiv\x3e").attr({
            id: "div-bar-general",
            class: "bar"
        }), c = jQuery("\x3cdiv\x3e").attr({id: "div-percent-general", class: "percent"});
        a.append(b);
        a.append(c);
        b = $("#generalProgress");
        dbGlobals.allFilesCounter = 0;
        b.append(a);
        $('input[data\x3d"send"]').each(function () {
            $(this).click()
        })
    }
}
function updateResponseUpload(a, b, c, d) {
    var e = jQuery.parseJSON(window.localStorage.getItem("clDraft_" + dbGlobals.user));
    if (null !== e)for (var h = 0; h < e.length; h++)if (e[h].id === parseInt(c)) {
        var m = jQuery.parseJSON(e[h].checklist);
        for (a = 0; a < m.groups.length; a++)for (var k = m.groups[a], f = 0; f < k.items.length; f++) {
            var q = k.items[f];
            q.copyId === parseInt(b) && (m.groups[a].items[f].uploadedData.id = d, e[h].checklist = JSON.stringify(m), q = JSON.stringify(e), window.localStorage.setItem("clDraft_" + dbGlobals.user, q))
        }
    }
    e = jQuery.parseJSON(window.localStorage.getItem("clSave_" +
        dbGlobals.user));
    if (null !== e)for (h = 0; h < e.length; h++)if (e[h].id === parseInt(c))for (m = jQuery.parseJSON(e[h].checklist), a = 0; a < m.groups.length; a++)for (k = m.groups[a], f = 0; f < k.items.length; f++)q = k.items[f], q.copyId === parseInt(b) && (m.groups[a].items[f].uploadedData.id = d, e[h].checklist = JSON.stringify(m), q = JSON.stringify(e), window.localStorage.setItem("clDraft_" + dbGlobals.user, q));
    e = jQuery.parseJSON(window.localStorage.getItem(c + "rp"));
    if (null !== e)for (a = 0; a < e.groups.length; a++)for (k = e.groups[a], f = 0; f < k.items.length; f++)q =
        k.items[f], q.copyId === parseInt(b) && (e.groups[a].items[f].uploadedData.id = d, q = JSON.stringify(e), window.localStorage.setItem(c + "rp", q))
}
function setUser(a) {
    dbGlobals.user = a
}
function dataURItoBlob(a) {
    var b;
    b = 0 <= a.split(",")[0].indexOf("base64") ? atob(a.split(",")[1]) : unescape(a.split(",")[1]);
    a = a.split(",")[0].split(":")[1].split(";")[0];
    for (var c = new Uint8Array(b.length), d = 0; d < b.length; d++)c[d] = b.charCodeAt(d);
    return new Blob([c], {type: a})
}
function reload() {
    window.location.reload(!0)
}
$currentCheckList = "";
$closedActivation = !1;
$responseId = 0;
$uploadFileLabel = "Select";
$deleteFileLabel = $downloadFileLabel = $activationId = $checklistPanel = "";
$fileUploadLimit = $imageCompressionRatio = 0;
$isIOS8 = $checklistOffline = !1;
$invalidInputType = $validationMessage = "";
var headers = [], divs = [], headerCountMulti = 0, isTableMultiHeader = !1, headerCount = 0, cells = [], cellCount = 0;
(function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
})(function (a) {
    function b(b, d) {
        var k, f, e, n = b.nodeName.toLowerCase();
        return "area" === n ? (k = b.parentNode, f = k.name, b.href && f && "map" === k.nodeName.toLowerCase() ? (e = a("img[usemap\x3d'#" + f + "']")[0], !!e && c(e)) : !1) : (/^(input|select|textarea|button|object)$/.test(n) ? !b.disabled : "a" === n ? b.href || d : d) && c(b)
    }

    function c(b) {
        return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function () {
                return "hidden" === a.css(this, "visibility")
            }).length
    }

    a.ui = a.ui || {};
    a.extend(a.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    a.fn.extend({
        scrollParent: function (b) {
            var c = this.css("position"), d = "absolute" === c, f = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
            b = this.parents().filter(function () {
                var b = a(this);
                return d && "static" === b.css("position") ? !1 : f.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
            }).eq(0);
            return "fixed" !==
            c && b.length ? b : a(this[0].ownerDocument || document)
        }, uniqueId: function () {
            var a = 0;
            return function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++a)
                })
            }
        }(), removeUniqueId: function () {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
            })
        }
    });
    a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function (b) {
            return function (c) {
                return !!a.data(c, b)
            }
        }) : function (b, c, d) {
            return !!a.data(b, d[3])
        }, focusable: function (c) {
            return b(c, !isNaN(a.attr(c, "tabindex")))
        },
        tabbable: function (c) {
            var d = a.attr(c, "tabindex"), k = isNaN(d);
            return (k || 0 <= d) && b(c, !k)
        }
    });
    a("\x3ca\x3e").outerWidth(1).jquery || a.each(["Width", "Height"], function (b, c) {
        function d(b, c, h, m) {
            return a.each(f, function () {
                c -= parseFloat(a.css(b, "padding" + this)) || 0;
                h && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0);
                m && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
            }), c
        }

        var f = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"], e = c.toLowerCase(), n = {
            innerWidth: a.fn.innerWidth, innerHeight: a.fn.innerHeight, outerWidth: a.fn.outerWidth,
            outerHeight: a.fn.outerHeight
        };
        a.fn["inner" + c] = function (b) {
            return void 0 === b ? n["inner" + c].call(this) : this.each(function () {
                a(this).css(e, d(this, b) + "px")
            })
        };
        a.fn["outer" + c] = function (b, h) {
            return "number" != typeof b ? n["outer" + c].call(this, b) : this.each(function () {
                a(this).css(e, d(this, b, !0, h) + "px")
            })
        }
    });
    a.fn.addBack || (a.fn.addBack = function (a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    });
    a("\x3ca\x3e").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function (b) {
        return function (c) {
            return arguments.length ?
                b.call(this, a.camelCase(c)) : b.call(this)
        }
    }(a.fn.removeData));
    a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    a.fn.extend({
        focus: function (b) {
            return function (c, d) {
                return "number" == typeof c ? this.each(function () {
                    var b = this;
                    setTimeout(function () {
                        a(b).focus();
                        d && d.call(b)
                    }, c)
                }) : b.apply(this, arguments)
            }
        }(a.fn.focus), disableSelection: function () {
            var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function () {
                return this.bind(a + ".ui-disableSelection", function (a) {
                    a.preventDefault()
                })
            }
        }(),
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }, zIndex: function (b) {
            if (void 0 !== b)return this.css("zIndex", b);
            if (this.length) {
                var c, d;
                for (b = a(this[0]); b.length && b[0] !== document;) {
                    if (c = b.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(b.css("zIndex"), 10), !isNaN(d) && 0 !== d))return d;
                    b = b.parent()
                }
            }
            return 0
        }
    });
    a.ui.plugin = {
        add: function (b, c, d) {
            var f;
            b = a.ui[b].prototype;
            for (f in d)b.plugins[f] = b.plugins[f] || [], b.plugins[f].push([c, d[f]])
        }, call: function (a,
                           b, c, d) {
            if ((b = a.plugins[b]) && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))for (d = 0; b.length > d; d++)a.options[b[d][0]] && b[d][1].apply(a.element, c)
        }
    };
    var d = 0, e = Array.prototype.slice;
    a.cleanData = function (b) {
        return function (c) {
            var d, f, e;
            for (e = 0; null != (f = c[e]); e++)try {
                (d = a._data(f, "events")) && d.remove && a(f).triggerHandler("remove")
            } catch (n) {
            }
            b(c)
        }
    }(a.cleanData);
    a.widget = function (b, c, d) {
        var f, e, n, l, p = {}, r = b.split(".")[0];
        return b = b.split(".")[1], f = r + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][f.toLowerCase()] =
            function (b) {
                return !!a.data(b, f)
            }, a[r] = a[r] || {}, e = a[r][b], n = a[r][b] = function (a, b) {
            return this._createWidget ? (arguments.length && this._createWidget(a, b), void 0) : new n(a, b)
        }, a.extend(n, e, {
            version: d.version,
            _proto: a.extend({}, d),
            _childConstructors: []
        }), l = new c, l.options = a.widget.extend({}, l.options), a.each(d, function (b, d) {
            return a.isFunction(d) ? (p[b] = function () {
                var a = function () {
                    return c.prototype[b].apply(this, arguments)
                }, h = function (a) {
                    return c.prototype[b].apply(this, a)
                };
                return function () {
                    var b, c = this._super,
                        f = this._superApply;
                    return this._super = a, this._superApply = h, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
                }
            }(), void 0) : (p[b] = d, void 0)
        }), n.prototype = a.widget.extend(l, {widgetEventPrefix: e ? l.widgetEventPrefix || b : b}, p, {
            constructor: n,
            namespace: r,
            widgetName: b,
            widgetFullName: f
        }), e ? (a.each(e._childConstructors, function (b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, n, c._proto)
        }), delete e._childConstructors) : c._childConstructors.push(n), a.widget.bridge(b, n), n
    };
    a.widget.extend =
        function (b) {
            for (var c, d, f = e.call(arguments, 1), q = 0, n = f.length; n > q; q++)for (c in f[q])d = f[q][c], f[q].hasOwnProperty(c) && void 0 !== d && (b[c] = a.isPlainObject(d) ? a.isPlainObject(b[c]) ? a.widget.extend({}, b[c], d) : a.widget.extend({}, d) : d);
            return b
        };
    a.widget.bridge = function (b, c) {
        var d = c.prototype.widgetFullName || b;
        a.fn[b] = function (f) {
            var q = "string" == typeof f, n = e.call(arguments, 1), l = this;
            return q ? this.each(function () {
                var c, e = a.data(this, d);
                return "instance" === f ? (l = e, !1) : e ? a.isFunction(e[f]) && "_" !== f.charAt(0) ?
                    (c = e[f].apply(e, n), c !== e && void 0 !== c ? (l = c && c.jquery ? l.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + f + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'")
            }) : (n.length && (f = a.widget.extend.apply(null, [f].concat(n))), this.each(function () {
                var b = a.data(this, d);
                b ? (b.option(f || {}), b._init && b._init()) : a.data(this, d, new c(f, this))
            })), l
        }
    };
    a.Widget = function () {
    };
    a.Widget._childConstructors = [];
    a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "\x3cdiv\x3e",
        options: {disabled: !1, create: null},
        _createWidget: function (b, c) {
            c = a(c || this.defaultElement || this)[0];
            this.element = a(c);
            this.uuid = d++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = a();
            this.hoverable = a();
            this.focusable = a();
            c !== this && (a.data(c, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (a) {
                    a.target === c && this.destroy()
                }
            }), this.document = a(c.style ? c.ownerDocument : c.document || c), this.window = a(this.document[0].defaultView ||
                this.document[0].parentWindow));
            this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b);
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function () {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName +
                "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: a.noop,
        widget: function () {
            return this.element
        },
        option: function (b, c) {
            var d, f, e, n = b;
            if (0 === arguments.length)return a.widget.extend({}, this.options);
            if ("string" == typeof b)if (n = {}, d = b.split("."), b = d.shift(), d.length) {
                f = n[b] = a.widget.extend({}, this.options[b]);
                for (e = 0; d.length - 1 > e; e++)f[d[e]] = f[d[e]] || {}, f = f[d[e]];
                if (b = d.pop(), 1 === arguments.length)return void 0 ===
                f[b] ? null : f[b];
                f[b] = c
            } else {
                if (1 === arguments.length)return void 0 === this.options[b] ? null : this.options[b];
                n[b] = c
            }
            return this._setOptions(n), this
        },
        _setOptions: function (a) {
            for (var b in a)this._setOption(b, a[b]);
            return this
        },
        _setOption: function (a, b) {
            return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function () {
            return this._setOptions({disabled: !1})
        },
        disable: function () {
            return this._setOptions({disabled: !0})
        },
        _on: function (b, c, d) {
            var f, e = this;
            "boolean" != typeof b && (d = c, c = b, b = !1);
            d ? (c = f = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, f = this.widget());
            a.each(d, function (d, k) {
                function p() {
                    return b || !0 !== e.options.disabled && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof k ? e[k] : k).apply(e, arguments) : void 0
                }

                "string" != typeof k && (p.guid = k.guid = k.guid || p.guid || a.guid++);
                var r = d.match(/^([\w:-]*)\s*(.*)$/), t = r[1] + e.eventNamespace;
                (r =
                    r[2]) ? f.delegate(r, t, p) : c.bind(t, p)
            })
        },
        _off: function (b, c) {
            c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            b.unbind(c).undelegate(c);
            this.bindings = a(this.bindings.not(b).get());
            this.focusable = a(this.focusable.not(b).get());
            this.hoverable = a(this.hoverable.not(b).get())
        },
        _delay: function (a, b) {
            var c = this;
            return setTimeout(function () {
                return ("string" == typeof a ? c[a] : a).apply(c, arguments)
            }, b || 0)
        },
        _hoverable: function (b) {
            this.hoverable = this.hoverable.add(b);
            this._on(b, {
                mouseenter: function (b) {
                    a(b.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function (b) {
                    a(b.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (b) {
            this.focusable = this.focusable.add(b);
            this._on(b, {
                focusin: function (b) {
                    a(b.currentTarget).addClass("ui-state-focus")
                }, focusout: function (b) {
                    a(b.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (b, c, d) {
            var f, e = this.options[b];
            if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], b = c.originalEvent)for (f in b)f in c ||
            (c[f] = b[f]);
            return this.element.trigger(c, d), !(a.isFunction(e) && !1 === e.apply(this.element[0], [c].concat(d)) || c.isDefaultPrevented())
        }
    };
    a.each({show: "fadeIn", hide: "fadeOut"}, function (b, c) {
        a.Widget.prototype["_" + b] = function (d, f, e) {
            "string" == typeof f && (f = {effect: f});
            var n, l = f ? !0 === f || "number" == typeof f ? c : f.effect || c : b;
            f = f || {};
            "number" == typeof f && (f = {duration: f});
            n = !a.isEmptyObject(f);
            f.complete = e;
            f.delay && d.delay(f.delay);
            n && a.effects && a.effects.effect[l] ? d[b](f) : l !== b && d[l] ? d[l](f.duration, f.easing,
                e) : d.queue(function (c) {
                a(this)[b]();
                e && e.call(d[0]);
                c()
            })
        }
    });
    a.widget;
    (function () {
        function b(a, c, d) {
            return [parseFloat(a[0]) * (s.test(a[0]) ? c / 100 : 1), parseFloat(a[1]) * (s.test(a[1]) ? d / 100 : 1)]
        }

        function c(b) {
            var d = b[0];
            return 9 === d.nodeType ? {
                width: b.width(),
                height: b.height(),
                offset: {top: 0, left: 0}
            } : a.isWindow(d) ? {
                width: b.width(),
                height: b.height(),
                offset: {top: b.scrollTop(), left: b.scrollLeft()}
            } : d.preventDefault ? {width: 0, height: 0, offset: {top: d.pageY, left: d.pageX}} : {
                width: b.outerWidth(), height: b.outerHeight(),
                offset: b.offset()
            }
        }

        a.ui = a.ui || {};
        var d, f, e = Math.max, n = Math.abs, l = Math.round, p = /left|center|right/, r = /top|center|bottom/, t = /[\+\-]\d+(\.[\d]+)?%?/, u = /^\w+/, s = /%$/, w = a.fn.position;
        a.position = {
            scrollbarWidth: function () {
                if (void 0 !== d)return d;
                var b, c, h = a("\x3cdiv style\x3d'display:block;position:absolute;width:50px;height:50px;overflow:hidden;'\x3e\x3cdiv style\x3d'height:100px;width:auto;'\x3e\x3c/div\x3e\x3c/div\x3e"), f = h.children()[0];
                return a("body").append(h), b = f.offsetWidth, h.css("overflow", "scroll"),
                    c = f.offsetWidth, b === c && (c = h[0].clientWidth), h.remove(), d = b - c
            }, getScrollInfo: function (b) {
                var c = b.isWindow || b.isDocument ? "" : b.element.css("overflow-x"), d = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y"), c = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth;
                return {
                    width: "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight ? a.position.scrollbarWidth() : 0,
                    height: c ? a.position.scrollbarWidth() : 0
                }
            }, getWithinInfo: function (b) {
                b = a(b || window);
                var c = a.isWindow(b[0]), d = !!b[0] && 9 === b[0].nodeType;
                return {
                    element: b,
                    isWindow: c,
                    isDocument: d,
                    offset: b.offset() || {left: 0, top: 0},
                    scrollLeft: b.scrollLeft(),
                    scrollTop: b.scrollTop(),
                    width: c || d ? b.width() : b.outerWidth(),
                    height: c || d ? b.height() : b.outerHeight()
                }
            }
        };
        a.fn.position = function (d) {
            if (!d || !d.of)return w.apply(this, arguments);
            d = a.extend({}, d);
            var k, s, A, B, z, C, G = a(d.of), I = a.position.getWithinInfo(d.within), J = a.position.getScrollInfo(I), E = (d.collision || "flip").split(" "), H = {};
            return C = c(G), G[0].preventDefault && (d.at = "left top"), s = C.width, A = C.height, B = C.offset,
                z = a.extend({}, B), a.each(["my", "at"], function () {
                var a, b, c = (d[this] || "").split(" ");
                1 === c.length && (c = p.test(c[0]) ? c.concat(["center"]) : r.test(c[0]) ? ["center"].concat(c) : ["center", "center"]);
                c[0] = p.test(c[0]) ? c[0] : "center";
                c[1] = r.test(c[1]) ? c[1] : "center";
                a = t.exec(c[0]);
                b = t.exec(c[1]);
                H[this] = [a ? a[0] : 0, b ? b[0] : 0];
                d[this] = [u.exec(c[0])[0], u.exec(c[1])[0]]
            }), 1 === E.length && (E[1] = E[0]), "right" === d.at[0] ? z.left += s : "center" === d.at[0] && (z.left += s / 2), "bottom" === d.at[1] ? z.top += A : "center" === d.at[1] && (z.top += A / 2),
                k = b(H.at, s, A), z.left += k[0], z.top += k[1], this.each(function () {
                var c, m, p = a(this), r = p.outerWidth(), t = p.outerHeight(), u = parseInt(a.css(this, "marginLeft"), 10) || 0, w = parseInt(a.css(this, "marginTop"), 10) || 0, C = r + u + (parseInt(a.css(this, "marginRight"), 10) || 0) + J.width, K = t + w + (parseInt(a.css(this, "marginBottom"), 10) || 0) + J.height, y = a.extend({}, z), F = b(H.my, p.outerWidth(), p.outerHeight());
                "right" === d.my[0] ? y.left -= r : "center" === d.my[0] && (y.left -= r / 2);
                "bottom" === d.my[1] ? y.top -= t : "center" === d.my[1] && (y.top -= t / 2);
                y.left +=
                    F[0];
                y.top += F[1];
                f || (y.left = l(y.left), y.top = l(y.top));
                c = {marginLeft: u, marginTop: w};
                a.each(["left", "top"], function (b, h) {
                    a.ui.position[E[b]] && a.ui.position[E[b]][h](y, {
                        targetWidth: s,
                        targetHeight: A,
                        elemWidth: r,
                        elemHeight: t,
                        collisionPosition: c,
                        collisionWidth: C,
                        collisionHeight: K,
                        offset: [k[0] + F[0], k[1] + F[1]],
                        my: d.my,
                        at: d.at,
                        within: I,
                        elem: p
                    })
                });
                d.using && (m = function (a) {
                    var b = B.left - y.left, c = b + s - r, h = B.top - y.top, f = h + A - t, k = {
                        target: {element: G, left: B.left, top: B.top, width: s, height: A},
                        element: {
                            element: p, left: y.left,
                            top: y.top, width: r, height: t
                        },
                        horizontal: 0 > c ? "left" : 0 < b ? "right" : "center",
                        vertical: 0 > f ? "top" : 0 < h ? "bottom" : "middle"
                    };
                    r > s && s > n(b + c) && (k.horizontal = "center");
                    t > A && A > n(h + f) && (k.vertical = "middle");
                    k.important = e(n(b), n(c)) > e(n(h), n(f)) ? "horizontal" : "vertical";
                    d.using.call(this, a, k)
                });
                p.offset(a.extend(y, {using: m}))
            })
        };
        a.ui.position = {
            fit: {
                left: function (a, b) {
                    var c, d = b.within, h = d.isWindow ? d.scrollLeft : d.offset.left, d = d.width, f = a.left - b.collisionPosition.marginLeft, k = h - f, m = f + b.collisionWidth - d - h;
                    b.collisionWidth >
                    d ? 0 < k && 0 >= m ? (c = a.left + k + b.collisionWidth - d - h, a.left += k - c) : a.left = 0 < m && 0 >= k ? h : k > m ? h + d - b.collisionWidth : h : 0 < k ? a.left += k : 0 < m ? a.left -= m : a.left = e(a.left - f, a.left)
                }, top: function (a, b) {
                    var c, d = b.within, d = d.isWindow ? d.scrollTop : d.offset.top, h = b.within.height, f = a.top - b.collisionPosition.marginTop, k = d - f, m = f + b.collisionHeight - h - d;
                    b.collisionHeight > h ? 0 < k && 0 >= m ? (c = a.top + k + b.collisionHeight - h - d, a.top += k - c) : a.top = 0 < m && 0 >= k ? d : k > m ? d + h - b.collisionHeight : d : 0 < k ? a.top += k : 0 < m ? a.top -= m : a.top = e(a.top - f, a.top)
                }
            }, flip: {
                left: function (a,
                                b) {
                    var c, d, h = b.within, f = h.offset.left + h.scrollLeft, e = h.width, h = h.isWindow ? h.scrollLeft : h.offset.left, k = a.left - b.collisionPosition.marginLeft, m = k - h, k = k + b.collisionWidth - e - h, l = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0, q = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0, p = -2 * b.offset[0];
                    0 > m ? (c = a.left + l + q + p + b.collisionWidth - e - f, (0 > c || n(m) > c) && (a.left += l + q + p)) : 0 < k && (d = a.left - b.collisionPosition.marginLeft + l + q + p - h, (0 < d || k > n(d)) && (a.left += l + q + p))
                }, top: function (a, b) {
                    var c,
                        d, h = b.within, f = h.offset.top + h.scrollTop, e = h.height, h = h.isWindow ? h.scrollTop : h.offset.top, k = a.top - b.collisionPosition.marginTop, m = k - h, k = k + b.collisionHeight - e - h, l = "top" === b.my[1] ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0, q = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0, p = -2 * b.offset[1];
                    0 > m ? (d = a.top + l + q + p + b.collisionHeight - e - f, (0 > d || n(m) > d) && (a.top += l + q + p)) : 0 < k && (c = a.top - b.collisionPosition.marginTop + l + q + p - h, (0 < c || k > n(c)) && (a.top += l + q + p))
                }
            }, flipfit: {
                left: function () {
                    a.ui.position.flip.left.apply(this,
                        arguments);
                    a.ui.position.fit.left.apply(this, arguments)
                }, top: function () {
                    a.ui.position.flip.top.apply(this, arguments);
                    a.ui.position.fit.top.apply(this, arguments)
                }
            }
        };
        (function () {
            var b, c, d, h, e = document.getElementsByTagName("body")[0];
            d = document.createElement("div");
            b = document.createElement(e ? "div" : "body");
            c = {visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none"};
            e && a.extend(c, {position: "absolute", left: "-1000px", top: "-1000px"});
            for (h in c)b.style[h] = c[h];
            b.appendChild(d);
            c = e || document.documentElement;
            c.insertBefore(b, c.firstChild);
            d.style.cssText = "position: absolute; left: 10.7432222px;";
            d = a(d).offset().left;
            f = 10 < d && 11 > d;
            b.innerHTML = "";
            c.removeChild(b)
        })()
    })();
    a.ui.position;
    a.widget("ui.accordion", {
        version: "1.11.4",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "\x3e li \x3e :first-child,\x3e :not(li):even",
            heightStyle: "auto",
            icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"},
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide", borderBottomWidth: "hide",
            paddingTop: "hide", paddingBottom: "hide", height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function () {
            var b = this.options;
            this.prevShow = this.prevHide = a();
            this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
            b.collapsible || !1 !== b.active && null != b.active || (b.active = 0);
            this._processPanels();
            0 > b.active && (b.active += this.headers.length);
            this._refresh()
        },
        _getCreateEventData: function () {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : a()
            }
        },
        _createIcons: function () {
            var b = this.options.icons;
            b && (a("\x3cspan\x3e").addClass("ui-accordion-header-icon ui-icon " + b.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(b.header).addClass(b.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function () {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function () {
            var a;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
            this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId();
            this._destroyIcons();
            a = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId();
            "content" !== this.options.heightStyle && a.css("height", "")
        },
        _setOption: function (a, b) {
            return "active" === a ? (this._activate(b), void 0) : ("event" === a && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(b)), this._super(a, b), "collapsible" !== a || b || !1 !== this.options.active || this._activate(0), "icons" === a && (this._destroyIcons(), b && this._createIcons()), "disabled" === a && (this.element.toggleClass("ui-state-disabled", !!b).attr("aria-disabled", b), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",
                !!b)), void 0)
        },
        _keydown: function (b) {
            if (!b.altKey && !b.ctrlKey) {
                var c = a.ui.keyCode, d = this.headers.length, f = this.headers.index(b.target), e = !1;
                switch (b.keyCode) {
                    case c.RIGHT:
                    case c.DOWN:
                        e = this.headers[(f + 1) % d];
                        break;
                    case c.LEFT:
                    case c.UP:
                        e = this.headers[(f - 1 + d) % d];
                        break;
                    case c.SPACE:
                    case c.ENTER:
                        this._eventHandler(b);
                        break;
                    case c.HOME:
                        e = this.headers[0];
                        break;
                    case c.END:
                        e = this.headers[d - 1]
                }
                e && (a(b.target).attr("tabIndex", -1), a(e).attr("tabIndex", 0), e.focus(), b.preventDefault())
            }
        },
        _panelKeyDown: function (b) {
            b.keyCode ===
            a.ui.keyCode.UP && b.ctrlKey && a(b.currentTarget).prev().focus()
        },
        refresh: function () {
            var b = this.options;
            this._processPanels();
            !1 === b.active && !0 === b.collapsible || !this.headers.length ? (b.active = !1, this.active = a()) : !1 === b.active ? this._activate(0) : this.active.length && !a.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (b.active = !1, this.active = a()) : this._activate(Math.max(0, b.active - 1)) : b.active = this.headers.index(this.active);
            this._destroyIcons();
            this._refresh()
        },
        _processPanels: function () {
            var a = this.headers, b = this.panels;
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all");
            this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide();
            b && (this._off(a.not(this.headers)), this._off(b.not(this.panels)))
        },
        _refresh: function () {
            var b, c = this.options, d = c.heightStyle, f = this.element.parent();
            this.active = this._findActive(c.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
            this.active.next().addClass("ui-accordion-content-active").show();
            this.headers.attr("role", "tab").each(function () {
                var b = a(this), c = b.uniqueId().attr("id"), d = b.next(), h = d.uniqueId().attr("id");
                b.attr("aria-controls", h);
                d.attr("aria-labelledby", c)
            }).next().attr("role", "tabpanel");
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({"aria-hidden": "true"}).hide();
            this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({"aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0);
            this._createIcons();
            this._setupEvents(c.event);
            "fill" === d ? (b = f.height(), this.element.siblings(":visible").each(function () {
                var c = a(this), d = c.css("position");
                "absolute" !== d && "fixed" !== d && (b -= c.outerHeight(!0))
            }), this.headers.each(function () {
                b -= a(this).outerHeight(!0)
            }), this.headers.next().each(function () {
                a(this).height(Math.max(0,
                    b - a(this).innerHeight() + a(this).height()))
            }).css("overflow", "auto")) : "auto" === d && (b = 0, this.headers.next().each(function () {
                b = Math.max(b, a(this).css("height", "").height())
            }).height(b))
        },
        _activate: function (b) {
            b = this._findActive(b)[0];
            b !== this.active[0] && (b = b || this.active[0], this._eventHandler({
                target: b,
                currentTarget: b,
                preventDefault: a.noop
            }))
        },
        _findActive: function (b) {
            return "number" == typeof b ? this.headers.eq(b) : a()
        },
        _setupEvents: function (b) {
            var c = {keydown: "_keydown"};
            b && a.each(b.split(" "), function (a,
                                                b) {
                c[b] = "_eventHandler"
            });
            this._off(this.headers.add(this.headers.next()));
            this._on(this.headers, c);
            this._on(this.headers.next(), {keydown: "_panelKeyDown"});
            this._hoverable(this.headers);
            this._focusable(this.headers)
        },
        _eventHandler: function (b) {
            var c = this.options, d = this.active, f = a(b.currentTarget), e = f[0] === d[0], n = e && c.collapsible, l = n ? a() : f.next(), p = d.next(), l = {
                oldHeader: d,
                oldPanel: p,
                newHeader: n ? a() : f,
                newPanel: l
            };
            b.preventDefault();
            e && !c.collapsible || !1 === this._trigger("beforeActivate", b, l) || (c.active =
                n ? !1 : this.headers.index(f), this.active = e ? a() : f, this._toggle(l), d.removeClass("ui-accordion-header-active ui-state-active"), c.icons && d.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header), e || (f.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), c.icons && f.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader), f.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function (b) {
            var c =
                b.newPanel, d = this.prevShow.length ? this.prevShow : b.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0);
            this.prevShow = c;
            this.prevHide = d;
            this.options.animate ? this._animate(c, d, b) : (d.hide(), c.show(), this._toggleComplete(b));
            d.attr({"aria-hidden": "true"});
            d.prev().attr({"aria-selected": "false", "aria-expanded": "false"});
            c.length && d.length ? d.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : c.length && this.headers.filter(function () {
                return 0 === parseInt(a(this).attr("tabIndex"), 10)
            }).attr("tabIndex", -1);
            c.attr("aria-hidden", "false").prev().attr({"aria-selected": "true", "aria-expanded": "true", tabIndex: 0})
        },
        _animate: function (a, b, c) {
            var d, e, n, l = this, p = 0, r = a.css("box-sizing"), t = a.length && (!b.length || a.index() < b.index()), u = this.options.animate || {}, t = t && u.down || u, s = function () {
                l._toggleComplete(c)
            };
            return "number" == typeof t && (n = t), "string" == typeof t && (e = t), e = e || t.easing || u.easing, n = n || t.duration || u.duration, b.length ? a.length ? (d = a.show().outerHeight(), b.animate(this.hideProps, {
                duration: n, easing: e, step: function (a,
                                                        b) {
                    b.now = Math.round(a)
                }
            }), a.hide().animate(this.showProps, {
                duration: n, easing: e, complete: s, step: function (a, c) {
                    c.now = Math.round(a);
                    "height" !== c.prop ? "content-box" === r && (p += c.now) : "content" !== l.options.heightStyle && (c.now = Math.round(d - b.outerHeight() - p), p = 0)
                }
            }), void 0) : b.animate(this.hideProps, n, e, s) : a.animate(this.showProps, n, e, s)
        },
        _toggleComplete: function (a) {
            var b = a.oldPanel;
            b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
            b.length && (b.parent()[0].className =
                b.parent()[0].className);
            this._trigger("activate", null, a)
        }
    });
    a.widget("ui.tooltip", {
        version: "1.11.4", options: {
            content: function () {
                var b = a(this).attr("title") || "";
                return a("\x3ca\x3e").text(b).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"},
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        }, _addDescribedBy: function (b, c) {
            var d = (b.attr("aria-describedby") || "").split(/\s+/);
            d.push(c);
            b.data("ui-tooltip-id", c).attr("aria-describedby",
                a.trim(d.join(" ")))
        }, _removeDescribedBy: function (b) {
            var c = b.data("ui-tooltip-id"), d = (b.attr("aria-describedby") || "").split(/\s+/), c = a.inArray(c, d);
            -1 !== c && d.splice(c, 1);
            b.removeData("ui-tooltip-id");
            (d = a.trim(d.join(" "))) ? b.attr("aria-describedby", d) : b.removeAttr("aria-describedby")
        }, _create: function () {
            this._on({mouseover: "open", focusin: "open"});
            this.tooltips = {};
            this.parents = {};
            this.options.disabled && this._disable();
            this.liveRegion = a("\x3cdiv\x3e").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
        },
        _setOption: function (b, c) {
            var d = this;
            return "disabled" === b ? (this[c ? "_disable" : "_enable"](), this.options[b] = c, void 0) : (this._super(b, c), "content" === b && a.each(this.tooltips, function (a, b) {
                d._updateContent(b.element)
            }), void 0)
        }, _disable: function () {
            var b = this;
            a.each(this.tooltips, function (c, d) {
                var f = a.Event("blur");
                f.target = f.currentTarget = d.element[0];
                b.close(f, !0)
            });
            this.element.find(this.options.items).addBack().each(function () {
                var b = a(this);
                b.is("[title]") && b.data("ui-tooltip-title", b.attr("title")).removeAttr("title")
            })
        },
        _enable: function () {
            this.element.find(this.options.items).addBack().each(function () {
                var b = a(this);
                b.data("ui-tooltip-title") && b.attr("title", b.data("ui-tooltip-title"))
            })
        }, open: function (b) {
            var c = this, d = a(b ? b.target : this.element).closest(this.options.items);
            d.length && !d.data("ui-tooltip-id") && (d.attr("title") && d.data("ui-tooltip-title", d.attr("title")), d.data("ui-tooltip-open", !0), b && "mouseover" === b.type && d.parents().each(function () {
                var b, d = a(this);
                d.data("ui-tooltip-open") && (b = a.Event("blur"), b.target =
                    b.currentTarget = this, c.close(b, !0));
                d.attr("title") && (d.uniqueId(), c.parents[this.id] = {
                    element: this,
                    title: d.attr("title")
                }, d.attr("title", ""))
            }), this._registerCloseHandlers(b, d), this._updateContent(d, b))
        }, _updateContent: function (a, b) {
            var c, d = this.options.content, e = this, n = b ? b.type : null;
            return "string" == typeof d ? this._open(b, a, d) : (c = d.call(a[0], function (c) {
                e._delay(function () {
                    a.data("ui-tooltip-open") && (b && (b.type = n), this._open(b, a, c))
                })
            }), c && this._open(b, a, c), void 0)
        }, _open: function (b, c, d) {
            function e(a) {
                r.of =
                    a;
                n.is(":hidden") || n.position(r)
            }

            var q, n, l, p, r = a.extend({}, this.options.position);
            if (d) {
                if (q = this._find(c))return q.tooltip.find(".ui-tooltip-content").html(d), void 0;
                c.is("[title]") && (b && "mouseover" === b.type ? c.attr("title", "") : c.removeAttr("title"));
                q = this._tooltip(c);
                n = q.tooltip;
                this._addDescribedBy(c, n.attr("id"));
                n.find(".ui-tooltip-content").html(d);
                this.liveRegion.children().hide();
                d.clone ? (p = d.clone(), p.removeAttr("id").find("[id]").removeAttr("id")) : p = d;
                a("\x3cdiv\x3e").html(p).appendTo(this.liveRegion);
                this.options.track && b && /^mouse/.test(b.type) ? (this._on(this.document, {mousemove: e}), e(b)) : n.position(a.extend({of: c}, this.options.position));
                n.hide();
                this._show(n, this.options.show);
                this.options.show && this.options.show.delay && (l = this.delayedShow = setInterval(function () {
                    n.is(":visible") && (e(r.of), clearInterval(l))
                }, a.fx.interval));
                this._trigger("open", b, {tooltip: n})
            }
        }, _registerCloseHandlers: function (b, c) {
            var d = {
                keyup: function (b) {
                    b.keyCode === a.ui.keyCode.ESCAPE && (b = a.Event(b), b.currentTarget = c[0], this.close(b,
                        !0))
                }
            };
            c[0] !== this.element[0] && (d.remove = function () {
                this._removeTooltip(this._find(c).tooltip)
            });
            b && "mouseover" !== b.type || (d.mouseleave = "close");
            b && "focusin" !== b.type || (d.focusout = "close");
            this._on(!0, c, d)
        }, close: function (b) {
            var c, d = this, e = a(b ? b.currentTarget : this.element), q = this._find(e);
            return q ? (c = q.tooltip, q.closing || (clearInterval(this.delayedShow), e.data("ui-tooltip-title") && !e.attr("title") && e.attr("title", e.data("ui-tooltip-title")), this._removeDescribedBy(e), q.hiding = !0, c.stop(!0), this._hide(c,
                this.options.hide, function () {
                    d._removeTooltip(a(this))
                }), e.removeData("ui-tooltip-open"), this._off(e, "mouseleave focusout keyup"), e[0] !== this.element[0] && this._off(e, "remove"), this._off(this.document, "mousemove"), b && "mouseleave" === b.type && a.each(this.parents, function (b, c) {
                a(c.element).attr("title", c.title);
                delete d.parents[b]
            }), q.closing = !0, this._trigger("close", b, {tooltip: c}), q.hiding || (q.closing = !1)), void 0) : (e.removeData("ui-tooltip-open"), void 0)
        }, _tooltip: function (b) {
            var c = a("\x3cdiv\x3e").attr("role",
                "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")), d = c.uniqueId().attr("id");
            return a("\x3cdiv\x3e").addClass("ui-tooltip-content").appendTo(c), c.appendTo(this.document[0].body), this.tooltips[d] = {
                element: b,
                tooltip: c
            }
        }, _find: function (a) {
            return (a = a.data("ui-tooltip-id")) ? this.tooltips[a] : null
        }, _removeTooltip: function (a) {
            a.remove();
            delete this.tooltips[a.attr("id")]
        }, _destroy: function () {
            var b = this;
            a.each(this.tooltips, function (c, d) {
                var e = a.Event("blur"),
                    q = d.element;
                e.target = e.currentTarget = q[0];
                b.close(e, !0);
                a("#" + c).remove();
                q.data("ui-tooltip-title") && (q.attr("title") || q.attr("title", q.data("ui-tooltip-title")), q.removeData("ui-tooltip-title"))
            });
            this.liveRegion.remove()
        }
    })
});
function createCheckBox(a) {
    var b = "prompt" + a.parentId, c = jQuery("\x3cdiv\x3e", {"class": "check-cell"}), d = jQuery("\x3cinput\x3e", {
        id: "response" + a.copyId,
        type: "checkbox",
        itemId: a.copyId,
        name: "checkgroup" + a.parentId,
        disabled: a.disabled,
        "class": "check-box-input " + b
    });
    $closedActivation && d.attr("disabled", "disabled");
    "0" !== a.defaultValue && d.prop("checked", !0);
    isNotUndefined(a.itemMandatoryConditionListId) && (d.attr("mandatoryCondition", a.itemMandatoryConditionListId.toString()), d.addClass("mandatoryCondition"));
    isNotUndefined(a.itemVisibleConditionListId) && (d.attr("visibleCondition", a.itemVisibleConditionListId.toString()), d.addClass("visibleCondition"));
    a = jQuery("\x3clabel\x3e", {
        "for": "response" + a.copyId,
        "class": "check-box-label " + b,
        style: "display: inline",
        text: a.prompt
    });
    c.append(d);
    c.append(a);
    return c
}
function createCombo(a) {
    var b = "prompt" + a[0].parentId, c = jQuery("\x3cselect\x3e", {
        "class": "combo-box-item " + b,
        style: "margin-left:0px !important"
    }), d;
    $.each(a, function (a, b) {
        if (isUndefined(b.comboQuery)) {
            isUndefined(d) && (d = b.prompt);
            var m = jQuery("\x3coption\x3e", {
                itemId: b.copyId + ("QUERY" === b.comboSelectionType ? "_" + b.id : ""),
                value: b.prompt,
                text: b.prompt,
                parentId: b.parentId,
                "class": b.comboSelectionType
            });
            "1" === b.defaultValue && (m.attr("selected", "selected"), d = b.prompt);
            c.append(m)
        }
    });
    a = jQuery("\x3cdiv\x3e",
        {"class": "combo-cell", style: "margin-bottom: 10px;"});
    b = jQuery("\x3cspan\x3e", {text: d, "class": "combo-box-item " + b});
    $closedActivation ? a.append(b) : a.append(c);
    return a
}
function createEmpty(a) {
    a = jQuery("\x3cdiv\x3e", {"class": "empty-cell"});
    var b = jQuery("\x3cspan\x3e");
    a.append(b);
    return a
}
function createFile(a) {
    var b = jQuery("\x3cdiv\x3e", {});
    0 < a.promptCols ? (a = assembleLabeledFile(a), b.addClass("file-labeled-cell")) : (a = assembleSimpleFile(a), b.addClass("file-simple-cell"));
    b.append(a);
    return b
}
function assembleSimpleFile(a) {
    var b = findItem(a.parentId), c = " ";
    isNotUndefined(a.parentId) && (c = "prompt" + a.parentId);
    var c = jQuery("\x3cdiv\x3e", {"class": "file-container" + a.copyId + " " + c}), d = a.copyId, e = $responseId, h = jQuery("\x3cdiv\x3e").attr({
        id: "divnp-" + d,
        name: "form-" + d
    });
    c.append(h);
    var m = jQuery("\x3cform\x3e").attr({
        id: "form-" + d,
        style: "border-bottom: 1px solid #ccc; margin-bottom: 10px;",
        enctype: "multipart/form-data"
    });
    h.append(m);
    var k = jQuery("\x3cinput\x3e").attr({
        id: "response" + d,
        itemId: d,
        value: "Select...",
        type: "file",
        name: "file",
        dataMaxSize: $fileUploadLimit,
        style: "btn; margin-top: 0px !important; margin-bottom: 5px"
    }), f = jQuery("\x3cspan/\x3e", {
        id: "supported" + d,
        text: getResource(!1, "fileUploadNotAvailable"),
        style: "font-weight: bold; color: red",
        class: "showLess"
    });
    m.append(k);
    m.append(f);
    m.append("\x3cbr /\x3e");
    var q = jQuery("\x3cdiv\x3e").attr({
        id: "uploadDiv-" + d,
        style: "top: 135px; left: 75px; right: 75px; max-height: 350px; overflow-y: auto; border: 1px solid grey; display: none; background-color: rgb(249, 249, 249);"
    });
    m.append(q);
    var n = jQuery("\x3cdiv\x3e").attr({id: "uploadInnerDiv-" + d, style: "max-height: 315px; overflow-y: auto;"});
    q.append(n);
    f = jQuery("\x3cdiv\x3e").attr({
        id: "uploadBottomDiv-" + d,
        style: "background-color: rgb(238,238,238); height: 29px; border-top: 1px solid #ccc"
    });
    q.append(f);
    q = jQuery("\x3cspan/\x3e", {
        id: "fileNamePrompt-" + d,
        text: getResource(!1, "fileNameTitle") + ": ",
        style: "font-weight: bold; margin-left: 3px;"
    });
    n.append(q);
    q = jQuery("\x3cspan/\x3e").attr({id: "filename-" + d, text: "test"});
    n.append(q);
    q = jQuery("\x3cspan/\x3e", {
        id: "filetypePrompt-" + d,
        text: getResource(!1, "fileTypeTitle") + ": ",
        style: "font-weight: bold; margin-left: 3px;"
    });
    n.append("\x3cbr /\x3e");
    n.append(q);
    q = jQuery("\x3cspan/\x3e").attr({id: "filetype-" + d, text: "test"});
    n.append(q);
    n.append("\x3cbr /\x3e");
    q = jQuery("\x3cspan/\x3e", {
        id: "filetypePrompt-" + d,
        text: getResource(!1, "fileSizeTitle") + ": ",
        style: "font-weight: bold; margin-left: 3px;"
    });
    n.append(q);
    q = jQuery("\x3cspan/\x3e").attr({id: "filesize-" + d, text: "test"});
    n.append(q);
    n.append("\x3cbr /\x3e");
    n = jQuery("\x3cinput\x3e").attr({
        id: "btn-remove-" + d,
        type: "button",
        value: getResource(!1, "closeBtn"),
        class: "btn btn_remove",
        style: "float: right; margin-top: 2px !important; margin-bottom: 2px;",
        onclick: "closeUploadDiv('" + d + "')"
    });
    f.append(n);
    n = jQuery("\x3cinput\x3e").attr({
        id: "btn-upload-compress-" + d,
        type: "button",
        value: getResource(!1, "uploadBtn"),
        class: "btn btn_upload",
        style: "float: right; margin-top: 2px !important; margin-bottom: 2px; display: none;",
        onclick: "sendFileCompress('" + e + "','" + d + "','1')"
    });
    f.append(n);
    n = jQuery("\x3cinput\x3e").attr({
        id: "btn-upload-" + d,
        type: "button",
        value: getResource(!1, "uploadBtn"),
        class: "btn btn_upload",
        style: "float: right; margin-top: 2px !important; margin-bottom: 2px; display: none;",
        onclick: "sendFile('" + e + "','" + d + "','1')"
    });
    f.append(n);
    if (isUndefined(a.fileType) || "ALL" === a.fileType.value)k.attr("onchange", "openUploadDiv('" + d + "')"); else switch (a.fileType.value) {
        case "CAMERA_ONLY":
        case "COMPRESS_IMAGES_ONLY":
        case "COMPRESS_CAMERA_ONLY":
        case "IMAGES_ONLY":
            k.attr("onchange",
                "checkfileImage('" + d + "',this,$('#upload-" + d + "'))");
            break;
        case "DOCUMENTS_ONLY":
            k.attr("onchange", "checkfileDocument('" + d + "',this,$('#upload-" + d + "'))");
            break;
        default:
            k.attr("onchange", "checkfileDocument('" + d + "',this,$('#upload-" + d + "'))")
    }
    f = jQuery("\x3cdiv\x3e").attr({id: "div-uploading-" + d, class: "showLess"});
    h.append(f);
    n = jQuery("\x3cspan/\x3e", {id: "sp" + d, text: getResource(!1, "uploadingMsg"), style: "font-weight: bold;"});
    f.append(n);
    f.append("\x3cbr /\x3e");
    f.append("\x3cbr /\x3e");
    f = jQuery("\x3cdiv\x3e").attr({
        id: "div-success-" +
        d, class: "showLess", style: "border-bottom: 1px solid #ccc; margin-bottom: 10px; margin-top: 10px"
    });
    h.append(f);
    n = jQuery("\x3cspan/\x3e", {
        id: "sp" + d,
        text: getResource(!1, "uploadSuccess") + "!",
        style: "font-weight: bold;"
    });
    f.append(n);
    f.append("\x3cbr /\x3e");
    n = jQuery("\x3cform\x3e").attr({
        id: "form-remove-after-" + d,
        name: "form-remove-after-" + d,
        enctype: "multipart/form-data",
        style: "border-bottom: 1px solid #ccc; margin-bottom: 10px;"
    });
    f.append(n);
    q = jQuery("\x3cdiv\x3e").attr({id: "div-rm-after" + d});
    f.append(q);
    f = jQuery("\x3cinput\x3e").attr({
        id: "btn-" + d,
        itemId: d,
        type: "button",
        value: getResource(!1, "removeBtn"),
        class: "btn btn_remove",
        onclick: "sendFile('" + e + "','" + d + "','2')"
    });
    n.append(f);
    n.append("\x3cbr /\x3e");
    n.append("\x3cbr /\x3e");
    f = jQuery("\x3cdiv\x3e").attr({id: "div-nofile-" + d, class: "showLess"});
    h.append(f);
    n = jQuery("\x3cspan/\x3e", {
        id: "sp" + d,
        text: getResource(!1, "uploadSelect") + "!",
        style: "font-weight: bold; color: red;"
    });
    f.append(n);
    f.append("\x3cbr /\x3e");
    f.append("\x3cbr /\x3e");
    f = isNotUndefined(a.itemVisibleConditionId) &&
    isUndefined(a.parentId) ? " is-conditional-visible" : "";
    n = isNotUndefined(a.itemMandatoryConditionId) && isUndefined(a.parentId) ? " is-conditional-mandatory" : "";
    b = isNotUndefined(b) && b.mandatory ? " file-input-required " : "";
    k.attr("mandatoryParent", a.itemMandatoryConditionId);
    k.attr("visibleParent", a.itemVisibleConditionId);
    k.addClass(f);
    k.addClass(n);
    k.addClass(b);
    $closedActivation && k.attr("style", "display: none");
    b = jQuery("\x3cdiv\x3e", {"class": "file-div-input"});
    k = jQuery("\x3cdiv\x3e", {style: "margin-top: 10px;"});
    f = jQuery("\x3cspan\x3e", {
        id: "filled" + a.copyId,
        text: isNotUndefined(a.uploadedData) ? a.uploadedData.fileName : "",
        "class": "filled-file file" + a.copyId
    });
    k.append(f);
    b.append(k);
    k = jQuery("\x3cform\x3e").attr({
        id: "form-remove-" + d,
        name: "form-remove-" + d,
        enctype: "multipart/form-data",
        style: "border-bottom: 1px solid #ccc; margin-bottom: 10px;"
    });
    b.append(k);
    f = jQuery("\x3cdiv\x3e").attr({id: "div-rm-" + d});
    k.append(f);
    d = jQuery("\x3cinput\x3e").attr({
        id: "btn-" + d, type: "button", value: getResource(!1, "removeBtn"), class: "btn btn_remove",
        style: "margin-bottom: 10px", onclick: "sendFile('" + e + "','" + d + "','2')"
    });
    k.append(d);
    isNotUndefined(a.uploadedData) ? m.addClass("hide-item") : b.addClass("hide-item");
    h.append(b);
    return c
}
function assembleLabeledFile(a) {
    var b = " ";
    isNotUndefined(a.parentId) && (b = "prompt" + a.parentId);
    var b = jQuery("\x3ctable\x3e", {
        "class": "file-container " + b,
        style: "margin-top: -3px !important; margin-left: -1px;"
    }), c = jQuery("\x3cdiv\x3e", {"class": "textbox-table"}), d = jQuery("\x3cdiv\x3e", {
        "class": "textbox-table",
        style: "background-color: #e6e6e6; clear: both;"
    }), e = jQuery("\x3cspan\x3e", {"class": "file-table-span-container prompt-cell"}), h = jQuery("\x3cdiv\x3e", {"class": "file-table-block-container"}), m = jQuery("\x3clabel\x3e",
        {
            "for": "response" + a.copyId,
            "class": "file-label",
            text: a.prompt
        }), k = jQuery("\x3cdiv\x3e", {"class": "textbox-table"}), f = a.copyId, q = $responseId, n = jQuery("\x3cdiv\x3e").attr({
        id: "divnp-" + f,
        name: "form-" + f
    });
    k.append(n);
    var l = jQuery("\x3cform\x3e").attr({
        id: "form-" + f,
        name: "form-" + f,
        style: "border-bottom: 1px solid #ccc; margin-bottom: 10px;",
        enctype: "multipart/form-data"
    });
    n.append(l);
    var p = jQuery("\x3cinput\x3e").attr({
        id: "response" + f, itemId: f, value: "Select...", type: "file", name: "file", dataMaxSize: $fileUploadLimit,
        style: "btn; margin-top: 0px !important; margin-bottom: 5px"
    }), r = jQuery("\x3cspan/\x3e", {
        id: "supported" + f,
        text: getResource(!1, "fileUploadNotAvailable"),
        style: "font-weight: bold; color: red",
        class: "showLess"
    });
    l.append(p);
    l.append(r);
    l.append(p);
    l.append("\x3cbr /\x3e");
    var t = jQuery("\x3cdiv\x3e").attr({
        id: "uploadDiv-" + f,
        style: "top: 135px; left: 75px; right: 75px; max-height: 350px; overflow-y: auto; border: 1px solid grey; display: none; background-color: rgb(249, 249, 249);"
    });
    l.append(t);
    var u = jQuery("\x3cdiv\x3e").attr({
        id: "uploadInnerDiv-" +
        f, style: "max-height: 315px; overflow-y: auto;"
    });
    t.append(u);
    r = jQuery("\x3cdiv\x3e").attr({
        id: "uploadBottomDiv-" + f,
        style: "background-color: rgb(238,238,238); height: 29px; border-top: 1px solid #ccc"
    });
    t.append(r);
    t = jQuery("\x3cspan/\x3e", {
        id: "fileNamePrompt-" + f,
        text: getResource(!1, "fileNameTitle") + ": ",
        style: "font-weight: bold; margin-left: 3px;"
    });
    u.append(t);
    t = jQuery("\x3cspan/\x3e").attr({id: "filename-" + f, text: "test"});
    u.append(t);
    t = jQuery("\x3cspan/\x3e", {
        id: "filetypePrompt-" + f, text: getResource(!1,
            "fileTypeTitle") + ": ", style: "font-weight: bold; margin-left: 3px;"
    });
    u.append("\x3cbr /\x3e");
    u.append(t);
    t = jQuery("\x3cspan/\x3e").attr({id: "filetype-" + f, text: "test"});
    u.append(t);
    u.append("\x3cbr /\x3e");
    t = jQuery("\x3cspan/\x3e", {
        id: "filetypePrompt-" + f,
        text: getResource(!1, "fileSizeTitle") + ": ",
        style: "font-weight: bold; margin-left: 3px;"
    });
    u.append(t);
    t = jQuery("\x3cspan/\x3e").attr({id: "filesize-" + f, text: "test"});
    u.append(t);
    u.append("\x3cbr /\x3e");
    u = jQuery("\x3cinput\x3e").attr({
        id: "btn-remove-" +
        f,
        type: "button",
        value: getResource(!1, "closeBtn"),
        class: "btn btn_remove",
        style: "float: right; margin-top: 2px !important; margin-bottom: 2px;",
        onclick: "closeUploadDiv('" + f + "')"
    });
    r.append(u);
    u = jQuery("\x3cinput\x3e").attr({
        id: "btn-upload-compress-" + f,
        type: "button",
        value: getResource(!1, "uploadBtn"),
        class: "btn btn_upload",
        style: "float: right; margin-top: 2px !important; margin-bottom: 2px; display: none;",
        onclick: "sendFileCompress('" + q + "','" + f + "','1')"
    });
    r.append(u);
    u = jQuery("\x3cinput\x3e").attr({
        id: "btn-upload-" +
        f,
        type: "button",
        value: getResource(!1, "uploadBtn"),
        class: "btn btn_upload",
        style: "float: right; margin-top: 2px !important; margin-bottom: 2px; display: none;",
        onclick: "sendFile('" + q + "','" + f + "','1')"
    });
    r.append(u);
    if (isUndefined(a.fileType) || "ALL" === a.fileType.value)p.attr("onchange", "openUploadDiv('" + f + "')"); else switch (a.fileType.value) {
        case "CAMERA_ONLY":
        case "COMPRESS_IMAGES_ONLY":
        case "COMPRESS_CAMERA_ONLY":
        case "IMAGES_ONLY":
            p.attr("onchange", "checkfileImage('" + f + "',this,$('#upload-" + f + "'))");
            break;
        case "DOCUMENTS_ONLY":
            p.attr("onchange", "checkfileDocument('" + f + "',this,$('#upload-" + f + "'))");
            break;
        default:
            p.attr("onchange", "checkfileDocument('" + f + "',this,$('#upload-" + f + "'))")
    }
    r = jQuery("\x3cdiv\x3e").attr({id: "div-uploading-" + f, class: "showLess"});
    n.append(r);
    u = jQuery("\x3cspan/\x3e", {id: "sp" + f, text: getResource(!1, "uploadingMsg"), style: "font-weight: bold;"});
    r.append(u);
    r.append("\x3cbr /\x3e");
    r.append("\x3cbr /\x3e");
    r = jQuery("\x3cdiv\x3e").attr({
        id: "div-success-" + f,
        class: "showLess",
        style: "border-bottom: 1px solid #ccc; margin-bottom: 10px; margin-top: 10px"
    });
    n.append(r);
    u = jQuery("\x3cspan/\x3e", {
        id: "sp" + f,
        text: getResource(!1, "uploadSuccess") + "!",
        style: "font-weight: bold;"
    });
    r.append(u);
    r.append("\x3cbr /\x3e");
    u = jQuery("\x3cform\x3e").attr({
        id: "form-remove-after-" + f,
        name: "form-remove-after-" + f,
        enctype: "multipart/form-data",
        style: "border-bottom: 1px solid #ccc; margin-bottom: 10px;"
    });
    r.append(u);
    t = jQuery("\x3cdiv\x3e").attr({id: "div-rm-after" + f});
    r.append(t);
    r = jQuery("\x3cinput\x3e").attr({
        id: "btn-" + f, type: "button", value: getResource(!1, "removeBtn"), class: "btn btn_remove",
        onclick: "sendFile('" + q + "','" + f + "','2')"
    });
    u.append(r);
    u.append("\x3cbr /\x3e");
    u.append("\x3cbr /\x3e");
    r = jQuery("\x3cdiv\x3e").attr({id: "div-nofile-" + f, class: "showLess"});
    n.append(r);
    n = jQuery("\x3cspan/\x3e", {
        id: "sp" + f,
        text: getResource(!1, "uploadSelect") + "!",
        style: "font-weight: bold; color: red;"
    });
    r.append(n);
    r.append("\x3cbr /\x3e");
    r.append("\x3cbr /\x3e");
    n = isNotUndefined(a.itemVisibleConditionId) && isUndefined(a.parentId) ? " is-conditional-visible" : "";
    r = isNotUndefined(a.itemMandatoryConditionId) &&
    isUndefined(a.parentId) ? " is-conditional-mandatory" : "";
    u = isNotUndefined(parent) && parent.mandatory ? " file-input-required " : "";
    p.attr("mandatoryParent", a.itemMandatoryConditionId);
    p.attr("visibleParent", a.itemVisibleConditionId);
    p.addClass(n);
    p.addClass(r);
    p.addClass(u);
    $closedActivation && p.attr("style", "display: none");
    n = jQuery("\x3clabel\x3e", {
        id: "mandatoryLabel" + a.copyId,
        text: "*",
        "for": "response" + a.copyId,
        "class": "mandatory-file-sign hide-item"
    });
    a.mandatory && isUndefined(a.parentId) && (n.removeClass("hide-item"),
        p.addClass("file-input-required"));
    p = jQuery("\x3cdiv\x3e", {"class": "file-div-input"});
    r = jQuery("\x3cdiv\x3e", {style: "margin-top: 10px;"});
    u = jQuery("\x3cspan\x3e", {
        id: "filled" + a.copyId,
        text: isNotUndefined(a.uploadedData) ? a.uploadedData.fileName : "",
        "class": "filled-file file" + a.copyId
    });
    r.append(u);
    p.append(r);
    r = jQuery("\x3cform\x3e").attr({
        id: "form-remove-" + f,
        name: "form-remove-" + f,
        enctype: "multipart/form-data",
        style: "border-bottom: 1px solid #ccc; margin-bottom: 10px;"
    });
    p.append(r);
    u = jQuery("\x3cdiv\x3e").attr({
        id: "div-rm-" +
        f
    });
    r.append(u);
    f = jQuery("\x3cinput\x3e").attr({
        id: "btn-" + f,
        type: "button",
        value: getResource(!1, "removeBtn"),
        class: "btn btn_remove",
        style: "margin-bottom: 10px",
        onclick: "sendFile('" + q + "','" + f + "','2')"
    });
    r.append(f);
    h.append(m);
    e.append(h);
    d.append(e);
    c.append(d);
    isUndefined(a.parentId) && m.append(n);
    isNotUndefined(a.uploadedData) ? l.addClass("hide-item") : p.addClass("hide-item");
    k.append(p);
    c.append(k);
    b.append(c);
    return b
}
function openUploadDiv(a) {
    $("#fileCompressingPrompt-" + a).remove();
    $("#compressedPrompt-" + a).remove();
    $("#preview-button-div-" + a).remove();
    $("#compressionResult-" + a).remove();
    $("#img-" + a).remove();
    $("#imgresult-" + a).remove();
    jQuery("#uploadDiv-" + a).css("display", "block");
    var b = !1;
    jQuery("\x3cimg/\x3e").attr({
        id: "img-" + a,
        src: "#",
        alt: a,
        style: "padding-top: 10px; padding-left: 20px; padding-bottom: 10px; float: left; display: none"
    }).appendTo("#uploadInnerDiv-" + a);
    jQuery("\x3cimg/\x3e").attr({
        id: "imgresult-" +
        a, src: "#", alt: a, style: "padding-top: 10px; padding-left: 20px; padding-bottom: 10px; display: none"
    }).appendTo("#uploadInnerDiv-" + a);
    var c = document.getElementById("response" + a);
    if (c.files && c.files[0]) {
        file = c.files[0];
        c = new FileReader;
        originalFileName = file.name;
        document.getElementById("filename-" + a).innerHTML = file.name;
        originalSize = (parseInt(file.size) / 1024).toFixed(2);
        document.getElementById("filesize-" + a).innerHTML = originalSize + " Kb";
        originalType = file.type;
        document.getElementById("filetype-" + a).innerHTML =
            file.type;
        var d = "";
        "image/jpg" === file.type && (d = "jpg", b = !0);
        "image/png" === file.type && (d = "png", b = !0);
        "image/gif" === file.type && (d = "gif", b = !0);
        "image/jpeg" === file.type && (d = "jpeg", b = !0);
        $isIOS8 && (b = !1);
        b && (c.onload = function (b) {
            var c = document.getElementById("img-" + a);
            c.src = b.target.result;
            c.onload = function () {
                image_width = $(c).width();
                image_height = $(c).height();
                image_width > image_height ? c.style.width = "320px" : c.style.height = "300px";
                compress(a, d)
            }
        }, jQuery("\x3cspan/\x3e", {
            id: "fileCompressingPrompt-" + a, text: getResource(!1,
                "uploadCompress"), style: "font-weight: italic; margin-left: 3px; display: block;"
        }).appendTo("#uploadInnerDiv-" + a), c.readAsDataURL(file))
    }
    b || jQuery("#btn-upload-" + a).css("display", "block")
}
function compress(a, b) {
    var c = document.getElementById("img-" + a);
    document.getElementById("imgresult-" + a);
    var d = $imageCompressionRatio, e = "image/jpeg";
    "undefined" !== typeof b && "png" === b && (e = "image/png");
    var h = new Image;
    h.src = c.src;
    var m = document.createElement("canvas");
    h.onload = function () {
        m.width = c.naturalWidth;
        m.height = c.naturalHeight;
        m.getContext("2d").drawImage(c, 0, 0);
        var b = m.toDataURL(e, d / 100), f = new Image;
        f.src = b;
        jQuery("\x3cdiv/\x3e", {id: "compressionResult-" + a}).appendTo("#uploadInnerDiv-" + a);
        jQuery("\x3cspan/\x3e",
            {
                id: "compressedPrompt-" + a,
                text: getResource(!1, "uploadCompressSize") + ": ",
                style: "font-weight: bold; margin-left: 3px;"
            }).appendTo("#compressionResult-" + a);
        jQuery("\x3cspan/\x3e").attr({id: "filesizeresult-" + a, text: "test"}).appendTo("#compressionResult-" + a);
        jQuery("\x3cbr/\x3e").appendTo("#compressionResult-" + a);
        jQuery("\x3cspan/\x3e", {
            id: "compressedQualityPrompt-" + a,
            text: getResource(!1, "uploadCompressQuality") + ": ",
            style: "font-weight: bold; margin-left: 3px;"
        }).appendTo("#compressionResult-" + a);
        jQuery("\x3cspan/\x3e",
            {id: "compressionquality-" + a, text: d}).appendTo("#compressionResult-" + a);
        $("\x3cdiv\x3e", {
            id: "preview-button-div-" + a,
            style: "padding-top: 10px; padding-left:10px; padding-bottom: 15px;"
        }).appendTo("#uploadInnerDiv-" + a);
        checkIe() || $("\x3ca\x3e", {
            text: getResource(!1, "uploadCompressPreview"),
            title: "file",
            href: f.src,
            target: "newwindow",
            class: "btn btn_search"
        }).appendTo("#preview-button-div-" + a);
        $("#fileCompressingPrompt-" + a).css("display", "none");
        jQuery("#btn-upload-compress-" + a).css("display", "block");
        b =
            b.replace(/^data:image\/(png|jpg);base64,/, "");
        b = encodeURI(b);
        -1 !== b.indexOf("%") ? (f = b.split("%").length - 1, f = 0 === f ? 1 : f, f += b.length - 3 * f) : f = b.length;
        b = (0.001 * 0.7325 * parseInt(f)).toFixed(2);
        0 < parseInt(b) ? (parseFloat(b) > parseFloat(originalSize) && (resultFileData = c.src, b = originalSize, jQuery("#btn-upload-" + a).css("display", "block"), jQuery("#btn-upload-compress-" + a).css("display", "none")), document.getElementById("filesizeresult-" + a).innerHTML = b + " Kb") : (jQuery("#btn-upload-compress-" + a).css("display", "none"),
            jQuery("#compressionResult-" + a).css("display", "none"), jQuery("#btn-upload-" + a).css("display", "block"), alert(getResource(!1, "notPossibleCompress")))
    }
}
function checkIe() {
    var a = window.navigator.userAgent, b = a.indexOf("MSIE "), a = a.indexOf("Trident/");
    return -1 < b || -1 < a ? !0 : !1
}
function sendFile(a, b, c) {
    var d = $("#response" + b), e = d.attr("dataMaxSize"), e = parseInt(e);
    if (d.get(0).files.length) {
        d = d.get(0).files[0].size;
        if (d > e) {
            alert(getResource(!1, "fileSizeLimit") + " " + getMegabBytes(e) + "MB");
            closeUploadDiv(b);
            return
        }
        if (verifyTotalSize(d)) {
            alert(getResource(!1, "fileSizeNotAllowd"));
            closeUploadDiv(b);
            $("#form-" + b).removeClass("hide-item");
            return
        }
    }
    handleFileOffline(a, b, c)
}
function sendFileCompress(a, b, c) {
    if ("1" === c) {
        c = "";
        var d = document.getElementById("response" + b);
        d.files && d.files[0] && (file = d.files[0], c = file.name);
        if ("" !== document.getElementById("response" + b).value) {
            var d = document.getElementById("img-" + b), e = document.createElement("canvas");
            e.width = d.naturalWidth;
            e.height = d.naturalHeight;
            e.getContext("2d").drawImage(d, 0, 0);
            d = e.toDataURL("image/jpeg", $imageCompressionRatio / 100);
            void 0 === XMLHttpRequest.prototype.sendAsBinary && (XMLHttpRequest.prototype.sendAsBinary = function (a) {
                a =
                    Array.prototype.map.call(a, function (a) {
                        return a.charCodeAt(0) & 255
                    });
                this.send((new Uint8Array(a)).buffer)
            });
            var d = dataURItoBlob(d), e = $("#response" + b).attr("dataMaxSize"), e = parseInt(e), h = d.size;
            h > e ? (alert(getResource(!1, "fileSizeLimit") + " " + getMegabBytes(e) + "MB"), closeUploadDiv(b), a = $("#form-" + b), a.removeClass("hide-item")) : verifyTotalSize(h) ? (alert(getResource(!1, "fileSizeNotAllowd")), closeUploadDiv(b), a = $("#form-" + b), a.removeClass("hide-item")) : ($("#form-" + b).addClass("hide-item"), group = document.getElementById("div-uploading-" +
                b), group.className = "showMore", group = document.getElementById("div-nofile-" + b), group.className = "showLess", c = blobToFile(d, c), $("#response" + b)[0].files, handleFileOfflineCompress(a, b, c))
        } else group = document.getElementById("div-nofile-" + b), group.className = "showMore"
    } else handleFileOffline(a, b, c)
}
function verifyTotalSize(a) {
    var b;
    b = jQuery.parseJSON(window.localStorage.getItem(getId() + "rp"));
    b = void 0 !== b && null !== b ? b : $currentCheckList;
    for (var c = 0, d = 0; d < b.groups.length; d++)for (var e = 0; e < b.groups[d].items.length; e++) {
        var h = b.groups[d].items[e];
        "IMAGE" === h.type && void 0 !== h.uploadedData && (c += h.uploadedData.fileSize);
        for (var m = 0; m < h.children.length; m++) {
            var k = h.children[m];
            "IMAGE" === k.type && void 0 !== k.uploadedData && (c += k.uploadedData.fileSize)
        }
    }
    return c + a > $fileUploadLimit ? !0 : !1
}
function blobToFile(a, b) {
    a.lastModifiedDate = new Date;
    a.name = b;
    return a
}
function dataURItoBlob(a) {
    var b;
    b = 0 <= a.split(",")[0].indexOf("base64") ? atob(a.split(",")[1]) : unescape(a.split(",")[1]);
    a = a.split(",")[0].split(":")[1].split(";")[0];
    for (var c = new Uint8Array(b.length), d = 0; d < b.length; d++)c[d] = b.charCodeAt(d);
    return new Blob([c], {type: a})
}
function checkfileImage(a, b, c) {
    c = ".jpg .JPG .gif .GIF .png .PNG .jpeg .JPEG".split(" ");
    b = b.value;
    b = b.substring(b.lastIndexOf("."));
    if (0 > c.indexOf(b))return alert(getResource(!1, "checklistInvalidTypes") + c.toString()), a = $("#response" + a), reset(a), !1;
    openUploadDiv(a);
    return !0
}
function checkfileDocument(a, b, c) {
    c = ".doc .DOC .docx .DOCX .ppt .PPT .pptx .PPTX .xls .XLS .xlsx .XLSX .pdf .PDF .txt .TXT .rtf .RTF".split(" ");
    b = b.value;
    b = b.substring(b.lastIndexOf("."));
    if (0 > c.indexOf(b))return alert(getResource(!1, "checklistInvalidTypes") + c.toString()), a = $("#response" + a), reset(a), !1;
    openUploadDiv(a);
    return !0
}
function appendFileName(a) {
    var b = document.getElementById("response" + a).value;
    if (b) {
        var c = 0 <= b.indexOf("\\") ? b.lastIndexOf("\\") : b.lastIndexOf("/"), b = b.substring(c);
        if (0 === b.indexOf("\\") || 0 === b.indexOf("/"))b = b.substring(1);
        jQuery("\x3cspan/\x3e", {
            text: getResource(!1, "fileTitle") + ": " + b,
            style: "color: black; text-decoration: none;padding: 4px;font-size: 14px;font-weight: bold"
        }).appendTo("#prompt-s-" + a).before(jQuery("\x3cbr/\x3e"))
    }
}
function closeUploadDiv(a) {
    var b = $("#response" + a);
    reset(b);
    $("#fileCompressingPrompt-" + a).remove();
    $("#compressedPrompt-" + a).remove();
    $("#preview-button-div-" + a).remove();
    $("#compressionResult-" + a).remove();
    $("#img-" + a).remove();
    $("#imgresult-" + a).remove();
    $("#filled" + a).remove();
    jQuery("#uploadDiv-" + a).css("display", "none")
}
function createPrompt(a, b) {
    var c = jQuery("\x3cdiv\x3e", {"class": "prompt-cell"}), d = "prompt" + a.copyId, e = jQuery("\x3cspan\x3e", {class: d}), h = isNotUndefined(a.itemVisibleConditionId) ? " is-conditional-visible" : "", m = isNotUndefined(a.itemMandatoryConditionId) ? " is-conditional-mandatory" : "", k = jQuery("\x3clabel\x3e", {
        "class": "prompt-label " + d + h + m,
        colspan: a.colspan,
        itemId: a.copyId,
        mandatoryParent: a.itemMandatoryConditionId,
        visibleParent: a.itemVisibleConditionId,
        text: a.prompt
    }), d = jQuery("\x3clabel\x3e", {
        text: "*",
        "class": "mandatory-text-sign " + (a.mandatory ? "" : "hide-item")
    });
    k.append(d);
    k.append(addTooltips(a));
    isEmpty(a.children) && (e.prepend(k), c.append(e), addItemToGroup(c, b));
    if (isNotUndefined(a.children)) {
        var f = !1;
        $.each(a.children, function (d, h) {
            switch (h.type) {
                case "TEXT_BOX":
                    f || (k.attr("for", "response" + h.copyId), e.prepend(k), c.append(e), addItemToGroup(c, b), f = !0);
                    var l = createTextBox(h);
                    addItemToGroup(l, b);
                    break;
                case "RADIO_BUTTON":
                    f || (e.prepend(k), l = jQuery("\x3cinput\x3e", {
                        type: "hidden", id: "radio" + a.copyId,
                        visiblecondition: "", mandatorycondition: "", "class": "radio-values"
                    }), c.append(l), c.append(e), addItemToGroup(c, b), f = !0);
                    "0" !== h.defaultValue && (isNotUndefined(h.itemMandatoryConditionListId) && b.find("div input#radio" + h.parentId).attr("mandatoryCondition", h.itemMandatoryConditionListId.toString()), isNotUndefined(h.itemVisibleConditionListId) && b.find("div input#radio" + h.parentId).attr("visibleCondition", h.itemVisibleConditionListId.toString()));
                    addItemToGroup(createRadioButton(h), b);
                    break;
                case "CHECK_BOX_ITEM":
                    f ||
                    (e.prepend(k), c.append(e), addItemToGroup(c, b), f = !0);
                    addItemToGroup(createCheckBox(h), b);
                    break;
                case "COMBO_BOX_ITEM":
                    f || (e.prepend(k), c.append(e), addItemToGroup(c, b), addItemToGroup(createCombo(a.children), b), f = !0);
                    break;
                case "IMAGE":
                    f || (e.prepend(k), c.append(e), addItemToGroup(c, b), f = !0), addItemToGroup(createFile(h), b)
            }
        })
    }
}
function showPrompt(a) {
    showOrHidePrompt(a, !1)
}
function hidePrompt(a) {
    showOrHidePrompt(a, !0)
}
function showOrHidePrompt(a, b) {
    var c = $(".prompt" + a.copyId);
    b ? c.addClass("hide-item") : c.removeClass("hide-item")
}
function turnOnPromptMandatory(a) {
    turnPromptOnOrOff(a, !1)
}
function turnOffPromptMandatory(a) {
    turnPromptOnOrOff(a, !0)
}
function turnPromptOnOrOff(a, b) {
    var c = $(".prompt" + a.copyId + " .mandatory-text-sign");
    b ? c.addClass("hide-item") : c.removeClass("hide-item");
    isNotUndefined(a.children) && $.each(a.children, function (a, c) {
        switch (c.type) {
            case "TEXT_BOX":
            case "IMAGE":
            case "RADIO_BUTTON":
                if (b) {
                    $("#response" + c.copyId).removeClass("required");
                    var h = $("[for\x3d'response" + c.copyId + "'].mandatory-text-sign");
                    0 < h.length && h.addClass("hide-item")
                } else $("#response" + c.copyId).addClass("required")
        }
    })
}
function createRadioButton(a, b) {
    var c = findItem(a.parentId), d = "prompt" + a.parentId, e = jQuery("\x3cdiv\x3e", {"class": "radio-cell"}), c = jQuery("\x3cinput\x3e", {
        id: "response" + a.copyId,
        type: "radio",
        name: "radiogroup" + a.parentId,
        itemId: a.copyId,
        parentId: "" + a.parentId,
        disabled: a.disabled,
        "class": "radio-button-input " + (c.mandatory ? " required " : "") + d
    });
    $closedActivation && c.attr("disabled", "disabled");
    "0" !== a.defaultValue && c.prop("checked", !0);
    isNotUndefined(a.itemMandatoryConditionListId) && c.attr("mandatoryCondition",
        a.itemMandatoryConditionListId.toString());
    isNotUndefined(a.itemVisibleConditionListId) && c.attr("visibleCondition", a.itemVisibleConditionListId.toString());
    d = jQuery("\x3clabel\x3e", {"for": "response" + a.copyId, "class": "radio-button-label " + d, text: a.prompt});
    e.append(c);
    e.append(d);
    return e
}
function createTableCell(a) {
    var b = jQuery("\x3cdiv\x3e", {}), c = isNotUndefined(a.itemVisibleConditionId) ? " is-conditional-visible" : "", d = isUndefined(a.inputType) ? "" : " input" + a.inputType, e = jQuery("\x3cspan\x3e", {
        text: a.defaultValue,
        visibleParent: a.itemVisibleConditionId,
        id: "response" + a.copyId,
        "class": "inactive-file "
    });
    a = jQuery("\x3cinput\x3e", {
        id: "response" + a.copyId,
        type: "text",
        itemId: a.copyId,
        visibleParent: a.itemVisibleConditionId,
        value: a.defaultValue,
        style: "padding: 6px 0px !important;",
        "class": "table-cell-input ui-inputtext ui-widget ui-state-default ui-corner-all" +
        c + d
    });
    $closedActivation ? b.append(e) : b.append(a);
    return b
}
function showTableCell(a) {
    showOrHideTableCell(a, !1)
}
function hideTableCell(a) {
    showOrHideTableCell(a, !0)
}
function showOrHideTableCell(a, b) {
    var c = $("#response" + a.copyId);
    b ? c.addClass("hide-item") : c.removeClass("hide-item")
}
function createTableHeader(a, b, c) {
    b = jQuery("\x3cdiv\x3e", {id: "divp_g" + b + "_c" + c, style: "clear:both; margin-bottom: 10px;"});
    var d = isNotUndefined(a.itemVisibleConditionId) ? " is-conditional-visible" : "";
    c = jQuery("\x3cdiv\x3e", {
        id: "tablehc" + a.copyId,
        "class": "table-header-cell",
        style: "padding-top: 7px; padding-bottom: 7px;"
    });
    a = jQuery("\x3cspan\x3e", {
        id: "tableHeader" + a.copyId,
        itemId: a.copyId,
        visibleParent: a.itemVisibleConditionId,
        text: a.prompt,
        "class": "table-header-text" + d,
        style: "padding: 6px 0px !important;"
    });
    c.append(a);
    b.append(c);
    return b
}
function showTableHeader(a) {
    showOrHideTableHeader(a, !1)
}
function hideTableHeader(a) {
    showOrHideTableHeader(a, !0)
}
function showOrHideTableHeader(a, b) {
    var c = $("#tableHeader" + a.copyId), d = $("#tablehc" + a.copyId);
    b ? (c.addClass("hide-item"), c.closest("div").removeClass("table-header"), d.addClass("hide-item")) : (c.removeClass("hide-item"), c.closest("div").addClass("table-header"), d.removeClass("hide-item"))
}
function createTextBox(a) {
    var b = jQuery("\x3cdiv\x3e", {});
    0 < a.promptCols ? (a = assembleLabeledTextBox(a), b.addClass("textbox-labeled-cell")) : (a = assembleSimpleTextBox(a), b.addClass("textbox-simple-cell"));
    b.append(a);
    return b
}
function assembleSimpleTextBox(a) {
    var b = findItem(a.parentId), c = " ";
    isNotUndefined(a.parentId) && (c = "prompt" + a.parentId);
    var c = jQuery("\x3cdiv\x3e", {"class": "textbox-container " + c}), d = isNotUndefined(a.itemVisibleConditionId) && isUndefined(a.parentId) ? " is-conditional-visible " : "", e = isNotUndefined(a.itemMandatoryConditionId) && isUndefined(a.parentId) ? " is-conditional-mandatory " : "", h = isNotUndefined(b) && b.mandatory ? " required " : "", m = isUndefined(a.inputType) ? "" : " input" + a.inputType, b = jQuery("\x3cspan\x3e",
        {
            text: a.defaultValue,
            id: "response" + a.copyId,
            visibleParent: a.itemVisibleConditionId,
            "class": "inactive-simple-textbox"
        }), d = jQuery("\x3cinput\x3e", {
        id: "response" + a.copyId,
        itemId: a.copyId,
        mandatoryParent: a.itemMandatoryConditionId,
        visibleParent: a.itemVisibleConditionId,
        "class": "textbox-input ui-inputtext ui-widget ui-state-default ui-corner-all" + d + e + h + m,
        disabled: a.disabled,
        value: a.defaultValue,
        style: "margin-bottom: 10px;"
    }), e = jQuery("\x3clabel\x3e", {
        text: "*",
        "for": "response" + a.copyId,
        "class": "mandatory-text-sign hide-item"
    });
    a.mandatory && isUndefined(a.parentId) && (d.addClass("required"), d.addClass("textbox-input-single"), e.removeClass("hide-item"), e.removeClass("mandatory-text-sign"), e.addClass("mandatory-text-sign-single"));
    isUndefined(a.parentId) && c.append(e);
    $closedActivation ? c.append(b) : c.append(d);
    return c
}
function assembleLabeledTextBox(a) {
    var b = " ";
    isNotUndefined(a.parentId) && (b = "prompt" + a.parentId);
    var b = jQuery("\x3cdiv\x3e", {
            "class": "textbox-table-container " + b,
            style: "padding-top: 7px; padding-bottom: 7px; background-color: #e6e6e6; clear: both; margin-bottom: 10px !important;"
        }), c = jQuery("\x3cdiv\x3e", {"class": "textbox-table"}), d = jQuery("\x3cdiv\x3e", {"class": "textbox-table"}), e = jQuery("\x3cspan\x3e", {"class": "textbox-table-span-container prompt-cell"}), h = jQuery("\x3cdiv\x3e", {"class": "textbox-table-block-container"}),
        m = "prompt" + a.copyId, k = isNotUndefined(a.itemVisibleConditionId) ? " is-conditional-visible" : "", f = isNotUndefined(a.itemMandatoryConditionId) ? " is-conditional-mandatory" : "", m = jQuery("\x3clabel\x3e", {
            "for": "response" + a.copyId,
            "class": "prompt-label " + m + k + f,
            style: "padding-left: 2px;",
            text: a.prompt
        });
    m.append(addTooltips(a));
    var q = jQuery("\x3cdiv\x3e", {"class": "textbox-table"}), k = isNotUndefined(a.itemVisibleConditionId) && isUndefined(a.parentId) ? " is-conditional-visible" : "", f = isNotUndefined(a.itemMandatoryConditionId) &&
    isUndefined(a.parentId) ? " is-conditional-mandatory" : "", n = isUndefined(a.inputType) ? "" : " input" + a.inputType, l = a.mandatory ? " required " : "", p = jQuery("\x3cspan\x3e", {
        text: a.defaultValue,
        id: "response" + a.copyId,
        visibleParent: a.itemVisibleConditionId,
        "class": "inactive-textbox"
    }), k = jQuery("\x3cinput\x3e", {
        id: "response" + a.copyId,
        itemId: a.copyId,
        mandatoryParent: a.itemMandatoryConditionId,
        visibleParent: a.itemVisibleConditionId,
        "class": "textbox-input labeled-textbox-input ui-inputtext ui-widget ui-state-default ui-corner-all" +
        k + f + l + n,
        disabled: a.disabled,
        value: a.defaultValue
    });
    h.append(m);
    e.append(h);
    d.append(e);
    c.append(d);
    d = jQuery("\x3clabel\x3e", {text: "*", "for": "response" + a.copyId, "class": "mandatory-text-sign hide-item"});
    a.mandatory && isUndefined(a.parentId) && (d.removeClass("hide-item"), k.addClass("required"));
    isUndefined(a.parentId) && m.append(d);
    $closedActivation ? q.append(p) : q.append(k);
    c.append(q);
    b.append(c);
    return b
}
function showTextBox(a) {
    showOrHideTextBox(a, !1)
}
function hideTextBox(a) {
    showOrHideTextBox(a, !0)
}
function showOrHideTextBox(a, b) {
    var c = $("#response" + a.copyId);
    b ? (c.hasClass("labeled-textbox-input") || c.hasClass("textbox-label"), c.closest("div").addClass("hide-item")) : (c.hasClass("labeled-textbox-input"), c.closest("div").removeClass("hide-item"));
    c = $(".prompt" + a.copyId);
    b ? (c.addClass("hide-item"), c.closest("span").addClass("hide-item")) : (c.removeClass("hide-item"), c.closest("span").removeClass("hide-item"))
}
function turnOnTextBoxMandatory(a) {
    turnTextBoxOnOrOff(a, !1)
}
function turnOffTextBoxMandatory(a) {
    turnTextBoxOnOrOff(a, !0)
}
function turnTextBoxOnOrOff(a, b) {
    var c = $("#response" + a.copyId);
    if (0 < a.promptCols) {
        var d;
        d = c.hasClass("labeled-textbox-input") ? c.parent().siblings().find(".mandatory-text-sign") : c.parent().siblings().children()[1];
        b ? (c.removeClass("required"), jQuery(d).addClass("hide-item")) : (c.addClass("required"), jQuery(d).removeClass("hide-item"))
    } else b ? (c.siblings().removeClass("mandatory-text-sign-single"), c.siblings().addClass("mandatory-text-sign hide-item"), c.removeClass("textbox-input-single required")) :
        (c.siblings().removeClass("mandatory-text-sign hide-item"), c.siblings().addClass("mandatory-text-sign-single"), c.addClass("textbox-input-single required"))
}
var validationMessage = "";
function startChecklist() {
    console.log($currentCheckList);
    createGroups($currentCheckList.groups, $checklistPanel);
    loadEvents();
    $("a.tooltip-image").on("click", function () {
        $(".tooltipId").val($(this).attr("uploadId"));
        $(".tooltipProjectId").val($(this).attr("projectId"));
        $(".downloadTooltip").click()
    });
    $(".inputTEXT").bind("input propertychange", function () {
        $(this).val().substring($(this).val().length - 1).match(/[\d]/g) && $(this).val($(this).val().substring(0, $(this).val().length - 1))
    });
    $(".inputNUMERIC").bind("input propertychange",
        function () {
            $(this).val().substring($(this).val().length - 1).match(/[\d\s]/g) || $(this).val($(this).val().substring(0, $(this).val().length - 1))
        });
    $(".inputDECIMAL").bind("input propertychange", function () {
        var a = $(this).val().substring($(this).val().length - 1), b = $(this).val().substring(0, $(this).val().length - 1), c = !1;
        "." === a && -1 < b.indexOf(".") && (c = !0);
        c || -1 !== $(this).val().indexOf(".") && (c = 2 < $(this).val().split(".")[1].length);
        a.match(/[\d.\s]/g) && !c || $(this).val($(this).val().substring(0, $(this).val().length -
            1))
    });
    $(".inputTEXT").bind("paste", function (a) {
        a.preventDefault()
    });
    $(".inputNUMERIC").bind("paste", function (a) {
        a.preventDefault()
    });
    $(".inputDECIMAL").bind("paste", function (a) {
        a.preventDefault()
    });
    refreshItems();
    $closedActivation && checkForSpanToHide();
    showOrHideRow();
    $("#checklist-form").accordion({collapsible: !0, heightStyle: "content"})
}
function saveValidChecklist() {
    if (0 !== validateMandatory())return alert(validationMessage), !1;
    saveChecklistAsDraft();
    $checklistOffline ? window.location.href = "/mportal/offline/wodetailOff.jsf" : $("#checklistForm\\:saveBtnAction").click()
}
function validateMandatory() {
    var a = 0;
    validationMessage = "";
    $("input[id^\x3d'response']:text.required").not(".table-cell-input").each(function () {
        var b = $(this), d = findItem(parseInt(b.attr("itemId")));
        !b.parent().hasClass("hide-item") && isEmpty(b.val()) ? (b.addClass("ui-state-error"), error(d), a++) : b.removeClass("ui-state-error")
    });
    $(".file-input-required").each(function () {
        var b = $(this), d = findItem(parseInt(b.attr("itemId")));
        b.closest("form").hasClass("hide-item") ? b.removeClass("ui-state-error") : (b.addClass("ui-state-error"),
            error(isUndefined(d.parentId) ? d : findItem(d.parentId)), a++)
    });
    var b = [];
    $(":radio.required").each(function () {
        var a = $(this), a = findItem(parseInt(a.attr("itemId"))), d = $(this).attr("name");
        $("[name\x3d'" + d + "']").is(":checked") ? $(this).parent().removeClass("ui-state-error") : ($(this).parent().addClass("ui-state-error"), -1 === $.inArray(d, b) && (b.push($(this).attr("name")), error(isUndefined(a.parentId) ? a : findItem(a.parentId))))
    });
    return a
}
function saveDraft() {
    var a = jQuery.parseJSON(window.localStorage.getItem("id")), b = createChecklistJson(a, !1);
    window.localStorage.setItem(a + "rp", b);
    storeChecklistDraft()
}
function error(a) {
    a = "- " + a.prompt + ": " + $validationMessage;
    validationMessage += a + "\n";
    console.log(a)
}
function errorInput() {
    validationMessage += $invalidInputType + "\n"
}
function saveChecklistAsDraft() {
    copyValuesToHiddenVar();
    $("#checklistForm\\:saveBtnAction").click()
}
function copyValuesToHiddenVar() {
    getAllChecklistValues();
    if ($checklistOffline) {
        var a = jQuery.parseJSON(window.localStorage.getItem("id"));
        window.localStorage.setItem(a + "rp", JSON.stringify($currentCheckList));
        storeChecklistSave()
    } else document.getElementById("checklistForm:answeredCheckList").value = JSON.stringify($currentCheckList)
}
function storeChecklistOnUpload() {
    getAllChecklistValues();
    var a = jQuery.parseJSON(window.localStorage.getItem("id"));
    window.localStorage.setItem(a + "rp", JSON.stringify($currentCheckList));
    var b = jQuery.parseJSON(window.localStorage.getItem("clDraft_" + getLoggedUser())), a = getId();
    if (null !== b) {
        var c = {};
        c.id = a;
        c.checklist = window.localStorage.getItem(getId() + "rp");
        c.datetime = getUtcDate();
        for (var d = !0, e = 0; e < b.length; e++)b[e].id === a && (b[e] = c, d = !1);
        d && (b[b.length] = c);
        window.localStorage.setItem("clDraft_" + getLoggedUser(),
            JSON.stringify(b))
    } else c = {}, c.id = a, c.checklist = window.localStorage.getItem(getId() + "rp"), c.datetime = getUtcDate(), a = [], a[0] = c, window.localStorage.setItem("clDraft_" + getLoggedUser(), JSON.stringify(a))
}
function copyValuesToHiddenVarDraftOffline() {
    getAllChecklistValues();
    if ($checklistOffline) {
        var a = jQuery.parseJSON(window.localStorage.getItem("id"));
        window.localStorage.setItem(a + "rp", JSON.stringify($currentCheckList));
        storeChecklistDraft()
    } else document.getElementById("checklistForm:answeredCheckList").value = JSON.stringify($currentCheckList)
}
function getAllChecklistValues() {
    $("[id^\x3d'response']").each(function () {
        var a = findItem(parseInt($(this).attr("itemid"))), b = $(this);
        b.is(":input:text") ? a.defaultValue = b.val().replace(/\"/g, '\\"') : b.is(":input:radio") ? a.defaultValue = b.is(":checked") ? 1 : 0 : b.is(":input:checkbox") && (a.defaultValue = b.is(":checked") ? 1 : 0);
        isNotUndefined(a.fileType) && delete a.fileType
    });
    $("#checklist-form option.QUERY:selected").each(function () {
        var a, b = $(this);
        a = findItem(parseInt(b.attr("itemId").split("_")[0]));
        a.prompt =
            b.val();
        a.defaultValue = 1;
        b = findItem(parseInt(b.attr("parentId")));
        for (i in b.children)0 < i && (b.children[i].defaultValue = 0);
        isNotUndefined(a) && isNotUndefined(a.fileType) && delete a.fileType
    });
    $("#checklist-form option.MANUAL").each(function () {
        var a = findItem(parseInt($(this).attr("itemId"))), b = $(this);
        a.defaultValue = b.is(":selected") ? 1 : 0;
        isNotUndefined(a) && isNotUndefined(a.fileType) && delete a.fileType
    })
}
function checkForSpanToHide() {
    $("#checklist-form span.inactive-file").each(function () {
        var a = $(this).attr("visibleParent");
        isNotUndefined(a) && !$("#response" + a).is(":checked") && $(this).addClass("hide-item")
    });
    $("#checklist-form span.inactive-textbox").each(function () {
        var a = $(this).attr("visibleParent");
        isNotUndefined(a) && !$("#response" + a).is(":checked") && $(this).closest("table").addClass("hide-item")
    });
    $("#checklist-form span.inactive-simple-textbox").each(function () {
        var a = $(this).attr("visibleParent");
        isNotUndefined(a) && !$("#response" + a).is(":checked") && $(this).parent().addClass("hide-item")
    })
}
function setCurrentCheckList(a) {
    $currentCheckList = jQuery.parseJSON(a)
}
function setCurrentCheckListOff(a) {
    $currentCheckList = a
}
function setActivationId(a) {
    $activationId = a
}
function setClosedActivation(a) {
    $closedActivation = a
}
function setResponseId(a) {
    $responseId = a
}
function setUploadFileLabel(a) {
    $uploadFileLabel = a
}
function setChecklistPanel(a) {
    $checklistPanel = a
}
function setDownloadFileLabel(a) {
    $downloadFileLabel = a
}
function setDeleteFileLabel(a) {
    $deleteFileLabel = a
}
function setValidationMessage(a) {
    $validationMessage = a
}
function setInvalidInputType(a) {
    $invalidInputType = a
}
function setCompressionRation(a) {
    $imageCompressionRatio = a
}
function setFileUploadLimit(a) {
    $fileUploadLimit = a
}
function setChecklistOffline(a) {
    $checklistOffline = a
}
function setIosVersion(a) {
    $isIOS8 = a
}
function refreshItems() {
    var a = "", b = "";
    $(".is-conditional-visible").each(function () {
        $("#response" + $(this).attr("visibleparent")).is(":checked") ? a += $(this).attr("itemId") + "," : b += $(this).attr("itemId") + ","
    });
    var c = "", d = "";
    $(".is-conditional-mandatory").each(function () {
        $("#response" + $(this).attr("mandatoryparent")).is(":checked") ? c += $(this).attr("itemId") + "," : d += $(this).attr("itemId") + ","
    });
    isNotBlank(a) && showOrHideItems(a.substring(0, a.length - 1).split(","), !0);
    isNotBlank(b) && showOrHideItems(b.substring(0,
        b.length - 1).split(","), !1);
    isNotBlank(c) && turnMandatoryOnOrOff(c.substring(0, c.length - 1).split(","), !0);
    isNotBlank(d) && turnMandatoryOnOrOff(d.substring(0, d.length - 1).split(","), !1)
}
function loadEvents() {
    loadCheckboxVisibleCondition();
    loadCheckboxMandatoryCondition();
    watchRadio()
}
function watchRadio() {
    $(":radio").on("change", function () {
        var a = $("#radio" + $(this).attr("parentId")), b = $(this).attr("visiblecondition"), c = $(this).attr("mandatorycondition");
        loadRadioVisibleConditions(a, b);
        loadRadioMandatoryConditions(a, c)
    })
}
function loadRadioVisibleConditions(a, b) {
    var c = a.attr("visiblecondition");
    isNotUndefined(c) && isNotBlank(c) && (c = a.attr("visiblecondition").split(","), showOrHideItems(c, !1));
    c = isNotUndefined(b) && isNotBlank(b) ? b.split(",") : void 0;
    isNotUndefined(c) && showOrHideItems(c, !0);
    a.attr("visiblecondition", c);
    showOrHideRow()
}
function loadRadioMandatoryConditions(a, b) {
    var c = a.attr("mandatorycondition");
    isNotUndefined(c) && isNotBlank(c) && (c = a.attr("mandatorycondition").split(","), turnMandatoryOnOrOff(c, !1));
    c = isNotUndefined(b) && isNotBlank(b) ? b.split(",") : void 0;
    isNotUndefined(c) && turnMandatoryOnOrOff(c, !0);
    a.attr("mandatorycondition", c)
}
function loadCheckboxVisibleCondition() {
    $(".check-box-input").on("change", function () {
        var a = $(this).is(":checked"), b = $(this).attr("visibleCondition");
        isNotUndefined(b) && showOrHideItems(b.split(","), a);
        showOrHideRow()
    })
}
function loadCheckboxMandatoryCondition() {
    $(".check-box-input").on("change", function () {
        var a = $(this).is(":checked"), b = $(this).attr("mandatoryCondition");
        isNotUndefined(b) && turnMandatoryOnOrOff(b.split(","), a)
    })
}
function showOrHideItems(a, b) {
    for (i in a) {
        var c = findItem(parseInt(a[i]));
        if (void 0 !== c)switch (c.type) {
            case "PROMPT":
                b ? showPrompt(c) : hidePrompt(c);
                break;
            case "TEXT_BOX":
                b ? showTextBox(c) : hideTextBox(c);
                break;
            case "IMAGE":
                b ? showImage(c) : hideImage(c);
                break;
            case "TABLE_CELL":
                b ? showTableCell(c) : hideTableCell(c);
                break;
            case "TABLE_HEADER":
                b ? showTableHeader(c) : hideTableHeader(c)
        }
    }
}
function turnMandatoryOnOrOff(a, b) {
    for (i in a) {
        var c = findItem(parseInt(a[i]));
        if (void 0 !== c)switch (c.type) {
            case "PROMPT":
                b ? turnOnPromptMandatory(c) : turnOffPromptMandatory(c);
                break;
            case "TEXT_BOX":
                b ? turnOnTextBoxMandatory(c) : turnOffTextBoxMandatory(c);
                break;
            case "IMAGE":
                b ? turnOnFileMandatory(c) : turnOffFileMandatory(c)
        }
    }
}
function showOrHideRow() {
    $(".form-content").each(function () {
        var a = $(this), b = $(this).children(), c = 0, d = b.length;
        $(b).each(function () {
            var a = $(this);
            switch (a.attr("class")) {
                case "prompt-cell":
                    0 < a.find("span.hide-item").length && c++;
                    break;
                case "textbox-simple-cell":
                    0 < a.find("div.hide-item").length && c++;
                    break;
                case "table-header-cell":
                    0 < a.find("span.hide-item").length && c++;
                    break;
                case "table-cell-cell":
                    (0 < a.find("input.hide-item").length || 0 < a.find("span.hide-item").length) && c++;
                    break;
                case "check-cell":
                case "radio-cell":
                    0 <
                    a.find("input.hide-item").length && c++;
                    break;
                case "combo-cell":
                    (0 < a.find("select.hide-item").length || 0 < a.find("span:first.hide-item").length) && c++;
                    break;
                case "empty-cell":
                    c++;
                    break;
                case "textbox-labeled-cell":
                    0 < a.find("table.hide-item").length && c++;
                    break;
                case "file-simple-cell":
                    0 < a.find("div:first.hide-item").length && c++;
                    break;
                case "file-labeled-cell":
                    0 < a.find("table.hide-item").length && c++
            }
        });
        c === d ? a.addClass("hide-item") : a.removeClass("hide-item")
    })
}
function createGroups(a, b) {
    $(a).each(function () {
        var a = $(this)[0];
        isEmpty(a.children) ? createGroup(a, b) : (createGroup(a, b), createGroups(a.children, b))
    })
}
function createGroup(a, b) {
    var c = jQuery("\x3ch3\x3e", {"class": "group-header"}), d = jQuery("\x3cspan\x3e", {
        text: isBlank(a.title) ? "-" : a.title,
        "class": "group-title"
    }), e = jQuery("\x3cdiv\x3e", {id: "group-" + a.copyId}), h = createGroupTable(a);
    createItems(a.items, h);
    c.append(d);
    e.append(h);
    b.append(c);
    b.append(e)
}
function createGroupTable(a) {
    a = jQuery("\x3ctable\x3e", {
        width: "99%",
        cellspacing: 5,
        id: "tb-content-" + a.copyId,
        "class": "table-group-container",
        columns: split(a.columnsWidths, ",").length
    });
    var b = jQuery("\x3ctr\x3e", {"class": "contract"});
    a.append(b);
    return a
}
function getGroup(a) {
    return findGroup(a, $currentCheckList.groups)
}
function findGroup(a, b) {
    var c;
    for (g in b) {
        var d = b[g];
        d.copyId === a ? c = d : isNotUndefined(d.children) && (c = findGroup(a, d.children));
        if (isNotUndefined(c))return c
    }
}
function createItems(a, b) {
    headers = [];
    divs = [];
    headerCountMulti = 0;
    isTableMultiHeader = counterOver = !1;
    headerCount = 0;
    cells = [];
    colWidthCounter = itemCountTotal = itemCount = cellCount = 0;
    colWidthDone = !1;
    void 0 !== a && (itemCountTotal = a.length);
    for (iT in a) {
        var c = a[iT];
        switch (c.type) {
            case "TABLE_HEADER":
                counterOver ? (isTableMultiHeader = !0, counterOver = !1) : (headerCountMulti += c.colspan, colWidthDone || colWidthCounter++);
                break;
            case "EMPTY":
                counterOver || (headerCountMulti += c.colspan);
                break;
            case "TABLE_CELL":
                counterOver && (counterOver =
                    isTableMultiHeader = !1)
        }
        c = parseInt(b.attr("columns"));
        headerCountMulti >= c && !counterOver && (colWidthDone = counterOver = !0, headerCountMulti = 0)
    }
    var d = -1, e = !1;
    for (i in a) {
        itemCount++;
        var c = a[i], h;
        switch (c.type) {
            case "PROMPT":
                h = createPrompt(c, b);
                break;
            case "TEXT_BOX":
                h = createTextBox(c);
                break;
            case "TABLE_CELL":
                isTableMultiHeader ? (cells[cellCount] = c, cellCount += 1) : (h = createTableCell(c), -1 === d && (d = 0), divs[d].append(h), d++, d === headers.length && (d = 0));
                break;
            case "TABLE_HEADER":
                if (isTableMultiHeader)e = !0, headers[headerCount] =
                    c.prompt; else {
                    headers[headerCount] = c.prompt;
                    var m = b.attr("id");
                    h = createTableHeader(c, m, headerCount);
                    divs[headerCount] = h;
                    b.append(h)
                }
                headerCount += 1;
                break;
            case "EMPTY":
                h = createEmpty(c);
                break;
            case "IMAGE":
                h = createFile(c)
        }
        if (e && isTableMultiHeader && ("TABLE_HEADER" !== c.type && "TABLE_CELL" !== c.type && "EMPTY" !== c.type || isTableMultiHeader && itemCount === itemCountTotal)) {
            var e = !1, k = 0, m = b.attr("id");
            for (x = colWidthCounter; x < headers.length; x++)for (i = 1; i < colWidthCounter; i++) {
                if (0 === $("#divp_g" + m + "_c" + i + "x" + x).length) {
                    var f =
                        jQuery("\x3cdiv/\x3e", {
                            id: "divp_g" + m + "_c" + i + "x" + x,
                            style: "clear:both; margin-bottom: 10px;"
                        });
                    b.append(f);
                    var q = jQuery("\x3cdiv/\x3e", {
                        id: "divp_g" + m + "_c" + i + "x" + x,
                        "class": "table-header-cell",
                        style: "padding-top: 7px; padding-bottom: 7px;"
                    });
                    f.append(q);
                    var n = jQuery("\x3cspan/\x3e", {
                        id: "sp" + c.copyId,
                        text: headers[x] + " / " + headers[i],
                        "class": "table-header-text",
                        style: "padding: 6px 0px !important;"
                    });
                    q.append(n)
                }
                var l = cells[k], q = l.copyId, n = l.defaultValue, p = l.disabled;
                "undefined" === typeof n && (n = "");
                k++;
                l =
                    jQuery("\x3cdiv/\x3e");
                q = jQuery("\x3cinput\x3e").attr({
                    id: "response" + q,
                    itemid: q,
                    type: "text",
                    disabled: p ? !0 : !1,
                    value: n,
                    style: "padding: 6px 0px !important;",
                    "class": "table-cell-input ui-inputtext ui-widget ui-state-default ui-corner-all"
                });
                l.append(q);
                f.append(l)
            }
        }
        "PROMPT" != c.type && "TABLE_HEADER" != c.type && "TABLE_CELL" != c.type && addItemToGroup(h, b)
    }
}
function addItemToGroup(a, b) {
    if (1 === b.find("tr").length) {
        switch (a[0].className) {
            case "prompt-cell":
                var c = jQuery("\x3cdiv\x3e", {
                    id: "trPrompt",
                    "class": "form-content",
                    style: "padding-top: 7px; padding-bottom: 7px; background-color: #e6e6e6; clear: both; margin-bottom: 10px;"
                });
                break;
            case "file-labeled-cell":
                c = jQuery("\x3cdiv\x3e", {id: "imageDiv", "class": "form-content"});
                break;
            case "textbox-labeled-cell":
                c = jQuery("\x3cdiv\x3e", {id: "textDiv", "class": "form-content"});
                break;
            case "radio-cell":
                c = jQuery("\x3cdiv\x3e",
                    {id: "trCell", "class": "form-content", style: "float: left; margin-bottom: 10px;"});
                break;
            case "check-cell":
                c = jQuery("\x3cdiv\x3e", {
                    id: "trCheck",
                    "class": "form-content",
                    style: "float: left; margin-bottom: 10px;"
                });
                break;
            case "table-header-cell":
                c = jQuery("\x3cdiv\x3e", {
                    id: "trHeader",
                    "class": "form-content",
                    style: "clear: both"
                }), headerCountMulti++
        }
        b.append(c)
    }
    var c = parseInt(b.attr("columns")), d = b.find("div.form-content:last").find("div").not(".textbox-table"), e = 0;
    $(d).each(function () {
        var a = $(this);
        e += parseInt(a.attr("colspan"))
    });
    e < c ? b.find("div.form-content:last").append(a) : (c = jQuery("\x3cdiv\x3e", {
        id: "tr2",
        "class": "form-content"
    }), b.append(c), addItemToGroup(a, b))
}
function findItem(a) {
    return findItemInGroup($currentCheckList.groups, a)
}
function findItemInGroup(a, b) {
    var c;
    for (g in a) {
        var d = a[g];
        isUndefined(d.children) ? c = findItemInItemList(d.items, b) : (c = findItemInItemList(d.items, b), isUndefined(c) && (c = findItemInGroup(d.children, b)));
        if (isNotUndefined(c))return c
    }
}
function findItemInItemList(a, b) {
    var c;
    for (i in a) {
        var d = a[i];
        switch (d.type) {
            case "PROMPT":
                d.copyId === b && (c = d);
                isUndefined(c) && isNotUndefined(d.children) && (c = findItemInItemList(d.children, b));
                break;
            default:
                d.copyId === b && (c = d)
        }
        if (isNotUndefined(c))return c
    }
}
function isUndefined(a) {
    return "undefined" === typeof a
}
function isNotUndefined(a) {
    return !isUndefined(a)
}
function isEmpty(a) {
    return isUndefined(a) || 0 === a.length
}
function isNotEmpty(a) {
    return !isEmpty(a)
}
function isBlank(a) {
    return isUndefined(a) || 0 === trimText(a).length
}
function isNotBlank(a) {
    return !isBlank(a)
}
function trimText(a) {
    return $.trim(a.replace(/\s+/g, " "))
}
function split(a, b) {
    return a.split(b)
}
function addTooltips(a) {
    var b = jQuery("\x3cspan\x3e");
    if (isNotBlank(a.tooltipText)) {
        var c = jQuery("\x3cimg\x3e", {
            src: "/mportal/resources/img/icon/help_16x16.png",
            title: a.tooltipText,
            "class": "tooltip-icon",
            style: "cursor: pointer;",
            onclick: 'alert("' + a.tooltipText + '")'
        });
        b.append(c)
    }
    !$checklistOffline && isNotUndefined(a.tooltipImage) && (c = jQuery("\x3cimg\x3e", {src: "/mportal/resources/img/icon/unread_icon.png"}), a = jQuery("\x3ca\x3e", {
        uploadId: a.tooltipImage.id, projectId: $currentCheckList.projectId, "class": "tooltip-image",
        style: "padding-left: 15px"
    }), a.append(c), b.append(a));
    return b.html()
};