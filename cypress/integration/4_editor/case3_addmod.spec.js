/**
 * Created on 2019/04/08
 * Author: Duke
 * Description: verify the different mod in the page
 */

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
    //先创建一个新页面用来测试(验证完毕后会进行删除)
    cy.get(pageInfo.editorpage.fileTree.myTree.topsite).click()    
    cy.get(pageInfo.editorpage.fileTree.myTree.topsite).trigger('mouseup')
    cy.get(pageInfo.editorpage.fileTree.myTree.topsite_addfile).click({ force: true })
    common.createSiteorPage(pageselector, data)
    cy.get(pageInfo.editorpage.check.createpage_success.icon, { timeout: maxwaittime })    
    cy.get(pageInfo.pageTemplate.BasicLayout.editNow).click()
    //再添加mod
    cy.get(pageInfo.editorpage.previewArea.iframe)
    cy.get(pageInfo.editorpage.previewArea.iframe).then(($iframe) =>{
      const doc = $iframe.contents()
      console.log("doc is " + doc);
      doc.find(pageInfo.editorpage.previewArea.addbtn_icon).click()
    })
    
  })

  it("create new page include menu mod", function () {
   
  })

  it("create the duplicate page", function () {
    
  })

  it("rename the pageA", function () {
   
  })

  it("create new pageA again", function () {
    
  })

  after("exit the editor page", function () {
    cy.get(pageInfo.editorpage.keepworklogo).trigger('mouseenter')
    cy.get(pageInfo.editorpage.keepworklogo_menu.home).contains(testdata.sites.kpmenu.home).click()
    common.logout(logoutselector)
  })


})