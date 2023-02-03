let expect = require("chai").expect 
let assert = require("chai").assert
let should = require("chai").should
var axios = require('axios');
let requests = require("./requests.js")


describe ("API tests", function(){

    it('Zero user transactions response', async () => {
        const transactions = await requests.getListTransactions()
        assert.equal(transactions, "[]")
    });

})