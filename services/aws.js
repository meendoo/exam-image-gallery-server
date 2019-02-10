require('dotenv').load();
const AWS = require("aws-sdk");

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_DEFAULT_REGION
})

const s3Client = new AWS.S3();
const s3Params = {
    ACL: 'public-read',
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: '',
    Body: 'null'
}

const ddbClient = new AWS.DynamoDB.DocumentClient();
const ddbParams = {
    TableName: process.env.AWS_TABLE_NAME
}

const s3 = {};
s3.s3Client = s3Client;
s3.s3Params = s3Params;

const dynamo = {};
dynamo.ddbClient = ddbClient;
dynamo.ddbParams = ddbParams;

module.exports = {
    s3,
    dynamo
}; 