let expect = require("chai").expect
let assert = require("chai").assert
let should = require("chai").should
let requests = require("./requests.js")
let testData = require("./testData.js")

describe("API tests", function () {

    it('Zero user transactions response', async () => {
        let response = (await requests.getListTransactions())
        let transactions = response.responseData.items
        expect(response.responseStaus).to.equals(200) //verify the response staus
        expect(transactions).to.deep.equal(testData.listOfTransactions) //verify the response data
        expect(response.responseTime).to.be.lessThan(700) //verify the response time
    });

    it('User transactions invalid token', async () => {
        let response = (await requests.getTransactionsNeg())
        expect(response).to.equals(testData.invalidTokenResponse) //verify the response staus
    });

    it('Zero user bank accaunts response', async () => {
        let bankAccsResponse = await requests.getListBankAccaunts()
        expect(bankAccsResponse.responseStaus).to.equals(200) //verify the response staus
        expect(bankAccsResponse.responseData).to.deep.equal(testData.listOfBankAccaunts) //verify the response data
        expect(bankAccsResponse.responseTime).to.be.lessThan(700) //verify the response time
    }); 

    it('User bank accaunts invalid token', async () => {
        let response = (await requests.getBankAccauntsNeg())
        expect(response).to.equals(testData.invalidTokenResponse) //verify the response staus
    });

})