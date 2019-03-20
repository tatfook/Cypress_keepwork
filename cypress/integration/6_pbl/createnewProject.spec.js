/**
 * Create on 2019/03/19
 * Author : Duke
 * Description: Login Test
 */
let pageInfo = require('../../config/pageInfo')
let testdata = require('../../config/testdata')
let common = require("../../common/common")
let loginselector = [pageInfo.homepage.username, pageInfo.homepage.password, pageInfo.homepage.signinbtn]

describe('Create page verification', function () {
  before("visit the homepage", function () {
    cy.visit("/")
    cy.url().should('eq', testdata.testUrl)
    cy.title().should('include', testdata.testTitle)
  })

  it("create an new paracraft project ",function(){
    
  })

  it('create new website project',function () {
    
    
  })
})