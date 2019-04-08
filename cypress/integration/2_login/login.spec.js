/**
 * Create on 2019/03/13
 * Author : Duke
 * Description: Login Test
 */
let pageInfo = require('../../config/pageInfo')
let testdata = require('../../config/testdata')
let common = require("../../common/common")
let loginselector = [pageInfo.homepage.username, pageInfo.homepage.password, pageInfo.homepage.signinbtn]
let logoutselector = [pageInfo.homepage.avator, pageInfo.homepage.logout]
let data = []



describe("The Keepwork Loign Test",function () {
  before("visit the homepage",function () {
    cy.visit("/")
    cy.url().should('eq', testdata.testUrl)
    cy.title().should('include', testdata.testTitle)        
  })

  it("login by the wrong keepwork account",function(){
    data = [testdata.signIn.invalidaccount.username,testdata.signIn.invalidaccount.password]
    cy.get(pageInfo.homepage.Menulogin).click() 
    common.login(loginselector, data)                     
  })

  it("login by the right keepwork account", function () {
    data = [testdata.signIn.account.username, testdata.signIn.account.password]
    common.login(loginselector, data)        
    cy.get(pageInfo.homepage.avator)       
    common.logout(logoutselector)
  })

  it("login by the cellphone Number", function () {
    data = [testdata.signIn.bindaccount.mobile, testdata.signIn.account.password]
    cy.get(pageInfo.homepage.Menulogin).click()         
    common.login(loginselector, data)        
    cy.get(pageInfo.homepage.avator)
    common.logout(logoutselector)
  })

  it("login by the bounded email", function () {
    data = [testdata.signIn.bindaccount.email, testdata.signIn.account.password]
    cy.get(pageInfo.homepage.Menulogin).click() 
    common.login(loginselector, data)        
    cy.get(pageInfo.homepage.avator)
    common.logout(logoutselector)
  })

  // it("login by the third account",function(){

  // })

})