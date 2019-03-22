/**
 * Created on 2019/03/21
 * Author: Duke
 * Description: verify the search feature
 */
let pageInfo = require('../../config/pageInfo')
let testdata = require('../../config/testdata')
let common = require("../../common/common")
let loginselector = [pageInfo.homepage.username, pageInfo.homepage.password, pageInfo.homepage.signinbtn]
//let logoutselector = [pageInfo.homepage.avator, pageInfo.homepage.logout]
let data = [testdata.signIn.account.username, testdata.signIn.account.password]
let maxwaittime = 15000

 describe("the new site verification",function () {
    before("enter the Editor page",function () {
        cy.visit("/")
        cy.viewport(window.screen.width, window.screen.height)
        cy.url().should('eq', testdata.testUrl)
        cy.title().should('include', testdata.testTitle)
        cy.get(pageInfo.homepage.Menulogin).click()
        common.login(loginselector, data)
        cy.get(pageInfo.homepage.avator, { timeout: 6000 })
    })

    //保存cookies信息,避免每次都需要通过UI形式登录
    beforeEach(function () {
        Cypress.Cookies.preserveOnce('token')
    })

    it("create new site via the enterance on the welcome page",function () {  
        let selectors = [pageInfo.siteTemplate.BasicLayout.location, pageInfo.siteTemplate.BasicLayout.basic,
        pageInfo.siteTemplate.nextstep, pageInfo.siteTemplate.inputText, pageInfo.siteTemplate.create]
        let sitedata = [testdata.tmppage.basic.typeName, testdata.tmppage.basic.basictemp, common.GenStr(6, 'alphanumeric')]      
        cy.get(pageInfo.MenuHeader.tools.main).click()        
        //鉴于Cypress的特性,需要将验证新tab页的功能分为两步(1.校验跳转链接地址是否正确;2.直接访问待验证地址页进行验证)
        cy.get(pageInfo.MenuHeader.tools.webEditor).should('have.attr','target','_blank') 
        cy.visit('/ed')
        cy.get(pageInfo.editorpage.mainarea).then(($t)=>{
            expect(($t[0].innerText)).to.equal(testdata.sites.welcomeword)
        })
        cy.get(pageInfo.editorpage.createsiteBtn).click()
        cy.get(pageInfo.siteTemplate.BasicLayout.location)
        common.createSite(selectors, sitedata)
        cy.get(pageInfo.editorpage.check.createsite_success.icon,{ timeout:10000})       
        cy.get(pageInfo.editorpage.check.createsite_success.close).click()
    })


    it("create new site via Menu", function () {       
        let selectors = [pageInfo.siteTemplate.BasicLayout.location, pageInfo.siteTemplate.BasicLayout.basic,
        pageInfo.siteTemplate.nextstep, pageInfo.siteTemplate.inputText, pageInfo.siteTemplate.create]
        let sitedata = [testdata.tmppage.basic.typeName, testdata.tmppage.basic.basictemp, common.GenStr(6, 'alphanumeric')]
        cy.get(pageInfo.editorpage.keepworklogo).trigger('mouseenter')
        cy.get(pageInfo.editorpage.keepworklogo_menu.createsite).contains(testdata.sites.kpmenu.createsite).click()
        cy.get(pageInfo.siteTemplate.BasicLayout.location)
        common.createSite(selectors, sitedata)
        cy.get(pageInfo.editorpage.check.createsite_success.icon, { timeout: maxwaittime })
        cy.get(pageInfo.editorpage.check.createsite_success.close).click()
    })


    it("create new site via the button on the filelist", function () {        
        let selectors = [pageInfo.siteTemplate.BasicLayout.location, pageInfo.siteTemplate.BasicLayout.basic,
        pageInfo.siteTemplate.nextstep, pageInfo.siteTemplate.inputText, pageInfo.siteTemplate.create]
        let sitedata = [testdata.tmppage.basic.typeName, testdata.tmppage.basic.basictemp, common.GenStr(6, 'alphanumeric')]
        cy.get(pageInfo.editorpage.filelist_menu.createsite).click()
        cy.get(pageInfo.siteTemplate.BasicLayout.location)
        common.createSite(selectors, sitedata)
        cy.get(pageInfo.editorpage.check.createsite_success.icon, { timeout: 50000 })
        cy.get(pageInfo.editorpage.check.createsite_success.close).click()
    })

    it("create the site of fullscreen template",function () {
        let selectors = [pageInfo.siteTemplate.BasicLayout.location, pageInfo.siteTemplate.BasicLayout.basicfullscreen,
        pageInfo.siteTemplate.nextstep, pageInfo.siteTemplate.inputText, pageInfo.siteTemplate.create]
        let sitedata = [testdata.tmppage.basic.typeName, testdata.tmppage.basic.fullscreentemp, common.GenStr(6, 'alphanumeric')] 
        cy.get(pageInfo.editorpage.filelist_menu.createsite).click()
        cy.get(pageInfo.siteTemplate.BasicLayout.location)
        common.createSite(selectors, sitedata)
        cy.get(pageInfo.editorpage.check.createsite_success.icon, { timeout: maxwaittime })
        cy.get(pageInfo.editorpage.check.createsite_success.close).click()
    })
    
    it("create the site of header template", function () {
        let selectors = [pageInfo.siteTemplate.HeaderLayout.location, pageInfo.siteTemplate.HeaderLayout.header,
        pageInfo.siteTemplate.nextstep, pageInfo.siteTemplate.inputText, pageInfo.siteTemplate.create]
        let sitedata = [testdata.tmppage.header.typeName, testdata.tmppage.header.headertemp, common.GenStr(6,'alphanumeric')] 
        cy.get(pageInfo.editorpage.filelist_menu.createsite).click()
        cy.get(pageInfo.siteTemplate.BasicLayout.location)
        common.createSite(selectors, sitedata)
        cy.get(pageInfo.editorpage.check.createsite_success.icon, { timeout: maxwaittime })
        cy.get(pageInfo.editorpage.check.createsite_success.close).click()
    })

    it("create the site of headersidebar template", function () {
        let selectors = [pageInfo.siteTemplate.HeaderLayout.location, pageInfo.siteTemplate.HeaderLayout.headerSidebar,
        pageInfo.siteTemplate.nextstep, pageInfo.siteTemplate.inputText, pageInfo.siteTemplate.create]
        let sitedata = [testdata.tmppage.header.typeName, testdata.tmppage.header.sidebartemp, common.GenStr(6, 'alphanumeric')]
        cy.get(pageInfo.editorpage.filelist_menu.createsite).click()
        cy.get(pageInfo.siteTemplate.BasicLayout.location)
        common.createSite(selectors, sitedata)
        cy.get(pageInfo.editorpage.check.createsite_success.icon, { timeout: maxwaittime })
        cy.get(pageInfo.editorpage.check.createsite_success.close).click()
    })


    it("create the duplicate website failure", function () {        
        cy.get(pageInfo.editorpage.filelist_menu.createsite).click()
        cy.get(pageInfo.siteTemplate.BasicLayout.location)        
        cy.get(pageInfo.siteTemplate.nextstep).click()
        cy.get(pageInfo.siteTemplate.inputText).type(testdata.sites.siteName.duplicate).should('have.value', testdata.sites.siteName.duplicate)
        cy.get(pageInfo.siteTemplate.check.warnningMsg).then(($info) =>{
            expect(($info[0].innerText)).to.be.equal(testdata.sites.check.duplicateSite)
        })
    })
   
    it("create the Chinese website failure", function () {
        cy.get(pageInfo.siteTemplate.inputText).clear()
        cy.get(pageInfo.siteTemplate.inputText).type(testdata.sites.siteName.chinese).should('have.value', testdata.sites.siteName.chinese)
        cy.get(pageInfo.siteTemplate.check.warnningMsg).then(($info) => {
            expect(($info[0].innerText)).to.be.equal(testdata.sites.check.errorNamesite)
        })
        cy.get(pageInfo.siteTemplate.closeWindow).click()
    })
    
    after(function () {
        
    })
     
 })