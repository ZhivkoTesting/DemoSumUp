let axios = require('axios');

let requests = function () {
  this.getListTransactions = async function () {
    let config = {
      method: 'get',
      url: 'https://api.sumup.com/v0.1/me/transactions/history',
      headers: {
        'Authorization': 'Bearer sup_sk_2YJ9Q2XkQEgnDS89ulkoIumdKMV6Xe3hy',
      }
    };
    let request_start_at = performance.now();
    let responce = await (axios(config))
    let request_end_at = performance.now();
    let request_duration = request_end_at - request_start_at;
    console.log(request_duration);
    return responce.data.items
  }

  this.getListBankAccaunts = async function () {
    let config = {
      method: 'get',
      url: 'https://api.sumup.com/v0.1/me/merchant-profile/bank-accounts',
      headers: {
        'Authorization': 'Bearer sup_sk_2YJ9Q2XkQEgnDS89ulkoIumdKMV6Xe3hy',
      }
    };
    const responce = await (axios(config))
    return responce.data
  }


}
module.exports = new requests()