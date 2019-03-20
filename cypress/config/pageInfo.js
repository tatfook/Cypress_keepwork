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
    "tools":"ul[role$='menubar'] > li:nth-child(6)"
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
    "filterType":{
        "list":"div.search-result>div>span[class^='el-dropdown-link']",
        "Overall":"li.el-dropdown-menu__item",
        "Newest":"li.el-dropdown-menu__item",
        "Hottest":"li.el-dropdown-menu__item",
        "Project":"body > ul[id^='dropdown-menu'] > li:nth-child(2)"
    },
    "checkpoint":{

    },
    "paging":{
        "nextpage":""
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

var tmppage = {
    "personal": {
        "key": { "css": "#userCenterSubPage > div > div.col-md-10.main-content > div.panel-body > div.step-content.clearfix > div:nth-child(1) > div > ul > li:nth-child(1) > a" },
        "contains": {
            "blank": {
                "main": { "css": "img[ng-src$='wiki_blank_template.png']" },
                "preview": { "xpath": "//*[@id='personal-web']/div[1]/div/div[1]" },
                "select": { "xpath": "//*[@id='personal-web']/div[1]/div/div[2]" },
                "Prepagecheck": { "css": "div#_mdwiki_content_container_mdwiki_0" }
            },
            "basic": {
                "main": { "css": "img[ng-src$='wiki_basic_template.png']" },
                "preview": { "xpath": "//*[@id='personal-web']/div[2]/div/div[1]" },
                "select": { "xpath": "//*[@id='personal-web']/div[2]/div/div[2]" },
                "Prepagecheck": { "css": "div.wiki_page_inner_link.ng-scope > h2" }
            },
            "resume": {
                "main": { "css": "img[ng-src$='wiki_resume_site_template.png']" },
                "preview": { "xpath": "//*[@id='personal-web']/div[3]/div/div[1]" },
                "select": { "xpath": "//*[@id='personal-web']/div[3]/div/div[2]" },
                "Prepagecheck": { "css": "div.kind > h3" }
            },
            "vip": {
                "main": { "css": "img[ng-src*='wiki_basic_template.png']" },
                "preview": { "xpath": "//*[@id='personal-web']/div[4]/div/div[1]" },
                "select": { "xpath": "//*[@id='personal-web']/div[4]/div/div[2]" },
                "Prepagecheck": { "css": "div#_mdwiki_content_container_mdwiki_0" }
            },
        }
    },
    "company": {
        "key": { "css": "#userCenterSubPage > div > div.col-md-10.main-content > div.panel-body > div.step-content.clearfix > div:nth-child(1) > div > ul > li:nth-child(2) > a" },
        "contains": {
            "company1": {
                "main": { "css": "img[ng-src$='wiki_company1_template.jpg']" },
                "preview": { "xpath": "//*[@id='personal-web']/div[1]/div/div[1]" },
                "select": { "xpath": "//*[@id='personal-web']/div[1]/div/div[2]" },
                "Prepagecheck": { "css": " div > div.sidebar.pull-left > p" }
            },
            "company2": {
                "main": { "css": "img[ng-src$='wiki_company2_template.png']" },
                "preview": { "xpath": "//*[@id='personal-web']/div[2]/div/div[1]" },
                "select": { "xpath": "//*[@id='personal-web']/div[2]/div/div[2]" },
                "Prepagecheck": { "css": "#wikiblock_mdwiki_0_0_2 > div > div > div:nth-child(1) > h2 > span" }
            }
        }
    },
    "group": {
        "key": { "css": "#userCenterSubPage > div > div.col-md-10.main-content > div.panel-body > div.step-content.clearfix > div:nth-child(1) > div > ul > li:nth-child(3) > a" },
        "contains": {
            "group": {
                "main": { "css": "img[ng-src$='wiki_organization_template.png']" },
                "preview": { "xpath": "//*[@id='personal-web']/div[1]/div/div[1]" },
                "select": { "xpath": "//*[@id='personal-web']/div[1]/div/div[2]" },
                "Prepagecheck": { "css": "div.user-msg > h1" }
            }
        }
    },
    "game": {
        "key": { "css": "#userCenterSubPage > div > div.col-md-10.main-content > div.panel-body > div.step-content.clearfix > div:nth-child(1) > div > ul > li:nth-child(4) > a" },
        "contains": {
            "game": {
                "main": { "css": "img[ng-src$='wiki_game_template.jpg']" },
                "preview": { "xpath": "//*[@id='personal-web']/div[1]/div/div[1]" },
                "select": { "xpath": "//*[@id='personal-web']/div[1]/div/div[2]" },
                "Prepagecheck": { "css": "div.gameHeader> div.banner-info > h1" }
            }
        }
    },
    "course": {
        "key": { "css": "#userCenterSubPage > div > div.col-md-10.main-content > div.panel-body > div.step-content.clearfix > div:nth-child(1) > div > ul > li:nth-child(5) > a" },
        "contains": {
            "course": {
                "main": { "css": "img[ng-src$='img_1509532234890.png']" },
                "preview": { "xpath": "//*[@id='personal-web']/div[1]/div/div[1]" },
                "select": { "xpath": "//*[@id='personal-web']/div[1]/div/div[2]" },
                "iframe": { "css": "iframe#addcourse" },
                "login": { "css": "body > div > div.login-box > a" },
                "agree_btn": { "css": "div[ng-click*='agree']" },
                "close_btn": { "css": "span.rightform_head_close" }
            }
        },
        "checksuccess": { "css": "a.logo[href*='lecture']" },
        "checksuccess1": { "css": "body > md-toolbar > div > a:nth-child(4) > span" }
    },
    "domain": {
        "next": { "css": "div.panel-body > div.step-footer > button:nth-child(2)" },
        "sitename": { "css": "input#websiteName" },
        "prestep": { "css": "div.panel-body > div.step-footer > button:nth-child(1)" },
        "nextstep": { "xpath": "//*[@id='userCenterSubPage']/div/div[1]/div[2]/div[2]/button[2]" },
        "checksuccess": { "css": "img[ng-src*='wiki_success.png']" },
        "gotoEditor1": { "css": "div.panel-body > div.step-footer > button[ng-click='goEditerPage()']" },
        "gotoConfig1": { "css": "div.panel-body > div.step-footer > button[ng-click='goEditWebsitePage()']" }
    }
}

var mysite = {
    "key": { "css": "li:nth-child(2) > div > div.panel-body > ul > a" },
    "create": { "css": "a[ng-click$='goNewWebsitePage()']" },
    "siteNum": { "css": "div.panel-body.website-flex > h3 > span > span" },
    "type": "span[class='iconfont icon-lock']",
    "siteName": { "css": "div.flex-table > div:nth-child(3) > div:nth-child(1)" },
    "siteAddress": { "css": "div.flex-table > div:nth-child(3) > div:nth-child(2)" },
    "createDate": { "css": "div.flex-table > div:nth-child(3) > div:nth-child(3)" },
    "operation": {
        "see": { "css": "div.flex-table > div:nth-child(3) > div:nth-child(4) > a:nth-child(1)" },
        "edit": { "css": "div.flex-table > div:nth-child(3) > div:nth-child(4) > a:nth-child(2)" },
        "setup": {
            "key": { "css": "div.flex-table > div:nth-child(3) > div:nth-child(4) > a:nth-child(3)" },
            "common": {
                "icon_input": { "css": "input.change-btn" },
                "icon_edit_btn": { "css": "a.change-btn.ng-scope" },
                "icon_save_btn": { "css": "a#finish" },
                "sitename": { "css": "input#webName" },
                "siteAddress": { "css": "#common > div > div:nth-child(4) > div.col-sm-5 > p" },
                "siteintro": { "css": "#intro" },
                "notice": { "css": "#common > div > div > div > p.text-danger" },
                "savebtn": { "css": "#common > div > div > div > button[ng-click='modifyWebsite()']" },
                "saveResult": { "css": "div#messageTipConentId" }
            },
            "datasource": {
                "key": { "css": "a[href *= '#datasource']" },
                "data": { "css": "select[ng-model^='dataSourceName']" }
            },
            "domainname": {
                "key": { "css": "a[href^='#domain']" },
                "webAddress": { "css": "#domain > form > div:nth-child(2) > div > p" },
                "webdomain": { "css": "#domain > form > div:nth-child(3) > div > p" },
                "cname": {
                    "summary": {},
                    "add": {
                        "input": {},
                        "addbtn": {}
                    },
                    "notes": { "css": "div[ng-hide='user.vipInfo.isValid']" },
                    "becomevip": { "css": "div[ng-hide='user.vipInfo.isValid'] > a" }
                }
            },
            "Permissions": {
                "key": { "css": "a[href^='#permission']" },
                "description": {
                    "address": { "css": "#permission > div.inner-info > h4" },
                    "innerInfo": {
                        "content1": { "css": "#permission > div.inner-info > p:nth-child(2)" },
                        "content2": { "css": "#permission > div.inner-info > p:nth-child(3)" },
                        "content3": { "css": "#permission > div.inner-info > p:nth-child(4)" },
                    }
                },
                "siteType": {
                    "warnning": { "css": "#permission > div.change-type > div > p:nth-child(1)" },
                    "becomevip": { "css": "#permission > div.change-type > div > p > a[href='/wiki/vip']" },
                    "public": {
                        "select": { "css": "input#publicItem" },
                        "name": { "css": "label[for^='publicItem']" },
                        "des": { "css": "#permission > div.change-type > div > div:nth-child(2) > p" }
                    },
                    "private": {
                        "select": { "css": "input#privateItem" },
                        "name": { "css": "label[for^='privateItem']" },
                        "des": { "css": "#permission > div.change-type > div > div:nth-child(3) > p" }
                    }
                },
                "Rights": {
                    "key": { "css": "a[href^='#authorize']" },
                    "selectGroup": { "css": "#authorize > form > div:nth-child(2) > div > select " },  //排序第一的分组
                    "selectRight": { "css": "#authorize > form > div:nth-child(3) > div > select " },  //浏览的权限
                    "addbtn": { "css": "#authorize > form > div.col-sm-12.save-setting > button" },
                    "info": {
                        "gname": { "css": "#authorize > table > tbody > tr:nth-child(2) > td:nth-child(1)" },
                        "gpermission": { "css": "#authorize > table > tbody > tr:nth-child(2) > td:nth-child(2)" },
                        "operation": {
                            "del": { "css": "#authorize > table > tbody > tr:nth-child(2) > td:nth-child(3)" }
                        }
                    }
                },
                "group": {
                    "key": { "css": "a[href^='#grouping']" },
                    "name": { "css": "input#groupName" },
                    "createbtn": { "css": "div[ng-click='createGroup()']" },
                    "inputmember": { "css": "input#groupUserName" },
                    "addbtn": { "css": "div[ng-click='addUser()']" },
                    "memberlist": { "css": "#grouping > form > div:nth-child(3) > div > div.col-sm-12.labels-box >div" },
                    "backbtn": { "css": "div[ng-click*='editGroup']" },
                    "info": {
                        "gname": { "css": "#grouping > table > tbody > tr:nth-child(1) > td:nth-child(1)" },
                        "gmember": { "css": "#grouping > table > tbody > tr:nth-child(1) > td:nth-child(2)" },
                        "operation": {
                            "edit": { "css": "#grouping > table > tbody > tr:nth-child(1) > td:nth-child(3)>a:nth-child(1)" },
                            "del": { "css": "#grouping > table > tbody > tr:nth-child(1) > td:nth-child(3)>a:nth-child(2)" }
                        }
                    }
                }
            }
        },
        "remove": {
            "key": { "css": "div.flex-table > div:nth-child(3) > div:nth-child(4) > a:nth-child(4)" },
            "delWindowTitle": { "css": "h4#deleteWebsiteConfirmModalLabel" },
            "clearDataSource": { "css": "input[ng-model^='delete']" },
            "confirm_btn": { "css": "button[ng-click^='confirm']" },
            "cancel_btn": { "css": "button.btn.btn-default.ng-binding[data-dismiss^='mod']" }
        }
    },
    "editArea": {
        "loc": { "css": "div.CodeMirror-code > div:nth-child(1) > pre.CodeMirror-line" },
        "splitTableft": { "css": "div.CodeMirror-code > div:nth-child(1) > pre > span" },
        "saveBtn": { "css": "#codeToolbar > div:nth-child(2) > div:nth-child(1)" },
        "saveSuccess": { "css": "div#messageTipId.alert > div#messageTipConentId" },
        "backtoPersonalpage": { "css": "#codeToolbar > div.btn-group.brand-btn-group > a" }
    },
    "checkpage": {
        "first": { "css": "div#_mdwiki_content_container_mdwiki_0" },
        "second": { "css": "div#_mdwiki_content_container_mdwiki_0 > div > p" }
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

module.exports = { signUp, MenuHeader, explorationpage, personalpage, tmppage, homepage, realNamepage, mysite, setupCenter };

