/**
 * Created on 2019/04/08
 * Author: Duke
 * Description: verify the different mod in the page
 */
/*
let pageInfo = require('../../config/pageInfo')
let testdata = require('../../config/testdata')
let common = require("../../common/common")
let loginselector = [pageInfo.homepage.username, pageInfo.homepage.password, pageInfo.homepage.signinbtn]
let logoutselector = [pageInfo.homepage.avator, pageInfo.homepage.logout]
let pageselector = [pageInfo.pageTemplate.BasicLayout.location, pageInfo.pageTemplate.BasicLayout.empty, pageInfo.pageTemplate.BasicLayout.next,
pageInfo.pageTemplate.BasicLayout.inputText, pageInfo.pageTemplate.BasicLayout.create]
let data = [testdata.signIn.account.username, testdata.signIn.account.password]
let maxwaittime = 15000
let renamesite = 'new'

describe("the module verification", function () {
  before("enter the Editor page", function () {
    cy.visit("/")
    //cy.viewport(window.screen.width, window.screen.height)
    cy.url().should('eq', testdata.testUrl)
    cy.title().should('include', testdata.testTitle)
    cy.get(pageInfo.homepage.Menulogin).click()
    common.login(loginselector, data)
    cy.get(pageInfo.homepage.avator, { timeout: 6000 })
    cy.get(pageInfo.MenuHeader.tools.main).click()
    //鉴于Cypress的特性,需要将验证新tab页的功能分为两步(1.校验跳转链接地址是否正确;2.直接访问待验证地址页进行验证)
    cy.get(pageInfo.MenuHeader.tools.webEditor).should('have.attr', 'target', '_blank')
    cy.visit('/ed')
    cy.get(pageInfo.editorpage.mainarea).then(($t) => {
      expect(($t[0].innerText)).to.equal(testdata.sites.welcomeword)
    })
  })

  //保存cookies信息,避免每次都需要通过UI形式登录
  beforeEach(function () {
    Cypress.Cookies.preserveOnce('token')
  })

  it("add the menu mod to the page", function () {
    let data = [testdata.tmppage.pageLayout.typeName, testdata.tmppage.pageLayout.emptytemp, common.GenStr(4, 'alphanumeric')]
    //cy.get(pageInfo.editorpage.fileTree.myTree.topsite).click()    
    cy.get(pageInfo.editorpage.fileTree.myTree.topsite).trigger('mouseup')
    cy.get(pageInfo.editorpage.fileTree.myTree.topsite_addfile).click({ force: true })
    common.createSiteorPage(pageselector, data)
    cy.get(pageInfo.editorpage.check.createpage_success.icon, { timeout: maxwaittime })
    cy.get(pageInfo.editorpage.check.createpage_success.close).click()
  })

  it("create new page include menu mod", function () {
    let data = [testdata.tmppage.pageLayout.typeName, testdata.tmppage.pageLayout.menutemp, common.GenStr(4, 'alphanumeric')]
    //cy.get(pageInfo.editorpage.fileTree.myTree.topsite).click()    
    cy.get(pageInfo.editorpage.fileTree.myTree.topsite).trigger('mouseup')
    cy.get(pageInfo.editorpage.fileTree.myTree.topsite_addfile).click({ force: true })
    common.createSiteorPage(pageselector, data)
    cy.get(pageInfo.editorpage.check.createpage_success.icon, { timeout: maxwaittime })
    cy.get(pageInfo.editorpage.check.createpage_success.close).click()
  })

  it("create the duplicate page", function () {
    let data = [testdata.tmppage.pageLayout.typeName, testdata.tmppage.pageLayout.menutemp, testdata.sites.pageName]
    cy.get(pageInfo.editorpage.fileTree.myTree.topsite).trigger('mouseup')
    cy.get(pageInfo.editorpage.fileTree.myTree.topsite_addfile).click({ force: true })
    cy.get(pageselector[0]).contains(data[0]).click()
    cy.get(pageselector[1]).contains(data[1]).click()
    cy.get(pageselector[2]).click()
    cy.get(pageselector[3]).type(data[2]).should('have.value', data[2])
    cy.get(pageInfo.pageTemplate.BasicLayout.check.warnningMsg).then(($val) => {
      expect($val[0].innerText).to.be.equal(testdata.sites.Result.pagewarnning)
    })
    cy.get(pageInfo.editorpage.check.createpage_success.close).click()
  })

  it("rename the pageA", function () {
    cy.get(pageInfo.editorpage.fileTree.myTree.topsite).click()
    cy.get(pageInfo.editorpage.fileTree.myTree.page).then(($t) => {
      renamesite = ($t[0].innerText)
    })
    cy.get(pageInfo.editorpage.fileTree.myTree.page).trigger("mouseup")
    cy.get(pageInfo.editorpage.fileTree.myTree.page_rename).click({ force: true })
    cy.get(pageInfo.editorpage.fileTree.myTree.page_name).clear()
    cy.get(pageInfo.editorpage.fileTree.myTree.page_name).type(common.GenStr(6, 'numeric'))
    cy.get(pageInfo.editorpage.fileTree.myTree.page_confirmchange).click()
    cy.wait(3000)
    cy.get(pageInfo.editorpage.fileTree.myTree.page).then(($t) => {
      expect($t[0].innerText).not.to.be.equal(renamesite)
    })

  })

  it("create new pageA again", function () {
    let data = [testdata.tmppage.pageLayout.typeName, testdata.tmppage.pageLayout.emptytemp, renamesite]
    //cy.get(pageInfo.editorpage.fileTree.myTree.topsite).click()    
    cy.get(pageInfo.editorpage.fileTree.myTree.topsite).trigger('mouseup')
    cy.get(pageInfo.editorpage.fileTree.myTree.topsite_addfile).click({ force: true })
    common.createSiteorPage(pageselector, data)
    cy.get(pageInfo.editorpage.check.createpage_success.icon, { timeout: maxwaittime })
    cy.get(pageInfo.editorpage.check.createpage_success.close).click()
  })

  after("exit the editor page", function () {
    cy.get(pageInfo.editorpage.keepworklogo).trigger('mouseenter')
    cy.get(pageInfo.editorpage.keepworklogo_menu.home).contains(testdata.sites.kpmenu.home).click()
    common.logout(logoutselector)
  })


})*/