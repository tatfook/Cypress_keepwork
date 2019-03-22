/**
 * Create on 2019/03/13
 * Author : Duke
 * Description: page Information
 */
'use strict';
var MenuHeader = {
    "create":"ul[role$='menubar'] > li:nth-child(2)",
    "explore": "ul[role$='menubar'] > li:nth-child(3)",
    "learn":"ul[role$='menubar'] > li:nth-child(4)",
    "searchText":"input[placeholder$='搜索']",
    "searchBtn":"span > i[class^='el-icon-search']",
    "rank":"ul[role$='menubar'] > li:nth-child(7)",
    "tools":{
        "main":"ul[role$='menubar'] > li:nth-child(6)",
        "webEditor":"a[href='/ed']",
        "paracraft":"a[href^='http://paracraft.keepwork.com/download']"
    }
}
var homepage = {
    "username": "input[placeholder^='请输入账号']",
    "password": "form > div:nth-child(2) > div > div > input[type^='password']",
    "Menulogin": "li.el-menu-item.pull-right.login-button > a",
    "signinbtn": "form > div:nth-child(3) > div > button",
    "Menusignupbtn": "li[class$='register-button']>a.register-btn",
    "avator": "li:nth-child(5)>div >span >img.user-profile",    
    "myprofile": "ul[x-placement='bottom-end']> li:nth-child(2) > a",
    "mywallet": "ul[x-placement='bottom-end']> li:nth-child(3) > a",
    "myprojects": "ul[x-placement='bottom-end']> li:nth-child(4) > a",
    "mylessons": "ul[x-placement='bottom-end']> li:nth-child(5) > a",
    "cloudDrive": "ul[x-placement='bottom-end']> li:nth-child(6) > a",
    "setting": "ul[x-placement='bottom-end']> li:nth-child(7) > a",
    "logout": "ul[x-placement='bottom-end']> li:nth-child(8) > a",
    "errorMessage": "div[role%='alert'] > p"
}

var explorationpage = {
    "searchText":"input[placeholder$='内容']",
    "searchBtn":"i[class^='el-icon-search']",
    "total_num":"span>span.contain-total-num",
    "selectedProject": "ul[class^='search-tab-menu']>li:nth-child(1)",
    "projectName":"ul[class^='search-tab-menu']>li:nth-child(2)",
    "thirdworld":"ul[class^='search-tab-menu']>li:nth-child(3)",
    "websites":"ul[class^='search-tab-menu']>li:nth-child(4)",
    "lessons": "ul[class^='search-tab-menu']>li:nth-child(5)",
    "users":"ul[class^='search-tab-menu']>li:nth-child(6)",    
    "page":"ul[class^='search-tab-menu']>li:nth-child(7)",
    "recruiting":"ul[class^='search-tab-menu']>li:nth-child(8)",
    "filterType":{
        "list":"div.search-result>div>span[class^='el-dropdown-link']",
        "Overall":"li.el-dropdown-menu__item",
        "Newest":"li.el-dropdown-menu__item",
        "Hottest":"li.el-dropdown-menu__item",
        "Project":"body > ul[id^='dropdown-menu'] > li:nth-child(2)"
    },
    "checkpoint":{
        "noresult":"div.all-projects-nothing > p"
    },
    "paging":{
        "prepage":"i.el-icon.el-icon-arrow-left",
        "nextpage":"i.el-icon.el-icon-arrow-right"
    }

}


var personalpage = {
    "newwebsite_enter": { "css": "a.item[href$='newWebsite']" },
    "siteManagement_enter": { "css": "a.item[href*='websiteManager']" },
    "editer_enter": { "css": "a.item[href*='wikieditor']" },
    "ownersite": {}
}

var realNamepage = {
    "title": { "css": "h4[translate='实名手机认证']" },
    "cellphone": { "css": "input[ng-model='realNameInfo.cellphone']" },
    "smscode": { "css": "input[ng-model='realNameInfo.SMSCode']" },
    "sendcode": { "css": "div[ng-click='sendRealNameCellPhoneSMSCode()']" },
    "submit_btn": { "css": "button[ng-click*='submitRealnameInfo()']" },
    "cancel_btn": { "css": "button.btn.btn-md.ng-scope[ng-click='cancel()']" }
}

var siteTemplate = {
    "BasicLayout":{
        "location":"div[class^='full-height'] > ul[role='menubar']>li:nth-child(1)",
        "basic":"span.template-info",
        "basicfullscreen":"span.template-info"
    },
    "HeaderLayout":{
        "location": "div[class^='full-height'] > ul[role='menubar']>li:nth-child(2)",
        "header": "span.template-info",
        "headerSidebar": "span.template-info"
    },    
    "nextstep":"div.el-dialog__footer > span > span > button",
    "inputText":" input.el-input__inner",
    "backTo":"div.el-dialog__footer > span > span > button:nth-child(1)",
    "create":"div.el-dialog__footer > span > span > button:nth-child(2)>span",
    "closeWindow":" div.el-dialog__wrapper.new-website-dialog > div > div.el-dialog__header > button",
    "check":{
        "warnningMsg":"div.el-form-item__error"
    }
}

var editorpage = {
    "keepworklogo":"img.kp-logo",
    "keepworklogo_menu":{
        "createsite": "div.kp-menu-top > div:nth-child(2)>button", //keepwork菜单栏新建网站按钮
        "siteSet":"div.kp-menu-top > div:nth-child(2)>button",
        "pageSet":"div.kp-menu-top > div:nth-child(2)>button",
        "rmpage":"div.kp-menu-top > div:nth-child(2)>button",
        "Save":"div.kp-menu-top > div:nth-child(2)>button",
        "allSave":"div.kp-menu-top > div:nth-child(2)>button",
        "closepage":"div.kp-menu-top > div:nth-child(2)>button",
        "closeAll":"div.kp-menu-top > div:nth-child(2)>button"

    },
    "mainarea":"h1.welcomeText",
    "createsiteBtn": "div.welcomeButton",  //欢迎页新建网站按钮
    "filelist_menu":{
        "createsite":"span.pull-right-icon"  //文件树右侧的新建网站按钮
    
    
    },
    "CodeArea": {
        
    },
    "check":{
        "createsite_success":{
            "icon": "i.el-icon-success",
            "btn":"span.dialog-footer > span > button",
            "close": "div[class$='new-website-dialog']> div> div>button[aria-label='Close']"
        },
        "createpage_success":"",
        "createfloder_success":"",
        "pageContent":""
    }
}

var setupCenter = {
    "profile": {
        "key": { "css": "#__UserSitePageContent__ > div > div > div.col-md-2.subnav.col-sm-3 > ul > li:nth-child(1) > div > div.panel-body > ul > a:nth-child(1)" },
        "title": { "css": "#userCenterSubPage > div > div:nth-child(1) > div.panel-heading.ng-scope" },
        "inputavatar": { "css": "#userCenterSubPage > div > div:nth-child(1) > div.panel-body > div.col-md-3.preview-zone > p > input[type='file']" },
        "saveavatarbtn": { "css": "a#finish" },
        "nickname": { "css": "input#displayName" },
        "sex": {
            "male": { "css": "input#inlineRadio1" },
            "female": { "css": "input#inlineRadio2" },
            "secrecy": { "css": "input#inlineRadio3" }
        },
        "position": { "css": "input#location" },
        "intro": { "css": "#data-form > div:nth-child(5) > div > textarea" },
        "Savebtn": { "css": " button[ng-click*='saveProfile']" },
        "saveResult": { "css": "div#messageTipConentId" },
        "notice": { "css": "#data-form > div:nth-child(6) > div > p:nth-child(1)" },
        "overPos": { "css": "#data-form > div:nth-child(6) > div > p:nth-child(2)" },
        "overIntro": { "css": "#data-form > div:nth-child(6) > div > p:nth-child(3)" },
    },
    "security": {
        "key": { "css": "#__UserSitePageContent__ > div > div > div.col-md-2.subnav.col-sm-3 > ul > li:nth-child(1) > div > div.panel-body > ul > a:nth-child(2)" },
        "pwdTab": {
            "key": { "css": "a[href='#change']" },
            "oldpwd": { "css": "input#old" },
            "newpwd": { "css": "input#new" },
            "repeatpwd": { "css": "input#reNew" },
            "modifybtn": { "css": "button[ng-click='modifyPassword()']" },
        },
        "bindTab": {
            "key": { "css": "a[href^='#verify']" },
            "email": { "css": "" },
            "mobile": {
                "text": { "css": "input#phone" },
                "unbindbtn": { "css": "#verify > form > div:nth-child(4) > div.col-sm-3 > div.btn.btn-block.btn-outline" },
                "bindbtn": { "css": "#verify > form > div:nth-child(4) > div.col-sm-3 > div.btn.btn-block.btn-primary" },
                "piccodetext": { "css": "input[ng-model*='imageCode']" },
                "imageCode": { "css": "div.col-sm-3.captcha > img" },
                "updatePic": { "css": "span[ng-click='refreshImageCode()']" },
                "smscode": { "css": "input[ng-model='smsCode']" },
                "sendSMSbtn": { "css": "div[ng-click$='bindPhone()']" },
                "Confirmbtn": { "css": "button[ng-click$='confirmPhoneBind()']" }
            },
            "QQ": { "css": "" },
            "wechat": { "css": "" },
            "blog": { "css": "" },
            "github": { "css": "" },
        },
        "Result": { "css": "div#messageTipConentId" }

    },
    "tiding": {},
    "attention": {},
    "history": {},
    "fans": {},
    "realName": realNamepage,
    "datasource": {}

}


var signUp = {
    "username": "input[placeholder$='账户名']",
    "password": "input[placeholder$='密码']",
    "cellphone": "input[placeholder$='手机号码']",
    "smsCode": "input[placeholder$='验证码']",
    "sendSMScodebtn": "div[class^='send-auth-send-code'] > button",
    "policycheckbox": "label[class='el-checkbox']> span.el-checkbox__input > span",
    "signupbtn": "form > div:nth-child(6) > div > button",
    "error_notification": "div[role$='alert'] > p",
    "warningInfo": "form > div:nth-child(2) > div > div.el-form-item__error",
    "repeattext": "div.text-danger.ng-binding",
    "closeIcon":" button[aria-label='Close'] > i"
}

module.exports = { signUp, MenuHeader, explorationpage, personalpage, siteTemplate, homepage, realNamepage, editorpage, setupCenter };

