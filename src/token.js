const jwt = require('jsonwebtoken');

/**
 * Implement this function to accept a payload and a secret key and return a JWT without an expiry time
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
 */



function createToken(payload, privateKey) {
    const token = jwt.sign(payload, privateKey)
    return token
}

/**
 * Implement this function to accept a payload, secret key and an expiry time, and return a JWT with an expiry
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#token-expiration-exp-claim
 */
function createTokenWithExpiry(payload, privateKey, expiry) {
    const token = jwt.sign({
        data: payload
    }, privateKey, { expiresIn: expiry })
    return token
}

/**
 * Implement this function to accept a JWT and a secret key. Return the decoded token (the payload) if verification is successful, and false if it fails
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */

const passcode = 'mysecretkey'

function verifyToken(token, privateKey) {
    
    if(privateKey !== passcode) {
        return false
    }
    const decoded = jwt.verify(token, privateKey)
    return decoded
}

module.exports = {
    createToken,
    createTokenWithExpiry,
    verifyToken
}
