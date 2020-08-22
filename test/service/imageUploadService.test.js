const fs = require ('fs');
const path = require('path');

const upload = require('../../services/imageUploadService');

describe('Upload file service', () => {

  it('can upload a file with bytes', () => {

      const testFile = fs.readFileSync(path.join(__dirname, '..', 'resources', 'testImage.png'));
      return upload(testImage);
  });
});