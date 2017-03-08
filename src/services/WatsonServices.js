/**
 * Sample service
 */
import decorate from 'decorate-it';
var http = require('http');

var request = require('request');
// ------------------------------------
// Exports
// ------------------------------------

const LanguageTranslatorV2 = require('watson-developer-cloud/language-translator/v2');
const fs = require('fs');

const language_translator = new LanguageTranslatorV2({
  username: '95c5b3c1-2c83-460e-9ba1-283ecfe31f72',
  password: 'Xh1g0zygUsKK',
  url: 'https://gateway.watsonplatform.net/language-translator/api/'
});


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
  // var res;
  // await Promise.resolve(language_translator.translate(
  //   {
  //     text: 'A sentence must have a verb',
  //     source: 'en',
  //     target: 'es'
  //   },
  // function(err, translation) {
  //     if (err) {
  //       console.log('error:', err);
  //     } else {
  //       console.log(JSON.stringify(translation));
  //       res = JSON.stringify(translation);
  //     }
  //   }
  // ));
  // return res;

  request({
    url: 'https://gateway.watsonplatform.net/language-translator/api/', //URL to hit
    method: 'GET', // specify the request type
    headers: { // speciyfy the headers
        'Content-Type': 'MyContentType',
        'Custom-Header': 'Custom Value'
    },
    body: 'Hello Hello! String body!' //Set the body as a string
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
    }
});
}
async function historyMethod() {
  return await Promise.resolve({success: true});
}

translateMethod.schema = {

};
historyMethod.schema = {

};
