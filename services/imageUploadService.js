const cloudinary = require('cloudinary').v2;

const upload = (file) => {
  return new Promise((resolve, reject) => {
    console.info('Begin file upload....')
    cloudinary.uploader.upload_stream({}, (err, result) => {
      if(result) {
        console.info('File upload complete')
        resolve(result);
      } else {
        console.error(err);
        reject(err);
      }
    }).end(file)
  })
}

module.exports = upload;