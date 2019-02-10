require('dotenv').load();
const express = require('express');
const routes = express.Router();
const { s3, dynamo } = require('../services/aws');
const multerUpload = require('../middlewares/multer');
const uuid = require('uuid/v4');

// GET endpoint
routes.get('/image', (req, res) => {
    // Retrieves all images
    dynamo.ddbClient.scan(dynamo.ddbParams, (err, data) => {       
        if (err) {
            console.log('Couldn\'t get items. Error: ' + JSON.stringify(err));
        } else {
            return res.json(data.Items);
        }
    })
});


// POST endpoint
routes.post('/image', multerUpload.single('image'), (req, res) => {
    const file = req.file;
    const s3Params = s3.s3Params;
    s3Params.Key = uuid() + '-' + file.originalname;
	s3Params.Body = file.buffer;

    s3.s3Client.upload(s3Params, (err, data) => {
        if (err) {
            res.status(500).json({error: err});
        }
        console.log('File uploaded to S3');
    }).on('httpUploadProgress', progress => {
        console.log('Upload progress: ' + progress.loaded + ' ' + progress.total);
    }).send((err, data) => {
        if (err) {
            res.status(500).json({error: err});
        }
        const ddbParams = dynamo.ddbParams;
        ddbParams.Item = {
            imageId: data.Key,
            url: data.Location,
            timestamp: {
                seconds: Date.now()
            }
        }
        
        // Adding item to DynamoDB
        dynamo.ddbClient.put(ddbParams, (err, data) => {
            if (err) {
                console.log('Couldn\'t post item. Error: ' + JSON.stringify(err));
            }
            res.status(200).send({message: 'Image added.'});
        });
    })
})


// DELETE endpoint
routes.delete('/image/:imageId', (req, res) => {
    const imageId = req.params.imageId;
    const params = dynamo.ddbParams;
    params.Key = {imageId}

    // Deleting item from DynamoDB
    dynamo.ddbClient.delete(params, (err, data) => {
        if (err) {
            console.log('Couldn\'t delete item. Error: ' + JSON.stringify(err));
        } else {
            return res.send(data);
        }
    });
})

module.exports = routes;