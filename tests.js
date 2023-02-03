let expect = require("chai").expect 
let assert = require("chai").assert
let should = require("chai").should
let requests = require("./requests.js")
let testData = require ("./testData.js")

describe ("API tests", function(){

    it('Zero user transactions response', async () => {
        let transactions =JSON.stringify(await requests.getListTransactions()) 
        assert.equal(transactions, testData.listOfTransactions)
    });

  
})