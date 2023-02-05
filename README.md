# DemoSumUp
Take Home Test from SumUp


To run the demo:

NodeJS v. 8.xx.xx is required. 

1- Download / clone the repo.

2- npm i --save-dev

3- Open tests.js in VS Code.

4- In VS Code open "Run" menu and select Start debugging.


QA Technical Assignment

1. Create a new account on the SumUp website (skip buying a card reader by
choosing the “I already have one” option, fill in dummy business details).
2. Login with the account from p.1 and go to
https://me.sumup.com/en-gb/developers - create credentials for working with
the public SumUp API (Application Type - web).
3. Find the API documentation - it’s publicly available**
4. Create API automation test that will login with your account and:
4.1. verify that you have no transactions
4.2. verify the bank account(s) associated with it; As you have no access to a
database, feel free to hardcode the details you compare against, as
elegantly as possible :)
➔ You are free to use whatever language, framework or methodology you
like
➔ You should put your project on GitHub/similar
➔ You should provide us with some instructions on how to build the
project and execute the test
** To login programmatically, please use the following endpoint:
-> POST https://api.sumup.com/oauth
-> Parameters: client_id, client_secret, username, password
Example response:
{
"access_token":
"at_classic_uLJP98st4xGd5mcJ1nvUgI9gb0z7p69V6Iip2FT1o1C35sdHcanZL",
"legacy_token":
"at_classic_uLJP98st4xGd5mcJ1nvUgI9gb0z7p69V6Iip2FT1o1C35sdHcanZL",
"expires_in": 3600,
"merchant_code": "M0FV7T"
}
access_token is the parameter of interest here.

