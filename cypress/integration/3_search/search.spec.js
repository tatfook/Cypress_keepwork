/**
 * Created on 2019/03/14
 * Author: Duke
 * Description: verify the search feature
 */
let pageInfo = require('../../config/pageInfo')
let testdata = require('../../config/testdata')
let common = require("../../common/common")
let loginselector = [pageInfo.homepage.username, pageInfo.homepage.password, pageInfo.homepage.signinbtn]
let searchselector = [pageInfo.explorationpage.searchText,pageInfo.explorationpage.searchBtn]
let filters = [pageInfo.explorationpage.filterType.list, pageInfo.explorationpage.filterType.Overall]
let logoutselector = [pageInfo.homepage.avator, pageInfo.homepage.logout]
let data = [testdata.signIn.account.username, testdata.signIn.account.password]

describe("Search Test",function(){
	before("visit the homepage", function () {
		cy.visit("/")
		cy.viewport(window.screen.width, window.screen.height)
		cy.url().should('eq', testdata.testUrl)
		cy.title().should('include', testdata.testTitle)
		cy.get(pageInfo.homepage.Menulogin).click() 
		common.login(loginselector,data)
		cy.get(pageInfo.homepage.avator, { timeout: 6000 })
	})

	beforeEach(function () {
		Cypress.Cookies.preserveOnce('token')
	})	


	it("search project via searchbar on the homepage",function(){
		cy.get(pageInfo.MenuHeader.searchText).type(testdata.search.projectName).should('have.value',testdata.search.projectName)
		cy.get(pageInfo.MenuHeader.searchBtn).click()
		cy.url().should('include','exploration')		
		common.verifySearchTotalNum(pageInfo.explorationpage.total_num,testdata.search.result.Num)
	})

	it("search project in the explore page",function(){
		common.search(searchselector,testdata.search.projectName)
		common.verifySearchTotalNum(pageInfo.explorationpage.total_num, testdata.search.result.Num)
		//common.verifySearchContent()  //完善时补充
		//切换到最新进行筛选
		common.filterby(filters,testdata.search.filterType.Newest)
		//common.verifySearchContent()  //完善时补充
		//切换到热门进行筛选
		common.filterby(filters,testdata.search.filterType.Hottest)
		//common.verifySearchContent()  //完善时补充
	})

	it("search the selected project",function(){
		cy.get(pageInfo.explorationpage.selectedProject).click()
		common.search(searchselector, testdata.search.selectedProject)
		common.verifySearchTotalNum(pageInfo.explorationpage.total_num, testdata.search.result.Num)
		//common.verifySearchContent()  //完善时补充
		//切换到最新进行筛选
		common.filterby(filters, testdata.search.filterType.Newest)
		//common.verifySearchContent()  //完善时补充
		//切换到热门进行筛选
		common.filterby(filters, testdata.search.filterType.Hottest)
		//common.verifySearchContent()  //完善时补充
	})

    it("search 3D world",function(){
		cy.get(pageInfo.explorationpage.thirdworld).click()
		common.search(searchselector, testdata.search.thirdworld)
		common.verifySearchTotalNum(pageInfo.explorationpage.total_num, testdata.search.result.Num)
		//common.verifySearchContent()  //完善时补充
		//切换到最新进行筛选
		common.filterby(filters, testdata.search.filterType.Newest)
		//common.verifySearchContent()  //完善时补充
		//切换到热门进行筛选
		common.filterby(filters, testdata.search.filterType.Hottest)
		//common.verifySearchContent()  //完善时补充
	})

	it("search the website information", function () {
		cy.get(pageInfo.explorationpage.websites).click()
		common.search(searchselector, testdata.search.websiteName)
		common.verifySearchTotalNum(pageInfo.explorationpage.total_num, testdata.search.result.Num)
		//common.verifySearchContent()  //完善时补充
		//切换到最新进行筛选
		common.filterby(filters, testdata.search.filterType.Newest)
		//common.verifySearchContent()  //完善时补充
		//切换到热门进行筛选
		common.filterby(filters, testdata.search.filterType.Hottest)
		//common.verifySearchContent()  //完善时补充
	})

	it("search lessons", function () {
		cy.get(pageInfo.explorationpage.lessons).click()
		common.search(searchselector, testdata.search.lessons)
		common.verifySearchTotalNum(pageInfo.explorationpage.total_num, testdata.search.result.Num)
		//common.verifySearchContent()  //完善时补充
		//切换到最新进行筛选
		common.filterby(filters, testdata.search.filterType.Newest)
		//common.verifySearchContent()  //完善时补充
		//切换到热门进行筛选
		common.filterby(filters, testdata.search.filterType.Hottest)
		//common.verifySearchContent()  //完善时补充
	})

	it("search keepwork users", function () {
		let special = [pageInfo.explorationpage.filterType.list, pageInfo.explorationpage.filterType.Project]
		cy.get(pageInfo.explorationpage.users).click()
		common.search(searchselector, testdata.search.users)
		common.verifySearchTotalNum(pageInfo.explorationpage.total_num, testdata.search.result.Num)
		//common.verifySearchContent()  //完善时补充
		//切换到项目进行筛选
		common.filterby(special, testdata.search.filterType.Projects)
		//common.verifySearchContent()  //完善时补充
		//切换到名气进行筛选
		common.filterby(filters, testdata.search.filterType.Popularity)
		//common.verifySearchContent()  //完善时补充
	})

	it("search pages", function () {
		cy.get(pageInfo.explorationpage.page).click()
		common.search(searchselector, testdata.search.page)
		common.verifySearchTotalNum(pageInfo.explorationpage.total_num, testdata.search.result.Num)
		//common.verifySearchContent()  //完善时补充
		//切换到最新进行筛选
		common.filterby(filters, testdata.search.filterType.Newest)
		//common.verifySearchContent()  //完善时补充
		
	})

	it("search the Recruiting project", function () {
		cy.get(pageInfo.explorationpage.recruiting).click()
		common.search(searchselector, testdata.search.recruitedProject)
		common.verifySearchTotalNum(pageInfo.explorationpage.total_num, testdata.search.result.Num)
		//common.verifySearchContent()  //完善时补充
		//切换到最新进行筛选
		common.filterby(filters, testdata.search.filterType.Newest)
		//common.verifySearchContent()  //完善时补充
		common.filterby(filters, testdata.search.filterType.Hottest)
		//common.verifySearchContent()  //完善时补充
	})
	

	it("search the private project",function () {
		cy.get(pageInfo.explorationpage.projectName).click()
		common.search(searchselector, testdata.search.privateProject)
		common.verifySearchContent(pageInfo.explorationpage.total_num, testdata.search.result.Num.toString())
		common.verifySearchContent(pageInfo.explorationpage.checkpoint.noresult, testdata.search.result.noData)
	})
   
	it("filp over the page verification",function () {
		common.search(searchselector, testdata.search.projectName)
		common.verifySearchTotalNum(pageInfo.explorationpage.total_num, testdata.search.result.Num)
    cy.get(pageInfo.explorationpage.paging.nextpage).click()
    cy.get(pageInfo.explorationpage.checkpoint.projectName).then(($t)=>{
      expect($t[0].innerText).not.to.be.equal(null)
    })
  })
  
  after(function () {   
    common.logout(logoutselector)
  })

	
});

