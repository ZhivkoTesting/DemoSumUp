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
        const responce = await (axios(config))
        return JSON.stringify(responce.data.items)
    }
}
module.exports = new requests()