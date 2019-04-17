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
    "cloudDrive": "ul[x-placement='bottom-end']> li:nth-child(6) > a",
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
  "setting": "ul[x-placement='bottom-end']> li:nth-child(6) > a",
  "logout": "ul[x-placement='bottom-end']> li:nth-child(7) > a",
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
    "noresult":"div.all-projects-nothing > p",
    "projectName":"div.el-row > div:nth-child(1) > div > h4 > span.text"
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
  "inputText":"input.el-input__inner",
  "backTo":"div.el-dialog__footer > span > span > button:nth-child(1)",
  "create":"div.el-dialog__footer > span > span > button:nth-child(2)>span",
  "closeWindow":" div.el-dialog__wrapper.new-website-dialog > div > div.el-dialog__header > button",
  "check":{
    "warnningMsg":"div.el-form-item__error"
  }
}

var pageTemplate = {
  "BasicLayout":{
    "location":"div>div>ul[role='menubar'] >li[role='menuitem']",
    "empty":"span.template-info",
    "menu":"span.template-info",
    "next":"div.el-dialog > div.el-dialog__footer > span > span > button",
    "inputText": "input.el-input__inner",
    "backTo": "div.el-dialog__footer > span > span > button:nth-child(1)",
    "create": "div.el-dialog__footer > span > span > button:nth-child(2)>span",    
    "check": {
      "warnningMsg": "div.el-form-item__error"
    }
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
    "closeAll":"div.kp-menu-top > div:nth-child(2)>button",
    "home":"div.kp-menu > button:nth-child(1)"

  },
  "mainarea":"h1.welcomeText",
  "createsiteBtn": "div.welcomeButton",  //欢迎页新建网站按钮
  "filelist_menu":{
    "createsite":"span.pull-right-icon"  //文件树右侧的新建网站按钮
  
  
  },
  "fileTree":{
    "openTree":{
      "topopenfile":"div[class^='opened-tree'] > div[role='tree']>div:nth-child(1)",
      "topoenfile_name":"div[class^='opened-tree'] > div[role='tree']>div:nth-child(1)>div>span:nth-child(2)>span:nth-child(2)",
      "topopenfile_save":"div[class^='opened-tree'] > div[role='tree']>div:nth-child(1)>div>span:nth-child(2)>span:nth-child(3)>button:nth-child(1)",
      "topopenfile_reload":"div[class^='opened-tree'] > div[role='tree']>div:nth-child(1)>div>span:nth-child(2)>span:nth-child(3)>button:nth-child(2)",
      "topopenfile_close": "div[class^='opened-tree'] > div[role='tree']>div:nth-child(1)>div>span:nth-child(2)>span:nth-child(3)>button:nth-child(3)",
      "topopenfile_delete": "div[class^='opened-tree'] > div[role='tree']>div:nth-child(1)>div>span:nth-child(2)>span:nth-child(3)>button:nth-child(4)",
      "saveAllbtn":"div[class^='opened-tree'] > div[class='opened-files-container']>span>button:nth-child(1)",
      "closeAllbtn":"div[class^='opened-tree'] > div[class='opened-files-container']>span>button:nth-child(2)"
    },
    "myTree":{
      "topsite":"div[class^='my-tree'] > div[role='tree']>div:nth-child(1)>div:nth-child(1)",
      "topsite_name":"div[class^='my-tree'] > div[role='tree']>div:nth-child(1)>div>div>span:nth-child(1)",
      "topsite_addfile":"div[class^='my-tree'] > div[role='tree']>div:nth-child(1)>div>div>span:nth-child(3)>button:nth-child(1)",
      "topsite_addfloder": "div[class^='my-tree'] > div[role='tree']>div:nth-child(1)>div>div>span:nth-child(3)>button:nth-child(2)",
      "topsite_setting": "div[class^='my-tree'] > div[role='tree']>div:nth-child(1)>div>div>span:nth-child(3)>button:nth-child(3)",
      "page":"div[class^='my-tree'] > div[role='tree']>div:nth-child(1)>div[role='group']>div:nth-child(1)",
      "page_name":"span.rename-wrapper > div > input",
      "page_confirmchange":"span.rename-wrapper > button[class^='el-button rename-btn el-icon-check']",
      "page_save":"div[class^='my-tree'] > div[role='tree']>div:nth-child(1)>div[role='group']>div:nth-child(1)>div>div>span>button:nth-child(1)",
      "page_reload": "div[class^='my-tree'] > div[role='tree']>div:nth-child(1)>div[role='group']>div:nth-child(1)>div>div>span>button:nth-child(2)",
      "page_rename": "div[class^='my-tree'] > div[role='tree']>div:nth-child(1)>div[role='group']>div:nth-child(1)>div>div>span>button:nth-child(1)",
      "page_delete": "div[class^='my-tree'] > div[role='tree']>div:nth-child(1)>div[role='group']>div:nth-child(1)>div>div>span>button:nth-child(4)",
      "page_setting": "div[class^='my-tree'] > div[role='tree']>div:nth-child(1)>div[role='group']>div:nth-child(1)>div>div>span>button:nth-child(5)"
    },
    "joinTree":{

    }
  },
  "CodeArea": {
      
  },
  "check":{
    "createsite_success":{
      "icon": "i.el-icon-success",
      "btn":"span.dialog-footer > span > button",
      "close": "div[class$='new-website-dialog']> div> div>button[aria-label='Close']"
    },
    "createpage_success":{
      "icon": "i.el-icon-success",
      "btn": "span.dialog-footer > span > button",
      "close": "div[class^='el-tree']> div>div>div> div>button[aria-label='Close']"
    },
    "createfloder_success":"",
    "pageContent":""
  }
}

var setupCenter = {
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

module.exports = { signUp, MenuHeader, explorationpage, personalpage, siteTemplate, homepage, editorpage, setupCenter, pageTemplate };

