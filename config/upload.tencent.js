/* eslint-disable */
const COS = require('cos-nodejs-sdk-v5');
const fs = require('fs');

const cos = new COS({
    SecretId: 'AKIDEPJ2VhcItHPHsBwz0xe5zwEF6nE0rtW5',
    SecretKey: 'ctxnRr41lGkxxrWEpHhcNw96rLanmUw7',
});

class Upload {
    constructor() {
        this.upload('./dist');
    }

    upload(url, prefix = '') {
        const files = fs.readdirSync(url);
        files.map((item) => {
            switch (item) {
                case 'index.html':
                case 'favicon.ico':
                    break;
                default:
                    if (fs.lstatSync(`./${url}/${item}`).isDirectory()) {
                        this.upload(`./${url}/${item}`, item);
                    } else {
                        cos.putObject({
                            Bucket: 'poet-1253467707',
                            Region: 'ap-beijing',
                            Key: `/${prefix ? `${prefix}/` : ''}${item}`,
                            Body: fs.createReadStream(`./${url}/${item}`)
                        }, (err, data) => {
                            console.log(err);
                            console.log(data);
                        })
                    }
            }
        })
    }
}

new Upload();

