# SumUp demo

## Contents
### Payments Registry End-to-End Tests
1. [Purpose](#Purpose)
2. [Coverage](#Coverage)
3. [Dependencies](#Dependencies)
4. [Usage](#Usage)
5. [Prerequisites](#Prerequisites)
6. [Running the project](#Running-the-project)
7. [Assignment](#Assignment)

### SQL Task
8. [Assignment] (#Assignment)
9. [Answers] (#Answers)

## Purpose

API integration testing involves testing the interaction between multiple APIs to ensure they function correctly when integrated with each other. It verifies the integration points and data exchange between the APIs and confirms that the system meets the specified requirements. This type of testing is important for ensuring a seamless user experience, proper data flow, and stability in the overall system.

## Coverage

This type of testing verifies API functionality, data compatibility, error handling and security protocols using automated test cases and scripts. Automated API integration testing improves efficiency and effectiveness of the testing process. The scope should be well-defined to ensure comprehensive and effective testing.


## Environment

NodeJS runtime environment is used for the project realization.

## Dependencies

In order to achieve proper tests execution the environment should be configured 
with the following components:

* NodeJS v.18.

## Usage

### Prerequisites

The user is registered in the [SumUp developers site] (https://developer.sumup.com/) and a valid bearer token is generated and imported as a variable in the test enviroment.

### Running the project

In order to set up the project dependencies the following command should be executed:  
`npm i --save-dev`

In order to execute the tests in Vusual Studio Code or a similar IDE a Mocha debugding procedure has to be initialized. 

It is executed against the [SumUp REST API](https://api.sumup.com) environment.

### Technical Assignment
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
 You are free to use whatever language, framework or methodology you
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

## SQL Task
### Assignment

There are 2 tables related to users: customers and customer_details

customers table
| id | First_name | Last_name | Country      | Created_at             |
|----|------------|-----------|--------------|-----------------------|
| 3241| Jamy       | Oliver    | United States| 2006-12-16 23:26:22  |
| 3244| Francesco  | Perma     | Italy        | 2016-12-17 09:33:54  |
| 2345| Ivan       | Ivanov    | Bulgaria     | 2017-01-01 21:42:51  |
| 3453| Rebecca    | Smith     | United Kingdom | 2017-05-11 17:42:20 |
| 4564| Daniel     | Fisher    | United States| 2017-04-12 01:31:05  |

customer_details table
| id | Customer_id | Age | Sex | Address_id | Created_at            | Updated_at           |
|----|-------------|-----|-----|-----------|----------------------|----------------------|
| 2322| 3241        | 22  | M   | 2154      | 2006-12-16 23:26:22 | 2006-12-17 10:26:22 |
| 1233| 3244        | 35  | M   | 2222      | 2016-12-17 09:33:54 | 2016-12-17 09:33:54 |
| 3422| 2345        | 51  | M   | 3254      | 2017-01-01 21:42:51 | 2017-02-01 18:15:24 |
| 1323| 3453        | 24  | F   | 3247      | 2017-05-11 17:42:20 | 2017-05-11 17:42:20 |
| 3533| 4564        | 18  | M   | 1589      | 2017-04-12 01:31:05 | 2017-04-12 01:31:05 |

Write sql queries to obtain the following data:
1 All customers from United States;
2 All customers whose details were not updated from their creation on;
3 The average customer age per country
## Answers
1-

SELECT * FROM `customers` WHERE Country = 'United States';


2-

SELECT c.`id`, c.`First_name`, c.`Last_name`
FROM `customers` c
JOIN `customer_details` cd ON c.`id` = cd.`Customer_id`
WHERE c.`Created_at` = cd.`Updated_at`;


3-

SELECT c.`id`, c.`First_name`, c.`Last_name`
FROM `customers` c
JOIN `customer_details` cd ON c.`id` = cd.`Customer_id`
WHERE c.`Created_at` = cd.`Updated_at`;
