/**
 * Created on 2019/03/13
 * Author: Duke
 * Description: provide the common method
 */
let randomStr = require('randomstring');

function GenStr(number, option ='numeric'){
    let str = randomStr.generate({ length: number, charset: option, capitalization:'lowercase'})
    return str;
}

function search(selectors,text){
    let testelements = selectors;
    cy.get(testelements[0]).clear()
    cy.get(testelements[0]).type(text).should('have.value',text)
    cy.get(testelements[1]).click()
}

function verifySearchTotalNum(selector,expected){
    cy.get(selector).should(($val) => {
        expect($val[0].innerText).to.be.above(expected)
    })
}

function verifySearchContent(selectors, expected){

}

function filterby(selectors,type){
    let testelements = selectors;
    cy.get(testelements[0]).trigger('mouseenter')    
    cy.get(testelements[1]).contains(type).click()
}

function logout(selectors) {
    cy.get(selectors[0]).click()
    cy.wait(100)
    cy.get(selectors[1]).click()
}

function login(selectors, data) {
    let testelements = selectors;
    let testdata = data;
    cy.get(testelements[0]).clear()
    cy.get(testelements[0]).type(testdata[0]).should('have.value', testdata[0])
    cy.get(testelements[1]).clear()
    cy.get(testelements[1]).type(testdata[1]).should('have.value', testdata[1])
    cy.get(testelements[2]).click()
}

function signup(selectors, data) {
    let testelements = selectors;
    let testdata = data;
    cy.get(testelements[0]).clear()
    cy.get(testelements[0]).type(testdata[0]).should('have.value', testdata[0])
    cy.get(testelements[1]).clear()
    cy.get(testelements[1]).type(testdata[1]).should('have.value', testdata[1])
    cy.get(testelements[2]).clear()
    cy.get(testelements[2]).type(testdata[2]).should('have.value', testdata[2])
    cy.get(testelements[3]).click()
    cy.wait(100)
    cy.get(testelements[4]).clear()
    cy.get(testelements[4]).type(testdata[3]).should('have.value', testdata[3])
    cy.get(testelements[5]).click()             
    cy.get(testelements[6]).click()    
}

module.exports = { GenStr, login, logout, signup, search, verifySearchTotalNum, filterby}