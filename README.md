# Frontend Developer (f/m/d) - Spark Networks
## Candidate - Helder Santos

_Hallo!_

This project creates a REST API with [NodeJS](https://nodejs.org/en/), [Express](http://expressjs.com/) and it's setup to use [AWS S3 + DynamoDB](https://aws.amazon.com/).

*(An instance of this server is currently being hosted in a AWS-EC2 machine. Its endpoints are being used on the [front-end project](https://github.com/meendoo/exam-image-gallery-upload/tree/dev). Previously all requests were being made directly on the front-end and data was being hosted on [Firebase Cloud Firestore](https://firebase.google.com/products/firestore/) and [Firebase Cloud Storage](https://firebase.google.com/products/storage/))*

Cheers!

## Getting started

Before running any scripts, you'll have to create a `.env` file in your project root folder and fill in the variables below:

```
AWS_ACCESS_KEY_ID=''
AWS_SECRET_ACCESS_KEY=''
AWS_DEFAULT_REGION=''
AWS_BUCKET_NAME=''
AWS_TABLE_NAME=''
```

In order to do that you must do the following steps:

1. Create an account on [AWS](https://console.aws.amazon.com/).
2. Look for IAM (Identity and Access Management) under AWS services and add a new user.
    1. When choosing an user name, mark the checkbox **Programmatic access** under the section **Select AWS access type** and click next.
    2. When you reach step 2, select the box **Attach existing policies directly**, then search and select checkboxes for **AmazonS3FullAccess** and **AmazonDynamoDBFullAccess**.
    3. When you finish you'll receive an **Access key ID** and **Secret access key**. Fill in both variables `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` and store them safely.
3. For `AWS_DEFAULT_REGION`, check the region column on this [table](https://docs.aws.amazon.com/general/latest/gr/rande.html#apigateway_region). Keep in mind that when doing steps 4 and 5 your regions should be the same.
4. Look for S3 under AWS services and create a new bucket.
    1. Define a bucket name (you'll use it to fill in `AWS_BUCKET_NAME` variable)
    2. When you reach step 3, it's important to uncheck all checkboxes for public access and public bucket policies, so that image URL's can be reacheable publicly.
5. Look for DynamoDB under AWS services and create a new table.
    1. Define a table name (later you'll use it to fill in `AWS_TABLE_NAME` variable) and primary key as 'imageId'. Finish the steps to create the table.

If you followed everything correctly you'll be able to run the server locally and make requests to it.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the server in the development mode.<br>
Open [http://localhost:5000/api/image](http://localhost:5000/api/image) to view a `GET` response in the browser.

The server will reload if you make edits. (`nodemon` will take care of that for you).

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

