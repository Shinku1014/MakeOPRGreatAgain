// ==UserScript==
// @name         5 Star One Key
// @version      0.35.1
// @description  Give five star with single click
// @updateURL    https://github.com/jqqqqqqqqqq/MakeOPRGreatAgain/raw/master/5StarOneKey.user.js
// @downloadURL  https://github.com/jqqqqqqqqqq/MakeOPRGreatAgain/raw/master/5StarOneKey.user.js
// @author       jqqqqqqqqqq
// @match        https://opr.ingress.com/recon
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @grant        unsafeWindow
// ==/UserScript==

var auto_select = true;
var big_stars = true;

var buttons = [
    {button:"5.0", total:5, name:5, history:5, unique:5, location:5, safety:5},
    {button:"4.8", total:4, name:5, history:5, unique:5, location:5, safety:5},
    {button:"4.5", total:4, name:5, history:5, unique:5, location:4, safety:4},
    {button:"4.3", total:4, name:5, history:5, unique:4, location:4, safety:4},
    {button:"4.2", total:4, name:4, history:5, unique:4, location:4, safety:4},
    {button:"4.0", total:4, name:4, history:4, unique:4, location:4, safety:4},
    {button:"3.8", total:4, name:4, history:4, unique:4, location:3, safety:4},
    {button:"3.7", total:4, name:4, history:4, unique:4, location:3, safety:3},
    {button:"3.5", total:3, name:4, history:4, unique:4, location:3, safety:3},
    {button:"4.3PosAccu", total:4, name:4, history:4, unique:4, location:5, safety:5},
    {button:"4.0PosAccu", total:4, name:4, history:3, unique:3, location:5, safety:5},
    {button:"3.7PosAccu", total:3, name:3, history:3, unique:3, location:5, safety:5},
    {button:"3.7NameBad", total:4, name:2, history:4, unique:4, location:4, safety:4},
    {button:"3.5PosOffs", total:4, name:4, history:4, unique:4, location:2, safety:3},
    {button:"3.0", total:3, name:3, history:3, unique:3, location:3, safety:3},
    {button:"1.2", total:2, name:1, history:1, unique:1, location:1, safety:1},
];


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////EDIT THIS LINE BELOW!
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const w = typeof unsafeWindow == "undefined" ? window : unsafeWindow;

var submit_type = null;

var first = true;
function enable_auto_select(){
    if (submit_type == 'EDIT') return;
    $(".button-star").each(function(){  // Don't use mouse hover to select stars
        if(first) {
            console.warn("first ignored");
            $(this).click(function() {
                var answerCtrl2 = angular.element($("div[ng-controller='AnswersController as answerCtrl2']")).scope().answerCtrl2;
                answerCtrl2.confirmLowQuality8888 = answerCtrl2.confirmLowQuality;
                answerCtrl2.confirmLowQuality = function() {
                    answerCtrl2.confirmLowQuality8888.apply( answerCtrl2.confirmLowQuality8888, arguments);
                    setTimeout(function(){ window.location.assign("/recon");}, 1000);
                };
            });
            first = false;
        }
        /*else {
            $(this).hover(function(){$(this).click();});
        }*/
    });
}

var button_list = {
    'total': [],
    'name': [],
    'history': [],
    'unique': [],
    'location': [],
    'safety': []
};

function update_button_list(){
    if (submit_type == 'EDIT') return;
    $(".button-star").each(function(){  // Don't use mouse hover to select stars
        switch($(this).attr("ng-model")) {
            case "answerCtrl.formData.quality":
                button_list['total'].push($(this));
                if (big_stars) {
                    $(this).css({'margin-bottom': '10px'});
                    $(this).children('span').css({'font-size': '24px'});
                    $(this).css({'margin-left': '5px'});
                    $(this).css({'margin-right': '5px'});
                }
                break;

            case "answerCtrl.formData.description":
                button_list['name'].push($(this));
                if (big_stars) {
                    $(this).css({'margin-bottom': '10px'});
                    $(this).children('span').css({'font-size': '24px'});
                    $(this).css({'margin-left': '5px'});
                    $(this).css({'margin-right': '5px'});
                }
                break;

            case "answerCtrl.formData.cultural":
                button_list['history'].push($(this));
                if (big_stars) {
                    $(this).css({'margin-bottom': '10px'});
                    $(this).children('span').css({'font-size': '24px'});
                    $(this).css({'margin-left': '5px'});
                    $(this).css({'margin-right': '5px'});
                }
                break;

            case "answerCtrl.formData.uniqueness":
                button_list['unique'].push($(this));
                if (big_stars) {
                    $(this).children('span').css({'font-size': '24px'});
                    $(this).css({'margin-left': '5px'});
                    $(this).css({'margin-right': '5px'});
                }
                break;

            case "answerCtrl.formData.location":
                button_list['location'].push($(this));
                if (big_stars) {
                    $(this).children('span').css({'font-size': '24px'});
                    $(this).css({'margin-left': '5px'});
                    $(this).css({'margin-right': '5px'});
                }
                break;

            case "answerCtrl.formData.safety":
                button_list['safety'].push($(this));
                if (big_stars) {
                    $(this).children('span').css({'font-size': '24px'});
                    $(this).css({'margin-left': '5px'});
                    $(this).css({'margin-right': '5px'});
                }
                break;
        }

    });
}


function rate_portal(total, name, history, unique, location, safety) {
    button_list['total'][total - 1].click();
    button_list['name'][name - 1].click();
    button_list['history'][history - 1].click();
    button_list['unique'][unique - 1].click();
    button_list['location'][location - 1].click();
    button_list['safety'][safety - 1].click();
}

function add_button() {
    var button_region = document.getElementById("descriptionDiv");
    if (submit_type == 'NEW') {
        buttons.forEach(function(button_data) {
            var button = document.createElement("button");
            var textnode = document.createTextNode(button_data["button"]);
            button.className = "button submit-button";
            button.appendChild(textnode);
            button_region.appendChild(button);
            button.onclick = function()
            {
                rate_portal(button_data["total"], button_data["name"], button_data["history"], button_data["unique"], button_data["location"], button_data["safety"]);
                angular.element(document.getElementById('AnswersController')).scope().answerCtrl.submitForm();setTimeout(function(){ window.location.assign("/recon");}, 100);};});
            }
    w.$scope = element => w.angular.element(element).scope();
}

function move_portal_rate() {
    if (submit_type == 'EDIT') return;

    // move portal rating to the right side
    var scorePanel = w.document.querySelector("div[class='text-center hidden-xs']");
    if (scorePanel == null) {
        scorePanel = w.document.querySelector("div[class~='pull-right']");
    }
    let nodesToMove = Array.from(w.document.querySelector("div[class='btn-group']").parentElement.children);
    nodesToMove = nodesToMove.splice(2, 6);
    nodesToMove.push(w.document.createElement("br"));
    for (let j = nodesToMove.length - 1; j >= 0; --j) {
        scorePanel.insertBefore(nodesToMove[j], scorePanel.firstChild);
    }
    $("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center.hidden-xs > span:nth-child(1)").css({'font-size': '20px'});
    $("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center.hidden-xs > span.glyphicon.glyphicon-info-sign.darkgray").css({'font-size': '20px'});


    // moving submit button to right side of classification-div
    const submitDiv = w.document.querySelectorAll("#submitDiv, #submitDiv + .text-center");
    const classificationRow = w.document.querySelector(".classification-row");
    const newSubmitDiv = w.document.createElement("div");
    newSubmitDiv.className = "col-xs-12 col-sm-6";
    submitDiv[0].style.marginTop = 16;
    newSubmitDiv.appendChild(submitDiv[0]);
    newSubmitDiv.appendChild(submitDiv[1]);
    classificationRow.insertAdjacentElement("afterend", newSubmitDiv);
    var submit = $(".button.big-submit-button")[0];
    submit.classList.remove("big-submit-button");
    submit.classList.add("submit-button");
    submit.style.paddingLeft = "10px";
    submit.style.paddingRight = "10px";
    submit.style.margin = "10px";
}

function skip_confirm() {
    if (submit_type == 'EDIT') return;
    var answerCtrl = angular.element(document.getElementById('AnswersController')).scope().answerCtrl;
    answerCtrl.markDuplicate8888 = answerCtrl.markDuplicate;
    answerCtrl.markDuplicate = function() {
        answerCtrl.markDuplicate8888.apply( answerCtrl.markDuplicate8888, arguments);
        answerCtrl.confirmDuplicate();
        setTimeout(function(){ window.location.assign("/recon");}, 1000);
	};
}

function get_submit_type() {
    var subCtrl = angular.element(document.getElementById('NewSubmissionController')).scope().subCtrl;
    console.log(subCtrl.reviewType);
    return subCtrl.reviewType;  // NEW or EDIT
}

function execute_all() {
    submit_type = get_submit_type();
    if (submit_type == null) {
        setTimeout(execute_all, 100);
        return;
    }
    if(auto_select) {
        enable_auto_select();
    }

    add_button();
    update_button_list();
    move_portal_rate();

    skip_confirm();
}

(function() {
    setTimeout(execute_all, 500);
})();

