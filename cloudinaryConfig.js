const cloudinary = require('cloudinary').v2;
cloudinary.config({
cloud_name: 'karokojnr',
api_key: '346784416385434',
api_secret: 'oinDoqFA3NRMY66lPMV-M5NOCgQ',
})

exports.uploads = (file) =>{
    return new Promise(resolve => {
    cloudinary.uploader.upload(file, (result) =>{
    resolve({url: result.url, id: result.public_id})
    }, {resource_type: "auto"})
    })
    }