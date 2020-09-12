
const { signer } = require('x-hub-signature');
const sign = signer({ algorithm: 'sha1', secret: 'GERALDINE' });
const signature = sign(Buffer.from(JSON.stringify(payload)));
console.log(signature);

const crypto = require('crypto')
hmac = crypto.createHmac('sha1', 'GERALDINE').update(JSON.stringify(payload), 'utf8').digest('hex');

console.log(hmac);
var hmac = crypto.createHmac("sha1", 'GERALDINE');
var calculatedSignature = "sha1=" + hmac.update(JSON.stringify(payload)).digest("hex");

console.log(calculatedSignature) // => sha1=foofoofoo


const branch = 'refs/heads/COR-1830/Nombre-de-la-branch';
const corStr = branch.split('COR-');
const separado = corStr[1].split('/');

console.log(separado[0], 'as');


const CryptoJS = require('crypto-js');
var hash = CryptoJS.HmacSHA1(payload, 'GERALDINE').toString(CryptoJS.enc.Hex)
console.log("signature", "sha1=" + hash);
