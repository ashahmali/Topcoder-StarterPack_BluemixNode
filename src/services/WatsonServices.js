/**
 * Sample service
 */
import decorate from 'decorate-it';
var http = require('http');
// ------------------------------------
// Exports
// ------------------------------------
var translateOptions = {
    host: 'localhost',
    port: '3752',
    path: '/api/EmployeeInfoAPI',
    method: 'GET'
};

var historyOptions = {
    host: 'localhost',
    port: '3752',
    path: '/api/EmployeeInfoAPI',
    method: 'GET'
};


const WatsonService = {
  translateMethod,
  historyMethod
};

decorate(WatsonService, 'WatsonService');

export default WatsonService;

// ------------------------------------
// Public
// ------------------------------------

/**
 * Test method
 * @returns {{success: Boolean}} the test result
 */
async function translateMethod(txt, lang) {
  return await Promise.resolve({success: true});
}
async function historyMethod() {
  return await Promise.resolve({success: true});
}

translateMethod.schema = {

};
historyMethod.schema = {

};
