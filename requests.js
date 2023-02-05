let axios = require('axios');
let responseHandler = async function (config) {
  let request_start_at = performance.now()
  let response = await (axios(config).catch(function (error) {
    console.log(error);
  }))
  let request_end_at = performance.now()
  let request_duration = request_end_at - request_start_at
  let dataToReturn = {}
  dataToReturn['responseData'] = response.data
  dataToReturn['responseTime'] = Math.round(await request_duration)
  dataToReturn['responseStaus'] = response.status
  // console.log(dataToReturn)
  return dataToReturn
}

let responseHandlerNeg = async function (config) {
  let error = await (axios(config).catch(function (error) {
    return error
  }))
  console.log(error.message + error.code)
  return error.message + " " + error.code
}


let requests = function () {
  this.getListTransactions = async function () {
    let config = {
      method: 'get',
      url: 'https://api.sumup.com/v0.1/me/transactions/history',
      headers: {
        'Authorization': 'Bearer sup_sk_2YJ9Q2XkQEgnDS89ulkoIumdKMV6Xe3hy',
      }
    };
    return await responseHandler(config)
  }

  this.getTransactionsNeg = async function () {
    let config = {
      method: 'get',
      url: 'https://api.sumup.com/v0.1/me/transactions/history',
      headers: {
        'Authorization': 'Bearer sup_sk_2YJ9Q2XkQEgnDS89ulkoIumdKMV6Xe3hy-neg',
      }
    };
    return await responseHandlerNeg(config)
  }


  this.getListBankAccaunts = async function () {
    let config = {
      method: 'get',
      url: 'https://api.sumup.com/v0.1/me/merchant-profile/bank-accounts',
      headers: {
        'Authorization': 'Bearer sup_sk_2YJ9Q2XkQEgnDS89ulkoIumdKMV6Xe3hy',
      }
    };
    return await responseHandler(config)
  }

  this.getBankAccauntsNeg = async function () {
    let config = {
      method: 'get',
      url: 'https://api.sumup.com/v0.1/me/merchant-profile/bank-accounts',
      headers: {
        'Authorization': 'Bearer sup_sk_2YJ9Q2XkQEgnDS89ulkoIumdKMV6Xe3hy-neg',
      }
    };
    return await responseHandlerNeg(config)
  }

}
module.exports = new requests()