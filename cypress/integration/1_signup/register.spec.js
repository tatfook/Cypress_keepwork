/**
 * Created on 2019/03/13
 * Author: Duke
 * Description: Sign up test
 */
let pageInfo = require('../../config/pageInfo')
let testdata = require('../../config/testdata')
let common = require("../../common/common")

let SignUpselector = [pageInfo.signUp.username, pageInfo.signUp.password, pageInfo.signUp.cellphone,pageInfo.signUp.sendSMScodebtn,
  pageInfo.signUp.smsCode,pageInfo.signUp.policycheckbox,pageInfo.signUp.signupbtn]
let logoutselector = [pageInfo.homepage.avator, pageInfo.homepage.logout]
let data = []


describe('The Keepwork Register Test', function () {
  before("visit the homepage",function () {
    cy.visit('/')
    cy.url().should('eq', testdata.testUrl)
    cy.title().should('include', testdata.testTitle)
  })

  it("use the sensitive words to sign up",function () {
    cy.get(pageInfo.homepage.Menusignupbtn).click()
    data = [testdata.signup.invalidaccount.username, testdata.signup.account.password,testdata.signup.account.cellphone[0],testdata.signup.account.smsCode]
    common.signup(SignUpselector,data)    
    cy.on('window:alert',(str)=>{   
      expect(str).to.equal(testdata.signup.expectMsg.notificationMsg)  //判断不是很准，后续完善
    })
    cy.get(pageInfo.signUp.closeIcon).click()
  })  

  it('register with the Number account', function () {
    let username = common.GenStr(5)
    cy.get(pageInfo.homepage.Menusignupbtn).click()
    cy.get(pageInfo.signUp.username).type(username).should('have.value', username)
    cy.get(pageInfo.signUp.warningInfo).then((text)=>{
      expect(text[0].innerText).to.be.eq(testdata.signup.expectMsg.warningInfo)
    })
    cy.get(pageInfo.signUp.closeIcon).click()
  })

  it('register with the invalid SMS code', function () {
    let username = "test" + common.GenStr(5, 'alphabetic')
    cy.get(pageInfo.homepage.Menusignupbtn).click()
    data = [username, testdata.signup.account.password, testdata.signup.account.cellphone[0], testdata.signup.invalidaccount.smsCode]
    common.signup(SignUpselector, data)
    cy.get(pageInfo.signUp.closeIcon).click()
  })

  it('register with the valid SMS code',function(){    
    let username = common.GenStr(5, 'alphabetic')    
    let content = username + '\n';
    const ops = {
      flag: 'a+',
      encoding: 'utf8'
    }
    cy.writeFile(testdata.signup.saveFilePath, content, ops)
    data = [username, testdata.signup.account.password, testdata.signup.account.cellphone[0], testdata.signup.account.smsCode]   
    cy.get(pageInfo.homepage.Menusignupbtn).click()
    common.signup(SignUpselector, data)
    cy.get(pageInfo.homepage.avator,{timeout:6000})
    common.logout(logoutselector)
  })

  it('register with the exist account', function () {    
    cy.get(pageInfo.homepage.Menusignupbtn).click()
    cy.get(pageInfo.signUp.username).type(testdata.signIn.account.username).should('have.value', testdata.signIn.account.username)
    cy.get(pageInfo.signUp.password).click()
    cy.get(pageInfo.signUp.warningInfo).then((text) => {
      expect(text[0].innerText).to.be.eq(testdata.signup.expectMsg.repeataccount)
    })
    cy.get(pageInfo.signUp.closeIcon).click()
  })

  it('register with the same telephone Number again', function () {
    let username = common.GenStr(5, 'alphabetic')
    let content = username +'\n';
    const ops = {
      flag: 'a+',
      encoding: 'utf8'      
    }
    cy.writeFile(testdata.signup.saveFilePath,content,ops)
    data = [username, testdata.signup.account.password, testdata.signup.account.cellphone[0], testdata.signup.account.smsCode]
    cy.get(pageInfo.homepage.Menusignupbtn).click()
    common.signup(SignUpselector, data)    
    cy.get(pageInfo.homepage.avator,{timeout:6000})
    common.logout(logoutselector)
  })
   
})