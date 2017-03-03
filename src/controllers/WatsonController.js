/**
 * Sample controller
 */
import WatsonService from '../services/WatsonServices';


export default {
  translateMethod,
  historyMethod,
  homeMethod
};

/**
 * Get test
 * @param {Object} req
 * @param {Object} res
 */
async function translateMethod(req, res) {
  const result = await WatsonService.translateMethod();
  res.json(result);
}
async function historyMethod(req, res) {
  const result = await WatsonService.historyMethod();
  res.json(result);
}
async function homeMethod(req, res) {
  const result = "Home";
  res.json(result);
}
